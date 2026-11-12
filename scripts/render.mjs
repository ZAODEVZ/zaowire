// Turn data/repos.json + data/stars.json into README.md and docs/data.json.
import fs from "node:fs";
import path from "node:path";
import { ROOT, config, readJson, fmtStars } from "./lib.mjs";

const { updated, repos } = readJson("repos.json", { updated: "", repos: {} });
const stars = readJson("stars.json", {});
const firstSeen = readJson("first-seen.json", {});
const days = Object.keys(stars).sort();
const live = Object.values(repos).filter((r) => !r.missing);

function gain(r) {
  // Stars gained over the last 7 measured days, scaled by size so a small repo taking off outranks a giant.
  const k = r.full.toLowerCase();
  const measured = days.filter((d) => stars[d][k] != null);
  if (measured.length < 2) return null;
  const first = measured[Math.max(0, measured.length - 8)];
  const last = measured[measured.length - 1];
  const delta = stars[last][k] - stars[first][k];
  const span = Math.round((new Date(last) - new Date(first)) / 86400000) || 1;
  const perWeek = (delta / span) * 7;
  return { delta, span, perWeek, score: perWeek / Math.sqrt(Math.max(r.stars, 10)) };
}

function area(r) {
  const topics = r.sources.docs.map((d) => d.topic);
  if (!topics.length) return r.sources.estate ? "ZAO estate" : "Inbox";
  const counts = {};
  for (const t of topics) counts[t] = (counts[t] || 0) + 1;
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  return config.areas[top] || top;
}

function picks(r) {
  return r.sources.docs.length + r.sources.inbox.length + (r.sources.estate ? 0 : 0);
}

function row(r, extra = "") {
  const docs = r.sources.docs.map((d) => d.number).sort((a, b) => parseInt(a) - parseInt(b));
  const where = [];
  if (docs.length) where.push(`research ${docs.slice(0, 6).join(", ")}${docs.length > 6 ? ` +${docs.length - 6}` : ""}`);
  if (r.sources.estate) where.push("ZAO repo");
  if (r.sources.inbox.length) where.push(`inbox x${r.sources.inbox.length}`);
  const meta = [r.language, r.license, `updated ${r.pushed}`, r.archived ? "archived" : ""].filter(Boolean).join(" · ");
  const desc = r.description || "No description";
  return `| **[${r.full}](${r.url})**<br>⭐ ${fmtStars(r.stars)} | ${desc}<br><sub>${meta}</sub>${extra ? `<br><sub>${extra}</sub>` : ""} | <sub>${where.join(" · ")}</sub> |`;
}

const header = "| Repo | About | Seen in |\n| :-- | :-- | :-- |";
const lines = [];
lines.push(`# ${config.title}`);
lines.push("");
lines.push(`${config.tagline}`);
lines.push("");
lines.push(`${live.length} repos · updated ${updated} · [browse on the site](${config.siteUrl}) · [add a repo](../../issues/new?template=submit-repo.yml) · refreshed every two days by GitHub Actions`);
lines.push("");
lines.push("How it is built: every `github.com/owner/repo` link inside the ZAO research library is pulled out (only the repo name, doc number and topic are kept, never the research text), the public repos of the ZAO accounts are added, plus anything dropped into [inbox.md](inbox.md). Each repo is checked on GitHub and its star count recorded daily, so trending is measured, not guessed.");
lines.push("");

// Trending
const trending = live
  .filter((r) => r.stars >= config.trendingMinStars && !r.sources.estate)
  .map((r) => ({ r, g: gain(r) }))
  .filter((x) => x.g && x.g.delta > 0)
  .sort((a, b) => b.g.score - a.g.score)
  .slice(0, 15);
lines.push("## 🔥 Trending");
lines.push("");
if (trending.length) {
  lines.push("<sub>Gaining stars fastest for their size, from daily counts. Needs at least two days of counts, so this section fills in after the first updates.</sub>");
  lines.push("");
  lines.push(header);
  for (const { r, g } of trending) lines.push(row(r, `📈 +${fmtStars(Math.round(g.delta))} stars in ${g.span} day${g.span === 1 ? "" : "s"}`));
} else {
  lines.push("<sub>Needs two days of star counts. Comes alive after the next update.</sub>");
}
lines.push("");

// New this week
const cutoff = new Date(Date.now() - config.newDays * 86400000).toISOString().slice(0, 10);
const fresh = live
  .filter((r) => (firstSeen[r.full.toLowerCase()] || "") >= cutoff)
  .sort((a, b) => b.stars - a.stars)
  .slice(0, 30);
lines.push("## 🆕 New on the list");
lines.push("");
lines.push(`<sub>${fresh.length} repos first seen in the last ${config.newDays} days, most stars first.</sub>`);
lines.push("");
if (fresh.length) {
  lines.push(header);
  for (const r of fresh) lines.push(row(r));
}
lines.push("");

// Picked again
const again = live.filter((r) => picks(r) >= 2).sort((a, b) => picks(b) - picks(a) || b.stars - a.stars).slice(0, 40);
lines.push("## 🔁 Picked more than once");
lines.push("");
lines.push("<sub>Repos that came up in two or more research docs or inbox drops. The best filter there is.</sub>");
lines.push("");
if (again.length) {
  lines.push(header);
  for (const r of again) lines.push(row(r, `picked ${picks(r)}×`));
}
lines.push("");

// Estate
const estate = live.filter((r) => r.sources.estate).sort((a, b) => (a.pushed < b.pushed ? 1 : -1));
lines.push("## 🏠 The ZAO estate");
lines.push("");
lines.push(`<sub>${estate.length} public repos owned by the ZAO accounts, most recently pushed first.</sub>`);
lines.push("");
lines.push(header);
for (const r of estate) lines.push(row(r));
lines.push("");

// By area
const byArea = {};
for (const r of live) {
  if (r.sources.estate && !r.sources.docs.length) continue;
  (byArea[area(r)] ||= []).push(r);
}
lines.push("## 🗂️ By area");
lines.push("");
lines.push("<sub>Area comes from the research topic the repo was filed under. Most stars first.</sub>");
lines.push("");
for (const [name, list] of Object.entries(byArea).sort((a, b) => b[1].length - a[1].length)) {
  lines.push(`<details><summary><b>${name}</b> · ${list.length}</summary>`);
  lines.push("");
  lines.push(header);
  for (const r of list.sort((a, b) => b.stars - a.stars)) lines.push(row(r));
  lines.push("");
  lines.push("</details>");
  lines.push("");
}

lines.push("## ➕ Add a repo");
lines.push("");
lines.push("Open an issue with the [submit form](../../issues/new?template=submit-repo.yml), or add a line to [inbox.md](inbox.md): the link, the date and a note. It is picked up on the next update. Anything mentioned in a new research doc is picked up on its own.");
lines.push("");
lines.push("Shape and idea borrowed from [starwire](https://github.com/boffti/starwire) (CC0). This list is CC0 too: `data/repos.json` is the whole thing.");
lines.push("");

fs.writeFileSync(path.join(ROOT, "README.md"), lines.join("\n"));

// Site data
const site = {
  title: config.title,
  tagline: config.tagline,
  updated,
  repos: live
    .map((r) => {
      const g = gain(r);
      return {
        full: r.full,
        url: r.url,
        description: r.description,
        stars: r.stars,
        language: r.language,
        license: r.license,
        pushed: r.pushed,
        created: r.created,
        archived: r.archived,
        area: area(r),
        docs: r.sources.docs.map((d) => d.number),
        estate: Boolean(r.sources.estate),
        inbox: r.sources.inbox.length,
        picks: picks(r),
        firstSeen: firstSeen[r.full.toLowerCase()] || "",
        gain: g ? Math.round(g.delta) : null,
        gainDays: g ? g.span : null,
        score: g ? g.score : 0,
      };
    })
    .sort((a, b) => b.stars - a.stars),
};
fs.mkdirSync(path.join(ROOT, "docs"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "docs", "data.json"), JSON.stringify(site));
console.error(`render: README with ${live.length} repos, ${trending.length} trending, ${fresh.length} new, ${again.length} picked again, ${estate.length} estate`);
