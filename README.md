# DevLens

> **Point. Speak. Fixed.**

The first developer tool with eyes and ears.

---

It's 11:40 PM. You're staring at a `TypeError` in the terminal. The relevant context is split across the browser console, API docs, your IDE, and a Slack thread from yesterday. To explain this to your AI assistant, you'd need to screenshot, copy, paste, and type for five minutes — just to ask the right question.

**DevLens:** You point your phone at the terminal. It reads the error in 100ms. You say "fix this." Thirty seconds later: "Fixed. 12 tests passing."

---

## How It Works

```
POINT  →  Phone camera reads the error on-device (Gemini Nano, 100ms)
SPEAK  →  "Fix this and run the tests" (on-device speech recognition)
FIXED  →  Laptop agent searches, patches, tests, verifies, reports back
```

Intelligence lives on the phone (camera, voice, NPU). Execution lives on the laptop (files, terminal, tests). The developer points and speaks. The system does the rest.

## Why It Wins

- **Novel architecture** — phone is the brain, laptop is the hands
- **Academically grounded** — 10 peer-reviewed 2026 papers validate the approach
- **On-device first** — mirrors the strategy that won the Delhi iQOO Hackathon
- **End-to-end** — observe → fix → test → verify (not just suggest and hope)
- **Zero external hardware** — paper + marker for the wow feature

## Documentation

| Document | Purpose |
|----------|---------|
| [`docs/SUBMISSION.md`](docs/SUBMISSION.md) | Hackathon screening submission |
| [`docs/FEASIBILITY_STUDY.md`](docs/FEASIBILITY_STUDY.md) | Component-level technical validation |
| [`docs/specs/2026-08-24-devlens-winning-design.md`](docs/specs/2026-08-24-devlens-winning-design.md) | Winning strategy + competitive positioning + demo script |
| [`docs/specs/2026-08-24-debugging-superiority.md`](docs/specs/2026-08-24-debugging-superiority.md) | Academic evidence: why DevLens debugs better |
| [`docs/competitive-intel.md`](docs/competitive-intel.md) | Phase 2 competitor analysis + hackathon rules |

## Tech Stack

**Phone:** Kotlin, Jetpack Compose, CameraX, ML Kit, Gemini Nano (AICore), OkHttp WebSocket

**Laptop:** Node.js, TypeScript, node-pty, ws, simple-git, OpenRouter API

## Target

iQOO Hackathon 2026 · Chennai · Sep 12-13 · Developer Tools Track
