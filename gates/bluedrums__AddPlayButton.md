# Gate: bluedrums/AddPlayButton

**REVIEW** on 2026-11-13. Clone read-only if needed, no install, no run; findings below first.

| | |
|---|---|
| Created | 2025-06-29 (502 days ago), last push 2026-10-26 |
| Owner | bluedrums (User, account 3402 days old, 3 public repos) |
| Stars, forks, contributors | 2, 0, 3 |
| Licence | MIT |
| Files | 178, 130 read; language TypeScript; SECURITY.md no |

Findings: 0 CRITICAL, 0 HIGH, 1 MEDIUM, 0 LOW

| Severity | What | Where | Detail |
|---|---|---|---|
| MEDIUM | third-party action not pinned to a SHA | `.github/workflows/create-pr.yml:19` | uses: actions/checkout@v4 |

Checks: age and owner, licence, binaries, committed .env, registry overrides, agent configs and instruction files, install hooks in package.json, dependency names near popular packages, URL dependencies, workflow risks (pull_request_target, PR head checkout, script injection, unpinned actions, Trivy by tag, secrets near network calls), curl | sh, eval and process spawning, embedded base64, token-shaped strings, exfil-shaped URLs, prompt-injection bait, minified source. Read-only: GitHub API and raw file reads, nothing cloned or executed. Method: ZAOresearch 2433 and 2486.
