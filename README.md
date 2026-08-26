# DevLens

> **Point. Speak. Fixed.**

*The first developer tool with eyes and ears.*

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

Intelligence lives on the phone. Execution lives on the laptop. The developer points and speaks. The system does the rest.

---

## Documentation

| Document | Description |
|----------|-------------|
| [`docs/SUBMISSION.md`](docs/SUBMISSION.md) | Hackathon screening submission |
| [`docs/FEASIBILITY_STUDY.md`](docs/FEASIBILITY_STUDY.md) | Component-level technical validation |
| [`docs/specs/2026-08-24-devlens-winning-design.md`](docs/specs/2026-08-24-devlens-winning-design.md) | Strategy, competitive positioning, demo script |
| [`docs/specs/2026-08-24-debugging-superiority.md`](docs/specs/2026-08-24-debugging-superiority.md) | Academic evidence: why DevLens debugs better |
| [`docs/competitive-intel.md`](docs/competitive-intel.md) | Phase 2 competitor analysis, hackathon rules |

## Technology

| Layer | Stack |
|-------|-------|
| Phone (Android) | Kotlin, Jetpack Compose, CameraX, ML Kit, Gemini Nano (AICore), OkHttp |
| Laptop (Daemon) | Node.js, TypeScript, node-pty, ws, simple-git, OpenRouter API |

## Target

iQOO Hackathon 2026 · Chennai · September 12–13 · Developer Tools Track
