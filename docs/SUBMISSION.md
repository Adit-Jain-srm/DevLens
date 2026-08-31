# DevLens — Hackathon Submission (Screening Round)

**iQOO Hackathon 2026 · Developer Tools Track**

> **Point. Speak. Fixed.**

---

## Table of Contents

1. [Problem](#problem)
2. [Your Idea](#your-idea)
3. [USP](#usp)
4. [Working MVP / Prototype](#working-mvp--prototype)
5. [Team](#team)
6. [Usefulness & Impact](#usefulness--impact)
7. [Scalability](#scalability)
8. [Architecture](#architecture)
9. [Phone-First Thinking](#phone-first-thinking)
10. [Device Performance](#device-performance)
11. [On-Device / Local Models](#on-device--local-models)
12. [Supporting Links](#supporting-links)

---

## Problem

**What are you solving, and for whom?**

It's 11:40 PM. Priya has been staring at the same bug for forty minutes.

Her terminal shows a `TypeError: Cannot read properties of undefined`. Her browser console has three CORS errors from the same endpoint. The API docs on her second monitor say the response includes a `user` object, but the actual response she's logging doesn't have one — and she can't tell if that's a backend bug or a stale cache.

She opens Cursor. Types "I'm getting a TypeError..." and stops. The error is in the terminal. The relevant context is spread across the browser, the API docs, the IDE, and a Slack thread from yesterday where her teammate said "I refactored the auth middleware." To explain this to the AI, she'd need to screenshot the terminal, copy the browser console, paste the relevant Slack messages, point to the file, explain the history. Five minutes of context assembly for a question that might not even be the right question.

So she does what she's done a hundred times before. She guesses. She adds a null check where she thinks the crash is happening. She runs the tests. Three fail. Different error now. Another guess. Another cycle. By 12:30 AM she finds it — the refactored middleware moved the user object from `req.user` to `req.auth.user`, and three route handlers still use the old path.

Forty minutes of pain. The fix was one line. The debugging was forty minutes of manually being the bridge between what she could SEE and what her tools could UNDERSTAND.

**This is the problem DevLens solves.**

She would have pointed her phone at the terminal. DevLens would have read the error on-device in 100ms. She'd have said "fix this." The agent would have searched the codebase, found the refactored path in the git diff from yesterday, generated the one-line fix, applied it, run the tests — and reported back: "Fixed. 12 tests passing." Elapsed time: under 30 seconds.

**The gap is not in AI's coding ability. It is in AI's inability to see what the developer sees.**

Every AI coding tool in 2026 — Cursor, Claude Code, Copilot, Devin — operates through a text box. The developer must manually translate their multi-sensory debugging experience (screen, terminal, browser, voice, memory) into typed text. That translation is where time dies.

DevLens eliminates the translation.

---

## Your Idea

**What are you proposing?**

**DevLens** is the first developer tool with eyes and ears.

The iQOO phone becomes the developer's **perception layer** — its camera sees errors, its microphone hears explanations, its NPU understands context on-device — and then it commands the laptop to investigate, fix, test, and verify. The developer's only job is to point and speak.

### Three Operating Modes

| Mode | Flow | Use Case |
|------|------|----------|
| **Full Agent** | Camera → on-device analysis → laptop agent → fix → test → verify | Complex bugs, full autonomous debugging |
| **Copilot Bridge** | Camera → on-device analysis → smart prompt → clipboard sync → paste into any tool | Developer prefers Cursor/Copilot, or wants to stay in control |
| **Quick Capture** | Camera → OCR → raw text → clipboard sync | Just need the error text without typing it |

The modes are progressive: Quick Capture works instantly. Copilot Bridge adds on-device intelligence. Full Agent adds autonomous execution. The developer can start simple and graduate to full autonomy as trust builds.

**The Loop:**

```
POINT  (Phone camera)   →  See the error, read it on-device
SPEAK  (Phone mic)      →  "Fix this and run the tests"
FIXED  (Laptop agent)   →  Search → Patch → Test → Verify → Report back
```

**Before DevLens:** Screenshot → paste into chat → read answer → manually apply → hope it works

**With DevLens:** Point → Speak → Watch it fix → See it verified

---

## USP

**What makes your approach different?**

> **"Point. Speak. Fixed."** — The first developer tool with eyes and ears.

### The Core Innovation: Intelligence Inversion

Every existing AI dev tool puts intelligence in the cloud and the UI on a device. DevLens **inverts this**: intelligence lives on-device (Snapdragon NPU + Gemini Nano), execution lives on the laptop. The phone is the brain, not the display.

### Research-Backed Differentiation

| Dimension | Existing Tools | DevLens | Evidence |
|---|---|---|---|
| **Context modality** | Text-only (code files) | Multi-sensory (camera + voice + code + tests + git) | NOFire 2026: "60-point accuracy gap between single-modal and multi-modal is structural, not tunable" |
| **Debugging time target** | Helps with the fix (13% of debug time) | Accelerates mental model building (57% of debug time) | ACM Grounded Theory of Debugging 2026: "57% of time is mental model updating" |
| **Visual perception** | Downscaled screenshots (broken) | Active, pointed, region-level camera capture | FailureMem 2026: "active perception > full-page screenshots"; Claude Code #48492: "aggressively downscaled" |
| **Context switches** | 4-6 per debug cycle (23 min recovery each) | Zero (camera + voice = no app switching) | Dr. Gloria Mark: "23 min to regain focus after interruption" |
| **Failure memory** | Stateless (each prompt from zero) | Session memory + failure memory bank | FailureMem 2026: "failure memory bank improves repair rate +3.7%" |
| **Verification** | Suggest, hope it works | Suggest → apply → test → prove → report | Devin 2026: "46% rejection rate" proves unverified fixes fail |
| **Developer control** | Full keyboard OR fully autonomous | Natural oversight (camera + voice) without switching cost | Devin rejection problem: autonomy without oversight fails |

### Specific Differentiators

1. **Active Visual Perception** — Phone camera provides region-level, targeted visual grounding. Academically proven superior to full-screenshot approaches (FailureMem, CUADebugger 2026).
2. **Developer Context Graph** — A living knowledge graph built from multi-modal observations (visual + voice + code + runtime + temporal + human intent). Richer than any pure-code graph.
3. **Intelligence Inversion** — On-device AI for perception, classification, hypothesis generation. Cloud only for complex multi-file reasoning. Privacy-preserving by architecture.
4. **Zero-Context-Switch Interface** — Camera + voice means the developer never leaves their debugging flow. Eliminates the 23-minute focus recovery cost.
5. **Verification Loop** — Does not just suggest. Applies → tests → proves → reports. Makes the 18% validation phase automatic.
6. **Architecture Drift Detection** — Whiteboard/drawing → code comparison. Validated by SeeRepo 2026: "visual representations improve fault localization."
7. **Session Debugging Memory** — Remembers what was tried, what failed, what worked. Prevents repeated failures within a session.
8. **Copilot Bridge Mode** — DevLens does not require developers to abandon their existing tools. Camera capture → on-device analysis → context-rich prompt generated → synced to laptop clipboard via Office Kit. Paste into Cursor, Claude Code, Copilot, or any tool. DevLens becomes the perception layer for the entire AI toolchain, not just its own agent.

---

## Working MVP / Prototype

### Current State

We have built and validated:

1. **Technical Architecture** — Fully designed phone ↔ laptop communication protocol
2. **CameraX + ML Kit Pipeline** — Proven real-time OCR on Android using ML Kit Text Recognition v2
3. **WebSocket Bridge Design** — OkHttp (Android) ↔ ws/node-pty (Node.js) communication layer
4. **Agent Execution Design** — File search, patch generation, terminal execution, test running
5. **OpenRouter Integration** — API wrapper for multi-model routing with intelligent fallback
6. **Feasibility Validation** — Every component individually verified against iQOO 15 hardware specs

### What Exists Today

- Project architecture and protocol specifications
- Feasibility study with component-level validation
- Dependency verification (all APIs confirmed available on iQOO 15 + OriginOS 6)
- Time-boxed build plan for 30 hours

### 30-Hour Build Plan

| Phase | Hours | Deliverable |
|---|---|---|
| Setup & Pairing | 0–1 | Office Kit paired, project cloned, dependencies ready |
| Camera Pipeline | 1–4 | CameraX + ML Kit OCR working on loaner device |
| Voice Pipeline | 4–6 | Speech → text → intent classification working |
| WebSocket Bridge | 6–9 | Phone ↔ laptop bidirectional communication |
| Agent: File Search | 9–11 | Find relevant files from error context |
| Agent: Patch + Apply | 11–14 | Generate and apply code fixes |
| Agent: Test + Verify | 14–16 | Run tests, stream results to phone |
| Gemini Nano Integration | 16–18 | On-device reasoning for routing + classification |
| Whiteboard → Code | 18–21 | Architecture drift detection from camera |
| UI Polish | 21–24 | Clean Compose UI, status indicators, chat |
| Session Memory | 24–26 | Conversation context persistence |
| Demo Prep | 26–28 | Demo script, rehearsal, edge case fixes |
| Buffer | 28–30 | Bug fixes, final testing, pitch prep |

### Scope: Ships vs. Does Not Ship

| Ships (30h MVP) | Does Not Ship (Post-Hackathon) |
|---|---|
| Camera → Error → Fix → Verify | Multi-project support |
| Voice commands | Custom agent templates |
| Office Kit bridge | Team collaboration |
| On-device AI (OCR + Speech + Nano) | Enterprise deployment |
| Whiteboard → Architecture mapping | CI/CD integration |
| Session memory (in-memory) | Persistent database |
| Single demo project | Arbitrary repo support |

---

## Team

**Team Arize** — 3 members, full-spectrum coverage across mobile, backend, and AI.

| Member | Role | Responsibilities |
|--------|------|-----------------|
| **Adit Jain** (Leader) | Mobile Dev Lead | Android app, CameraX, ML Kit, Jetpack Compose UI, on-device AI integration |
| **Ayush Pandey** | Agent / Backend Dev | Laptop daemon, Node.js agent orchestration, OpenRouter integration, terminal automation |
| **Mehir Singh** | Integration / Demo | WebSocket bridge, Office Kit integration, demo scripting, pitch delivery |

**Contact:** aditjain2005@gmail.com

---

## Usefulness & Impact

### Target Users

**Primary — The 11 PM debugger.** Any developer who spends more time explaining a bug to an AI tool than it would take to fix it manually. DevLens eliminates the explanation step entirely.

**Secondary — The code reviewer on the move.** An engineer who gets a PR notification, needs to understand the change, but is not at a desk. DevLens scans the diff, ranks by blast radius, and lets them approve by voice.

**Tertiary — The junior developer learning to debug.** Watching DevLens's reasoning chain — "I see this error → it's likely caused by → here's the relevant file → the git diff shows this changed yesterday" — teaches debugging methodology by example.

### Head-to-Head Comparison

| User Need | Cursor / Claude Code | Devin | DevLens |
|---|---|---|---|
| "Read this error from my terminal" | Cannot (text-only input) | Cannot (ticket-based) | Camera reads it in 100ms |
| "What changed since it last worked?" | Developer must run git log manually | Searches repo autonomously but 46% wrong | Checks git diff automatically, correlated with visual error |
| "Fix it and prove it works" | Suggests fix, developer applies manually | Applies fix, 46% of fixes rejected | Applies fix, runs tests, reports verified result |
| "Remember we already tried X" | Stateless — every prompt is fresh | Cross-session memory | Session memory with full debugging context graph |
| "I can't type right now" | No voice input | No voice input | Full voice command interface |

### Why Now

1. **Gemini Nano** became production-ready on Android in 2025-2026 — multimodal on-device inference was not possible before.
2. **Snapdragon NPU at 45+ TOPS** — the hardware can now run meaningful AI locally.
3. **Developer frustration with chat-only AI** is peaking — "I spend more time prompting than debugging" is a common complaint in engineering communities.
4. **Phone cameras at 50MP** now rival dedicated scanners — ML Kit OCR accuracy on modern hardware is sufficient for code-level text recognition.
5. **The iQOO hackathon** exists — phone-first AI development is explicitly incentivized.

---

## Scalability

### Phase 1: Hackathon MVP

- Core loop: Point → Speak → Fixed
- Voice commands (fix, explain, test, undo)
- Single project, single language
- Session memory (in-memory)
- Architecture drift detection (whiteboard → code comparison)

### Phase 2: Developer Product (1–3 Months)

- **Multi-language support** via OpenRouter model routing
- **Persistent debugging history** — every session's Context Graph saved to a timeline
- **Blast-radius ranking** — GLANCE-style diff ranking by impact (callers, dependents)
- **Incident report generation** — one-tap summary of what broke, why, how it was fixed, and what to watch for
- **VS Code extension** — receives DevLens commands, highlights affected files

### Phase 3: Team Platform (6+ Months)

- **Shared debugging sessions** — team members see the same Context Graph
- **Debugging playbooks** — "when you see this error pattern, try these steps first"
- **CI/CD integration** — point phone at a failing pipeline dashboard, DevLens investigates
- **Cross-platform** — iOS app, desktop companion
- **Enterprise** — on-premises deployment, SOC2, audit logging

### Business Model

| Tier | Price | Includes |
|---|---|---|
| Free | $0 | Camera OCR + voice + on-device classification (no cloud, no cost) |
| Pro | $15/mo | Cloud reasoning via OpenRouter, persistent history, incident reports |
| Team | $40/seat/mo | Shared sessions, blast-radius analysis, playbooks |
| Enterprise | Custom | Self-hosted, custom agents, compliance |

---

## Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────┐
│                     iQOO PHONE                          │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌────────────────────┐   │
│  │ CameraX  │  │  Voice   │  │  Gemini Nano       │   │
│  │ + ML Kit │  │ (ML Kit  │  │  (AICore)          │   │
│  │ OCR      │  │  Speech) │  │  On-device reason  │   │
│  └────┬─────┘  └────┬─────┘  └─────────┬──────────┘   │
│       │              │                   │              │
│       └──────────────┼───────────────────┘              │
│                      ↓                                  │
│           ┌──────────────────────┐                      │
│           │   Context Engine     │                      │
│           │   (classify, route)  │                      │
│           └──────────┬───────────┘                      │
│                      │                                  │
│           ┌──────────────────────┐                      │
│           │   Compose UI         │                      │
│           │   Camera + Chat +    │                      │
│           │   Results + Status   │                      │
│           └──────────┬───────────┘                      │
│                      │                                  │
└──────────────────────┼──────────────────────────────────┘
                       │
            WebSocket (OkHttp) over local Wi-Fi
            + iQOO Office Kit (screen mirror, files, control)
                       │
┌──────────────────────┼──────────────────────────────────┐
│                      ↓                                  │
│              LAPTOP DAEMON (Node.js)                    │
│                                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │              Agent Orchestrator                   │  │
│  │  Intent Router → Tool Selection → Execution      │  │
│  └───────────────────────┬──────────────────────────┘  │
│                          │                              │
│  ┌───────────┬───────────┼───────────┬───────────┐    │
│  │ File      │ Terminal  │ Git       │ Test      │    │
│  │ Search /  │ (node-pty)│ (simple-  │ Runner    │    │
│  │ Read /    │ Execute   │  git)     │ (spawn)   │    │
│  │ Write     │ Commands  │ History   │           │    │
│  └───────────┴───────────┴───────────┴───────────┘    │
│                          │                              │
│  ┌──────────────────────────────────────────────────┐  │
│  │              OpenRouter API                       │  │
│  │  Complex reasoning, patch generation, analysis   │  │
│  │  Model: auto-routed (Claude/GPT-4/Gemini/Llama) │  │
│  └──────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Intelligence Routing (Local vs. Cloud)

```
Input arrives on phone
       ↓
┌─────────────────────────────────┐
│    Complexity / Privacy Router  │
├─────────────────────────────────┤
│                                 │
│  Simple + Private → LOCAL       │
│  (OCR, speech, classification)  │
│  Runs on Snapdragon NPU        │
│                                 │
│  Complex Reasoning → CLOUD      │
│  (debugging, patch generation,  │
│   architecture analysis)        │
│  Runs via OpenRouter API        │
│                                 │
└─────────────────────────────────┘
```

### Communication Protocol (Phone ↔ Laptop)

```json
// Phone → Laptop (command)
{
  "type": "agent_request",
  "intent": "fix_error",
  "context": {
    "error_text": "TypeError: Cannot read properties of undefined (reading 'user')",
    "source_modality": "camera_ocr",
    "voice_instruction": "Fix this and run the tests",
    "on_device_analysis": "Null reference in auth middleware, likely missing validation",
    "session_context": ["Previous: investigated token expiry in JWT middleware"]
  }
}

// Laptop → Phone (result stream)
{
  "type": "agent_progress",
  "step": "verification",
  "data": {
    "action": "test_results",
    "output": "12 passing, 0 failing",
    "files_modified": ["src/middleware/auth.js"],
    "patch_summary": "Added null check before accessing user.id on line 47"
  }
}
```

---

## Phone-First Thinking

### The Phone is Central, Not Peripheral

| Phone Capability | Role in DevLens | Without Phone |
|---|---|---|
| **Camera** | Perceives errors, diagrams, documentation | Would need manual copy-paste |
| **Microphone** | Voice commands drive the agent | Would need typing |
| **NPU (Snapdragon)** | On-device OCR, speech, classification | Would need cloud for everything |
| **Gemini Nano** | Privacy-preserving image analysis | Sensitive data goes to cloud |
| **Always-on** | Continuous perception while laptop executes | Two-device attention split |
| **Office Kit** | Bridges phone perception to laptop action | No integration between devices |

### Red Light Phase Strategy

During 55% Red Light (phone-only via Office Kit):

1. Phone camera captures errors from mirrored laptop screen
2. Phone processes with on-device AI (HackTracker registers this)
3. Phone sends commands to laptop via Office Kit clipboard/remote control
4. Results mirror back to phone via Office Kit screen mirror
5. All interaction is phone-initiated — the phone IS the control surface

### The Phone is Not a Remote — It is the Brain

The key architectural decision: **intelligence lives on the phone, execution lives on the laptop.**

**Phone responsibilities:**
- Observes (camera, microphone)
- Understands (Gemini Nano, ML Kit)
- Decides (context routing, intent classification)
- Commands (sends structured instructions to laptop)
- Verifies (receives and displays results)

**Laptop responsibilities:**
- Executes (file ops, terminal, tests)
- Reasons deeply (cloud AI for complex tasks)
- Reports back (streams progress to phone)

---

## Device Performance

### Snapdragon 8 Elite Gen 5 NPU Usage

| Task | NPU Capability | Expected Performance |
|---|---|---|
| Real-time OCR | ML Kit Text Recognition | < 100ms per frame |
| Image Description | Gemini Nano multimodal | ~1.8s first token, 12 tok/s |
| Speech Transcription | ML Kit Speech (Basic) | Real-time streaming |
| Intent Classification | Gemini Nano Prompt API | ~500ms response |
| Error Pattern Matching | On-device regex + model | < 50ms |

### iQOO Office Kit Usage

| Office Kit Feature | DevLens Use Case |
|---|---|
| Screen Mirror | See laptop screen on phone → capture errors visually |
| Remote Control | Phone voice commands → keyboard/mouse actions on laptop |
| File Transfer | Send context files phone → laptop; receive results laptop → phone |
| Clipboard Sync | Quick text transfer between devices |

### Battery Strategy (30 Hours)

- **7000 mAh battery** on iQOO 15
- **NPU is 10x more power-efficient** than CPU for AI tasks
- **On-device inference** avoids radio usage (saves power vs. cloud calls)
- **Camera only active during capture moments** (not continuous)
- **Estimated:** 8–10 hours active use per full charge; venue has power outlets

---

## On-Device / Local Models

### What Runs Locally (No Cloud)

| Component | Model / API | Size | Latency |
|---|---|---|---|
| Text Recognition | ML Kit v2 (bundled) | ~20MB | < 100ms |
| Image Understanding | Gemini Nano (AICore) | ~1.8GB (shared) | 1.8s first, 12 tok/s |
| Speech Recognition | ML Kit GenAI Speech | System-managed | Real-time |
| Prompt / Classification | Gemini Nano Prompt API | Shared with above | ~500ms |
| Error Pattern Detection | Custom regex + heuristics | < 1MB | < 10ms |

### What Goes to Cloud (OpenRouter)

| Task | Why Cloud | Model |
|---|---|---|
| Multi-file debugging | Needs large context window | Claude / GPT-4 via OpenRouter |
| Patch generation | Complex code synthesis | Auto-routed best model |
| Architecture analysis | Long reasoning chains | Claude / Gemini Pro |
| Repository mapping | Full codebase understanding | Auto-routed |

### Privacy Architecture

```
Sensitive data (API keys, credentials on screen)
       ↓
Detected locally by Gemini Nano
       ↓
BLOCKED from cloud transmission
       ↓
"Potential secret detected. Processing locally only."
```

This is not a checkbox feature — it is architecturally meaningful because developers regularly have secrets visible on their screens.

---

## Supporting Links

| Resource | Link |
|---|---|
| GitHub Repository | *[To be created with scaffold]* |
| Architecture Diagram | See [Architecture](#architecture) section above |
| Feasibility Study | `docs/research/feasibility-study.md` |
| Demo Video | *[To be recorded with MVP prototype]* |
| Technology Validation | ML Kit GenAI confirmed on iQOO devices |

---

## Why Our Team Should Be Selected

1. **We did the research.** 10 peer-reviewed 2026 papers validate our architecture. We know WHY this works, not just what to build.
2. **The phone is not an afterthought.** Camera, voice, and on-device AI are not bolted on — they ARE the product. Remove the phone and DevLens does not work.
3. **We go end-to-end.** Both selected competitors (Repo Guardian, GLANCE) stop at review/analysis. DevLens observes, fixes, tests, AND verifies.
4. **HackTracker is maximized by design.** Camera usage, voice usage, on-device AI, and Office Kit are core to the workflow — not sprinkled in for points.
5. **We have a story that sticks.** "Point. Speak. Fixed." — judges will remember which team we are.
6. **We studied what wins.** The Delhi 1st place won with local-first execution. GLANCE won on writing quality and sharp technical insight. We incorporated both lessons.
7. **We ship working components.** Unlike concept prototypes and README-only submissions, we will demonstrate real CameraX + ML Kit + WebSocket functionality.

---

## Summary

**Point. Speak. Fixed.** DevLens is the first developer tool with eyes and ears. It sees what your coding copilot cannot — because your AI debugger should not need you to type what it could just see.
