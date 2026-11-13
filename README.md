# ZAOwire

Every GitHub repo The ZAO has looked at, in one list that updates itself.

1367 repos · updated 2026-11-12 · [browse on the site](https://zaodevz.github.io/zaowire/) · [add a repo](../../issues/new?template=submit-repo.yml) · refreshed every two days by GitHub Actions

How it is built: every `github.com/owner/repo` link inside the ZAO research library is pulled out (only the repo name, doc number and topic are kept, never the research text), the public repos of the ZAO accounts are added, plus anything dropped into [inbox.md](inbox.md). Each repo is checked on GitHub and its star count recorded daily, so trending is measured, not guessed.

## 🔥 Trending

<sub>Needs two days of star counts. Comes alive after the next update.</sub>

## Security gate, before any repo is reviewed

Zaal, 13 Nov 2026: "Add security check and gate before we review anything." Every repo that reaches this list, the desk or a research doc goes through `scripts/gate.mjs` first, and nobody clones, installs, runs or reviews it before the gate report exists.

```
node scripts/gate.mjs rinturaj/awesome-software-clones        # or a github.com URL; several at once is fine
```

Read-only: GitHub API and raw file reads, nothing is cloned or executed. It writes `gates/<owner>__<repo>.md` and prints one line: **PASS** (nothing found; still no install or run outside a sandbox), **REVIEW** (clone read-only, no install; findings listed) or **BLOCK** (any CRITICAL finding or two HIGH: a human reads the findings before anyone touches it). What it checks: repo and owner age, licence, committed binaries and .env files, registry overrides, agent configs and instruction files (CLAUDE.md, .cursorrules, .mcp.json, hooks), install hooks in package.json, dependency names close to popular packages, URL dependencies, workflow risks (pull_request_target, PR head checkout, script injection, unpinned actions, Trivy by tag, secrets next to network calls), curl piped to a shell, eval and process spawning, embedded base64, token-shaped strings, exfil-shaped URLs, prompt-injection bait, minified source. The method is ZAOresearch 2433 (our own repos) extended to strangers' repos in 2486.

First through the gate: rinturaj/awesome-software-clones, REVIEW (one finding: the repo is a day old). Reports live in `gates/`.

## 🆕 New on the list

<sub>30 repos first seen in the last 7 days, most stars first.</sub>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x)**<br>⭐ 562k | Master programming by recreating your favorite technologies from scratch.<br><sub>Markdown · updated 2026-11-08</sub> | <sub>research 1103</sub> |
| **[public-apis/public-apis](https://github.com/public-apis/public-apis)**<br>⭐ 498k | A collective list of free APIs<br><sub>Python · MIT · updated 2026-11-11</sub> | <sub>research 092, 1103</sub> |
| **[openclaw/openclaw](https://github.com/openclaw/openclaw)**<br>⭐ 394k | The AI that really does things. Any OS. Any Platform. The lobster way. 🦞<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 071, 234, 236, 239, 245, 339 +3</sub> |
| **[mattpocock/skills](https://github.com/mattpocock/skills)**<br>⭐ 323k | Skills for Real Engineers. Straight from my .agents directory.<br><sub>Shell · MIT · updated 2026-11-12</sub> | <sub>research 238, 507, 539, 574, 2460</sub> |
| **[obra/superpowers](https://github.com/obra/superpowers)**<br>⭐ 317k | An agentic skills framework & software development methodology that works.<br><sub>Shell · MIT · updated 2026-11-03</sub> | <sub>research 054, 429, 1966 · inbox x1</sub> |
| **[practical-tutorials/project-based-learning](https://github.com/practical-tutorials/project-based-learning)**<br>⭐ 290k | Curated list of project-based tutorials<br><sub>Python · MIT · updated 2026-11-09</sub> | <sub>research 1103</sub> |
| **[deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)**<br>⭐ 280k | DeepSeek Harness: Everything is a Plugin.<br><sub>TypeScript · MIT · updated 2026-11-11</sub> | <sub>research 2452</sub> |
| **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**<br>⭐ 263k | The agent that grows with you<br><sub>Python · MIT · updated 2026-11-12</sub> | <sub>research 364, 495, 632, 875, 2435</sub> |
| **[trimstray/the-book-of-secret-knowledge](https://github.com/trimstray/the-book-of-secret-knowledge)**<br>⭐ 258k | A collection of inspiring lists, manuals, cheatsheets, blogs, hacks, one-liners, cli/web tools and more.<br><sub>MIT · updated 2024-11-19</sub> | <sub>research 1992</sub> |
| **[ossu/computer-science](https://github.com/ossu/computer-science)**<br>⭐ 211k | 🎓 Path to a free self-taught education in Computer Science!<br><sub>HTML · MIT · updated 2026-11-09</sub> | <sub>research 1103</sub> |
| **[n8n-io/n8n](https://github.com/n8n-io/n8n)**<br>⭐ 210k | Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code, self-host or cloud, 400+ integrations.<br><sub>TypeScript · updated 2026-11-12</sub> | <sub>research 239, 1002, 1005, 2251</sub> |
| **[yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp)**<br>⭐ 207k | A feature-rich command-line audio/video downloader<br><sub>Python · Unlicense · updated 2026-11-04</sub> | <sub>research 490, 569, 820, 837, 2435</sub> |
| **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)**<br>⭐ 201k | Supercharge your AI agents with data from the web and beyond. Building the library for superintelligence. 🔥<br><sub>TypeScript · AGPL-3.0 · updated 2026-11-12</sub> | <sub>research 2435</sub> |
| **[microsoft/markitdown](https://github.com/microsoft/markitdown)**<br>⭐ 195k | Python tool for converting files and office documents to Markdown.<br><sub>Python · MIT · updated 2026-11-07</sub> | <sub>research 2435</sub> |
| **[anthropics/skills](https://github.com/anthropics/skills)**<br>⭐ 194k | Public repository for Agent Skills<br><sub>Python · updated 2026-11-06</sub> | <sub>research 164, 673 · inbox x1</sub> |
| **[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)**<br>⭐ 190k | Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.<br><sub>JavaScript · MIT · updated 2026-10-29</sub> | <sub>research 1955, 2081</sub> |
| **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)**<br>⭐ 188k | AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so that you can focus on what matters.<br><sub>Python · updated 2026-11-12</sub> | <sub>research 529</sub> |
| **[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)**<br>⭐ 168k | A complete AI agency at your fingertips - From frontend wizards to Reddit community ninjas, from whimsy injectors to reality checkers. Each agent is a specialized expert with personality, processes, and proven deliverables.<br><sub>Shell · MIT · updated 2026-11-09</sub> | <sub>research 301, 1987</sub> |
| **[open-webui/open-webui](https://github.com/open-webui/open-webui)**<br>⭐ 158k | User-friendly AI Interface (Supports Ollama, OpenAI API, ...)<br><sub>Svelte · updated 2026-11-12</sub> | <sub>research 567, 568</sub> |
| **[anthropics/claude-code](https://github.com/anthropics/claude-code)**<br>⭐ 155k | Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.<br><sub>TypeScript · updated 2026-11-11</sub> | <sub>research 071, 165, 487, 497, 652, 671 +1</sub> |
| **[farion1231/cc-switch](https://github.com/farion1231/cc-switch)**<br>⭐ 154k | A cross-platform desktop All-in-One assistant for Claude Code, Codex, OpenCode,DeepSeek Harness and more. Only official website: ccswitch.io<br><sub>Rust · MIT · updated 2026-11-12</sub> | <sub>research 1955</sub> |
| **[nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)**<br>⭐ 148k | An AI skill that provides design intelligence for building professional UI/UX across multiple platforms.<br><sub>Python · MIT · updated 2026-11-10</sub> | <sub>research 1955</sub> |
| **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**<br>⭐ 147k | Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex, and Gemini CLI: local deterministic AST parsing, every edge explained, no vector store.<br><sub>Python · Apache-2.0 · updated 2026-11-11</sub> | <sub>research 297, 309</sub> |
| **[vercel/next.js](https://github.com/vercel/next.js)**<br>⭐ 143k | The React Framework<br><sub>JavaScript · MIT · updated 2026-11-12</sub> | <sub>research 367, 758a</sub> |
| **[yangshun/tech-interview-handbook](https://github.com/yangshun/tech-interview-handbook)**<br>⭐ 143k | Curated coding interview preparation materials for busy software engineers<br><sub>TypeScript · MIT · updated 2026-08-07</sub> | <sub>research 1103</sub> |
| **[garrytan/gstack](https://github.com/garrytan/gstack)**<br>⭐ 141k | Use Garry Tan's exact Claude Code setup: 23 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 089, 090, 239</sub> |
| **[openai/codex](https://github.com/openai/codex)**<br>⭐ 135k | Lightweight coding agent that runs in your terminal<br><sub>Rust · Apache-2.0 · updated 2026-11-12</sub> | <sub>research 487, 618, 1052, 1987, 1992</sub> |
| **[ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)**<br>⭐ 134k | LLM inference in C/C++<br><sub>C++ · MIT · updated 2026-11-12</sub> | <sub>research 2422</sub> |
| **[VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)**<br>⭐ 127k | A collection of DESIGN.md files analysis by popular brand design systems. Drop one into your project and let coding agents generate a matching UI.<br><sub>MIT · updated 2026-10-28</sub> | <sub>research 282</sub> |
| **[stablyai/orca](https://github.com/stablyai/orca)**<br>⭐ 123k | Orca lets you run a fleet of coding agents (e.g. Claude Code, Codex) with your own subscription. Available on desktop, mobile and remote runtime.<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 1987, 1992, 2405, 2423, 2453</sub> |

## 🔁 Picked more than once

<sub>Repos that came up in two or more research docs or inbox drops. The best filter there is.</sub>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[bettercallzaal/ZAOOS](https://github.com/bettercallzaal/ZAOOS)**<br>⭐ 1 | ZAOOS<br><sub>TypeScript · MIT · updated 2026-11-12</sub><br><sub>picked 106×</sub> | <sub>research 050, 051, 056, 058, 200, 225 +100 · ZAO repo</sub> |
| **[bettercallzaal/wwtracker](https://github.com/bettercallzaal/wwtracker)**<br>⭐ 0 | wwtracker<br><sub>TypeScript · MIT · updated 2026-11-12</sub><br><sub>picked 24×</sub> | <sub>research 1079, 1220, 1273, 1287, 1288, 1290 +18</sub> |
| **[sim31/ordao](https://github.com/sim31/ordao)**<br>⭐ 3 | Toolset for DAOs using non-transferable reputation token (Respect)<br><sub>TypeScript · GPL-3.0 · updated 2026-04-02</sub><br><sub>picked 13×</sub> | <sub>research 056, 058, 105, 106, 109, 184 +7</sub> |
| **[ace-step/ACE-Step-1.5](https://github.com/ace-step/ACE-Step-1.5)**<br>⭐ 15k | The most powerful local music generation model that outperforms almost all commercial alternatives, supporting Mac, AMD, Intel, and CUDA devices.<br><sub>Python · MIT · updated 2026-11-08</sub><br><sub>picked 12×</sub> | <sub>research 247, 251, 313, 319, 322, 324 +6</sub> |
| **[farcasterxyz/protocol](https://github.com/farcasterxyz/protocol)**<br>⭐ 2.2k | Specification of the Farcaster Protocol<br><sub>updated 2026-11-09</sub><br><sub>picked 12×</sub> | <sub>research 306, 308, 309, 571, 587, 593 +6</sub> |
| **[farcasterorg/hypersnap](https://github.com/farcasterorg/hypersnap)**<br>⭐ 74 | Snapchain, made hyperdimensional<br><sub>Rust · GPL-3.0 · updated 2026-11-12</sub><br><sub>picked 11×</sub> | <sub>research 304, 309, 489, 586, 587, 588 +5</sub> |
| **[openclaw/openclaw](https://github.com/openclaw/openclaw)**<br>⭐ 394k | The AI that really does things. Any OS. Any Platform. The lobster way. 🦞<br><sub>TypeScript · MIT · updated 2026-11-12</sub><br><sub>picked 9×</sub> | <sub>research 071, 234, 236, 239, 245, 339 +3</sub> |
| **[getzep/graphiti](https://github.com/getzep/graphiti)**<br>⭐ 33k | Build Real-Time Knowledge Graphs for AI Agents<br><sub>Python · Apache-2.0 · updated 2026-11-11</sub><br><sub>picked 9×</sub> | <sub>research 234, 568, 569, 604, 620, 699a +3</sub> |
| **[NERDDAO/bonfires-sdk](https://github.com/NERDDAO/bonfires-sdk)**<br>⭐ 3 | Beautiful terminal interface for the Bonfires API — colorized panels, tables, and relationship trees<br><sub>Python · MIT · updated 2026-04-16</sub><br><sub>picked 9×</sub> | <sub>research 544, 569, 581, 665, 669, 673 +3</sub> |
| **[songchaindao-dot/cowork-zaodevz](https://github.com/songchaindao-dot/cowork-zaodevz)**<br>⭐ 1 | No description<br><sub>TypeScript · updated 2026-07-22</sub><br><sub>picked 8×</sub> | <sub>research 229, 650, 662, 668, 676, 677 +2</sub> |
| **[anthropics/claude-code](https://github.com/anthropics/claude-code)**<br>⭐ 155k | Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.<br><sub>TypeScript · updated 2026-11-11</sub><br><sub>picked 7×</sub> | <sub>research 071, 165, 487, 497, 652, 671 +1</sub> |
| **[elizaOS/eliza](https://github.com/elizaOS/eliza)**<br>⭐ 20k | Open source agentic operating system<br><sub>TypeScript · MIT · updated 2026-11-12</sub><br><sub>picked 7×</sub> | <sub>research 200, 202, 496, 1181, 1967, 2251 +1</sub> |
| **[bettercallzaal/sparkz](https://github.com/bettercallzaal/sparkz)**<br>⭐ 12 | Start with a spark, not a token. Every project is a Capsule - identity, backing, receipts, Meme Engine memory - not a coin. Farcaster-native, on Base.<br><sub>TypeScript · Apache-2.0 · updated 2026-11-12</sub><br><sub>picked 7×</sub> | <sub>research 1621, 1978, 1979, 1984, 2404, 2462 +1 · ZAO repo</sub> |
| **[Optimystics/fractalgram](https://github.com/Optimystics/fractalgram)**<br>⭐ 1 | Telegram web client tailored for participants of Eden / Fractally style DAOs.<br><sub>TypeScript · GPL-3.0 · updated 2025-05-20</sub><br><sub>picked 7×</sub> | <sub>research 050, 051, 056, 102, 103, 109 +1</sub> |
| **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)**<br>⭐ 113k | The open-source app everyone uses to manage agents at work<br><sub>TypeScript · MIT · updated 2026-11-12</sub><br><sub>picked 6×</sub> | <sub>research 071, 089, 202, 205, 207, 208</sub> |
| **[karpathy/autoresearch](https://github.com/karpathy/autoresearch)**<br>⭐ 100k | AI agents running research on single-GPU nanochat training automatically<br><sub>Python · updated 2026-03-26</sub><br><sub>picked 6×</sub> | <sub>research 063, 089, 164, 168, 170, 1090</sub> |
| **[mem0ai/mem0](https://github.com/mem0ai/mem0)**<br>⭐ 69k | The Memory Layer for AI Agents - Drop-in memory infrastructure for AI agents and apps. Context that persists. Built for production.<br><sub>Python · Apache-2.0 · updated 2026-11-06</sub><br><sub>picked 6×</sub> | <sub>research 464, 568, 604, 620, 699a, 775</sub> |
| **[livekit/agents](https://github.com/livekit/agents)**<br>⭐ 15k | A framework for building realtime voice AI agents 🤖🎙️📹<br><sub>Python · Apache-2.0 · updated 2026-11-12</sub><br><sub>picked 6×</sub> | <sub>research 290, 605, 741, 741b, 741c, 741d</sub> |
| **[OrchestratorInc/agent-orchestrator](https://github.com/OrchestratorInc/agent-orchestrator)**<br>⭐ 14k | Plan, run and supervise fleets of agents from task to merged PR. Desktop (macOS, Windows, Linux) + iPhone & Android apps. Supports Claude Code, Codex & 35+ coding agents.<br><sub>TypeScript · Apache-2.0 · updated 2026-11-12</sub><br><sub>picked 6×</sub> | <sub>research 415, 428, 436, 460, 466, 837</sub> |
| **[a16z/awesome-farcaster](https://github.com/a16z/awesome-farcaster)**<br>⭐ 814 | A collection of awesome Farcaster links including clients, tools, and more.<br><sub>updated 2025-03-07 · archived</sub><br><sub>picked 6×</sub> | <sub>research 084, 162, 199, 281, 961, 1924</sub> |
| **[NERDDAO/bonfire-tools](https://github.com/NERDDAO/bonfire-tools)**<br>⭐ 0 | Local dev tools for Bonfires — proxy server, knowledge graph explorer, activity monitor, document ingestion<br><sub>HTML · updated 2026-11-05</sub><br><sub>picked 6×</sub> | <sub>research 544, 546, 665, 669, 673, 676</sub> |
| **[bettercallzaal/bettercallzaalwebsite](https://github.com/bettercallzaal/bettercallzaalwebsite)**<br>⭐ 0 | bettercallzaalwebsite<br><sub>HTML · MIT · updated 2026-10-31</sub><br><sub>picked 6×</sub> | <sub>research 663, 666, 667, 768, 769, 1970 · ZAO repo</sub> |
| **[Optimystics/frapps](https://github.com/Optimystics/frapps)**<br>⭐ 0 | Toolkit for fractal apps on Ethereum. Modular and composable<br><sub>updated 2025-04-01</sub><br><sub>picked 6×</sub> | <sub>research 056, 061, 102, 103, 664, 982</sub> |
| **[mattpocock/skills](https://github.com/mattpocock/skills)**<br>⭐ 323k | Skills for Real Engineers. Straight from my .agents directory.<br><sub>Shell · MIT · updated 2026-11-12</sub><br><sub>picked 5×</sub> | <sub>research 238, 507, 539, 574, 2460</sub> |
| **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**<br>⭐ 263k | The agent that grows with you<br><sub>Python · MIT · updated 2026-11-12</sub><br><sub>picked 5×</sub> | <sub>research 364, 495, 632, 875, 2435</sub> |
| **[yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp)**<br>⭐ 207k | A feature-rich command-line audio/video downloader<br><sub>Python · Unlicense · updated 2026-11-04</sub><br><sub>picked 5×</sub> | <sub>research 490, 569, 820, 837, 2435</sub> |
| **[openai/codex](https://github.com/openai/codex)**<br>⭐ 135k | Lightweight coding agent that runs in your terminal<br><sub>Rust · Apache-2.0 · updated 2026-11-12</sub><br><sub>picked 5×</sub> | <sub>research 487, 618, 1052, 1987, 1992</sub> |
| **[stablyai/orca](https://github.com/stablyai/orca)**<br>⭐ 123k | Orca lets you run a fleet of coding agents (e.g. Claude Code, Codex) with your own subscription. Available on desktop, mobile and remote runtime.<br><sub>TypeScript · MIT · updated 2026-11-12</sub><br><sub>picked 5×</sub> | <sub>research 1987, 1992, 2405, 2423, 2453</sub> |
| **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)**<br>⭐ 93k | 🙌 OpenHands: AI-Driven Development<br><sub>TypeScript · MIT · updated 2026-11-12</sub><br><sub>picked 5×</sub> | <sub>research 467, 529, 531, 541, 699d</sub> |
| **[promptfoo/promptfoo](https://github.com/promptfoo/promptfoo)**<br>⭐ 27k | Test your prompts, agents, and RAGs. Red teaming/pentesting/vulnerability scanning for AI. Compare performance of GPT, Claude, Gemini, DeepSeek, and more. Simple declarative configs with command line and CI/CD integration. Used by OpenAI and Anthropic.<br><sub>TypeScript · MIT · updated 2026-11-12</sub><br><sub>picked 5×</sub> | <sub>research 137, 239, 301, 605, 699c</sub> |
| **[builderz-labs/mission-control](https://github.com/builderz-labs/mission-control)**<br>⭐ 6.5k | Self-hosted control plane for AI agents: dispatch tasks, review runs, track spend, and operate OpenClaw, Claude Code, Codex, and other runtimes.<br><sub>TypeScript · MIT · updated 2026-11-09</sub><br><sub>picked 5×</sub> | <sub>research 168, 171, 266, 288, 296</sub> |
| **[austintgriffith/ethskills](https://github.com/austintgriffith/ethskills)**<br>⭐ 304 | The missing knowledge between AI agents and production Ethereum.<br><sub>HTML · updated 2026-10-26</sub><br><sub>picked 5×</sub> | <sub>research 023, 143, 339, 345, 962</sub> |
| **[0xSplits/splits-contracts](https://github.com/0xSplits/splits-contracts)**<br>⭐ 162 | Core smart contracts of 0xSplits<br><sub>TypeScript · GPL-3.0 · updated 2026-11-11</sub><br><sub>picked 5×</sub> | <sub>research 130, 223, 273, 628, 1943</sub> |
| **[neynarxyz/farcaster-examples](https://github.com/neynarxyz/farcaster-examples)**<br>⭐ 122 | A collection of Farcaster mini-apps powered by Neynar<br><sub>TypeScript · MIT · updated 2026-10-30</sub><br><sub>picked 5×</sub> | <sub>research 084, 085, 246, 591a, 769</sub> |
| **[hero-org/herocast](https://github.com/hero-org/herocast)**<br>⭐ 91 | Power user tools for decentralized social. No algorithms. You own your data.<br><sub>TypeScript · AGPL-3.0 · updated 2026-06-25</sub><br><sub>picked 5×</sub> | <sub>research 162, 221, 305, 366, 367</sub> |
| **[ardriveapp/turbo-sdk](https://github.com/ardriveapp/turbo-sdk)**<br>⭐ 62 | The first SDK on Arweave to bring you programmable fiat top ups, Turbo-powered upload reliability, and fast data and indexing finality for TypeScript based Web and Node projects.<br><sub>TypeScript · Apache-2.0 · updated 2026-11-03</sub><br><sub>picked 5×</sub> | <sub>research 152, 153, 155, 156, 332</sub> |
| **[rishavmukherji/farcaster-agent](https://github.com/rishavmukherji/farcaster-agent)**<br>⭐ 42 | Autonomous Farcaster account creation and casting agent - create accounts and post casts with just $1 of crypto<br><sub>JavaScript · updated 2026-02-07</sub><br><sub>picked 5×</sub> | <sub>research 084, 278, 280, 281, 762</sub> |
| **[farcasterxyz/snap](https://github.com/farcasterxyz/snap)**<br>⭐ 12 | Simple, nimble app protocol 🫰🫰🫰<br><sub>TypeScript · MIT · updated 2026-11-09</sub><br><sub>picked 5×</sub> | <sub>research 295, 505, 527, 534, 2471</sub> |
| **[Coop-Records/sonata](https://github.com/Coop-Records/sonata)**<br>⭐ 8 | music client on farcaster<br><sub>TypeScript · MIT · updated 2024-11-14</sub><br><sub>picked 5×</sub> | <sub>research 082, 084, 101, 162, 229</sub> |
| **[sim31/orfrapps](https://github.com/sim31/orfrapps)**<br>⭐ 1 | Configuration and scripts for deployment and maintenance of ORDAO instances for Fractal communities.<br><sub>TypeScript · GPL-3.0 · updated 2026-04-02</sub><br><sub>picked 5×</sub> | <sub>research 105, 109, 285, 705, 1994</sub> |

## 🏠 The ZAO estate

<sub>130 public repos owned by the ZAO accounts, most recently pushed first.</sub>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[bettercallzaal/zao-repos](https://github.com/bettercallzaal/zao-repos)**<br>⭐ 0 | Live dashboard over every public ZAO GitHub repository - activity, deploys, hygiene, portfolio<br><sub>JavaScript · MIT · updated 2026-11-12</sub> | <sub>ZAO repo</sub> |
| **[ZAODEVZ/zaoonparagraph](https://github.com/ZAODEVZ/zaoonparagraph)**<br>⭐ 0 | zaoonparagraph<br><sub>JavaScript · MIT · updated 2026-11-12</sub> | <sub>ZAO repo</sub> |
| **[ZAODEVZ/zaowire](https://github.com/ZAODEVZ/zaowire)**<br>⭐ 0 | Every GitHub repo The ZAO has looked at, in one list that updates itself.<br><sub>JavaScript · updated 2026-11-12</sub> | <sub>ZAO repo</sub> |
| **[ZAODEVZ/zao-harness](https://github.com/ZAODEVZ/zao-harness)**<br>⭐ 0 | One setup for every ZAO dev and agent. What would you want in your ideal harness?<br><sub>Shell · MIT · updated 2026-11-12</sub> | <sub>ZAO repo</sub> |
| **[ZAODEVZ/zabalgames](https://github.com/ZAODEVZ/zabalgames)**<br>⭐ 2 | zabalgames<br><sub>HTML · MIT · updated 2026-11-12</sub> | <sub>research 769, 786, 898, 1970 · ZAO repo</sub> |
| **[ZAODEVZ/ZAOstock](https://github.com/ZAODEVZ/ZAOstock)**<br>⭐ 0 | No description<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 1007, 1970, 2431 · ZAO repo</sub> |
| **[bettercallzaal/sparkz](https://github.com/bettercallzaal/sparkz)**<br>⭐ 12 | Start with a spark, not a token. Every project is a Capsule - identity, backing, receipts, Meme Engine memory - not a coin. Farcaster-native, on Base.<br><sub>TypeScript · Apache-2.0 · updated 2026-11-12</sub> | <sub>research 1621, 1978, 1979, 1984, 2404, 2462 +1 · ZAO repo</sub> |
| **[bettercallzaal/poidhz](https://github.com/bettercallzaal/poidhz)**<br>⭐ 0 | BCZ POIDH bounty ops: rounds, judging pages, brand kits, leaderboard. Source of truth for every BCZ-issued POIDH bounty.<br><sub>Python · updated 2026-11-12</sub> | <sub>research 1903, 1970 · ZAO repo</sub> |
| **[bettercallzaal/ZAOOS](https://github.com/bettercallzaal/ZAOOS)**<br>⭐ 1 | ZAOOS<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 050, 051, 056, 058, 200, 225 +100 · ZAO repo</sub> |
| **[bettercallzaal/zaotravelz](https://github.com/bettercallzaal/zaotravelz)**<br>⭐ 0 | Year of the ZAO Festivalz - travel campaign HQ: Devcon 8 Mumbai, the 2026 proof leg, and the 2027 circuit<br><sub>HTML · MIT · updated 2026-11-11</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zaal-eth](https://github.com/bettercallzaal/zaal-eth)**<br>⭐ 0 | zaal.eth on Instagram: the daily reel system, the 30 day plan and the Feliq collab brief<br><sub>HTML · updated 2026-11-11</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zaoonparagraph](https://github.com/bettercallzaal/zaoonparagraph)**<br>⭐ 0 | The ZAO newsletter on Paragraph - drafting, publishing, distribution<br><sub>JavaScript · MIT · updated 2026-11-11</sub> | <sub>ZAO repo</sub> |
| **[ZAODEVZ/ZAOscout](https://github.com/ZAODEVZ/ZAOscout)**<br>⭐ 0 | ZAOscout<br><sub>JavaScript · MIT · updated 2026-11-11</sub> | <sub>research 882 · ZAO repo</sub> |
| **[ZAODEVZ/ZAOfractal](https://github.com/ZAODEVZ/ZAOfractal)**<br>⭐ 2 | ZAOfractal<br><sub>TypeScript · MIT · updated 2026-11-10</sub> | <sub>ZAO repo</sub> |
| **[ZAODEVZ/ZAO101](https://github.com/ZAODEVZ/ZAO101)**<br>⭐ 0 | ZAO101<br><sub>TypeScript · MIT · updated 2026-11-09</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zorca](https://github.com/bettercallzaal/zorca)**<br>⭐ 0 | The ZAO orchestration layer for Orca<br><sub>Python · MIT · updated 2026-11-09</sub> | <sub>research 2423 · ZAO repo</sub> |
| **[bettercallzaal/zao-learns-zoroastrianism](https://github.com/bettercallzaal/zao-learns-zoroastrianism)**<br>⭐ 0 | No description<br><sub>HTML · updated 2026-11-08</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zabalartsubmission](https://github.com/bettercallzaal/zabalartsubmission)**<br>⭐ 0 | zabalartsubmission<br><sub>HTML · MIT · updated 2026-11-08</sub> | <sub>research 663 · ZAO repo</sub> |
| **[bettercallzaal/B-ZBUILD2](https://github.com/bettercallzaal/B-ZBUILD2)**<br>⭐ 0 | B&ZBUILD2<br><sub>TypeScript · MIT · updated 2026-11-05</sub> | <sub>ZAO repo</sub> |
| **[ZAODEVZ/.github](https://github.com/ZAODEVZ/.github)**<br>⭐ 0 | ZAO DEVZ org profile<br><sub>updated 2026-11-05</sub> | <sub>ZAO repo</sub> |
| **[ZAODEVZ/ZAODEVZ](https://github.com/ZAODEVZ/ZAODEVZ)**<br>⭐ 0 | The ZAO: profile<br><sub>updated 2026-11-05</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/bettercallzaal](https://github.com/bettercallzaal/bettercallzaal)**<br>⭐ 0 | No description<br><sub>updated 2026-11-03</sub> | <sub>ZAO repo</sub> |
| **[ZAODEVZ/zao-chat-window](https://github.com/ZAODEVZ/zao-chat-window)**<br>⭐ 0 | One script tag adds a chat window to any site. Visitors shape an idea with a free model, and it lands as a GitHub issue.<br><sub>JavaScript · MIT · updated 2026-11-01</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zao-fractal-bot](https://github.com/bettercallzaal/zao-fractal-bot)**<br>⭐ 0 | ZAO Fractal Discord bot - fresh rebuild (discord.js/TS + viem + Supabase), see ZAOOS research docs 981/982<br><sub>TypeScript · MIT · updated 2026-11-01</sub> | <sub>research 1994, 2404 · ZAO repo</sub> |
| **[bettercallzaal/bcz-yapz](https://github.com/bettercallzaal/bcz-yapz)**<br>⭐ 0 | No description<br><sub>TypeScript · updated 2026-10-31</sub> | <sub>research 616, 621, 722, 1455, 1970 · ZAO repo</sub> |
| **[bettercallzaal/bettercallzaalwebsite](https://github.com/bettercallzaal/bettercallzaalwebsite)**<br>⭐ 0 | bettercallzaalwebsite<br><sub>HTML · MIT · updated 2026-10-31</sub> | <sub>research 663, 666, 667, 768, 769, 1970 · ZAO repo</sub> |
| **[bettercallzaal/battle-meter](https://github.com/bettercallzaal/battle-meter)**<br>⭐ 0 | No description<br><sub>JavaScript · MIT · updated 2026-10-30</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zao-website](https://github.com/bettercallzaal/zao-website)**<br>⭐ 0 | The ZAO marketing site - coded Next.js rebuild of thezao.com, off Webflow. Fresh design from the ZAO brand system.<br><sub>TypeScript · updated 2026-10-29</sub> | <sub>research 1970 · ZAO repo</sub> |
| **[bettercallzaal/fractalbotdec2025](https://github.com/bettercallzaal/fractalbotdec2025)**<br>⭐ 0 | fractalbotdec2025<br><sub>Python · MIT · updated 2026-10-28</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zao-media](https://github.com/bettercallzaal/zao-media)**<br>⭐ 0 | ZM (ZAO Media) - the media home for The ZAO: podcasts, shows, Spaces, streams, and earned-media appearances. Logged once, shared everywhere.<br><sub>HTML · MIT · updated 2026-10-26</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zao-app](https://github.com/bettercallzaal/zao-app)**<br>⭐ 0 | The ZAO Farcaster client<br><sub>TypeScript · MIT · updated 2026-10-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/p2e-x-zao](https://github.com/bettercallzaal/p2e-x-zao)**<br>⭐ 0 | P2E Inferno x The ZAO: WaveZ Station quests, how-tos and ideas<br><sub>HTML · updated 2026-10-21</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/CoCConcertZ](https://github.com/bettercallzaal/CoCConcertZ)**<br>⭐ 0 | CoCConcertZ<br><sub>TypeScript · MIT · updated 2026-10-19</sub> | <sub>research 663, 1970, 2431 · ZAO repo</sub> |
| **[ZAODEVZ/ZAOcowork](https://github.com/ZAODEVZ/ZAOcowork)**<br>⭐ 2 | ZAOcowork<br><sub>TypeScript · MIT · updated 2026-10-19</sub> | <sub>research 726, 864, 1035, 2431 · ZAO repo</sub> |
| **[bettercallzaal/zingfisher](https://github.com/bettercallzaal/zingfisher)**<br>⭐ 1 | zingfisher<br><sub>TypeScript · updated 2026-10-18</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zao-xmtp](https://github.com/bettercallzaal/zao-xmtp)**<br>⭐ 1 | No description<br><sub>TypeScript · MIT · updated 2026-10-18</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zaaltimelinev1](https://github.com/bettercallzaal/zaaltimelinev1)**<br>⭐ 0 | zaaltimelinev1<br><sub>TypeScript · MIT · updated 2026-10-18</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zao-papers](https://github.com/bettercallzaal/zao-papers)**<br>⭐ 0 | The ZAO papers + ZIP (ZAO Improvement Proposal) process. ZIP-1 = the whole framework as it currently is.<br><sub>HTML · updated 2026-10-17</sub> | <sub>research 1142, 1263, 2404 · ZAO repo</sub> |
| **[ZAODEVZ/thezao.com-iman-ui](https://github.com/ZAODEVZ/thezao.com-iman-ui)**<br>⭐ 0 | No description<br><sub>HTML · updated 2026-10-12</sub> | <sub>ZAO repo</sub> |
| **[ZAODEVZ/ZAOartizen](https://github.com/ZAODEVZ/ZAOartizen)**<br>⭐ 0 | zartizen<br><sub>TypeScript · MIT · updated 2026-10-10</sub> | <sub>research 1970 · ZAO repo</sub> |
| **[bettercallzaal/16statestreet](https://github.com/bettercallzaal/16statestreet)**<br>⭐ 0 | 16statestreet<br><sub>TypeScript · updated 2026-10-08</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/bettercallzaal-coding-hub](https://github.com/bettercallzaal/bettercallzaal-coding-hub)**<br>⭐ 0 | Personal GitHub hub aggregating all projects with embedded READMEs, filtering, and search<br><sub>TypeScript · MIT · updated 2026-10-08</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zabalbot](https://github.com/bettercallzaal/zabalbot)**<br>⭐ 0 | v<br><sub>TypeScript · MIT · updated 2026-10-08</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/SidebySidev2](https://github.com/bettercallzaal/SidebySidev2)**<br>⭐ 0 | SidebySidev2<br><sub>TypeScript · MIT · updated 2026-10-08</sub> | <sub>ZAO repo</sub> |
| **[ZAODEVZ/ZAOsribeBOT](https://github.com/ZAODEVZ/ZAOsribeBOT)**<br>⭐ 0 | ZAOsribeBOT<br><sub>TypeScript · MIT · updated 2026-10-08</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zol](https://github.com/bettercallzaal/zol)**<br>⭐ 0 | ZOL (@zolbot, FID 3338501) - the ZAO's music scout on Farcaster<br><sub>JavaScript · MIT · updated 2026-10-08</sub> | <sub>research 1085, 1086, 1091, 1616, 1621 · ZAO repo</sub> |
| **[ZAODEVZ/TheZAODEVZapp](https://github.com/ZAODEVZ/TheZAODEVZapp)**<br>⭐ 0 | No description<br><sub>TypeScript · updated 2026-10-06</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zao-doots](https://github.com/bettercallzaal/zao-doots)**<br>⭐ 0 | The ZAO on Daily Doots (r/ethereum, EVMavericks): episode notes, links, community crossposts<br><sub>HTML · MIT · updated 2026-09-28</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zoostr](https://github.com/bettercallzaal/zoostr)**<br>⭐ 0 | Zoostr - ZABAL x Boostr creator-token launch: live boost leaderboard + 50% fees to leaderboard by points. A Sparkz launch, built + marketed by ZOL.<br><sub>TypeScript · MIT · updated 2026-09-27</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/ZAONEXUS](https://github.com/bettercallzaal/ZAONEXUS)**<br>⭐ 0 | ZAONEXUS<br><sub>TypeScript · MIT · updated 2026-09-27</sub> | <sub>research 624, 856 · ZAO repo</sub> |
| **[bettercallzaal/ZAOpaperzBOT](https://github.com/bettercallzaal/ZAOpaperzBOT)**<br>⭐ 0 | ZAO Paperz - Discord FAQ bot, multi-server installable, reads live from thezao.xyz/what-is-the-zao<br><sub>TypeScript · MIT · updated 2026-09-21</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zaal-client](https://github.com/bettercallzaal/zaal-client)**<br>⭐ 0 | No description<br><sub>JavaScript · MIT · updated 2026-09-21</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/farscout](https://github.com/bettercallzaal/farscout)**<br>⭐ 0 | Free autonomous Farcaster research scout for the ZAO ecosystem<br><sub>JavaScript · MIT · updated 2026-09-21</sub> | <sub>research 774, 864 · ZAO repo</sub> |
| **[bettercallzaal/gnome-pear-club](https://github.com/bettercallzaal/gnome-pear-club)**<br>⭐ 0 | The Gnome Pear Club - a cozy, gamified home for seed savers. Check in, earn pears, grow the seed bank.<br><sub>HTML · MIT · updated 2026-09-18</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zao-claude-skills](https://github.com/bettercallzaal/zao-claude-skills)**<br>⭐ 0 | Hand-written Claude Code skills for The ZAO ecosystem - meeting capture, research, distribution, the ZAO bot fleet. Sync into ~/.claude/skills/ via bin/zao-skills-sync.<br><sub>Python · MIT · updated 2026-09-11</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/hermes-orchestrator](https://github.com/bettercallzaal/hermes-orchestrator)**<br>⭐ 3 | Supervisor framework for AI agents - classify, spawn, watch, intervene, learn. Built in public, MIT. The Hermes pattern (Claude CLI subprocess) generalised for anyone building agents that build agents.<br><sub>TypeScript · MIT · updated 2026-09-01</sub> | <sub>research 734, 735, 1027, 1126 · ZAO repo</sub> |
| **[bettercallzaal/zignite](https://github.com/bettercallzaal/zignite)**<br>⭐ 0 | ZAO research into Ignite Radio (igniteradio.xyz) - Sui's hit music station: live channels, artist discovery, on-chain tipping. Studying what they built before deciding what we build.<br><sub>MIT · updated 2026-08-27 · archived</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/CustomPDFCreator](https://github.com/bettercallzaal/CustomPDFCreator)**<br>⭐ 0 | CustomPDFCreator<br><sub>JavaScript · MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/RESUMEV1](https://github.com/bettercallzaal/RESUMEV1)**<br>⭐ 0 | RESUMEV1<br><sub>HTML · MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/ZAO-Leaderboard](https://github.com/bettercallzaal/ZAO-Leaderboard)**<br>⭐ 0 | ZAO-Leaderboard<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/ZAOFlights](https://github.com/bettercallzaal/ZAOFlights)**<br>⭐ 0 | ZAOFlights<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/bettercallzaal-strategies](https://github.com/bettercallzaal/bettercallzaal-strategies)**<br>⭐ 0 | No description<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/ethboulderjournal](https://github.com/bettercallzaal/ethboulderjournal)**<br>⭐ 0 | No description<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/ltaesnap](https://github.com/bettercallzaal/ltaesnap)**<br>⭐ 0 | ltaesnap<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/mixer](https://github.com/bettercallzaal/mixer)**<br>⭐ 0 | mixer<br><sub>MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/raycast](https://github.com/bettercallzaal/raycast)**<br>⭐ 0 | raycast<br><sub>MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/spacetovideo](https://github.com/bettercallzaal/spacetovideo)**<br>⭐ 0 | spacetovideo<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/textsplitter](https://github.com/bettercallzaal/textsplitter)**<br>⭐ 0 | No description<br><sub>JavaScript · MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/uvrintrobot](https://github.com/bettercallzaal/uvrintrobot)**<br>⭐ 0 | No description<br><sub>Python · MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/wavewarz-overlay](https://github.com/bettercallzaal/wavewarz-overlay)**<br>⭐ 0 | No description<br><sub>HTML · MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/wavewarzapp](https://github.com/bettercallzaal/wavewarzapp)**<br>⭐ 0 | WaveWarZ Live - mobile alert + spectator app for Solana music battles. Demo build.<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/wwbase](https://github.com/bettercallzaal/wwbase)**<br>⭐ 0 | WaveWarz Base — public brief. Agentic music battles on Base L2. Production-proven on Solana. Looking for a technical co-founder.<br><sub>MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zaaltimelinev1.1](https://github.com/bettercallzaal/zaaltimelinev1.1)**<br>⭐ 0 | zaaltimelinev1.1<br><sub>HTML · MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zabal-bot-archive](https://github.com/bettercallzaal/zabal-bot-archive)**<br>⭐ 0 | Archive of zabal-bot agent files - deferred for later development<br><sub>MIT · updated 2026-08-25 · archived</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zabalsnap1](https://github.com/bettercallzaal/zabalsnap1)**<br>⭐ 0 | zabalsnap1<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zai-archive](https://github.com/bettercallzaal/zai-archive)**<br>⭐ 0 | Archive of early ZAO AI experiments - each release preserves a prior build. ZAIV1/V2 were ElizaOS starters; WARZAI was a WaveWarZ AI companion bot.<br><sub>MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zao-fractal-bot-archive](https://github.com/bettercallzaal/zao-fractal-bot-archive)**<br>⭐ 0 | Archive of past ZAO Fractal Discord bot versions - each release is a prior rebuild, full source preserved. Live bot: bettercallzaal/zao-fractal-bot<br><sub>MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zaoprojects](https://github.com/bettercallzaal/zaoprojects)**<br>⭐ 0 | No description<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[ZAODEVZ/ZAOmemberz](https://github.com/ZAODEVZ/ZAOmemberz)**<br>⭐ 0 | No description<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>ZAO repo</sub> |
| **[ZAODEVZ/Zuke](https://github.com/ZAODEVZ/Zuke)**<br>⭐ 0 | Zuke<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>research 1970 · ZAO repo</sub> |
| **[bettercallzaal/zao-social](https://github.com/bettercallzaal/zao-social)**<br>⭐ 0 | The ZAO's Farcaster social client - graduating from the ZAOOS lab (stage 2 of the estate split)<br><sub>MIT · updated 2026-08-25</sub> | <sub>research 1126 · ZAO repo</sub> |
| **[bettercallzaal/zlank-snap-template](https://github.com/bettercallzaal/zlank-snap-template)**<br>⭐ 0 | Starter template for Farcaster Snaps - Hono + Vercel + @farcaster/snap. Multi-page, themed, form input + state passing + share-cast pattern. Used as the v1 wedge for Zlank, the build-a-Snap platform.<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>research 505 · ZAO repo</sub> |
| **[bettercallzaal/zlank](https://github.com/bettercallzaal/zlank)**<br>⭐ 1 | No-code Farcaster Snap builder. Stack blocks, hit Deploy, share to feed. Built on @farcaster/snap + Next.js 16.<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>research 1064 · ZAO repo</sub> |
| **[bettercallzaal/zaomusicbot](https://github.com/bettercallzaal/zaomusicbot)**<br>⭐ 1 | zaomusicbot<br><sub>JavaScript · MIT · updated 2026-08-25</sub> | <sub>research 663 · ZAO repo</sub> |
| **[bettercallzaal/zabalnewsletter](https://github.com/bettercallzaal/zabalnewsletter)**<br>⭐ 0 | zabalnewsletter<br><sub>Python · MIT · updated 2026-08-25</sub> | <sub>research 663 · ZAO repo</sub> |
| **[bettercallzaal/ZOUNZ](https://github.com/bettercallzaal/ZOUNZ)**<br>⭐ 0 | Farcaster Music Mini App — AI music generation, Audius discovery, Zora NFT minting on Base, Attention Markets on Solana<br><sub>TypeScript · MIT · updated 2026-08-25 · archived</sub> | <sub>research 663 · ZAO repo</sub> |
| **[bettercallzaal/fishbowlz](https://github.com/bettercallzaal/fishbowlz)**<br>⭐ 0 | fishbowlz<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>research 663, 1970 · ZAO repo</sub> |
| **[bettercallzaal/nouns-snap](https://github.com/bettercallzaal/nouns-snap)**<br>⭐ 0 | nouns-snap<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>research 663 · ZAO repo</sub> |
| **[bettercallzaal/duodo-snap](https://github.com/bettercallzaal/duodo-snap)**<br>⭐ 0 | duodo-snap<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>research 663 · ZAO repo</sub> |
| **[bettercallzaal/zdeepmeeting](https://github.com/bettercallzaal/zdeepmeeting)**<br>⭐ 0 | zdeepmeeting<br><sub>MIT · updated 2026-08-25</sub> | <sub>research 855 · ZAO repo</sub> |
| **[bettercallzaal/zabalsocials](https://github.com/bettercallzaal/zabalsocials)**<br>⭐ 0 | zabalsocials<br><sub>JavaScript · MIT · updated 2026-08-25</sub> | <sub>research 1621 · ZAO repo</sub> |
| **[bettercallzaal/zaoscribe](https://github.com/bettercallzaal/zaoscribe)**<br>⭐ 0 | Discord audio capture bot for the ZAO core team. Per-speaker streams -> Whisper.cpp -> Anthropic cascade extraction -> cowork-zaodevz action tracker. Doc 674 in ZAOOS.<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>research 673, 683 · ZAO repo</sub> |
| **[bettercallzaal/zao-claude-kit](https://github.com/bettercallzaal/zao-claude-kit)**<br>⭐ 0 | Vendored Claude Code skill/pattern kit, sanitized for public release<br><sub>Python · MIT · updated 2026-08-22</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zabalnewsletterbuilder](https://github.com/bettercallzaal/zabalnewsletterbuilder)**<br>⭐ 0 | The ZAO daily-3 newsletter builder: pipeline dashboard + ZAO-voice issue composer. Next.js on Vercel.<br><sub>TypeScript · MIT · updated 2026-08-20</sub> | <sub>research 958 · ZAO repo</sub> |
| **[bettercallzaal/ZAOVideoEditor](https://github.com/bettercallzaal/ZAOVideoEditor)**<br>⭐ 0 | ZAOVideoEditor<br><sub>Python · MIT · updated 2026-07-23</sub> | <sub>research 663, 837, 848 · ZAO repo</sub> |
| **[bettercallzaal/zaocowork](https://github.com/bettercallzaal/zaocowork)**<br>⭐ 0 | VPS-side autonomous research pipeline - spawns parallel Claude Code subagents, normalizes findings into Bonfire knowledge graph, commits back to ZAODEVZ/zabalgames<br><sub>JavaScript · updated 2026-07-16 · archived</sub> | <sub>ZAO repo</sub> |
| **[ZAODEVZ/theZAOZone](https://github.com/ZAODEVZ/theZAOZone)**<br>⭐ 0 | No description<br><sub>TypeScript · MIT · updated 2026-07-14</sub> | <sub>research 1064 · ZAO repo</sub> |
| **[ZAODEVZ/zlank-iman-version](https://github.com/ZAODEVZ/zlank-iman-version)**<br>⭐ 0 | No description<br><sub>TypeScript · updated 2026-07-10</sub> | <sub>ZAO repo</sub> |
| **[ZAODEVZ/ZAOpoker](https://github.com/ZAODEVZ/ZAOpoker)**<br>⭐ 0 | No description<br><sub>TypeScript · updated 2026-07-08</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/fractalbotapril2026](https://github.com/bettercallzaal/fractalbotapril2026)**<br>⭐ 0 | fractalbotapril2026<br><sub>Python · updated 2026-07-07 · archived</sub> | <sub>research 664 · ZAO repo</sub> |
| **[bettercallzaal/expo-testflight-playbook](https://github.com/bettercallzaal/expo-testflight-playbook)**<br>⭐ 0 | Expo to TestFlight in one day - field-tested playbook: EAS setup, credentials, env pitfalls, native-vs-web gotchas, fully automated build+submit<br><sub>MIT · updated 2026-07-04</sub> | <sub>research 966 · ZAO repo</sub> |
| **[ZAODEVZ/zaonexus-iman-ui](https://github.com/ZAODEVZ/zaonexus-iman-ui)**<br>⭐ 0 | No description<br><sub>TypeScript · updated 2026-07-03</sub> | <sub>ZAO repo</sub> |
| **[ZAODEVZ/WWA-Onboarding-app](https://github.com/ZAODEVZ/WWA-Onboarding-app)**<br>⭐ 0 | No description<br><sub>HTML · updated 2026-07-02</sub> | <sub>ZAO repo</sub> |
| **[ZAODEVZ/compliance-zm](https://github.com/ZAODEVZ/compliance-zm)**<br>⭐ 0 | No description<br><sub>HTML · updated 2026-07-02</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zao-101](https://github.com/bettercallzaal/zao-101)**<br>⭐ 0 | Deprecated - moved to ZAODEVZ/ZAO101 (live at 101.thezao.com)<br><sub>TypeScript · MIT · updated 2026-06-17 · archived</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zao-stock](https://github.com/bettercallzaal/zao-stock)**<br>⭐ 0 | Farcaster-native music gathering for musicians building with tech. Oct 3, Ellsworth Maine.<br><sub>TypeScript · updated 2026-06-13 · archived</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zaostock](https://github.com/bettercallzaal/zaostock)**<br>⭐ 0 | zaostock repo<br><sub>TypeScript · MIT · updated 2026-06-13 · archived</sub> | <sub>research 661, 1616 · ZAO repo</sub> |
| **[bettercallzaal/bcz-journal](https://github.com/bettercallzaal/bcz-journal)**<br>⭐ 0 | Public journal by Zaal Panthaki - building The ZAO, WaveWarZ, and ZABAL in public.<br><sub>MIT · updated 2026-05-22</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/riverside-group-demo](https://github.com/bettercallzaal/riverside-group-demo)**<br>⭐ 0 | Riverside Group LLC website demo - landscape design firm in Mount Desert, ME. Built by BetterCallZaal.<br><sub>HTML · updated 2026-05-19</sub> | <sub>research 458 · ZAO repo</sub> |
| **[bettercallzaal/imanprojects](https://github.com/bettercallzaal/imanprojects)**<br>⭐ 0 | No description<br><sub>TypeScript · updated 2026-05-14</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/farmdrop](https://github.com/bettercallzaal/farmdrop)**<br>⭐ 0 | farmdrop<br><sub>HTML · updated 2026-05-03</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/crownvics](https://github.com/bettercallzaal/crownvics)**<br>⭐ 0 | crownvics<br><sub>HTML · updated 2026-04-13</sub> | <sub>research 1970 · ZAO repo</sub> |
| **[bettercallzaal/fractalbotmarch2026](https://github.com/bettercallzaal/fractalbotmarch2026)**<br>⭐ 0 | fractalbotmarch2026<br><sub>Python · updated 2026-03-28 · archived</sub> | <sub>research 188, 703 · ZAO repo</sub> |
| **[bettercallzaal/ZAO-Video-Editor](https://github.com/bettercallzaal/ZAO-Video-Editor)**<br>⭐ 0 | ZAO Video Editor<br><sub>Python · updated 2026-03-12 · archived</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/fractalbotfeb2026](https://github.com/bettercallzaal/fractalbotfeb2026)**<br>⭐ 0 | fractalbotfeb2026 for eth boulder<br><sub>Python · updated 2026-03-03 · archived</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zski](https://github.com/bettercallzaal/zski)**<br>⭐ 0 | zski<br><sub>TypeScript · updated 2026-02-27</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/fractalbotv1old](https://github.com/bettercallzaal/fractalbotv1old)**<br>⭐ 0 | No description<br><sub>Python · MIT · updated 2025-12-15 · archived</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/cedartide](https://github.com/bettercallzaal/cedartide)**<br>⭐ 0 | No description<br><sub>TypeScript · updated 2025-11-26 · archived</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/fractalbotnov2025](https://github.com/bettercallzaal/fractalbotnov2025)**<br>⭐ 0 | fractalbotnov2025<br><sub>Python · MIT · updated 2025-11-25 · archived</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/Viz1](https://github.com/bettercallzaal/Viz1)**<br>⭐ 0 | Viz1<br><sub>Python · MIT · updated 2025-10-05</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/Newsletterbot1](https://github.com/bettercallzaal/Newsletterbot1)**<br>⭐ 0 | Newsletterbot1<br><sub>Python · updated 2025-10-01 · archived</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/WARZAI](https://github.com/bettercallzaal/WARZAI)**<br>⭐ 0 | WARZAI<br><sub>TypeScript · MIT · updated 2025-09-10 · archived</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/Firsttimehomebuyers-guide](https://github.com/bettercallzaal/Firsttimehomebuyers-guide)**<br>⭐ 0 | Firsttime homebuyers guide<br><sub>updated 2025-08-26</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/ZAIV2](https://github.com/bettercallzaal/ZAIV2)**<br>⭐ 0 | ZAIV2<br><sub>JavaScript · updated 2025-07-07 · archived</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/ZAIV1](https://github.com/bettercallzaal/ZAIV1)**<br>⭐ 0 | ZAIV1<br><sub>TypeScript · updated 2025-07-04 · archived</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/fractalbotV3June2025](https://github.com/bettercallzaal/fractalbotV3June2025)**<br>⭐ 0 | fractalbotV3June2025<br><sub>Python · MIT · updated 2025-06-09 · archived</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/ZAO-FRACTAL-BOTV2](https://github.com/bettercallzaal/ZAO-FRACTAL-BOTV2)**<br>⭐ 0 | ZAO-FRACTAL-BOTV2<br><sub>Python · updated 2025-05-27 · archived</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/zaloraV1](https://github.com/bettercallzaal/zaloraV1)**<br>⭐ 0 | zaloraV1<br><sub>TypeScript · MIT · updated 2025-03-20</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/newsletter-bot-1](https://github.com/bettercallzaal/newsletter-bot-1)**<br>⭐ 0 | newsletter-bot-1<br><sub>TypeScript · MIT · updated 2025-03-12 · archived</sub> | <sub>ZAO repo</sub> |
| **[bettercallzaal/Agent2](https://github.com/bettercallzaal/Agent2)**<br>⭐ 0 | Testing framework for ai agent 2<br><sub>TypeScript · MIT · updated 2025-01-15</sub> | <sub>ZAO repo</sub> |

## 🗂️ By area

<sub>Area comes from the research topic the repo was filed under. Most stars first.</sub>

<details><summary><b>Dev workflows and coding agents</b> · 425</summary>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x)**<br>⭐ 562k | Master programming by recreating your favorite technologies from scratch.<br><sub>Markdown · updated 2026-11-08</sub> | <sub>research 1103</sub> |
| **[public-apis/public-apis](https://github.com/public-apis/public-apis)**<br>⭐ 498k | A collective list of free APIs<br><sub>Python · MIT · updated 2026-11-11</sub> | <sub>research 092, 1103</sub> |
| **[nilbuild/developer-roadmap](https://github.com/nilbuild/developer-roadmap)**<br>⭐ 372k | Interactive roadmaps, guides and other educational content to help developers grow in their careers.<br><sub>TypeScript · updated 2026-11-12</sub> | <sub>research 1103</sub> |
| **[mattpocock/skills](https://github.com/mattpocock/skills)**<br>⭐ 323k | Skills for Real Engineers. Straight from my .agents directory.<br><sub>Shell · MIT · updated 2026-11-12</sub> | <sub>research 238, 507, 539, 574, 2460</sub> |
| **[obra/superpowers](https://github.com/obra/superpowers)**<br>⭐ 317k | An agentic skills framework & software development methodology that works.<br><sub>Shell · MIT · updated 2026-11-03</sub> | <sub>research 054, 429, 1966 · inbox x1</sub> |
| **[affaan-m/ECC](https://github.com/affaan-m/ECC)**<br>⭐ 302k | The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.<br><sub>JavaScript · MIT · updated 2026-11-09</sub> | <sub>research 441, 729, 1955</sub> |
| **[practical-tutorials/project-based-learning](https://github.com/practical-tutorials/project-based-learning)**<br>⭐ 290k | Curated list of project-based tutorials<br><sub>Python · MIT · updated 2026-11-09</sub> | <sub>research 1103</sub> |
| **[deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)**<br>⭐ 280k | DeepSeek Harness: Everything is a Plugin.<br><sub>TypeScript · MIT · updated 2026-11-11</sub> | <sub>research 2452</sub> |
| **[trimstray/the-book-of-secret-knowledge](https://github.com/trimstray/the-book-of-secret-knowledge)**<br>⭐ 258k | A collection of inspiring lists, manuals, cheatsheets, blogs, hacks, one-liners, cli/web tools and more.<br><sub>MIT · updated 2024-11-19</sub> | <sub>research 1992</sub> |
| **[ossu/computer-science](https://github.com/ossu/computer-science)**<br>⭐ 211k | 🎓 Path to a free self-taught education in Computer Science!<br><sub>HTML · MIT · updated 2026-11-09</sub> | <sub>research 1103</sub> |
| **[n8n-io/n8n](https://github.com/n8n-io/n8n)**<br>⭐ 210k | Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code, self-host or cloud, 400+ integrations.<br><sub>TypeScript · updated 2026-11-12</sub> | <sub>research 239, 1002, 1005, 2251</sub> |
| **[yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp)**<br>⭐ 207k | A feature-rich command-line audio/video downloader<br><sub>Python · Unlicense · updated 2026-11-04</sub> | <sub>research 490, 569, 820, 837, 2435</sub> |
| **[anthropics/skills](https://github.com/anthropics/skills)**<br>⭐ 194k | Public repository for Agent Skills<br><sub>Python · updated 2026-11-06</sub> | <sub>research 164, 673 · inbox x1</sub> |
| **[DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)**<br>⭐ 190k | Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.<br><sub>JavaScript · MIT · updated 2026-10-29</sub> | <sub>research 1955, 2081</sub> |
| **[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)**<br>⭐ 168k | A complete AI agency at your fingertips - From frontend wizards to Reddit community ninjas, from whimsy injectors to reality checkers. Each agent is a specialized expert with personality, processes, and proven deliverables.<br><sub>Shell · MIT · updated 2026-11-09</sub> | <sub>research 301, 1987</sub> |
| **[farion1231/cc-switch](https://github.com/farion1231/cc-switch)**<br>⭐ 154k | A cross-platform desktop All-in-One assistant for Claude Code, Codex, OpenCode,DeepSeek Harness and more. Only official website: ccswitch.io<br><sub>Rust · MIT · updated 2026-11-12</sub> | <sub>research 1955</sub> |
| **[nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)**<br>⭐ 148k | An AI skill that provides design intelligence for building professional UI/UX across multiple platforms.<br><sub>Python · MIT · updated 2026-11-10</sub> | <sub>research 1955</sub> |
| **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**<br>⭐ 147k | Turn any codebase, with its docs, SQL schemas, configs, and PDFs, into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex, and Gemini CLI: local deterministic AST parsing, every edge explained, no vector store.<br><sub>Python · Apache-2.0 · updated 2026-11-11</sub> | <sub>research 297, 309</sub> |
| **[vercel/next.js](https://github.com/vercel/next.js)**<br>⭐ 143k | The React Framework<br><sub>JavaScript · MIT · updated 2026-11-12</sub> | <sub>research 367, 758a</sub> |
| **[yangshun/tech-interview-handbook](https://github.com/yangshun/tech-interview-handbook)**<br>⭐ 143k | Curated coding interview preparation materials for busy software engineers<br><sub>TypeScript · MIT · updated 2026-08-07</sub> | <sub>research 1103</sub> |
| **[openai/codex](https://github.com/openai/codex)**<br>⭐ 135k | Lightweight coding agent that runs in your terminal<br><sub>Rust · Apache-2.0 · updated 2026-11-12</sub> | <sub>research 487, 618, 1052, 1987, 1992</sub> |
| **[ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)**<br>⭐ 134k | LLM inference in C/C++<br><sub>C++ · MIT · updated 2026-11-12</sub> | <sub>research 2422</sub> |
| **[VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)**<br>⭐ 127k | A collection of DESIGN.md files analysis by popular brand design systems. Drop one into your project and let coding agents generate a matching UI.<br><sub>MIT · updated 2026-10-28</sub> | <sub>research 282</sub> |
| **[stablyai/orca](https://github.com/stablyai/orca)**<br>⭐ 123k | Orca lets you run a fleet of coding agents (e.g. Claude Code, Codex) with your own subscription. Available on desktop, mobile and remote runtime.<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 1987, 1992, 2405, 2423, 2453</sub> |
| **[earendil-works/pi](https://github.com/earendil-works/pi)**<br>⭐ 122k | AI agent toolkit: unified LLM API, agent loop, TUI, coding agent CLI<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 528</sub> |

<sub>400 more in this area on [the site](https://zaodevz.github.io/zaowire/), filter by area.</sub>

</details>

<details><summary><b>AI agents and bots</b> · 281</summary>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[openclaw/openclaw](https://github.com/openclaw/openclaw)**<br>⭐ 394k | The AI that really does things. Any OS. Any Platform. The lobster way. 🦞<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 071, 234, 236, 239, 245, 339 +3</sub> |
| **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**<br>⭐ 263k | The agent that grows with you<br><sub>Python · MIT · updated 2026-11-12</sub> | <sub>research 364, 495, 632, 875, 2435</sub> |
| **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)**<br>⭐ 201k | Supercharge your AI agents with data from the web and beyond. Building the library for superintelligence. 🔥<br><sub>TypeScript · AGPL-3.0 · updated 2026-11-12</sub> | <sub>research 2435</sub> |
| **[microsoft/markitdown](https://github.com/microsoft/markitdown)**<br>⭐ 195k | Python tool for converting files and office documents to Markdown.<br><sub>Python · MIT · updated 2026-11-07</sub> | <sub>research 2435</sub> |
| **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)**<br>⭐ 188k | AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools, so that you can focus on what matters.<br><sub>Python · updated 2026-11-12</sub> | <sub>research 529</sub> |
| **[open-webui/open-webui](https://github.com/open-webui/open-webui)**<br>⭐ 158k | User-friendly AI Interface (Supports Ollama, OpenAI API, ...)<br><sub>Svelte · updated 2026-11-12</sub> | <sub>research 567, 568</sub> |
| **[anthropics/claude-code](https://github.com/anthropics/claude-code)**<br>⭐ 155k | Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows - all through natural language commands.<br><sub>TypeScript · updated 2026-11-11</sub> | <sub>research 071, 165, 487, 497, 652, 671 +1</sub> |
| **[Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI)**<br>⭐ 146k | The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface. The fastest local inference engine in the world.<br><sub>Python · GPL-3.0 · updated 2026-11-12</sub> | <sub>research 247, 508, 1234</sub> |
| **[garrytan/gstack](https://github.com/garrytan/gstack)**<br>⭐ 141k | Use Garry Tan's exact Claude Code setup: 23 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 089, 090, 239</sub> |
| **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)**<br>⭐ 122k | TradingAgents: Multi-Agents LLM Financial Trading Framework<br><sub>Python · Apache-2.0 · updated 2026-11-04</sub> | <sub>research 602, 603, 604</sub> |
| **[browser-use/browser-use](https://github.com/browser-use/browser-use)**<br>⭐ 121k | Open-source Python library for AI browser agents, plus Browser Use Cloud: stealth browsers and a hosted agent API.<br><sub>Python · MIT · updated 2026-11-12</sub> | <sub>research 605 · inbox x1</sub> |
| **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)**<br>⭐ 113k | The open-source app everyone uses to manage agents at work<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 071, 089, 202, 205, 207, 208</sub> |
| **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)**<br>⭐ 93k | 🙌 OpenHands: AI-Driven Development<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 467, 529, 531, 541, 699d</sub> |
| **[modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)**<br>⭐ 92k | Model Context Protocol Reference Servers<br><sub>TypeScript · updated 2026-11-12</sub> | <sub>research 604, 668</sub> |
| **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)**<br>⭐ 85k | An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours.<br><sub>Python · MIT · updated 2026-11-12</sub> | <sub>research 239, 1992</sub> |
| **[mem0ai/mem0](https://github.com/mem0ai/mem0)**<br>⭐ 69k | The Memory Layer for AI Agents - Drop-in memory infrastructure for AI agents and apps. Context that persists. Built for production.<br><sub>Python · Apache-2.0 · updated 2026-11-06</sub> | <sub>research 464, 568, 604, 620, 699a, 775</sub> |
| **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)**<br>⭐ 68k | Stop renting your intelligence. Own it with AnythingLLM. Everything you need for a powerful local-first agent experience<br><sub>JavaScript · MIT · updated 2026-11-12</sub> | <sub>research 567, 568</sub> |
| **[BerriAI/litellm](https://github.com/BerriAI/litellm)**<br>⭐ 63k | The fastest, litest AI Gateway. Rust core with Python SDK. Call 100+ LLM APIs in OpenAI (or native) format with cost tracking, guardrails, load balancing, and logging [Bedrock, Azure, OpenAI, Anthropic, OpenAI, VertexAI, vLLM, Nvidia NIM]<br><sub>Python · updated 2026-11-12</sub> | <sub>research 567</sub> |
| **[microsoft/autogen](https://github.com/microsoft/autogen)**<br>⭐ 62k | A programming framework for agentic AI<br><sub>Python · CC-BY-4.0 · updated 2026-11-12</sub> | <sub>research 523</sub> |
| **[crewAIInc/crewAI](https://github.com/crewAIInc/crewAI)**<br>⭐ 61k | Framework for orchestrating role-playing, autonomous AI agents. By fostering collaborative intelligence, CrewAI empowers agents to work together seamlessly, tackling complex tasks.<br><sub>Python · MIT · updated 2026-11-12</sub> | <sub>research 227</sub> |
| **[vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)**<br>⭐ 61k | Hindsight: Agent Memory That Learns<br><sub>Python · MIT · updated 2026-11-12</sub> | <sub>research 026</sub> |
| **[ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp)**<br>⭐ 55k | Port of OpenAI's Whisper model in C/C++<br><sub>C++ · MIT · updated 2026-11-10</sub> | <sub>research 327, 674, 709</sub> |
| **[VoltAgent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills)**<br>⭐ 54k | The awesome collection of OpenClaw skills. 5,400+ skills filtered and categorized from the official OpenClaw Skills Registry.🦞<br><sub>MIT · updated 2026-10-30</sub> | <sub>research 236</sub> |
| **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)**<br>⭐ 53k | Your AI workspace for models, agents, and productivity.<br><sub>TypeScript · AGPL-3.0 · updated 2026-11-12</sub> | <sub>research 568</sub> |
| **[apple/container](https://github.com/apple/container)**<br>⭐ 51k | A tool for creating and running Linux containers using lightweight virtual machines on a Mac. It is written in Swift, and optimized for Apple silicon.<br><sub>Swift · Apache-2.0 · updated 2026-11-12</sub> | <sub>research 735</sub> |

<sub>256 more in this area on [the site](https://zaodevz.github.io/zaowire/), filter by area.</sub>

</details>

<details><summary><b>Music and audio</b> · 142</summary>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[RVC-Boss/GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS)**<br>⭐ 65k | 1 min voice data can also be used to train a good TTS model! (few shot voice cloning)<br><sub>Python · MIT · updated 2026-11-11</sub> | <sub>research 328, 329</sub> |
| **[coqui-ai/TTS](https://github.com/coqui-ai/TTS)**<br>⭐ 46k | 🐸💬 - a deep learning toolkit for Text-to-Speech, battle-tested in research and production<br><sub>Python · MPL-2.0 · updated 2024-08-16</sub> | <sub>research 329</sub> |
| **[suno-ai/bark](https://github.com/suno-ai/bark)**<br>⭐ 39k | 🔊 Text-Prompted Generative Audio Model<br><sub>Jupyter Notebook · MIT · updated 2024-08-19</sub> | <sub>research 329</sub> |
| **[RVC-Project/Retrieval-based-Voice-Conversion-WebUI](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI)**<br>⭐ 39k | Easily train a good VC model with voice data <= 10 mins!<br><sub>Python · MIT · updated 2026-08-04</sub> | <sub>research 328</sub> |
| **[myshell-ai/OpenVoice](https://github.com/myshell-ai/OpenVoice)**<br>⭐ 38k | Instant voice cloning by MIT and MyShell. Audio foundation model.<br><sub>Python · MIT · updated 2025-04-19</sub> | <sub>research 329</sub> |
| **[fishaudio/fish-speech](https://github.com/fishaudio/fish-speech)**<br>⭐ 34k | SOTA Open Source TTS<br><sub>Python · updated 2026-11-12</sub> | <sub>research 329</sub> |
| **[svc-develop-team/so-vits-svc](https://github.com/svc-develop-team/so-vits-svc)**<br>⭐ 28k | SoftVC VITS Singing Voice Conversion<br><sub>Python · AGPL-3.0 · updated 2023-11-11 · archived</sub> | <sub>research 322, 328</sub> |
| **[resemble-ai/chatterbox](https://github.com/resemble-ai/chatterbox)**<br>⭐ 28k | SoTA open-source TTS<br><sub>Python · MIT · updated 2026-11-04</sub> | <sub>research 329</sub> |
| **[Anjok07/ultimatevocalremovergui](https://github.com/Anjok07/ultimatevocalremovergui)**<br>⭐ 27k | GUI for a Vocal Remover that uses Deep Neural Networks.<br><sub>Python · MIT · updated 2026-10-06</sub> | <sub>research 330</sub> |
| **[SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper)**<br>⭐ 27k | Faster Whisper transcription with CTranslate2<br><sub>Python · MIT · updated 2026-11-12</sub> | <sub>research 327</sub> |
| **[goldfire/howler.js](https://github.com/goldfire/howler.js)**<br>⭐ 25k | Javascript audio library for the modern web.<br><sub>JavaScript · MIT · updated 2025-11-23</sub> | <sub>research 335</sub> |
| **[facebookresearch/audiocraft](https://github.com/facebookresearch/audiocraft)**<br>⭐ 24k | Audiocraft is a library for audio processing and generation with deep learning. It features the state-of-the-art EnCodec audio compressor / tokenizer, along with MusicGen, a simple and controllable music generation LM with textual and melodic conditioning.<br><sub>Jupyter Notebook · MIT · updated 2026-03-03</sub> | <sub>research 328</sub> |
| **[chidiwilliams/buzz](https://github.com/chidiwilliams/buzz)**<br>⭐ 23k | Buzz transcribes and translates audio offline on your personal computer. Powered by OpenAI's Whisper.<br><sub>Python · MIT · updated 2026-11-09</sub> | <sub>research 327</sub> |
| **[w-okada/voice-changer](https://github.com/w-okada/voice-changer)**<br>⭐ 21k | リアルタイムボイスチェンジャー Realtime Voice Changer<br><sub>Python · updated 2026-09-26</sub> | <sub>research 335</sub> |
| **[nari-labs/dia](https://github.com/nari-labs/dia)**<br>⭐ 19k | A TTS model capable of generating ultra-realistic dialogue in one pass.<br><sub>Python · Apache-2.0 · updated 2025-11-19</sub> | <sub>research 329</sub> |
| **[koel/koel](https://github.com/koel/koel)**<br>⭐ 17k | Music streaming solution that works.<br><sub>PHP · MIT · updated 2026-11-12</sub> | <sub>research 167</sub> |
| **[SWivid/F5-TTS](https://github.com/SWivid/F5-TTS)**<br>⭐ 16k | Official code for "F5-TTS: A Fairytaler that Fakes Fluent and Faithful Speech with Flow Matching"<br><sub>Python · MIT · updated 2026-11-03</sub> | <sub>research 329</sub> |
| **[Tonejs/Tone.js](https://github.com/Tonejs/Tone.js)**<br>⭐ 15k | A Web Audio framework for making interactive music in the browser.<br><sub>TypeScript · MIT · updated 2026-11-01</sub> | <sub>research 335</sub> |
| **[neonbjb/tortoise-tts](https://github.com/neonbjb/tortoise-tts)**<br>⭐ 15k | A multi-voice TTS system trained with an emphasis on quality<br><sub>Jupyter Notebook · Apache-2.0 · updated 2024-11-19</sub> | <sub>research 329</sub> |
| **[SesameAILabs/csm](https://github.com/SesameAILabs/csm)**<br>⭐ 15k | A Conversational Speech Generation Model<br><sub>Python · Apache-2.0 · updated 2025-05-27</sub> | <sub>research 329</sub> |
| **[ace-step/ACE-Step-1.5](https://github.com/ace-step/ACE-Step-1.5)**<br>⭐ 15k | The most powerful local music generation model that outperforms almost all commercial alternatives, supporting Mac, AMD, Intel, and CUDA devices.<br><sub>Python · MIT · updated 2026-11-08</sub> | <sub>research 247, 251, 313, 319, 322, 324 +6</sub> |
| **[multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE)**<br>⭐ 13k | YuE2: frontier music generation with symbolic planning, zero-shot covers, and agentic music editing.<br><sub>Python · Apache-2.0 · updated 2026-11-01</sub> | <sub>research 328, 1925, 1943</sub> |
| **[rhasspy/piper](https://github.com/rhasspy/piper)**<br>⭐ 11k | A fast, local neural text to speech system<br><sub>C++ · MIT · updated 2025-08-26 · archived</sub> | <sub>research 329</sub> |
| **[katspaugh/wavesurfer.js](https://github.com/katspaugh/wavesurfer.js)**<br>⭐ 10k | Audio waveform player<br><sub>TypeScript · BSD-3-Clause · updated 2026-11-12</sub> | <sub>research 167, 335</sub> |
| **[facebookresearch/demucs](https://github.com/facebookresearch/demucs)**<br>⭐ 10k | Code for the paper Hybrid Spectrogram and Waveform Source Separation<br><sub>Python · MIT · updated 2024-04-24 · archived</sub> | <sub>research 261, 329, 330</sub> |

<sub>117 more in this area on [the site](https://zaodevz.github.io/zaowire/), filter by area.</sub>

</details>

<details><summary><b>Technology and infrastructure</b> · 94</summary>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo)**<br>⭐ 28k | Universal SEO skill for Claude Code. 26 sub-skills + 19 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, agent readiness (Lighthouse Agentic Browsing, WebMCP, llms.txt), backlinks, local SEO, e-commerce, international SEO, Google APIs, and PDF/Excel reporting. 9 optional extensions for live SEO data.<br><sub>Python · MIT · updated 2026-11-11</sub> | <sub>research 286</sub> |
| **[bluenviron/mediamtx](https://github.com/bluenviron/mediamtx)**<br>⭐ 21k | Ready-to-use Media-over-QUIC / SRT / WebRTC / RTSP / RTMP / LL-HLS / MPEG-TS / RTP live media server and media proxy that allows to read, publish, proxy, record and playback real-time video and audio streams.<br><sub>Go · MIT · updated 2026-11-12</sub> | <sub>research 1128</sub> |
| **[pion/webrtc](https://github.com/pion/webrtc)**<br>⭐ 17k | Pure Go implementation of the WebRTC API<br><sub>Go · MIT · updated 2026-11-12</sub> | <sub>research 741, 741a</sub> |
| **[Comfy-Org/ComfyUI-Manager](https://github.com/Comfy-Org/ComfyUI-Manager)**<br>⭐ 17k | ComfyUI-Manager is an extension designed to enhance the usability of ComfyUI. It offers management functions to install, remove, disable, and enable various custom nodes of ComfyUI. Furthermore, this extension provides a hub feature and convenience functions to access a wide range of information within ComfyUI.<br><sub>Python · GPL-3.0 · updated 2026-11-12</sub> | <sub>research 1234</sub> |
| **[cloudflare/cloudflared](https://github.com/cloudflare/cloudflared)**<br>⭐ 17k | Cloudflare Tunnel client<br><sub>Go · Apache-2.0 · updated 2026-11-12</sub> | <sub>research 417</sub> |
| **[livekit/agents](https://github.com/livekit/agents)**<br>⭐ 15k | A framework for building realtime voice AI agents 🤖🎙️📹<br><sub>Python · Apache-2.0 · updated 2026-11-12</sub> | <sub>research 290, 605, 741, 741b, 741c, 741d</sub> |
| **[tsl0922/ttyd](https://github.com/tsl0922/ttyd)**<br>⭐ 13k | Share your terminal over the web<br><sub>C · MIT · updated 2026-08-12</sub> | <sub>research 428, 430</sub> |
| **[ostris/ai-toolkit](https://github.com/ostris/ai-toolkit)**<br>⭐ 13k | The ultimate training toolkit for finetuning diffusion models<br><sub>Python · MIT · updated 2026-11-10</sub> | <sub>research 1234</sub> |
| **[owncast/owncast](https://github.com/owncast/owncast)**<br>⭐ 12k | Take control over your live stream video by running it yourself. Streaming + chat out of the box.<br><sub>Go · MIT · updated 2026-11-11</sub> | <sub>research 1128, 1773, 2428</sub> |
| **[butlerx/wetty](https://github.com/butlerx/wetty)**<br>⭐ 5.5k | Terminal in browser over http/https. (Ajaxterm/Anyterm alternative, but much better)<br><sub>TypeScript · MIT · updated 2026-11-06</sub> | <sub>research 430</sub> |
| **[datarhei/restreamer](https://github.com/datarhei/restreamer)**<br>⭐ 5.2k | The Restreamer is a complete streaming server solution for self-hosting. It has a visually appealing user interface and no ongoing license costs. Upload your live stream to YouTube, Twitch, Facebook, Vimeo, or other streaming solutions like Wowza. Receive video data from OBS and publish it with the RTMP and SRT server.<br><sub>HTML · Apache-2.0 · updated 2026-05-22</sub> | <sub>research 1773</sub> |
| **[obsproject/obs-websocket](https://github.com/obsproject/obs-websocket)**<br>⭐ 4.4k | Remote-control of OBS Studio through WebSocket<br><sub>C++ · GPL-2.0 · updated 2026-10-08</sub> | <sub>research 215</sub> |
| **[microfeed/microfeed](https://github.com/microfeed/microfeed)**<br>⭐ 4.1k | an agentic cms self-hosted on cloudflare, for podcasts, blogs, photos, videos, documents, and curated urls.<br><sub>TypeScript · AGPL-3.0 · updated 2026-10-07</sub> | <sub>research 599</sub> |
| **[net-merge/net-merge](https://github.com/net-merge/net-merge)**<br>⭐ 3.1k | Use all your internet connections at once on Windows, macOS, Linux and Android: per-connection load balancing over Wi-Fi, Ethernet, mobile data and phone tethers<br><sub>Go · MIT · updated 2026-11-09</sub> | <sub>research 1933</sub> |
| **[pmndrs/react-three-next](https://github.com/pmndrs/react-three-next)**<br>⭐ 2.9k | React Three Fiber, Threejs, Nextjs starter<br><sub>JavaScript · MIT · updated 2024-06-21</sub> | <sub>research 313</sub> |
| **[supabase/supabase-py](https://github.com/supabase/supabase-py)**<br>⭐ 2.6k | Python Client for Supabase. Query Postgres from Flask, Django, FastAPI. Python user authentication, security policies, edge functions, file storage, and realtime data streaming.<br><sub>Python · MIT · updated 2026-11-12</sub> | <sub>research 116</sub> |
| **[loomio/loomio](https://github.com/loomio/loomio)**<br>⭐ 2.6k | Loomio is a collaborative decision-making tool<br><sub>Ruby · AGPL-3.0 · updated 2026-11-12</sub> | <sub>research 503</sub> |
| **[wkh237/react-native-fetch-blob](https://github.com/wkh237/react-native-fetch-blob)**<br>⭐ 2.6k | A project committed to making file access and data transfer easier, efficient for React Native developers.<br><sub>JavaScript · MIT · updated 2022-07-25 · archived</sub> | <sub>research 966</sub> |
| **[sorenisanerd/gotty](https://github.com/sorenisanerd/gotty)**<br>⭐ 2.6k | Share your terminal as a web application<br><sub>TypeScript · MIT · updated 2026-11-10</sub> | <sub>research 430</sub> |
| **[pion/turn](https://github.com/pion/turn)**<br>⭐ 2.3k | Pion TURN, an API for building TURN clients and servers<br><sub>Go · MIT · updated 2026-11-12</sub> | <sub>research 741a</sub> |
| **[safe-fndn/safe-smart-account](https://github.com/safe-fndn/safe-smart-account)**<br>⭐ 2.2k | Safe allows secure management of blockchain assets.<br><sub>TypeScript · LGPL-3.0 · updated 2026-10-30</sub> | <sub>research 2465</sub> |
| **[succinctlabs/sp1](https://github.com/succinctlabs/sp1)**<br>⭐ 1.8k | SP1 is a zero‑knowledge virtual machine that proves the correct execution of programs compiled for the RISC-V architecture.<br><sub>Rust · Apache-2.0 · updated 2026-11-05</sub> | <sub>research 2238</sub> |
| **[M3-org/awesome-metaverse](https://github.com/M3-org/awesome-metaverse)**<br>⭐ 1.7k | Awesome metaverse projects<br><sub>updated 2024-09-03</sub> | <sub>research 313</sub> |
| **[google/schema-dts](https://github.com/google/schema-dts)**<br>⭐ 1.3k | JSON-LD TypeScript types for Schema.org vocabulary<br><sub>TypeScript · Apache-2.0 · updated 2026-11-01</sub> | <sub>research 286</sub> |
| **[meta-pytorch/torchcodec](https://github.com/meta-pytorch/torchcodec)**<br>⭐ 1.2k | Media decoding and encoding for PyTorch: videos, images, and audio, on CPU and GPU.<br><sub>Python · BSD-3-Clause · updated 2026-11-10</sub> | <sub>research 1029</sub> |

<sub>69 more in this area on [the site](https://zaodevz.github.io/zaowire/), filter by area.</sub>

</details>

<details><summary><b>Business, tokens and money</b> · 72</summary>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[twentyhq/twenty](https://github.com/twentyhq/twenty)**<br>⭐ 61k | The open alternative to Salesforce, designed for AI.<br><sub>TypeScript · updated 2026-11-12</sub> | <sub>research 2431</sub> |
| **[calcom/cal.diy](https://github.com/calcom/cal.diy)**<br>⭐ 50k | Scheduling infrastructure for absolutely everyone.<br><sub>TypeScript · MIT · updated 2026-11-11</sub> | <sub>research 225, 477, 1948</sub> |
| **[OpenZeppelin/openzeppelin-contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)**<br>⭐ 27k | OpenZeppelin Contracts is a library for secure smart contract development.<br><sub>Solidity · MIT · updated 2026-11-10</sub> | <sub>research 794, 1989</sub> |
| **[monicahq/monica](https://github.com/monicahq/monica)**<br>⭐ 26k | Personal CRM. Remember everything about your friends, family and business relationships.<br><sub>PHP · AGPL-3.0 · updated 2026-10-28</sub> | <sub>research 772</sub> |
| **[livekit/livekit](https://github.com/livekit/livekit)**<br>⭐ 22k | End-to-end realtime stack for connecting humans and AI<br><sub>Go · Apache-2.0 · updated 2026-11-12</sub> | <sub>research 299, 741, 2428</sub> |
| **[vercel/vercel](https://github.com/vercel/vercel)**<br>⭐ 17k | Develop. Preview. Ship.<br><sub>TypeScript · Apache-2.0 · updated 2026-11-11</sub> | <sub>research 2058</sub> |
| **[trycompai/crm](https://github.com/trycompai/crm)**<br>⭐ 12k | Comp AI CRM is an open source, CRM designed for AI agents. Agentic-first CRM.<br><sub>TypeScript · MIT · updated 2026-11-01</sub> | <sub>research 2223</sub> |
| **[raycast/extensions](https://github.com/raycast/extensions)**<br>⭐ 7.8k | Everything you need to extend Raycast.<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 2251</sub> |
| **[x402-foundation/x402](https://github.com/x402-foundation/x402)**<br>⭐ 6.8k | A payments protocol for the internet. Built on HTTP.<br><sub>TypeScript · Apache-2.0 · updated 2026-11-12</sub> | <sub>research 2220</sub> |
| **[schemaorg/schemaorg](https://github.com/schemaorg/schemaorg)**<br>⭐ 6.3k | Schema.org - schemas and supporting software<br><sub>HTML · Apache-2.0 · updated 2026-11-12</sub> | <sub>research 2184</sub> |
| **[vercel/eve](https://github.com/vercel/eve)**<br>⭐ 5.9k | The Open Framework for Building Agents<br><sub>TypeScript · Apache-2.0 · updated 2026-11-12</sub> | <sub>research 2223</sub> |
| **[obsidianmd/obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin)**<br>⭐ 4.7k | Template for Obsidian community plugins with build configuration and development best practices.<br><sub>TypeScript · 0BSD · updated 2026-08-02</sub> | <sub>research 2251</sub> |
| **[Jon-Becker/prediction-market-analysis](https://github.com/Jon-Becker/prediction-market-analysis)**<br>⭐ 3.9k | A framework for collecting and analyzing prediction market data, including the largest publicly available dataset of Polymarket and Kalshi market and trade data.<br><sub>Python · MIT · updated 2026-10-29</sub> | <sub>research 244</sub> |
| **[Polymarket/agents](https://github.com/Polymarket/agents)**<br>⭐ 3.8k | Trade autonomously on Polymarket using AI Agents<br><sub>Python · MIT · updated 2024-11-05 · archived</sub> | <sub>research 244, 410, 2238</sub> |
| **[cabinetai/cabinet](https://github.com/cabinetai/cabinet)**<br>⭐ 2.9k | AI-first knowledge base and startup OS<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>research 2118</sub> |
| **[warproxxx/poly_data](https://github.com/warproxxx/poly_data)**<br>⭐ 2.4k | Polymarket Data Retriever that fetches, processes, and structures Polymarket data including markets, order events and trades.<br><sub>Python · GPL-3.0 · updated 2026-09-08</sub> | <sub>research 244, 350</sub> |
| **[pmxt-dev/pmxt](https://github.com/pmxt-dev/pmxt)**<br>⭐ 2.2k | CCXT for prediction markets. PMXT is a unified API for trading on Polymarket, Kalshi, and more.<br><sub>TypeScript · MIT · updated 2026-09-30</sub> | <sub>research 244</sub> |
| **[stripe/ai](https://github.com/stripe/ai)**<br>⭐ 2.1k | One-stop shop for building AI-powered products and businesses with Stripe.<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 498</sub> |
| **[warproxxx/poly-maker](https://github.com/warproxxx/poly-maker)**<br>⭐ 1.5k | An automated market making bot for the Polymarket Prediction Market that provides liquidity by maintaining orders on both sides of the order book with customizable parameters<br><sub>Python · MIT · updated 2026-07-09</sub> | <sub>research 244</sub> |
| **[MiroShark/MiroShark](https://github.com/MiroShark/MiroShark)**<br>⭐ 1.5k | Simulate anything, for $1 & less than 10 min - Universal Swarm Intelligence Engine<br><sub>Python · AGPL-3.0 · updated 2026-11-09</sub> | <sub>research 244</sub> |
| **[EvanZhouDev/openai-oauth](https://github.com/EvanZhouDev/openai-oauth)**<br>⭐ 1.4k | Free AI with your ChatGPT account<br><sub>TypeScript · Apache-2.0 · updated 2026-09-29</sub> | <sub>research 1052</sub> |
| **[jam-systems/jam](https://github.com/jam-systems/jam)**<br>⭐ 1.3k | 🍓 Jam is your own open source Clubhouse for mini conferences, friends, communities<br><sub>JavaScript · AGPL-3.0 · updated 2023-09-15</sub> | <sub>research 277, 299</sub> |
| **[Polymarket/py-clob-client](https://github.com/Polymarket/py-clob-client)**<br>⭐ 1.2k | Python client for the Polymarket CLOB<br><sub>Python · MIT · updated 2026-05-25 · archived</sub> | <sub>research 244</sub> |
| **[unlock-protocol/unlock](https://github.com/unlock-protocol/unlock)**<br>⭐ 887 | Ʉnlock is a protocol for memberships built on a blockchain.<br><sub>TypeScript · MIT · updated 2026-11-11</sub> | <sub>research 1039</sub> |
| **[aarora4/Awesome-Prediction-Market-Tools](https://github.com/aarora4/Awesome-Prediction-Market-Tools)**<br>⭐ 802 | A curated list of Prediction Market Tools - AI Agents, Analytics, APIs, Dashboards, Copy Trading, Alerting, Tracking and More!!<br><sub>updated 2026-10-07</sub> | <sub>research 244</sub> |

<sub>47 more in this area on [the site](https://zaodevz.github.io/zaowire/), filter by area.</sub>

</details>

<details><summary><b>Farcaster</b> · 52</summary>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[pmndrs/zustand](https://github.com/pmndrs/zustand)**<br>⭐ 59k | 🐻 Bear necessities for state management in React<br><sub>TypeScript · MIT · updated 2026-11-06</sub> | <sub>research 505</sub> |
| **[clauderic/dnd-kit](https://github.com/clauderic/dnd-kit)**<br>⭐ 18k | The modern toolkit for building drag and drop interfaces<br><sub>TypeScript · MIT · updated 2026-10-31</sub> | <sub>research 505</sub> |
| **[dip/cmdk](https://github.com/dip/cmdk)**<br>⭐ 13k | Fast, unstyled command menu React component.<br><sub>TypeScript · MIT · updated 2025-10-29</sub> | <sub>research 505</sub> |
| **[vvo/iron-session](https://github.com/vvo/iron-session)**<br>⭐ 4.2k | 🛠 Secure, stateless, and cookie-based session library for Next.js or any JavaScript framework<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 591b</sub> |
| **[vasturiano/react-force-graph](https://github.com/vasturiano/react-force-graph)**<br>⭐ 3.4k | React component for 2D, 3D, VR and AR force directed graphs<br><sub>HTML · MIT · updated 2026-09-29</sub> | <sub>research 199</sub> |
| **[farcasterxyz/protocol](https://github.com/farcasterxyz/protocol)**<br>⭐ 2.2k | Specification of the Farcaster Protocol<br><sub>updated 2026-11-09</sub> | <sub>research 306, 308, 309, 571, 587, 593 +6</sub> |
| **[coinbase/onchainkit](https://github.com/coinbase/onchainkit)**<br>⭐ 1k | React components and TypeScript utilities to help you build top-tier onchain apps.<br><sub>TypeScript · MIT · updated 2026-09-22 · archived</sub> | <sub>research 591a</sub> |
| **[charkour/zundo](https://github.com/charkour/zundo)**<br>⭐ 899 | 🍜 undo/redo middleware for zustand. <700 bytes<br><sub>TypeScript · MIT · updated 2026-01-30</sub> | <sub>research 505</sub> |
| **[Anish-Agnihotri/merkle-airdrop-starter](https://github.com/Anish-Agnihotri/merkle-airdrop-starter)**<br>⭐ 745 | Frontend, contracts, and merkle tree generator for use in quickly scaffolding ERC20 token airdrops.<br><sub>TypeScript · AGPL-3.0 · updated 2023-02-14</sub> | <sub>research 991</sub> |
| **[xmtp/xmtp-js](https://github.com/xmtp/xmtp-js)**<br>⭐ 305 | XMTP client SDKs and content types for browsers and Node, written in TypeScript<br><sub>TypeScript · updated 2026-10-30</sub> | <sub>research 074</sub> |
| **[farcasterxyz/snapchain](https://github.com/farcasterxyz/snapchain)**<br>⭐ 224 | The open-source, canonical implementation of Farcaster's Snapchain network.<br><sub>Rust · GPL-3.0 · updated 2026-11-11</sub> | <sub>research 304, 586, 587, 910</sub> |
| **[farcasterxyz/miniapps](https://github.com/farcasterxyz/miniapps)**<br>⭐ 205 | No description<br><sub>TypeScript · MIT · updated 2026-11-09</sub> | <sub>research 591d</sub> |
| **[QuilibriumNetwork/monorepo](https://github.com/QuilibriumNetwork/monorepo)**<br>⭐ 153 | Quilibrium protocol, supporting libraries, and light client<br><sub>Rust · AGPL-3.0 · updated 2026-11-12</sub> | <sub>research 314, 587, 588</sub> |
| **[farcasterxyz/frames-v2-demo](https://github.com/farcasterxyz/frames-v2-demo)**<br>⭐ 129 | Farcaster Frames v2 Demo<br><sub>TypeScript · updated 2026-10-30 · archived</sub> | <sub>research 591a</sub> |
| **[standard-crypto/farcaster-js](https://github.com/standard-crypto/farcaster-js)**<br>⭐ 122 | No description<br><sub>TypeScript · MIT · updated 2024-10-16</sub> | <sub>research 017</sub> |
| **[farcasterorg/hypersnap](https://github.com/farcasterorg/hypersnap)**<br>⭐ 74 | Snapchain, made hyperdimensional<br><sub>Rust · GPL-3.0 · updated 2026-11-12</sub> | <sub>research 304, 309, 489, 586, 587, 588 +5</sub> |
| **[farcasterxyz/auth-monorepo](https://github.com/farcasterxyz/auth-monorepo)**<br>⭐ 68 | Farcaster Auth monorepo<br><sub>TypeScript · MIT · updated 2026-11-09</sub> | <sub>research 591a</sub> |
| **[xmtp/XIPs](https://github.com/xmtp/XIPs)**<br>⭐ 51 | XMTP Improvement Proposals<br><sub>Mermaid · CC0-1.0 · updated 2026-07-09</sub> | <sub>research 074</sub> |
| **[builders-garden/base-minikit-starter](https://github.com/builders-garden/base-minikit-starter)**<br>⭐ 41 | Opinionated Farcaster MiniApp Next.js Template using Base Minikit<br><sub>TypeScript · MIT · updated 2025-05-25</sub> | <sub>research 548</sub> |
| **[metalabel/dfos](https://github.com/metalabel/dfos)**<br>⭐ 39 | Dark Forest OS identity and content protocol, reference implementations, schemas and tests<br><sub>Go · MIT · updated 2026-11-11</sub> | <sub>research 123, 2110, 2122</sub> |
| **[builders-garden/miniapp-next-template](https://github.com/builders-garden/miniapp-next-template)**<br>⭐ 27 | A template for building Next.js mini-app compatible with Farcaster and Worldcoin<br><sub>TypeScript · updated 2025-12-16</sub> | <sub>research 591a</sub> |
| **[farcasterxyz/snap](https://github.com/farcasterxyz/snap)**<br>⭐ 12 | Simple, nimble app protocol 🫰🫰🫰<br><sub>TypeScript · MIT · updated 2026-11-09</sub> | <sub>research 295, 505, 527, 534, 2471</sub> |
| **[arf0nz0/hypersnap_stuff](https://github.com/arf0nz0/hypersnap_stuff)**<br>⭐ 9 | Stuff related to hypersnap<br><sub>updated 2026-11-06</sub> | <sub>research 1951, 1970</sub> |
| **[CassOnMars/Timelock](https://github.com/CassOnMars/Timelock)**<br>⭐ 9 | No description<br><sub>C# · MIT · updated 2022-07-04</sub> | <sub>research 588</sub> |
| **[CassOnMars/TripleRatchet](https://github.com/CassOnMars/TripleRatchet)**<br>⭐ 8 | A basic example of the Triple-Ratchet algorithm<br><sub>C# · MIT · updated 2022-04-19</sub> | <sub>research 588</sub> |

<sub>27 more in this area on [the site](https://zaodevz.github.io/zaowire/), filter by area.</sub>

</details>

<details><summary><b>Governance</b> · 38</summary>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[ethereum-attestation-service/eas-contracts](https://github.com/ethereum-attestation-service/eas-contracts)**<br>⭐ 323 | Ethereum Attestation Service https://attest.org<br><sub>TypeScript · MIT · updated 2026-07-16</sub> | <sub>research 005, 2413</sub> |
| **[snapshot-labs/snapshot.js](https://github.com/snapshot-labs/snapshot.js)**<br>⭐ 243 | A TypeScript SDK for Snapshot<br><sub>TypeScript · MIT · updated 2026-10-29</sub> | <sub>research 132, 133</sub> |
| **[BuilderOSS/nouns-builder](https://github.com/BuilderOSS/nouns-builder)**<br>⭐ 108 | Nouns Builder<br><sub>TypeScript · MIT · updated 2026-11-10</sub> | <sub>research 149</sub> |
| **[avalanche-foundation/ACPs](https://github.com/avalanche-foundation/ACPs)**<br>⭐ 89 | Avalanche Community Proposals (ACPs)<br><sub>CC0-1.0 · updated 2026-11-04</sub> | <sub>research 695</sub> |
| **[metagov/daostar](https://github.com/metagov/daostar)**<br>⭐ 73 | DAOstar is the standards body of DAOs. We write technical standards and publish research for DAOs and DAO tooling.<br><sub>TypeScript · MIT · updated 2025-10-31</sub> | <sub>research 1430</sub> |
| **[openintentsframework/oif-contracts](https://github.com/openintentsframework/oif-contracts)**<br>⭐ 58 | Full-stack, modular tooling for anyone to permissionlessly add intents to a new chain<br><sub>Solidity · MIT · updated 2026-08-20</sub> | <sub>research 346</sub> |
| **[ParaState/simple-staking-smart-contract](https://github.com/ParaState/simple-staking-smart-contract)**<br>⭐ 49 | A smart contract which allows users to stake and un-stake (after a set period of time) a specified ERC20 token.<br><sub>Solidity · MIT · updated 2022-02-21</sub> | <sub>research 349</sub> |
| **[blankdotspace/space-system](https://github.com/blankdotspace/space-system)**<br>⭐ 42 | Space systems - customizable farcaster clients<br><sub>TypeScript · GPL-3.0 · updated 2026-02-09</sub> | <sub>research 346</sub> |
| **[openintentsframework/oif-solver](https://github.com/openintentsframework/oif-solver)**<br>⭐ 32 | Open-source solver implementation, tooling, and libraries to easy start filling cross-chain intents.<br><sub>Rust · MIT · updated 2026-10-21</sub> | <sub>research 346</sub> |
| **[coordinape/coordinape-protocol](https://github.com/coordinape/coordinape-protocol)**<br>⭐ 32 | 🏆 Coordinape contracts<br><sub>Python · MIT · updated 2024-05-30</sub> | <sub>research 500</sub> |
| **[voteagora/agora](https://github.com/voteagora/agora)**<br>⭐ 26 | Software to help DAOs manage their governance.<br><sub>TypeScript · MIT · updated 2023-12-02</sub> | <sub>research 111</sub> |
| **[code-423n4/2022-09-nouns-builder](https://github.com/code-423n4/2022-09-nouns-builder)**<br>⭐ 19 | No description<br><sub>HTML · MIT · updated 2023-09-13</sub> | <sub>research 149, 223</sub> |
| **[sim31/frapps](https://github.com/sim31/frapps)**<br>⭐ 5 | Index of fractal governance concepts, applications and organizations.<br><sub>HTML · GPL-3.0 · updated 2026-04-02</sub> | <sub>research 102, 105, 109, 2424</sub> |
| **[aragon/toucan-voting-plugin](https://github.com/aragon/toucan-voting-plugin)**<br>⭐ 5 | No description<br><sub>Solidity · AGPL-3.0 · updated 2025-05-22</sub> | <sub>research 695</sub> |
| **[Hats-Protocol/modules-registry](https://github.com/Hats-Protocol/modules-registry)**<br>⭐ 4 | No description<br><sub>TypeScript · updated 2025-08-04</sub> | <sub>research 075, 2413</sub> |
| **[James-Mart/eden-fractal-contract](https://github.com/James-Mart/eden-fractal-contract)**<br>⭐ 4 | No description<br><sub>C++ · MIT · updated 2023-03-27</sub> | <sub>research 184</sub> |
| **[sim31/ordao](https://github.com/sim31/ordao)**<br>⭐ 3 | Toolset for DAOs using non-transferable reputation token (Respect)<br><sub>TypeScript · GPL-3.0 · updated 2026-04-02</sub> | <sub>research 056, 058, 105, 106, 109, 184 +7</sub> |
| **[Hats-Protocol/sdk-v1-core](https://github.com/Hats-Protocol/sdk-v1-core)**<br>⭐ 3 | No description<br><sub>TypeScript · updated 2025-07-09</sub> | <sub>research 059, 075</sub> |
| **[Hats-Protocol/hats-anchor-app](https://github.com/Hats-Protocol/hats-anchor-app)**<br>⭐ 3 | Hats Anchor App<br><sub>TypeScript · MIT · updated 2026-04-14</sub> | <sub>research 059</sub> |
| **[Hats-Protocol/docs](https://github.com/Hats-Protocol/docs)**<br>⭐ 2 | User guides and developer documentation for Hats Protocol<br><sub>updated 2025-08-14</sub> | <sub>research 2413</sub> |
| **[mcmonkeyprojects/DemocracyDiscordBot](https://github.com/mcmonkeyprojects/DemocracyDiscordBot)**<br>⭐ 2 | A Discord bot that implements a private ranked choice voting system for Discord guilds.<br><sub>C# · MIT · updated 2021-03-08 · archived</sub> | <sub>research 982</sub> |
| **[Optimystics/fractalgram](https://github.com/Optimystics/fractalgram)**<br>⭐ 1 | Telegram web client tailored for participants of Eden / Fractally style DAOs.<br><sub>TypeScript · GPL-3.0 · updated 2025-05-20</sub> | <sub>research 050, 051, 056, 102, 103, 109 +1</sub> |
| **[sim31/orfrapps](https://github.com/sim31/orfrapps)**<br>⭐ 1 | Configuration and scripts for deployment and maintenance of ORDAO instances for Fractal communities.<br><sub>TypeScript · GPL-3.0 · updated 2026-04-02</sub> | <sub>research 105, 109, 285, 705, 1994</sub> |
| **[BuilderOSS/builder-template-app](https://github.com/BuilderOSS/builder-template-app)**<br>⭐ 1 | This is a template site for Nouns Builder DAOs<br><sub>TypeScript · MIT · updated 2026-08-09</sub> | <sub>research 140, 149</sub> |
| **[clawdbotatg/clawd-chronicle](https://github.com/clawdbotatg/clawd-chronicle)**<br>⭐ 1 | The complete chronicle of clawdbotatg — an autonomous AI agent building onchain. Timeline, dApps, contracts, and the full story.<br><sub>MIT · updated 2026-09-16</sub> | <sub>research 2475</sub> |

<sub>13 more in this area on [the site](https://zaodevz.github.io/zaowire/), filter by area.</sub>

</details>

<details><summary><b>games</b> · 34</summary>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[phaserjs/phaser](https://github.com/phaserjs/phaser)**<br>⭐ 41k | Phaser is a fun, free and fast 2D game framework for making HTML5 games for desktop and mobile web browsers, supporting Canvas and WebGL rendering.<br><sub>JavaScript · MIT · updated 2026-08-21</sub> | <sub>research 1993</sub> |
| **[ppy/osu](https://github.com/ppy/osu)**<br>⭐ 19k | rhythm is just a *click* away!<br><sub>C# · MIT · updated 2026-11-12</sub> | <sub>research 1993</sub> |
| **[luanti-org/luanti](https://github.com/luanti-org/luanti)**<br>⭐ 14k | Luanti (formerly Minetest) is an open source voxel game-creation platform with easy modding and game creation<br><sub>C++ · updated 2026-11-09</sub> | <sub>research 1993</sub> |
| **[TrinityCore/TrinityCore](https://github.com/TrinityCore/TrinityCore)**<br>⭐ 11k | TrinityCore Open Source MMO Framework (master = 12.1.5.70783, 3.3.5 = 3.3.5a.12340, cata classic = 4.4.2.60895)<br><sub>C++ · GPL-2.0 · updated 2026-11-11</sub> | <sub>research 1993</sub> |
| **[mozilla/BrowserQuest](https://github.com/mozilla/BrowserQuest)**<br>⭐ 9.4k | DEPRECATED - A HTML5/JavaScript multiplayer game experiment<br><sub>JavaScript · updated 2023-07-14 · archived</sub> | <sub>research 1993</sub> |
| **[azerothcore/azerothcore-wotlk](https://github.com/azerothcore/azerothcore-wotlk)**<br>⭐ 9.2k | Complete Open Source and Modular solution for MMO<br><sub>C++ · GPL-2.0 · updated 2026-11-11</sub> | <sub>research 1993</sub> |
| **[veloren/veloren](https://github.com/veloren/veloren)**<br>⭐ 7.7k | [mirror of https://gitlab.com/veloren/veloren] An open world, open source voxel RPG inspired by Dwarf Fortress and Cube World. This repository is a mirror. Please submit all PRs and issues on our GitLab page.<br><sub>Rust · GPL-3.0 · updated 2026-11-10</sub> | <sub>research 1993</sub> |
| **[workadventure/workadventure](https://github.com/workadventure/workadventure)**<br>⭐ 5.9k | A collaborative web application (virtual office) presented as a 16-bit RPG video game<br><sub>TypeScript · updated 2026-11-12</sub> | <sub>research 1993</sub> |
| **[rathena/rathena](https://github.com/rathena/rathena)**<br>⭐ 3.6k | rAthena is an open-source cross-platform MMORPG server.<br><sub>C++ · GPL-3.0 · updated 2026-11-10</sub> | <sub>research 1993</sub> |
| **[Hubs-Foundation/hubs](https://github.com/Hubs-Foundation/hubs)**<br>⭐ 2.2k | Duck-themed multi-user virtual spaces in WebVR. Built with A-Frame.<br><sub>JavaScript · MPL-2.0 · updated 2026-10-29</sub> | <sub>research 1993</sub> |
| **[evennia/evennia](https://github.com/evennia/evennia)**<br>⭐ 2.1k | Python MUD/MUX/MUSH/MU* development system<br><sub>Python · BSD-3-Clause · updated 2026-11-05</sub> | <sub>research 1993</sub> |
| **[lance-gg/lance](https://github.com/lance-gg/lance)**<br>⭐ 1.7k | Multiplayer game server based on Node.JS<br><sub>TypeScript · Apache-2.0 · updated 2024-05-11</sub> | <sub>research 1993</sub> |
| **[RSamaium/RPG-JS](https://github.com/RSamaium/RPG-JS)**<br>⭐ 1.7k | Framework to create an RPG or MMORPG (with the same code) in the browser with Typescript<br><sub>TypeScript · MIT · updated 2026-11-09</sub> | <sub>research 1993</sub> |
| **[MUnique/OpenMU](https://github.com/MUnique/OpenMU)**<br>⭐ 1.3k | This project aims to create an easy to use, extendable and customizable server for a MMORPG called "MU Online".<br><sub>C# · MIT · updated 2026-11-12</sub> | <sub>research 1993</sub> |
| **[YARC-Official/YARG](https://github.com/YARC-Official/YARG)**<br>⭐ 1.2k | YARG (a.k.a. Yet Another Rhythm Game) is a free, open-source, plastic guitar game that is still in development. It supports guitar (five fret), drums (plastic or e-kit), vocals, pro-keys, and more!<br><sub>C# · LGPL-3.0 · updated 2026-11-08</sub> | <sub>research 1993</sub> |
| **[Quaint-Studios/Reia](https://github.com/Quaint-Studios/Reia)**<br>⭐ 996 | RPG game action-adventure MMO built with Godot and Rust.<br><sub>GDScript · AGPL-3.0 · updated 2026-10-23</sub> | <sub>research 1993</sub> |
| **[latticexyz/mud](https://github.com/latticexyz/mud)**<br>⭐ 872 | MUD is a framework for building autonomous worlds<br><sub>TypeScript · MIT · updated 2026-04-10</sub> | <sub>research 1993</sub> |
| **[Kaetram/Kaetram-Open](https://github.com/Kaetram/Kaetram-Open)**<br>⭐ 752 | Kaetram is an open-source 2D HTML5 MMORPG. It is an extended version of BrowserQuest (BQ).<br><sub>TypeScript · MPL-2.0 · updated 2026-10-13</sub> | <sub>research 1993</sub> |
| **[arianne/stendhal](https://github.com/arianne/stendhal)**<br>⭐ 708 | Stendhal is a fun friendly and free multiplayer online adventure game with an old school feel.<br><sub>Java · GPL-2.0 · updated 2026-07-12</sub> | <sub>research 1993</sub> |
| **[opentibiabr/canary](https://github.com/opentibiabr/canary)**<br>⭐ 668 | Canary Server 15.25 for OpenTibia community.<br><sub>Lua · GPL-2.0 · updated 2026-11-05</sub> | <sub>research 1993</sub> |
| **[etternagame/etterna](https://github.com/etternagame/etterna)**<br>⭐ 655 | Advanced cross-platform rhythm game focused on keyboard play<br><sub>C++ · MIT · updated 2026-10-27</sub> | <sub>research 1993</sub> |
| **[damian-pastorini/reldens](https://github.com/damian-pastorini/reldens)**<br>⭐ 589 | Reldens - You can make it - Open Source MMORPG Platform<br><sub>JavaScript · MIT · updated 2026-11-12</sub> | <sub>research 1993</sub> |
| **[dojoengine/dojo](https://github.com/dojoengine/dojo)**<br>⭐ 479 | Dojo is a toolchain for building provable games and applications<br><sub>Rust · Apache-2.0 · updated 2026-05-06</sub> | <sub>research 1993</sub> |
| **[ryzom/ryzomcore](https://github.com/ryzom/ryzomcore)**<br>⭐ 477 | Ryzom Core is the open-source MMORPG framework built on the NeL engine, maintained by the Ryzom Core community. The commercial Ryzom game is developed by Ryzom Forge on a downstream fork at gitlab.com/ryzom<br><sub>C++ · AGPL-3.0 · updated 2026-11-12</sub> | <sub>research 1993</sub> |
| **[itgmania/itgmania](https://github.com/itgmania/itgmania)**<br>⭐ 318 | A free, open source, and community-driven dance game.<br><sub>C++ · GPL-3.0 · updated 2026-11-12</sub> | <sub>research 1993</sub> |

<sub>9 more in this area on [the site](https://zaodevz.github.io/zaowire/), filter by area.</sub>

</details>

<details><summary><b>Identity and brand</b> · 30</summary>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[openai/whisper](https://github.com/openai/whisper)**<br>⭐ 113k | Robust Speech Recognition via Large-Scale Weak Supervision<br><sub>Python · MIT · updated 2026-08-31</sub> | <sub>research 569</sub> |
| **[urchade/GLiNER](https://github.com/urchade/GLiNER)**<br>⭐ 4.3k | Generalist and Lightweight Model for Named Entity Recognition (Extract any entity types from texts)<br><sub>Python · Apache-2.0 · updated 2026-11-11</sub> | <sub>research 771</sub> |
| **[wevm/viem](https://github.com/wevm/viem)**<br>⭐ 3.6k | TypeScript Interface for Ethereum<br><sub>TypeScript · updated 2026-11-12</sub> | <sub>research 012, 525</sub> |
| **[guildxyz/guild.xyz](https://github.com/guildxyz/guild.xyz)**<br>⭐ 3.5k | Guild.xyz interface (earlier version). Token-gate Discord and Telegram, run points and quests, and manage a community from an AI agent: https://guild.xyz<br><sub>TypeScript · updated 2026-11-07</sub> | <sub>research 525</sub> |
| **[ponder-sh/ponder](https://github.com/ponder-sh/ponder)**<br>⭐ 1.2k | Open-source framework for EVM data indexing<br><sub>TypeScript · MIT · updated 2026-11-11</sub> | <sub>research 525</sub> |
| **[alchemyplatform/alchemy-sdk-js](https://github.com/alchemyplatform/alchemy-sdk-js)**<br>⭐ 458 | The easiest way to connect your dApp to the blockchain.<br><sub>TypeScript · MIT · updated 2026-02-07 · archived</sub> | <sub>research 203</sub> |
| **[guildxyz/guild-sdk](https://github.com/guildxyz/guild-sdk)**<br>⭐ 159 | Typescript library for interacting with the Guild.xyz API<br><sub>TypeScript · updated 2024-11-18</sub> | <sub>research 135, 525</sub> |
| **[zodiaceco/zodiac-modifier-roles](https://github.com/zodiaceco/zodiac-modifier-roles)**<br>⭐ 144 | Smart account toolkit for role-based access control<br><sub>TypeScript · updated 2026-11-05</sub> | <sub>research 525</sub> |
| **[motools/musicontology](https://github.com/motools/musicontology)**<br>⭐ 132 | The Music Ontology Specification provides main concepts and properties fo describing music (i.e. artists, albums, tracks, but also performances, arrangements, etc.) on the Semantic Web.<br><sub>Prolog · updated 2013-10-14</sub> | <sub>research 545</sub> |
| **[coinbase/verifications](https://github.com/coinbase/verifications)**<br>⭐ 124 | 📜 "Coinbase Verifications" is a set of Coinbase-verified onchain attestations that enable access to apps and other onchain benefits.<br><sub>Solidity · MIT · updated 2024-08-14</sub> | <sub>research 134</sub> |
| **[metagov/govbase](https://github.com/metagov/govbase)**<br>⭐ 80 | Govbase is an open, crowdsourced database of projects and tools in online governance. Data hosted at https://airtable.com/shrgnUrj0dqzZDsOd<br><sub>Jupyter Notebook · MIT · updated 2024-08-16</sub> | <sub>research 1408</sub> |
| **[privy-io/create-privy-pwa](https://github.com/privy-io/create-privy-pwa)**<br>⭐ 41 | No description<br><sub>TypeScript · updated 2026-01-05 · archived</sub> | <sub>research 283</sub> |
| **[lifesized/youtube-transcriber](https://github.com/lifesized/youtube-transcriber)**<br>⭐ 38 | Easily transcribe and summarize YouTube content.<br><sub>JavaScript · AGPL-3.0 · updated 2026-11-02</sub> | <sub>research 569</sub> |
| **[privy-io/examples](https://github.com/privy-io/examples)**<br>⭐ 36 | Collection of Privy SDK examples and starters<br><sub>TypeScript · updated 2026-11-12</sub> | <sub>research 282</sub> |
| **[guildxyz/guild-gated-contracts](https://github.com/guildxyz/guild-gated-contracts)**<br>⭐ 19 | Smart contracts with access control by guild.xyz, via oracles<br><sub>Solidity · MIT · updated 2024-09-04</sub> | <sub>research 525</sub> |
| **[privy-io/base-paymaster-example](https://github.com/privy-io/base-paymaster-example)**<br>⭐ 14 | No description<br><sub>TypeScript · Apache-2.0 · updated 2024-04-09 · archived</sub> | <sub>research 283</sub> |
| **[enviodev/open-indexer-benchmark](https://github.com/enviodev/open-indexer-benchmark)**<br>⭐ 13 | No description<br><sub>HTML · updated 2026-11-09</sub> | <sub>research 525</sub> |
| **[Graphlet-AI/serf](https://github.com/Graphlet-AI/serf)**<br>⭐ 11 | Semantic Entity Resolution Framework (SERF)<br><sub>Python · Apache-2.0 · updated 2026-10-23</sub> | <sub>research 548</sub> |
| **[privy-io/farcaster-demo](https://github.com/privy-io/farcaster-demo)**<br>⭐ 8 | Login and write to Farcaster using Privy<br><sub>TypeScript · updated 2026-01-05 · archived</sub> | <sub>research 282</sub> |
| **[privy-io/privy-frames-v2-demo](https://github.com/privy-io/privy-frames-v2-demo)**<br>⭐ 6 | No description<br><sub>TypeScript · updated 2025-09-01 · archived</sub> | <sub>research 282</sub> |
| **[NERDDAO/bonfires-sdk](https://github.com/NERDDAO/bonfires-sdk)**<br>⭐ 3 | Beautiful terminal interface for the Bonfires API — colorized panels, tables, and relationship trees<br><sub>Python · MIT · updated 2026-04-16</sub> | <sub>research 544, 569, 581, 665, 669, 673 +3</sub> |
| **[NERDDAO/bonfire-fetch](https://github.com/NERDDAO/bonfire-fetch)**<br>⭐ 3 | No description<br><sub>Python · updated 2025-08-02</sub> | <sub>research 542, 543, 546</sub> |
| **[passportxyz/passport](https://github.com/passportxyz/passport)**<br>⭐ 2 | Passport allows users to prove their identity through a secure, decentralized UI<br><sub>TypeScript · updated 2026-11-05</sub> | <sub>research 525</sub> |
| **[nou-techne/information-communication-commons](https://github.com/nou-techne/information-communication-commons)**<br>⭐ 2 | A knowledge-graph-backed living archive that preserves ideas, relationships, and commitments across convergence events with full context integrity. Agents and humans deepen conversation through three states: pre-event, during, and post-event. Artifacts carry forward; patterns compound.<br><sub>TypeScript · updated 2026-03-04</sub> | <sub>research 543</sub> |
| **[bettercallzaal/ZAOOS](https://github.com/bettercallzaal/ZAOOS)**<br>⭐ 1 | ZAOOS<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 050, 051, 056, 058, 200, 225 +100 · ZAO repo</sub> |

<sub>5 more in this area on [the site](https://zaodevz.github.io/zaowire/), filter by area.</sub>

</details>

<details><summary><b>Community and people</b> · 29</summary>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[twitter/communitynotes](https://github.com/twitter/communitynotes)**<br>⭐ 1.9k | Documentation and source code powering Twitter's Community Notes<br><sub>Python · Apache-2.0 · updated 2026-11-07</sub> | <sub>research 061</sub> |
| **[ArthurHeitmann/arctic_shift](https://github.com/ArthurHeitmann/arctic_shift)**<br>⭐ 1.8k | Making Reddit data accessible to researchers, moderators and everyone else. Interact with the data through large dumps, an API or web interface.<br><sub>TypeScript · updated 2026-10-11</sub> | <sub>research 1928</sub> |
| **[ONEARMY/community-platform](https://github.com/ONEARMY/community-platform)**<br>⭐ 1.4k | A platform to build useful communities that aim to tackle global problems<br><sub>TypeScript · MIT · updated 2026-11-11</sub> | <sub>research 200</sub> |
| **[pdovhomilja/nextcrm-app](https://github.com/pdovhomilja/nextcrm-app)**<br>⭐ 741 | NextCRM — Open-source CRM built with Next.js 16, React 19, PostgreSQL, Prisma 7, and shadcn/ui. CRM, projects, invoicing, documents, email client & AI features.<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 110</sub> |
| **[nounsDAO/nouns-monorepo](https://github.com/nounsDAO/nouns-monorepo)**<br>⭐ 685 | The Nouns DAO monorepo<br><sub>TypeScript · GPL-3.0 · updated 2026-10-05</sub> | <sub>research 299, 530</sub> |
| **[proofcarryingdata/zupass](https://github.com/proofcarryingdata/zupass)**<br>⭐ 365 | Zuzalu Passport<br><sub>TypeScript · GPL-3.0 · updated 2025-11-16</sub> | <sub>research 061, 294</sub> |
| **[Hats-Protocol/hats-protocol](https://github.com/Hats-Protocol/hats-protocol)**<br>⭐ 98 | Core contracts for Hats Protocol v1<br><sub>Solidity · AGPL-3.0 · updated 2024-07-23</sub> | <sub>research 622</sub> |
| **[metacartel/MCV](https://github.com/metacartel/MCV)**<br>⭐ 82 | Ethereum's Venture DAO<br><sub>updated 2020-03-21</sub> | <sub>research 758e</sub> |
| **[onflow/developer-grants](https://github.com/onflow/developer-grants)**<br>⭐ 47 | Grants for developers that contribute to the broader developer ecosystem<br><sub>Apache-2.0 · updated 2025-05-12 · archived</sub> | <sub>research 065, 229, 274</sub> |
| **[msalah2024/saidit](https://github.com/msalah2024/saidit)**<br>⭐ 6 | A fully open-source, feature-rich Reddit alternative built with Next.js & Supabase.<br><sub>TypeScript · MIT · updated 2026-06-20</sub> | <sub>research 287</sub> |
| **[decentraland/sdk-skills](https://github.com/decentraland/sdk-skills)**<br>⭐ 4 | A collection of skills useful for creating Decentraland scenes with the help of an LLM<br><sub>JavaScript · Apache-2.0 · updated 2026-11-12</sub> | <sub>research 1941</sub> |
| **[sim31/fractalgram](https://github.com/sim31/fractalgram)**<br>⭐ 2 | Telegram web client tailored for participants of Eden / Fractally style DAOs.<br><sub>TypeScript · GPL-3.0 · updated 2026-02-11</sub> | <sub>research 105</sub> |
| **[shriyashsoni/Opportunity-Hunter-](https://github.com/shriyashsoni/Opportunity-Hunter-)**<br>⭐ 2 | No description<br><sub>Python · updated 2026-05-20</sub> | <sub>research 821</sub> |
| **[Optimystics/op-fractal-sc](https://github.com/Optimystics/op-fractal-sc)**<br>⭐ 1 | Smart contracts for Optimism Fractal<br><sub>TypeScript · GPL-3.0 · updated 2025-05-10</sub> | <sub>research 056, 105</sub> |
| **[sim31/frapp-concepts](https://github.com/sim31/frapp-concepts)**<br>⭐ 1 | Definitions of concepts, design patterns and processes used by Fractal communities.<br><sub>GPL-3.0 · updated 2026-02-05</sub> | <sub>research 105</sub> |
| **[mxjxn/cryptoart-studio](https://github.com/mxjxn/cryptoart-studio)**<br>⭐ 1 | A suite of webapps and smartcontracts for artists and collectors.<br><sub>TypeScript · updated 2026-11-03</sub> | <sub>research 2467</sub> |
| **[SongjamSpace/songjam-site](https://github.com/SongjamSpace/songjam-site)**<br>⭐ 1 | New website with leaderboard frontpage<br><sub>TypeScript · updated 2026-07-22</sub> | <sub>research 122, 241, 348, 815</sub> |
| **[NicoAcosta/violet](https://github.com/NicoAcosta/violet)**<br>⭐ 1 | Jadyn Violet's Genesis Collection<br><sub>Solidity · updated 2022-05-28</sub> | <sub>research 427, 600</sub> |
| **[shriyashsoni/apna_codingfinal](https://github.com/shriyashsoni/apna_codingfinal)**<br>⭐ 1 | No description<br><sub>TypeScript · updated 2025-12-15</sub> | <sub>research 821</sub> |
| **[bettercallzaal/poidhz](https://github.com/bettercallzaal/poidhz)**<br>⭐ 0 | BCZ POIDH bounty ops: rounds, judging pages, brand kits, leaderboard. Source of truth for every BCZ-issued POIDH bounty.<br><sub>Python · updated 2026-11-12</sub> | <sub>research 1903, 1970 · ZAO repo</sub> |
| **[bettercallzaal/zaostock](https://github.com/bettercallzaal/zaostock)**<br>⭐ 0 | zaostock repo<br><sub>TypeScript · MIT · updated 2026-06-13 · archived</sub> | <sub>research 661, 1616 · ZAO repo</sub> |
| **[bettercallzaal/zabalsocials](https://github.com/bettercallzaal/zabalsocials)**<br>⭐ 0 | zabalsocials<br><sub>JavaScript · MIT · updated 2026-08-25</sub> | <sub>research 1621 · ZAO repo</sub> |
| **[Yellow-Collective/yellow-collective](https://github.com/Yellow-Collective/yellow-collective)**<br>⭐ 0 | No description<br><sub>TypeScript · GPL-3.0 · updated 2026-10-27</sub> | <sub>research 1985</sub> |
| **[SongjamSpace/songjam-contracts](https://github.com/SongjamSpace/songjam-contracts)**<br>⭐ 0 | Repository for Songjam Smart Contracts<br><sub>Solidity · updated 2025-09-10</sub> | <sub>research 348</sub> |
| **[SongjamSpace/songjam-leaderboard-ui](https://github.com/SongjamSpace/songjam-leaderboard-ui)**<br>⭐ 0 | No description<br><sub>TypeScript · updated 2026-06-16</sub> | <sub>research 348</sub> |

<sub>4 more in this area on [the site](https://zaodevz.github.io/zaowire/), filter by area.</sub>

</details>

<details><summary><b>Security</b> · 19</summary>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[gitleaks/gitleaks](https://github.com/gitleaks/gitleaks)**<br>⭐ 31k | Find secrets with Gitleaks 🔑<br><sub>Go · MIT · updated 2026-10-28</sub> | <sub>research 1956, 2433</sub> |
| **[Infisical/infisical](https://github.com/Infisical/infisical)**<br>⭐ 30k | Infisical is the open-source platform for securing secrets, certificates, access, and AI Agents.<br><sub>TypeScript · updated 2026-11-12</sub> | <sub>research 926</sub> |
| **[getsops/sops](https://github.com/getsops/sops)**<br>⭐ 24k | Simple and flexible tool for managing secrets<br><sub>Go · MPL-2.0 · updated 2026-11-09</sub> | <sub>research 926</sub> |
| **[newren/git-filter-repo](https://github.com/newren/git-filter-repo)**<br>⭐ 14k | Quickly rewrite git repository history (filter-branch replacement)<br><sub>Python · updated 2026-07-09</sub> | <sub>research 1956</sub> |
| **[google/osv-scanner](https://github.com/google/osv-scanner)**<br>⭐ 12k | Vulnerability scanner written in Go which uses the data provided by https://osv.dev<br><sub>Go · Apache-2.0 · updated 2026-11-12</sub> | <sub>research 2433</sub> |
| **[zizmorcore/zizmor](https://github.com/zizmorcore/zizmor)**<br>⭐ 7k | Static analysis for GitHub Actions (and more)<br><sub>Rust · MIT · updated 2026-11-11</sub> | <sub>research 2433</sub> |
| **[crytic/slither](https://github.com/crytic/slither)**<br>⭐ 6.4k | Static Analyzer for Solidity and Vyper<br><sub>Python · AGPL-3.0 · updated 2026-11-04</sub> | <sub>research 2433</sub> |
| **[ossf/scorecard](https://github.com/ossf/scorecard)**<br>⭐ 5.8k | OpenSSF Scorecard - Security health metrics for Open Source<br><sub>Go · Apache-2.0 · updated 2026-11-12</sub> | <sub>research 2433</sub> |
| **[rhysd/actionlint](https://github.com/rhysd/actionlint)**<br>⭐ 4.4k | :octocat: Static checker for GitHub Actions workflow files<br><sub>Go · MIT · updated 2026-07-16</sub> | <sub>research 2433</sub> |
| **[e2b-dev/code-interpreter](https://github.com/e2b-dev/code-interpreter)**<br>⭐ 2.4k | Python & JS/TS SDK for running AI-generated code/code interpreting in your AI app<br><sub>Python · Apache-2.0 · updated 2026-11-03</sub> | <sub>research 2433</sub> |
| **[eslint-community/eslint-plugin-security](https://github.com/eslint-community/eslint-plugin-security)**<br>⭐ 2.4k | ESLint rules for Node Security<br><sub>JavaScript · Apache-2.0 · updated 2026-10-30</sub> | <sub>research 040</sub> |
| **[Cyfrin/aderyn](https://github.com/Cyfrin/aderyn)**<br>⭐ 809 | Solidity Static Analyzer that easily integrates into your editor<br><sub>Rust · GPL-3.0 · updated 2026-11-08</sub> | <sub>research 2433</sub> |
| **[OpenZeppelin/openzeppelin-upgrades](https://github.com/OpenZeppelin/openzeppelin-upgrades)**<br>⭐ 660 | Plugins for Hardhat and Foundry to deploy and manage upgradeable contracts on Ethereum.<br><sub>TypeScript · MIT · updated 2026-11-11</sub> | <sub>research 1989</sub> |
| **[OpenZeppelin/contracts-wizard](https://github.com/OpenZeppelin/contracts-wizard)**<br>⭐ 296 | Interactive smart contract generator based on OpenZeppelin Contracts.<br><sub>TypeScript · AGPL-3.0 · updated 2026-11-11</sub> | <sub>research 1989</sub> |
| **[OpenZeppelin/openzeppelin-skills](https://github.com/OpenZeppelin/openzeppelin-skills)**<br>⭐ 223 | Agent skills for secure smart contract development with OpenZeppelin Contracts libraries<br><sub>AGPL-3.0 · updated 2026-11-11</sub> | <sub>research 1989</sub> |
| **[OpenZeppelin/openzeppelin-relayer](https://github.com/OpenZeppelin/openzeppelin-relayer)**<br>⭐ 156 | OpenZeppelin Relayer<br><sub>Rust · AGPL-3.0 · updated 2026-11-11</sub> | <sub>research 1989</sub> |
| **[OpenZeppelin/openzeppelin-monitor](https://github.com/OpenZeppelin/openzeppelin-monitor)**<br>⭐ 147 | A blockchain monitoring service that watches for specific on-chain activities and triggers notifications based on configurable conditions.<br><sub>Rust · AGPL-3.0 · updated 2026-11-12</sub> | <sub>research 1989</sub> |
| **[OpenZeppelin/stellar-contracts](https://github.com/OpenZeppelin/stellar-contracts)**<br>⭐ 97 | OpenZeppelin Contracts written in Rust for Stellar Soroban<br><sub>Rust · MIT · updated 2026-11-11</sub> | <sub>research 1989</sub> |
| **[OpenZeppelin/relayer-plugin-x402-facilitator](https://github.com/OpenZeppelin/relayer-plugin-x402-facilitator)**<br>⭐ 4 | OpenZeppelin Relayer - x402 Facilitator plugin<br><sub>TypeScript · AGPL-3.0 · updated 2026-11-03</sub> | <sub>research 1989</sub> |

</details>

<details><summary><b>Cross platform and social</b> · 15</summary>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[reddit-archive/reddit](https://github.com/reddit-archive/reddit)**<br>⭐ 17k | historical code from reddit.com<br><sub>Python · updated 2017-10-17 · archived</sub> | <sub>research 179</sub> |
| **[FxEmbed/FxEmbed](https://github.com/FxEmbed/FxEmbed)**<br>⭐ 5.9k | Fix X/Twitter and Bluesky embeds! Use multiple images, videos, polls, translations and more on Discord, Telegram and others<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 873</sub> |
| **[nostr-protocol/nips](https://github.com/nostr-protocol/nips)**<br>⭐ 3.1k | Nostr Implementation Possibilities<br><sub>updated 2026-11-07</sub> | <sub>research 097</sub> |
| **[bluesky-social/feed-generator](https://github.com/bluesky-social/feed-generator)**<br>⭐ 2.1k | ATProto Feed Generator Starter Kit<br><sub>TypeScript · MIT · updated 2026-10-29</sub> | <sub>research 077</sub> |
| **[not-an-aardvark/snoowrap](https://github.com/not-an-aardvark/snoowrap)**<br>⭐ 1k | A JavaScript wrapper for the reddit API<br><sub>JavaScript · MIT · updated 2023-02-20 · archived</sub> | <sub>research 179, 486</sub> |
| **[nbd-wtf/nostr-tools](https://github.com/nbd-wtf/nostr-tools)**<br>⭐ 854 | Tools for developing Nostr clients.<br><sub>TypeScript · Unlicense · updated 2026-11-07</sub> | <sub>research 097</sub> |
| **[neet/masto.js](https://github.com/neet/masto.js)**<br>⭐ 784 | 🐘 Universal Mastodon API client for JavaScript<br><sub>TypeScript · MIT · updated 2026-11-01</sub> | <sub>research 177</sub> |
| **[h3poteto/megalodon](https://github.com/h3poteto/megalodon)**<br>⭐ 278 | Fediverse API client library for node.js and browser<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 177</sub> |
| **[lens-protocol/lens-sdk](https://github.com/lens-protocol/lens-sdk)**<br>⭐ 258 | The official SDK to interact with the Lens Protocol<br><sub>TypeScript · MIT · updated 2026-11-11</sub> | <sub>research 117, 934</sub> |
| **[ShadowSlayer03/Post4U-Schedule-Social-Media-Posts](https://github.com/ShadowSlayer03/Post4U-Schedule-Social-Media-Posts)**<br>⭐ 124 | An open-source self-hosted app to schedule and automatically post content to X (Twitter), Telegram, Reddit and Discord made with FastAPI and Reflex.<br><sub>Python · MIT · updated 2026-03-28</sub> | <sub>research 355</sub> |
| **[lens-protocol/lens-v3](https://github.com/lens-protocol/lens-v3)**<br>⭐ 39 | Lens Protocol V3<br><sub>Solidity · GPL-3.0 · updated 2026-03-06</sub> | <sub>research 117</sub> |
| **[wavlake/nom-spec](https://github.com/wavlake/nom-spec)**<br>⭐ 10 | Nostr Open Media Specification<br><sub>MIT · updated 2023-04-18</sub> | <sub>research 096, 097</sub> |
| **[jamesrswift/traw](https://github.com/jamesrswift/traw)**<br>⭐ 3 | Typescript Reddit API Wrapper<br><sub>TypeScript · MIT · updated 2023-03-06</sub> | <sub>research 179</sub> |
| **[wavlake/web](https://github.com/wavlake/web)**<br>⭐ 2 | Wavlake web app<br><sub>TypeScript · MIT · updated 2025-09-03</sub> | <sub>research 097</sub> |
| **[fraserbrownirl/xshare](https://github.com/fraserbrownirl/xshare)**<br>⭐ 0 | FC2X - Crosspost Farcaster casts to X (Twitter) using OAuth 2.0<br><sub>TypeScript · updated 2026-01-02</sub> | <sub>research 183</sub> |

</details>

<details><summary><b>Events and shows</b> · 14</summary>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[makeplane/plane](https://github.com/makeplane/plane)**<br>⭐ 62k | 🔥🔥🔥 Open-source Jira, Linear, Monday, and ClickUp alternative. Plane is a modern project management platform to manage tasks, sprints, docs, and triage.<br><sub>TypeScript · AGPL-3.0 · updated 2026-11-12</sub> | <sub>research 425, 477</sub> |
| **[k2-fsa/sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx)**<br>⭐ 16k | Speech-to-text, text-to-speech, speaker diarization, speech enhancement, source separation, and VAD using next-gen Kaldi with onnxruntime without Internet connection. Support embedded systems, Android, iOS, HarmonyOS, Raspberry Pi, RISC-V, RK NPU, Axera NPU, Ascend NPU, x86_64 servers, websocket server/client, support 12 programming languages<br><sub>C++ · Apache-2.0 · updated 2026-11-12</sub> | <sub>research 715</sub> |
| **[bigcalendar/react-big-calendar](https://github.com/bigcalendar/react-big-calendar)**<br>⭐ 8.8k | gcal/outlook like calendar component<br><sub>JavaScript · MIT · updated 2026-06-01</sub> | <sub>research 477</sub> |
| **[nurdism/neko](https://github.com/nurdism/neko)**<br>⭐ 2.1k | A self hosted virtual browser (rabb.it clone) that runs in docker.<br><sub>Go · Apache-2.0 · updated 2021-10-05 · archived</sub> | <sub>research 735</sub> |
| **[Georgegriff/react-dnd-kit-tailwind-shadcn-ui](https://github.com/Georgegriff/react-dnd-kit-tailwind-shadcn-ui)**<br>⭐ 823 | Drag and drop Accessible kanban board implementing using React, @dnd-kit, tailwind and shadcn/ui<br><sub>TypeScript · MIT · updated 2024-05-18</sub> | <sub>research 425</sub> |
| **[eerimoq/moblin](https://github.com/eerimoq/moblin)**<br>⭐ 782 | Moblin, a free iOS app for IRL streaming.<br><sub>Swift · MIT · updated 2026-11-11</sub> | <sub>research 1030</sub> |
| **[warrenshiv/AIEventPlanner](https://github.com/warrenshiv/AIEventPlanner)**<br>⭐ 6 | AIEventPlanner is a repository for an AI-driven event planning solution. It utilizes artificial intelligence to automate and optimize event organization tasks, offering a more efficient and personalized event planning experience.<br><sub>JavaScript · updated 2024-01-05</sub> | <sub>research 294</sub> |
| **[0xKoda/agent-template](https://github.com/0xKoda/agent-template)**<br>⭐ 3 | A serverless AI Agent Template<br><sub>TypeScript · updated 2025-01-05</sub> | <sub>research 326</sub> |
| **[n0umen0n/base-respect-game](https://github.com/n0umen0n/base-respect-game)**<br>⭐ 2 | Respect game<br><sub>TypeScript · updated 2026-02-13</sub> | <sub>research 738</sub> |
| **[bettercallzaal/zlank](https://github.com/bettercallzaal/zlank)**<br>⭐ 1 | No-code Farcaster Snap builder. Stack blocks, hit Deploy, share to feed. Built on @farcaster/snap + Next.js 16.<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>research 1064 · ZAO repo</sub> |
| **[ZAODEVZ/theZAOZone](https://github.com/ZAODEVZ/theZAOZone)**<br>⭐ 0 | No description<br><sub>TypeScript · MIT · updated 2026-07-14</sub> | <sub>research 1064 · ZAO repo</sub> |
| **[aymen-mouelhi/ai-event-assistant](https://github.com/aymen-mouelhi/ai-event-assistant)**<br>⭐ 0 | A Next.js and LangChain Web application for AI-assisted event planning and management.<br><sub>TypeScript · updated 2024-07-24</sub> | <sub>research 294</sub> |
| **[builders-garden/servex-rs](https://github.com/builders-garden/servex-rs)**<br>⭐ 0 | A Rust reverse proxy that turns any backend into a paid API powered by x402, rate limiting, and async job queues.<br><sub>Rust · MIT · updated 2026-03-12</sub> | <sub>research 326</sub> |
| **[bettercallzaal/riverside-group-demo](https://github.com/bettercallzaal/riverside-group-demo)**<br>⭐ 0 | Riverside Group LLC website demo - landscape design firm in Mount Desert, ME. Built by BetterCallZaal.<br><sub>HTML · updated 2026-05-19</sub> | <sub>research 458 · ZAO repo</sub> |

</details>

<details><summary><b>Inbox</b> · 12</summary>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[nexu-io/open-design](https://github.com/nexu-io/open-design)**<br>⭐ 107k | The 1st Collaborative AI Design Agent Workspace. Local-first and open source. Create motion, prototypes, websites, apps, dashboards, presentations, images, and videos with your team and AI agents. Share work, exchange feedback, and iterate together in one workspace.<br><sub>TypeScript · Apache-2.0 · updated 2026-11-12</sub> | <sub>inbox x1</sub> |
| **[vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)**<br>⭐ 34k | Vercel's official collection of agent skills<br><sub>JavaScript · updated 2026-11-12</sub> | <sub>inbox x1</sub> |
| **[googleworkspace/cli](https://github.com/googleworkspace/cli)**<br>⭐ 32k | Google Workspace CLI — one command-line tool for Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin, and more. Dynamically built from Google Discovery Service. Includes AI agent skills.<br><sub>Rust · Apache-2.0 · updated 2026-11-03</sub> | <sub>inbox x1</sub> |
| **[openai/skills](https://github.com/openai/skills)**<br>⭐ 29k | Skills Catalog for Codex<br><sub>Python · updated 2026-10-28</sub> | <sub>inbox x1</sub> |
| **[google/skills](https://github.com/google/skills)**<br>⭐ 24k | Agent Skills for Google products and technologies<br><sub>Python · Apache-2.0 · updated 2026-11-12</sub> | <sub>inbox x1</sub> |
| **[microsoft/TRELLIS.2](https://github.com/microsoft/TRELLIS.2)**<br>⭐ 13k | Native and Compact Structured Latents for 3D Generation<br><sub>Python · MIT · updated 2026-07-10</sub> | <sub>inbox x1</sub> |
| **[huggingface/skills](https://github.com/huggingface/skills)**<br>⭐ 11k | Give your agents the power of the Hugging Face ecosystem<br><sub>Python · Apache-2.0 · updated 2026-11-11</sub> | <sub>inbox x1</sub> |
| **[achimala/dream-loop](https://github.com/achimala/dream-loop)**<br>⭐ 2k | Agent skill for impressive 3D visuals using Blender + image gen + subagent critic<br><sub>JavaScript · MIT · updated 2026-09-09</sub> | <sub>inbox x1</sub> |
| **[electrikmilk/cherri](https://github.com/electrikmilk/cherri)**<br>⭐ 1.7k | Siri Shortcuts Programming Language 🍒<br><sub>Go · GPL-2.0 · updated 2026-11-11</sub> | <sub>inbox x1</sub> |
| **[EL4CTEO/blender-skills](https://github.com/EL4CTEO/blender-skills)**<br>⭐ 1k | Professional Blender 5.2 workflows as Agent Skills for Claude Code, Codex, Gemini CLI, Copilot and Cursor: modeling, UVs, PBR, baking, rigging, animation, export and QA.<br><sub>Python · MIT · updated 2026-11-07</sub> | <sub>inbox x1</sub> |
| **[boffti/starwire](https://github.com/boffti/starwire)**<br>⭐ 210 | Open source repos worth a look, gathered from across the web and refreshed every two days<br><sub>JavaScript · CC0-1.0 · updated 2026-11-12</sub> | <sub>inbox x1</sub> |
| **[anupml/unqforge](https://github.com/anupml/unqforge)**<br>⭐ 30 | Build iOS Shortcuts from Python. Action definitions are pulled out of real shortcuts instead of written by hand, so the generator can't emit a parameter nobody has seen work.<br><sub>Python · MIT · updated 2026-11-11</sub> | <sub>inbox x1</sub> |

</details>

<details><summary><b>WaveWarZ</b> · 11</summary>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[manifoldmarkets/manifold](https://github.com/manifoldmarkets/manifold)**<br>⭐ 523 | Manifold Markets: A market for every question<br><sub>TypeScript · MIT · updated 2026-11-11</sub> | <sub>research 099</sub> |
| **[openpredictionmarkets/socialpredict](https://github.com/openpredictionmarkets/socialpredict)**<br>⭐ 231 | Prediction Market Platform: Easy to Deploy, Open Source MIT Licensed<br><sub>Go · MIT · updated 2026-10-19</sub> | <sub>research 099</sub> |
| **[pouryavakili/PredictOS](https://github.com/pouryavakili/PredictOS)**<br>⭐ 149 | The opensource all-in-one framework for Prediction Markets<br><sub>TypeScript · MIT · updated 2026-05-14</sub> | <sub>research 099</sub> |
| **[bilix-software/solana-program-idl-fetcher](https://github.com/bilix-software/solana-program-idl-fetcher)**<br>⭐ 54 | Fetches the program IDL for a Solana program using Anchor. Example includes the pump.fun program IDL<br><sub>TypeScript · MIT · updated 2024-06-03</sub> | <sub>research 100</sub> |
| **[meditatingsloth/solora-anchor](https://github.com/meditatingsloth/solora-anchor)**<br>⭐ 11 | Solora is a prediction market built on Solana<br><sub>Rust · MIT · updated 2023-09-23</sub> | <sub>research 100</sub> |
| **[CandyToyBox/wavewarz-intelligence](https://github.com/CandyToyBox/wavewarz-intelligence)**<br>⭐ 2 | WaveWarZ Intelligence — analytics platform for WaveWarZ music battles on Solana<br><sub>TypeScript · updated 2026-11-12</sub> | <sub>research 101</sub> |
| **[CandyToyBox/V2-Stats-App-WaveWarz](https://github.com/CandyToyBox/V2-Stats-App-WaveWarz)**<br>⭐ 1 | Stats for WaveWarz Live-Traded Music Battles<br><sub>TypeScript · updated 2025-11-23</sub> | <sub>research 099</sub> |
| **[CandyToyBox/wavewarz-base](https://github.com/CandyToyBox/wavewarz-base)**<br>⭐ 1 | No description<br><sub>TypeScript · updated 2026-06-14</sub> | <sub>research 101</sub> |
| **[openpredictionmarkets/play-money](https://github.com/openpredictionmarkets/play-money)**<br>⭐ 0 | Simple prediction market platform<br><sub>TypeScript · MIT · updated 2025-08-11</sub> | <sub>research 099</sub> |
| **[CandyToyBox/analytics-wave-warz](https://github.com/CandyToyBox/analytics-wave-warz)**<br>⭐ 0 | WaveWarz Artist, Trader, and Fans Stats App<br><sub>TypeScript · updated 2026-02-28</sub> | <sub>research 101</sub> |
| **[CandyToyBox/wavewarz-merch-shop](https://github.com/CandyToyBox/wavewarz-merch-shop)**<br>⭐ 0 | WaveWarz Agentic Merch Shop<br><sub>HTML · updated 2026-02-20</sub> | <sub>research 101</sub> |

</details>

<details><summary><b>reference</b> · 7</summary>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[daydreamlive/DEMON](https://github.com/daydreamlive/DEMON)**<br>⭐ 312 | DEMON: Diffusion Engine for Musical Orchestrated Noise<br><sub>Python · AGPL-3.0 · updated 2026-11-10</sub> | <sub>research 1970</sub> |
| **[bettercallzaal/ZAOMixZ](https://github.com/bettercallzaal/ZAOMixZ)**<br>⭐ 4 | Professional two-deck DJ platform with Flow Mode auto-DJ for non-DJs<br><sub>JavaScript · MIT · updated 2026-11-11</sub> | <sub>research 1970</sub> |
| **[ZAODEVZ/IMan-Artizen](https://github.com/ZAODEVZ/IMan-Artizen)**<br>⭐ 1 | IMan Afrikah x Artizen Season 6. RAPA submission: copy, budget, campaign ops.<br><sub>HTML · updated 2026-08-27</sub> | <sub>research 1970</sub> |
| **[bettercallzaal/zao-website](https://github.com/bettercallzaal/zao-website)**<br>⭐ 0 | The ZAO marketing site - coded Next.js rebuild of thezao.com, off Webflow. Fresh design from the ZAO brand system.<br><sub>TypeScript · updated 2026-10-29</sub> | <sub>research 1970 · ZAO repo</sub> |
| **[ZAODEVZ/ZAOartizen](https://github.com/ZAODEVZ/ZAOartizen)**<br>⭐ 0 | zartizen<br><sub>TypeScript · MIT · updated 2026-10-10</sub> | <sub>research 1970 · ZAO repo</sub> |
| **[ZAODEVZ/Zuke](https://github.com/ZAODEVZ/Zuke)**<br>⭐ 0 | Zuke<br><sub>TypeScript · MIT · updated 2026-08-25</sub> | <sub>research 1970 · ZAO repo</sub> |
| **[bettercallzaal/crownvics](https://github.com/bettercallzaal/crownvics)**<br>⭐ 0 | crownvics<br><sub>HTML · updated 2026-04-13</sub> | <sub>research 1970 · ZAO repo</sub> |

</details>

<details><summary><b>Media, video and design</b> · 4</summary>

| Repo | About | Seen in |
| :-- | :-- | :-- |
| **[storytold/artcraft](https://github.com/storytold/artcraft)**<br>⭐ 41k | ArtCraft is an intentional crafting engine for artists, designers, and filmmakers<br><sub>Rust · Apache-2.0 · updated 2026-11-12</sub> | <sub>research 2417</sub> |
| **[openfilm/openfilm](https://github.com/openfilm/openfilm)**<br>⭐ 5.9k | The open source AI video agent: turns any coding agent into a video agent, with an editor to change anything it makes.<br><sub>TypeScript · MIT · updated 2026-11-12</sub> | <sub>research 1914</sub> |
| **[BankrBot/skills](https://github.com/BankrBot/skills)**<br>⭐ 1.2k | Bankr Skills equip builders with plug-and-play tools to build more powerful agents.<br><sub>JavaScript · updated 2026-11-09</sub> | <sub>research 2474</sub> |
| **[ZAODEVZ/iman-desk](https://github.com/ZAODEVZ/iman-desk)**<br>⭐ 0 | IMan Desk: status, updates and asks between IMan and Zaal<br><sub>JavaScript · updated 2026-11-12</sub> | <sub>research 1909, 1970</sub> |

</details>

## ➕ Add a repo

Open an issue with the [submit form](../../issues/new?template=submit-repo.yml), or add a line to [inbox.md](inbox.md): the link, the date and a note. It is picked up on the next update. Anything mentioned in a new research doc is picked up on its own.

Shape and idea borrowed from [starwire](https://github.com/boffti/starwire) (CC0). This list is CC0 too: `data/repos.json` is the whole thing.
