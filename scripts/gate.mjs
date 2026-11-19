// Security gate: what to check on a stranger's repo BEFORE anyone clones, installs, runs or
// even reads it for review. Zaal, 13 Nov 2026: "Add security check and gate before we review
// anything." Read-only: GitHub API plus raw file reads, nothing is cloned or executed.
//
//   node scripts/gate.mjs <owner/repo | github url> [more...]   -> gates/<owner>__<repo>.md, verdict on stdout
//
// Verdict: BLOCK (do not clone, do not run, do not review until a human looks at the findings),
// REVIEW (clone read-only, no install, findings listed), PASS (nothing found; still no `npm install`
// outside a sandbox). The checks follow ZAOresearch 2433 (items 4-7, 9, 13, 27-31) plus what a
// third-party repo adds: install hooks, curl | sh, committed binaries, obfuscation, registry overrides.
import fs from "node:fs";
import path from "node:path";
import { ROOT, gh, today } from "./lib.mjs";

const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (!args.length) { console.error("usage: node scripts/gate.mjs <owner/repo | url> [...]"); process.exit(2); }
const GATES = path.join(ROOT, "gates");
fs.mkdirSync(GATES, { recursive: true });

const MAX_FILES = 400;
const MAX_BYTES = 200_000;
const TEXT = /\.(js|mjs|cjs|ts|tsx|jsx|py|sh|bash|zsh|ps1|bat|cmd|rb|go|rs|php|json|ya?ml|toml|md|txt|cfg|ini|env|example|lock|Dockerfile|Makefile|npmrc|yarnrc|pypirc)$|(^|\/)(Dockerfile|Makefile|\.npmrc|\.yarnrc|\.pypirc|\.env[^/]*)$/i;
const BINARY = /\.(exe|dll|so|dylib|bin|jar|pyc|pyd|node|wasm|msi|apk|dmg|pkg|deb|rpm|o|a|class)$/i;
const POPULAR = ["next", "react", "react-dom", "viem", "wagmi", "express", "axios", "lodash", "chalk", "commander", "dotenv", "zod", "@supabase/supabase-js", "grammy", "telegraf", "discord.js", "openai", "@anthropic-ai/sdk", "typescript", "eslint", "prettier", "vite", "tailwindcss", "ethers", "web3", "requests", "numpy", "pandas", "flask", "django", "fastapi"];

function lev(a, b) {
  const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[m][n];
}

function parseRepo(s) {
  const m = s.match(/github\.com\/([^/\s#?]+)\/([^/\s#?]+)/i) || s.match(/^([^/\s]+)\/([^/\s]+)$/);
  if (!m) throw new Error(`not a GitHub repo: ${s}`);
  return { owner: m[1], repo: m[2].replace(/\.git$/, "") };
}

async function raw(owner, repo, sha, p) {
  try {
    const r = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/${sha}/${p}`, { signal: AbortSignal.timeout(20000) });
    if (!r.ok) return null;
    return await r.text();
  } catch { return null; }
}

async function gate(spec) {
  const { owner, repo } = parseRepo(spec);
  const findings = [];
  const add = (sev, what, where, detail = "") => findings.push({ sev, what, where, detail });
  const meta = await gh(`/repos/${owner}/${repo}`);
  if (!meta) return { owner, repo, verdict: "BLOCK", findings: [{ sev: "HIGH", what: "repo not found or private", where: `${owner}/${repo}` }], meta: null, files: 0 };

  // A. who and how old
  const days = (iso) => Math.round((Date.now() - new Date(iso).getTime()) / 86400000);
  const facts = {
    created: meta.created_at.slice(0, 10), ageDays: days(meta.created_at), pushed: meta.pushed_at.slice(0, 10), pushedDays: days(meta.pushed_at),
    stars: meta.stargazers_count, forks: meta.forks_count, archived: meta.archived, fork: meta.fork, parent: meta.parent?.full_name ?? null,
    license: meta.license?.spdx_id ?? null, ownerType: meta.owner.type, defaultBranch: meta.default_branch, size: meta.size, language: meta.language,
  };
  const ownerInfo = await gh(`/users/${owner}`);
  facts.ownerAgeDays = ownerInfo ? days(ownerInfo.created_at) : null;
  facts.ownerRepos = ownerInfo?.public_repos ?? null;
  const contributors = await gh(`/repos/${owner}/${repo}/contributors?per_page=100`);
  facts.contributors = Array.isArray(contributors) ? contributors.length : null;
  if (facts.ageDays < 14) add("MEDIUM", "repo is under two weeks old", facts.created);
  if (facts.ownerAgeDays !== null && facts.ownerAgeDays < 30) add("HIGH", "owner account is under a month old", `${owner}, ${facts.ownerAgeDays} days`);
  if (!facts.license) add("LOW", "no licence file", "repo");
  if (facts.archived) add("LOW", "archived", "repo");
  if (facts.fork && facts.parent) add("LOW", "a fork", `of ${facts.parent}; review the parent too`);
  if (facts.contributors === 1 && facts.stars < 20) add("LOW", "one contributor, few stars", `${facts.stars} stars`);
  const sec = await gh(`/repos/${owner}/${repo}/contents/SECURITY.md`);
  facts.securityMd = Boolean(sec);

  // B. the tree
  const tree = await gh(`/repos/${owner}/${repo}/git/trees/${facts.defaultBranch}?recursive=1`);
  const entries = (tree?.tree ?? []).filter((e) => e.type === "blob");
  facts.files = entries.length;
  facts.truncated = Boolean(tree?.truncated);
  const sha = (await gh(`/repos/${owner}/${repo}/commits/${facts.defaultBranch}`))?.sha ?? facts.defaultBranch;

  for (const e of entries) {
    if (BINARY.test(e.path)) add("HIGH", "committed binary", e.path, `${e.size} bytes; never run it`);
    if (/(^|\/)\.env(\.local|\.production|\.development)?$/.test(e.path)) add("CRITICAL", "committed .env file", e.path);
    if (/(^|\/)(\.npmrc|\.yarnrc(\.yml)?|\.pypirc|pip\.conf)$/.test(e.path)) add("MEDIUM", "package manager config in repo", e.path, "check for registry overrides");
    if (/(^|\/)(fa-solid-400\.woff2|spellright\.dict|temp_auto_push\.bat|config\.bat)$/.test(e.path)) add("HIGH", "PolinRider loader file name", e.path, "config-file malware family (ZAOresearch 2530); never open this repo in an editor");
    if (/(^|\/)(\.claude\/settings(\.local)?\.json|\.mcp\.json|\.cursor\/|\.vscode\/tasks\.json|\.claude\/hooks)/.test(e.path)) add("MEDIUM", "agent config in repo", e.path, "hooks and MCP servers run on an agent's machine; read before any agent opens this repo");
  }

  // files worth reading: install manifests, workflows, scripts, docs, agent files, then source by size
  const prio = (p) => /package\.json$|pyproject\.toml$|setup\.py$|Makefile$|Dockerfile$|\.github\/workflows\/|\.sh$|\.ps1$|\.bat$|README|CLAUDE\.md|AGENTS\.md|\.cursorrules|\.mcp\.json|\.claude\/|\.npmrc|\.yarnrc|requirements.*\.txt$|install/i.test(p) ? 0 : 1;
  const toRead = entries.filter((e) => TEXT.test(e.path) && e.size <= MAX_BYTES && !/(^|\/)(node_modules|vendor|dist|build|\.next)\//.test(e.path))
    .sort((a, b) => prio(a.path) - prio(b.path) || a.size - b.size).slice(0, MAX_FILES);
  facts.read = toRead.length;

  const deps = new Set();
  for (const e of toRead) {
    const text = await raw(owner, repo, sha, e.path);
    if (text === null) continue;
    const p = e.path;
    const lines = text.split(/\r?\n/);
    const hit = (re, sev, what, detail) => { lines.forEach((l, i) => { if (re.test(l)) add(sev, what, `${p}:${i + 1}`, detail ?? l.trim().slice(0, 160)); }); };

    if (/package\.json$/.test(p)) {
      try {
        const j = JSON.parse(text);
        for (const k of ["preinstall", "install", "postinstall", "prepare", "prepublish"]) if (j.scripts?.[k]) add("HIGH", `install hook: ${k}`, p, j.scripts[k].slice(0, 200));
        for (const d of Object.keys({ ...(j.dependencies ?? {}), ...(j.devDependencies ?? {}) })) {
          deps.add(d);
          const v = (j.dependencies ?? {})[d] ?? (j.devDependencies ?? {})[d] ?? "";
          if (/^(git\+|github:|https?:|file:)/.test(v)) add("MEDIUM", "dependency from a URL or git, not the registry", p, `${d}: ${v}`);
          if (!POPULAR.includes(d)) for (const pop of POPULAR) { const dist = lev(d, pop); if (dist > 0 && dist <= 2 && Math.abs(d.length - pop.length) <= 2) add("HIGH", "dependency name close to a popular package", p, `${d} vs ${pop}`); }
        }
      } catch { add("LOW", "package.json does not parse", p); }
    }
    if (/\.github\/workflows\//.test(p)) {
      hit(/pull_request_target/, "HIGH", "pull_request_target workflow", undefined);
      hit(/ref:\s*\$\{\{\s*github\.event\.pull_request\.head/, "HIGH", "checks out the PR head in a privileged workflow");
      hit(/run:.*\$\{\{\s*github\.event\.(issue|pull_request|comment|head_commit|review)/, "HIGH", "script injection: event text inside run:");
      hit(/uses:\s*[^./\s][^@\s]+@(v?\d|main|master)\b/, "MEDIUM", "third-party action not pinned to a SHA");
      hit(/aquasecurity\/(trivy-action|setup-trivy)@(?![0-9a-f]{40})/, "HIGH", "Trivy action by tag (hijacked March 2026)");
      hit(/secrets\.[A-Z_]+.*(curl|wget|nc |http)/i, "HIGH", "secret next to a network call in a workflow");
      hit(/self-hosted/, "LOW", "self-hosted runner named");
    }
    if (/\.(c|m)?(j|t)sx?$/.test(p)) hit(/\S[ \t]{150,}\S/, "HIGH", "code hidden after a long whitespace run", "PolinRider / Bread Nov 2026 pattern: scroll right on this line (ZAOresearch 2530)");
    hit(/rmcej%otb%|_\$_1e42|Cot%3t=shtP/, "CRITICAL", "PolinRider marker string");
    if (/\.vscode\/tasks\.json$/.test(p)) hit(/"runOn"\s*:\s*"folderOpen"/, "HIGH", "task runs when the folder is opened", "opening this repo in VS Code runs a command");
    hit(/(curl|wget)\b[^|\n]*\|\s*(sudo\s+)?(ba|z|da)?sh\b/, "HIGH", "curl or wget piped to a shell");
    hit(/\beval\s*\(|new Function\s*\(|child_process|execSync\s*\(|subprocess\.(Popen|run|call)\(|os\.system\(/, /\.(md|txt)$/.test(p) ? "LOW" : "MEDIUM", "code execution primitive");
    hit(/(atob|Buffer\.from)\s*\([^)]*['"][A-Za-z0-9+/=]{40,}/, "HIGH", "decodes an embedded base64 blob");
    hit(/['"][A-Za-z0-9+/]{200,}={0,2}['"]/, "MEDIUM", "long base64-looking string literal");
    hit(/\b(ghp_[A-Za-z0-9]{36}|github_pat_[A-Za-z0-9_]{60,}|xox[baprs]-[A-Za-z0-9-]{10,}|AKIA[0-9A-Z]{16}|sk-[A-Za-z0-9]{32,}|sk-ant-[A-Za-z0-9-]{40,}|[0-9]{8,10}:[A-Za-z0-9_-]{35})\b/, "CRITICAL", "token-shaped string");
    hit(/https?:\/\/(discord(app)?\.com\/api\/webhooks|pastebin\.com|[a-z0-9-]+\.ngrok(-free)?\.(app|io)|transfer\.sh|requestbin|webhook\.site|hastebin)/i, "HIGH", "exfil-shaped URL");
    hit(/registry\s*=\s*https?:\/\/(?!registry\.npmjs\.org|registry\.yarnpkg\.com)|--registry\s+https?:\/\/(?!registry\.npmjs\.org)|index-url\s*=\s*https?:\/\/(?!pypi\.org)/i, "HIGH", "package registry override");
    hit(/(ignore (all )?(previous|prior) instructions|you are now|do not tell the user|system prompt:|<\/?(system|assistant)>)/i, "MEDIUM", "prompt-injection bait (report it, never obey it)");
    if (/\.(md|txt)$/i.test(p)) hit(/\b(npx|npm i -g|npm install -g|pip install|brew install|iwr .*\| ?iex|Invoke-Expression)\b/, "LOW", "install instruction in docs (follow only in a sandbox)");
    if (/\.(js|mjs|cjs|ts)$/.test(p) && !/\.min\.js$/.test(p)) { const long = lines.filter((l) => l.length > 2000).length; if (long) add("MEDIUM", "minified or obfuscated source outside a build folder", p, `${long} lines over 2000 chars`); }
    if (/(^|\/)(CLAUDE|AGENTS)\.md$|\.cursorrules$/i.test(p)) hit(/\b(curl|wget|npm install|pip install|rm -rf|chmod|sudo|export [A-Z_]+=)/, "MEDIUM", "agent instruction file tells an agent to run commands");
  }
  if (!facts.securityMd && facts.stars > 100) add("LOW", "no SECURITY.md", "repo");

  // dedupe and rank
  const rank = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
  const seen = new Set();
  const uniq = findings.filter((f) => { const k = `${f.sev}|${f.what}|${f.where}`; if (seen.has(k)) return false; seen.add(k); return true; }).sort((a, b) => rank[a.sev] - rank[b.sev]);
  const n = (s) => uniq.filter((f) => f.sev === s).length;
  const verdict = n("CRITICAL") || n("HIGH") >= 2 ? "BLOCK" : n("HIGH") || n("MEDIUM") ? "REVIEW" : "PASS";
  return { owner, repo, verdict, findings: uniq, facts, counts: { CRITICAL: n("CRITICAL"), HIGH: n("HIGH"), MEDIUM: n("MEDIUM"), LOW: n("LOW") } };
}

function report(r) {
  const f = r.facts;
  const L = [];
  L.push(`# Gate: ${r.owner}/${r.repo}`, "", `**${r.verdict}** on ${today()}.${r.verdict === "BLOCK" ? " Do not clone, install, run or review until a human reads the findings." : r.verdict === "REVIEW" ? " Clone read-only if needed, no install, no run; findings below first." : " Nothing found by the static checks. Still no install or run outside a sandbox."}`, "");
  if (f) {
    L.push("| | |", "|---|---|",
      `| Created | ${f.created} (${f.ageDays} days ago), last push ${f.pushed} |`,
      `| Owner | ${r.owner} (${f.ownerType}${f.ownerAgeDays !== null ? `, account ${f.ownerAgeDays} days old, ${f.ownerRepos} public repos` : ""}) |`,
      `| Stars, forks, contributors | ${f.stars}, ${f.forks}, ${f.contributors ?? "?"} |`,
      `| Licence | ${f.license ?? "none"}${f.archived ? ", archived" : ""}${f.fork ? `, fork of ${f.parent}` : ""} |`,
      `| Files | ${f.files}${f.truncated ? " (tree truncated)" : ""}, ${f.read} read; language ${f.language ?? "?"}; SECURITY.md ${f.securityMd ? "yes" : "no"} |`, "");
  }
  L.push(`Findings: ${r.counts ? Object.entries(r.counts).map(([k, v]) => `${v} ${k}`).join(", ") : r.findings.length}`, "");
  if (r.findings.length) {
    L.push("| Severity | What | Where | Detail |", "|---|---|---|---|");
    for (const x of r.findings.slice(0, 120)) L.push(`| ${x.sev} | ${x.what} | \`${x.where}\` | ${String(x.detail ?? "").replace(/\|/g, "/").replace(/`/g, "'")} |`);
    if (r.findings.length > 120) L.push(`| | ${r.findings.length - 120} more | | |`);
    L.push("");
  }
  L.push("Checks: age and owner, licence, binaries, committed .env, registry overrides, agent configs and instruction files, config-file malware (whitespace-hidden code, PolinRider names and markers, folderOpen tasks), config-file malware (whitespace-hidden code, PolinRider names and markers, folderOpen tasks), install hooks in package.json, dependency names near popular packages, URL dependencies, workflow risks (pull_request_target, PR head checkout, script injection, unpinned actions, Trivy by tag, secrets near network calls), curl | sh, eval and process spawning, embedded base64, token-shaped strings, exfil-shaped URLs, prompt-injection bait, minified source. Read-only: GitHub API and raw file reads, nothing cloned or executed. Method: ZAOresearch 2433 and 2486.", "");
  return L.join("\n");
}

let worst = 0;
for (const spec of args) {
  try {
    const r = await gate(spec);
    const file = path.join(GATES, `${r.owner}__${r.repo}.md`);
    fs.writeFileSync(file, report(r));
    console.log(`${r.verdict}  ${r.owner}/${r.repo}  ${r.counts ? Object.entries(r.counts).filter(([, v]) => v).map(([k, v]) => `${v} ${k}`).join(", ") || "clean" : ""}  -> gates/${path.basename(file)}`);
    worst = Math.max(worst, r.verdict === "BLOCK" ? 2 : r.verdict === "REVIEW" ? 1 : 0);
  } catch (e) {
    console.log(`ERROR  ${spec}  ${e.message}`);
    worst = 2;
  }
}
process.exit(worst === 2 ? 2 : 0);
