// Shared helpers: config, data files, GitHub API with rate-limit care.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const DATA = path.join(ROOT, "data");
export const config = JSON.parse(fs.readFileSync(path.join(ROOT, "config.json"), "utf8"));

export const today = () => new Date().toISOString().slice(0, 10);

export function readJson(file, fallback) {
  const p = path.join(DATA, file);
  if (!fs.existsSync(p)) return fallback;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

export function writeJson(file, value) {
  fs.mkdirSync(DATA, { recursive: true });
  fs.writeFileSync(path.join(DATA, file), JSON.stringify(value, null, 1) + "\n");
}

const token = process.env.ZAOWIRE_TOKEN || process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "zaowire",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

export async function gh(url, { raw = false, allowMissing = true } = {}) {
  const full = url.startsWith("http") ? url : `https://api.github.com${url}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    const r = await fetch(full, { headers: raw ? { ...headers, Accept: "application/vnd.github.raw" } : headers });
    if (r.status === 404 || r.status === 451) {
      if (allowMissing) return null;
      throw new Error(`${url}: ${r.status}`);
    }
    if (r.status === 403 || r.status === 429) {
      const reset = Number(r.headers.get("x-ratelimit-reset") || 0) * 1000;
      const wait = Math.max(5000, Math.min(reset - Date.now(), 120000));
      console.error(`rate limited on ${url}, waiting ${Math.round(wait / 1000)}s`);
      await new Promise((res) => setTimeout(res, wait));
      continue;
    }
    if (!r.ok) throw new Error(`${url}: ${r.status} ${(await r.text()).slice(0, 200)}`);
    return raw ? r.text() : r.json();
  }
  throw new Error(`${url}: gave up after retries`);
}

export async function ghPaged(url, maxPages = 20) {
  const out = [];
  for (let page = 1; page <= maxPages; page++) {
    const sep = url.includes("?") ? "&" : "?";
    const batch = await gh(`${url}${sep}per_page=100&page=${page}`);
    if (!batch || !batch.length) break;
    out.push(...batch);
    if (batch.length < 100) break;
  }
  return out;
}

export const hasToken = Boolean(token);

export function fmtStars(n) {
  if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, "") + "k";
  return String(n);
}
