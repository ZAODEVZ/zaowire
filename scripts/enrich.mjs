// Check every repo on GitHub and record today's star count.
// Writes data/repos.json (current facts) and data/stars.json (one row per day, kept for config.historyDays).
import { config, gh, readJson, writeJson, today } from "./lib.mjs";

const sources = readJson("sources.json", { repos: {} });
const prev = readJson("repos.json", { repos: {} });
const stars = readJson("stars.json", {});
const day = today();
stars[day] ||= {};

const out = {};
let checked = 0, missing = 0, renamed = 0;
for (const [key, src] of Object.entries(sources.repos)) {
  const r = await gh(`/repos/${src.full}`);
  checked++;
  if (!r) {
    missing++;
    const old = prev.repos?.[key];
    if (old) out[key] = { ...old, missing: true };
    continue;
  }
  const full = r.full_name;
  if (full.toLowerCase() !== key) renamed++;
  const k = full.toLowerCase();
  out[k] = {
    full,
    owner: r.owner.login,
    name: r.name,
    description: (r.description || "").replace(/\s+/g, " ").trim(),
    stars: r.stargazers_count,
    forks: r.forks_count,
    language: r.language || "",
    license: r.license?.spdx_id && r.license.spdx_id !== "NOASSERTION" ? r.license.spdx_id : "",
    topics: r.topics || [],
    archived: r.archived,
    fork: r.fork,
    created: r.created_at.slice(0, 10),
    pushed: r.pushed_at.slice(0, 10),
    homepage: r.homepage || "",
    url: r.html_url,
    sources: { docs: src.docs, estate: src.estate, inbox: src.inbox },
  };
  stars[day][k] = r.stargazers_count;
}

// Trim history.
const keep = Object.keys(stars).sort().slice(-config.historyDays);
const trimmed = {};
for (const d of keep) trimmed[d] = stars[d];

writeJson("repos.json", { updated: day, repos: out });
writeJson("stars.json", trimmed);
console.error(`enrich: ${checked} checked, ${Object.keys(out).length} live, ${missing} missing, ${renamed} renamed`);
