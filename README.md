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

Intelligence lives on the phone. Execution lives on the laptop.

## Documentation

```
docs/
├── SUBMISSION.md                          Hackathon screening submission
├── research/
│   ├── feasibility-study.md               Component-level technical validation
│   └── debugging-superiority.md           Academic evidence: why DevLens debugs better
└── strategy/
    ├── winning-design.md                  Architecture, demo script, competitive positioning
    └── competitive-intel.md               Phase 2 competitor analysis, hackathon rules
```

## Technology

| Layer | Stack |
|-------|-------|
| Phone (Android) | Kotlin, Jetpack Compose, CameraX, ML Kit, Gemini Nano, OkHttp |
| Laptop (Daemon) | Node.js, TypeScript, node-pty, ws, simple-git, OpenRouter API |

## Team Arize

| Member | Role |
|--------|------|
| **Adit Jain** (Leader) | Mobile Dev Lead |
| **Ayush Pandey** | Agent / Backend Dev |
| **Mehir Singh** | Integration / Demo |

## Target

iQOO Hackathon 2026 · Chennai · September 12–13 · Developer Tools Track
