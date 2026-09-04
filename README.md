# DevLens

> **Point. Speak. Fixed.**

*The first developer tool with eyes and ears.*

🌐 **[Live Demo Website](https://devlens-aj5.vercel.app)** · 📄 **[Hackathon Submission](docs/SUBMISSION.md)** · 📊 **[Research (10 citations)](docs/research/)**

---

It is 11:40 PM. You are staring at a `TypeError` in the terminal. The relevant context is split across the browser console, API docs, your IDE, and a Slack thread from yesterday. To explain this to your AI assistant, you would need to screenshot, copy, paste, and type for five minutes — just to ask the right question.

**With DevLens:** Point your phone at the terminal. It reads the error in 100ms. Say "fix this." Thirty seconds later: *"Fixed. 12 tests passing."*

---

## How It Works

```
POINT  →  Phone camera reads the error on-device (Gemini Nano, <100ms)
SPEAK  →  "Fix this and run the tests" (on-device speech recognition)
FIXED  →  Laptop agent searches, patches, tests, verifies, reports back
```

Intelligence lives on the phone. Execution lives on the laptop.

## Key Features

| Feature | What It Does |
|---------|-------------|
| **Active Visual Perception** | 50MP camera + ML Kit OCR v2 reads errors in <100ms on-device |
| **Zero-Context-Switch Interface** | Camera + voice — developer never leaves debugging flow |
| **End-to-End Verification** | Fix → test → prove → report. No unverified suggestions. |
| **Session Debugging Memory** | Remembers what was tried, what failed, what worked |
| **Copilot Bridge Mode** | Works with ANY AI tool — camera → smart prompt → clipboard sync |
| **Architecture Drift Detection** | Point camera at whiteboard → compare against actual codebase |
| **Code Graph & Blast Radius** | tree-sitter parses repo into call graph. Diffs ranked by impact. 2.5M tokens → 1,500 per query. |
| **Phone-First PR Review** | GitHub webhooks → graph resolves diff → Nano summarizes → voice approve |
| **RAG Document Intelligence** | Upload docs (PDF, Markdown, images). Every fix validated against your team's standards. |

## Guardrails

- **Confirm before execute** — developer always sees analysis before any code change
- **Git stash safety** — auto-stash before every patch, one-command revert
- **Confidence scoring** — low OCR confidence triggers manual review prompt
- **Privacy-first routing** — Gemini Nano screens for secrets on-device before cloud
- **Graceful degradation** — fallback chain: Nano → regex → OpenRouter
- **Scope boundaries** — agent confined to project directory, no silent installs

## Research

Every architectural decision backed by 10 peer-reviewed 2026 citations:

| Finding | Source |
|---------|--------|
| 60-point multi-modal accuracy gap (29% → 89%) | [NOFire AI SRE Benchmark 2026](https://www.nofire.ai/guides/NOFire-AI-SRE-Benchmark-2026.pdf) |
| 57% of debug time is comprehension | [ACM Grounded Theory 2026](https://doi.org/10.1145/3797077) |
| Active perception > full screenshots | [FailureMem 2026](https://arxiv.org/pdf/2603.17826v1) |
| Visual graphs reduce tokens by 26% | [SeeRepo 2026](https://arxiv.org/html/2606.14061v4) |
| Graph-guided investigation: +25pp accuracy | [GALA+ 2026](https://arxiv.org/html/2608.08968) |
| 23 min to recover from context switch | Dr. Gloria Mark, UC Irvine |
| 46% of Devin's fixes rejected | [Devin 2026 Reviews](https://litmustools.com/review/devin/) |
| Screenshots downscaled to 1568px | [Claude Code #48492](https://github.com/anthropics/claude-code/issues/48492) |
| Targeted region > full-trajectory analysis | [CUADebugger 2026](https://arxiv.org/html/2608.02643v1) |
| Delhi 1st place: 100% local execution | [LinkedIn](https://www.linkedin.com/posts/animeshjantwal_proud-to-share-that-team-dp-on-dag-secured-activity-7469776197833474048-kl7l) |

## Technology

| Layer | Stack |
|-------|-------|
| Phone (Android) | Kotlin, Jetpack Compose, CameraX, ML Kit OCR v2, ML Kit Speech, Gemini Nano (AICore), OkHttp |
| Laptop (Daemon) | Node.js, TypeScript, node-pty, ws, simple-git, tree-sitter, OpenRouter API |
| Communication | WebSocket over local Wi-Fi, iQOO Office Kit (screen mirror, clipboard, files, remote control) |
| Demo Website | Astro 7, Tailwind CSS 4, Anime.js, deployed on Vercel |

## Documentation

```
├── README.md                              This file
├── docs/
│   ├── SUBMISSION.md                      Hackathon screening submission
│   ├── research/
│   │   ├── feasibility-study.md           Component-level technical validation
│   │   └── debugging-superiority.md       Academic evidence (10 citations)
│   └── strategy/
│       ├── winning-design.md              Architecture, demo script, 19-day prep plan
│       └── competitive-intel.md           Competitor analysis + hackathon rules
└── website/                               Live demo website (Astro + Tailwind)
    ├── src/components/                    18 interactive sections
    ├── src/data/content.ts                All content + research data
    └── vercel.json                        Auto-deploy config
```

## Scoring Alignment

DevLens maps to all 6 criteria from the [official iQOO Hackathon Guide](https://iqoo.reskilll.com/guide):

| Criterion | Weight | DevLens Alignment |
|-----------|--------|-------------------|
| End Product Quality | 30% | Complete observe → fix → verify loop |
| Novelty & Impact | 20% | No existing tool combines camera + voice + on-device AI + laptop execution |
| Creative Phone Use | 15% | Camera, voice, Gemini Nano ARE the product — not add-ons |
| Technical Depth | 15% | Multi-layer: NPU inference, code graph, hybrid routing, 6-tool agent |
| Office Kit Usage | 10% | Central to architecture: clipboard, mirror, files, remote control |
| Demo & Presentation | 10% | 5-act script: Problem → Visual → Voice Fix → Drift → Close |

## Team Arize

| Member | Role |
|--------|------|
| **Adit Jain** (Leader) | Mobile Dev Lead — CameraX, ML Kit, Compose, on-device AI |
| **Ayush Pandey** | Agent Architect — Node.js daemon, OpenRouter, terminal automation |
| **Mehir Singh** | Integration Engineer — WebSocket bridge, Office Kit, demo delivery |

## Target

**iQOO Hackathon 2026 · Chennai · September 12–13 · Developer Tools Track**

---

*Point. Speak. Fixed.* — because your AI debugger should not need you to type what it could just see.
