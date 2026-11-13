# Gate: rinturaj/awesome-software-clones

**REVIEW** on 2026-11-13. Clone read-only if needed, no install, no run; findings below first.

| | |
|---|---|
| Created | 2026-11-12 (1 days ago), last push 2026-11-13 |
| Owner | rinturaj (User, account 4058 days old, 36 public repos) |
| Stars, forks, contributors | 36, 1, 1 |
| Licence | CC0-1.0 |
| Files | 5, 3 read; language ?; SECURITY.md no |

Findings: 0 CRITICAL, 0 HIGH, 1 MEDIUM, 0 LOW

| Severity | What | Where | Detail |
|---|---|---|---|
| MEDIUM | repo is under two weeks old | `2026-11-12` |  |

Checks: age and owner, licence, binaries, committed .env, registry overrides, agent configs and instruction files, install hooks in package.json, dependency names near popular packages, URL dependencies, workflow risks (pull_request_target, PR head checkout, script injection, unpinned actions, Trivy by tag, secrets near network calls), curl | sh, eval and process spawning, embedded base64, token-shaped strings, exfil-shaped URLs, prompt-injection bait, minified source. Read-only: GitHub API and raw file reads, nothing cloned or executed. Method: ZAOresearch 2433 and 2486.
