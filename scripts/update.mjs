// One command: collect, enrich, render.
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
for (const step of ["collect.mjs", "enrich.mjs", "render.mjs"]) {
  console.error(`== ${step}`);
  const r = spawnSync(process.execPath, [path.join(here, step)], { stdio: "inherit" });
  if (r.status !== 0) {
    console.error(`${step} failed with ${r.status}`);
    process.exit(r.status || 1);
  }
}
