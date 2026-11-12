// Gather every GitHub repo ZAO has looked at, from three places:
//  1. the research library (every github.com/owner/repo link in a research doc)
//  2. the estate (public repos owned by the ZAO accounts)
//  3. inbox.md (links dropped by hand or by the issue form)
// Writes data/sources.json. Research text is never stored, only repo names, doc numbers and topics.
import fs from "node:fs";
import path from "node:path";
import { ROOT, config, gh, readJson, writeJson, today, hasToken } from "./lib.mjs";

const RE = /github\.com\/([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)/g;
const skip = new Set(config.skipOwners.map((s) => s.toLowerCase()));

function extract(text) {
  const found = new Set();
  let m;
  RE.lastIndex = 0;
  while ((m = RE.exec(text))) {
    const owner = m[1];
    let name = m[2].replace(/[.,;:)\]'"`>*_]+$/, "").replace(/\.git$/, "");
    if (!name || name.length < 2 || skip.has(owner.toLowerCase())) continue;
    if (/^[0-9]+$/.test(name)) continue;
    found.add(`${owner}/${name}`);
  }
  return [...found];
}

function docInfo(relPath) {
  // research/<topic>/<number>-<slug>/README.md
  const parts = relPath.split("/");
  if (parts.length < 4) return null;
  const topic = parts[1];
  const m = parts[2].match(/^([0-9]+[a-z]?)-(.+)$/);
  if (!m) return null;
  if (topic.startsWith("_")) return null;
  return { number: m[1], topic };
}

async function fromResearch() {
  const prev = readJson("research-scan.json", { files: {} });
  const next = { scanned: today(), files: {} };
  const mentions = {};
  const add = (repo, info) => {
    const key = repo.toLowerCase();
    mentions[key] ||= { full: repo, docs: [] };
    if (!mentions[key].docs.some((d) => d.number === info.number)) mentions[key].docs.push(info);
  };

  const local = process.env.ZAOWIRE_RESEARCH_DIR;
  if (local && fs.existsSync(path.join(local, "research"))) {
    console.error(`research: local copy at ${local}`);
    const walk = (dir) => {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walk(p);
        else if (e.name === "README.md") {
          const rel = path.relative(local, p).split(path.sep).join("/");
          const info = docInfo(rel);
          if (!info) continue;
          const repos = extract(fs.readFileSync(p, "utf8"));
          next.files[rel] = { repos };
          for (const r of repos) add(r, info);
        }
      }
    };
    walk(path.join(local, "research"));
    return { mentions, scan: next, source: "local" };
  }

  if (!hasToken) {
    console.error("research: no token and no local copy, keeping the last scan");
    for (const [rel, v] of Object.entries(prev.files || {})) {
      const info = docInfo(rel);
      if (info) for (const r of v.repos || []) add(r, info);
    }
    return { mentions, scan: prev, source: "cached" };
  }

  console.error(`research: scanning ${config.researchRepo} through the API (changed files only)`);
  const tree = await gh(`/repos/${config.researchRepo}/git/trees/HEAD?recursive=1`);
  if (!tree) {
    console.error("research: repo not reachable with this token, keeping the last scan");
    for (const [rel, v] of Object.entries(prev.files || {})) {
      const info = docInfo(rel);
      if (info) for (const r of v.repos || []) add(r, info);
    }
    return { mentions, scan: prev, source: "cached" };
  }
  let fetched = 0;
  for (const item of tree.tree) {
    if (item.type !== "blob" || !item.path.startsWith(config.researchDocsPrefix) || !item.path.endsWith("/README.md")) continue;
    const info = docInfo(item.path);
    if (!info) continue;
    const cached = prev.files?.[item.path];
    let repos;
    if (cached && cached.sha === item.sha) repos = cached.repos;
    else {
      const text = await gh(`/repos/${config.researchRepo}/git/blobs/${item.sha}`, { raw: true });
      repos = text ? extract(text) : [];
      fetched++;
    }
    next.files[item.path] = { sha: item.sha, repos };
    for (const r of repos) add(r, info);
  }
  console.error(`research: ${Object.keys(next.files).length} docs, ${fetched} fetched fresh`);
  return { mentions, scan: next, source: "api" };
}

async function fromEstate() {
  const out = {};
  for (const owner of config.estateOwners) {
    const repos = await (async () => {
      const all = [];
      for (let page = 1; page <= 10; page++) {
        const batch = await gh(`/users/${owner}/repos?per_page=100&sort=pushed&page=${page}`);
        if (!batch || !batch.length) break;
        all.push(...batch);
        if (batch.length < 100) break;
      }
      return all;
    })();
    for (const r of repos) {
      if (r.private || r.fork) continue;
      out[r.full_name.toLowerCase()] = { full: r.full_name, owner };
    }
    console.error(`estate: ${owner} ${repos.length} public repos`);
  }
  return out;
}

function fromInbox() {
  const p = path.join(ROOT, "inbox.md");
  if (!fs.existsSync(p)) return {};
  const out = {};
  for (const line of fs.readFileSync(p, "utf8").split(/\r?\n/)) {
    if (!line.trim() || line.startsWith("#")) continue;
    const date = (line.match(/\b(20[0-9]{2}-[0-9]{2}-[0-9]{2})\b/) || [])[1] || null;
    const note = line.replace(/https?:\/\/\S+/g, "").replace(/^[-*\s|]+/, "").replace(/\b20[0-9]{2}-[0-9]{2}-[0-9]{2}\b/, "").trim();
    for (const r of extract(line)) {
      out[r.toLowerCase()] ||= { full: r, entries: [] };
      out[r.toLowerCase()].entries.push({ date, note });
    }
  }
  return out;
}

const research = await fromResearch();
const estate = await fromEstate();
const inbox = fromInbox();
const firstSeen = readJson("first-seen.json", {});

const repos = {};
const keys = new Set([...Object.keys(research.mentions), ...Object.keys(estate), ...Object.keys(inbox)]);
for (const k of keys) {
  const full = research.mentions[k]?.full || estate[k]?.full || inbox[k]?.full;
  repos[k] = {
    full,
    docs: research.mentions[k]?.docs || [],
    estate: estate[k]?.owner || null,
    inbox: inbox[k]?.entries || [],
  };
  if (!firstSeen[k]) firstSeen[k] = today();
}

writeJson("research-scan.json", research.scan);
writeJson("first-seen.json", firstSeen);
writeJson("sources.json", { collected: today(), researchSource: research.source, repos });
console.error(`sources: ${keys.size} repos (${Object.keys(research.mentions).length} from research, ${Object.keys(estate).length} estate, ${Object.keys(inbox).length} inbox)`);
