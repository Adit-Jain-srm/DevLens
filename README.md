# DevLens

> **Intelligence lives on the phone. Execution lives on the laptop.**

DevLens is a phone-first multimodal AI developer agent for the iQOO Hackathon 2026 (Developer Tools Track). It uses the iQOO phone's camera, microphone, and on-device AI as the developer's perception and reasoning layer — then commands autonomous debugging, fixing, and verification on the laptop.

---

## The Problem

Developers spend **57% of debugging time** just understanding what's happening — not fixing it. Every existing AI tool operates in a single narrow channel (text in an editor), while real debugging spans terminals, browsers, whiteboards, voice, and physical hardware simultaneously.

## The Solution

Point your phone. Speak. Watch it fix. See it verified.

```
OBSERVE (Camera/Voice) → UNDERSTAND (On-device AI) → ACT (Laptop Agent) → VERIFY (Tests) → EXPLAIN (Phone)
```

## Why It Wins

- **Novel architecture** — intelligence inversion (phone = brain, laptop = hands)
- **Academically grounded** — backed by 10 peer-reviewed 2026 papers
- **On-device first** — mirrors the strategy that won the Delhi iQOO Hackathon
- **Naturally maximizes HackTracker** — camera, voice, on-device AI ARE the product
- **Zero external hardware** — paper + marker for the wow feature

---

## Documentation

| Document | Purpose |
|----------|---------|
| [`docs/SUBMISSION.md`](docs/SUBMISSION.md) | Hackathon screening submission (organizer-facing) |
| [`docs/FEASIBILITY_STUDY.md`](docs/FEASIBILITY_STUDY.md) | Technical validation of every component |
| [`docs/specs/2026-08-24-devlens-winning-design.md`](docs/specs/2026-08-24-devlens-winning-design.md) | Winning strategy, competitive positioning, demo script |
| [`docs/specs/2026-08-24-debugging-superiority.md`](docs/specs/2026-08-24-debugging-superiority.md) | Academic evidence: why DevLens debugs better |

## Tech Stack

**Phone (Android):** Kotlin, Jetpack Compose, CameraX, ML Kit, Gemini Nano, OkHttp WebSocket

**Laptop (Daemon):** Node.js, TypeScript, node-pty, ws, simple-git, OpenRouter API

## Target

iQOO Hackathon 2026 · Chennai · Sep 12-13 · Developer Tools Track
