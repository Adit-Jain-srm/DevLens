# DevLens — Design Specification v2

**iQOO Hackathon 2026 · Chennai · Sep 12–13 · Developer Tools Track**

> **"Point. Speak. Fixed."**
> *The first developer tool with eyes and ears.*

---

## Table of Contents

1. [Identity](#1-identity)
2. [Strategic Positioning](#2-strategic-positioning)
3. [Architecture: Intelligence Inversion](#3-architecture-intelligence-inversion)
4. [Product Design](#4-product-design)
5. [Technical Architecture](#5-technical-architecture)
6. [Communication Protocol](#6-communication-protocol)
7. [Signature Feature: Whiteboard Architecture Drift](#7-signature-feature-whiteboard-architecture-drift)
8. [Demo Script (5 Minutes)](#8-demo-script-5-minutes)
9. [19-Day Prep Plan](#9-19-day-prep-plan)
10. [Risk Mitigations](#10-risk-mitigations)
11. [Why This Wins](#11-why-this-wins)
12. [References](#12-references)

---

## 1. Identity

When judges reconvene and ask "which one was that?" — the answer is: "the one where you point the phone at the bug and say fix it."

### The Priya Scenario

It's 11:40 PM. Priya has been staring at the same bug for forty minutes. Her terminal shows a TypeError. Her browser console has CORS errors. The API docs say one thing, the actual response says another. She opens Cursor. Types "I'm getting a TypeError..." and stops. To explain this to the AI she'd need to screenshot the terminal, copy the console, paste Slack messages, point to the file, explain the history. Five minutes of context assembly for a question that might not be the right question.

So she guesses. Adds a null check. Runs tests. Three fail. Different error. Another guess. By 12:30 AM she finds it — a refactored middleware moved `req.user` to `req.auth.user`. Forty minutes. The fix was one line.

**With DevLens:** Point phone at terminal. "Fix this." Agent finds the renamed path in yesterday's git diff, patches the three route handlers, runs tests: "Fixed. 12 passing." Under 30 seconds.

---

## 2. Strategic Positioning

### 2.1 Evidence-Based Alignment

| Signal | Source | How DevLens Aligns |
|--------|--------|-------------------|
| 1st place Delhi iQOO Hackathon won with "100% local, no cloud" | Animesh Jantwal, LinkedIn [1] | On-device Gemini Nano as primary intelligence |
| Judges reward "a narrow thing done well" over ambitious platforms | DEV Community [2] | One loop: Observe → Reason → Act → Verify |
| HackTracker rewards on-device AI, camera, voice usage | Official iQOO scoring [3] | These ARE the product, not add-ons |
| Devin's 46% rejection rate proves autonomous-without-oversight fails | Devin 2026 Reviews [4] | Developer stays in control via voice |
| Cursor/Claude Code can't read screens reliably (downscale, blur) | Claude Code Issue #48492 [5] | Phone camera = high-fidelity perception |

### 2.2 Competitive Landscape

| Product | What It Does | DevLens Differentiation |
|---------|-------------|------------------------|
| **Devin** ($20/mo) | Autonomous cloud agent, async PRs | Phone-first, human-in-loop, real-time, on-device intelligence |
| **Cursor** (Desktop IDE) | In-editor AI assistance, text-only context | Multimodal (camera + voice), physical-world perception |
| **Claude Code** (Terminal) | Terminal agent, screenshot support (broken) | Reliable high-res camera capture, not downscaled screenshots |
| **Treena** (Mobile IDE) | Cloud agents from phone | On-device intelligence (not cloud relay), laptop execution |
| **OffCoder** (Android) | AI coding on phone, cloud sandboxes | Perceives YOUR environment, acts on YOUR laptop |
| **Claw Code Mobile** | Agent framework on Android | Camera + voice as input (not just terminal text) |
| **PocketShell** | Voice SSH client | Understands code context, not just terminal relay |
| **screenshot-to-code** (Web) | Screenshot → UI code | Screenshot → bug diagnosis → fix → verification |

### 2.3 The Gap

```
┌────────────────────────────────────────────────────┐
│                    PERCEPTION                      │
│       Camera · Voice · Physical World              │
│                                                    │
│       WHO DOES THIS FOR DEVELOPERS?                │
│                                                    │
│       Devin?    No. Text tickets only.             │
│       Cursor?   No. Code files only.               │
│       Claude?   No. Screenshots break.             │
│       Copilot?  No. Autocomplete only.             │
│                                                    │
│       ══════════════════════════════════            │
│       DevLens?  YES. Camera + Voice + NPU.         │
│       ══════════════════════════════════            │
└────────────────────────────────────────────────────┘
```

---

## 3. Architecture: Intelligence Inversion

### 3.1 Traditional AI Dev Tools

```
Developer → Text Input → Cloud AI → Text Response → Developer manually applies
                              ↑
                     Intelligence HERE
                     (cloud, latent, blind)
```

### 3.2 DevLens (Inverted)

```
Developer → Physical World → Phone Camera/Mic
                                    ↓
                    ┌──────────────────────────────┐
                    │       PHONE = THE BRAIN       │
                    │                               │
                    │  Perceive  (ML Kit OCR)       │
                    │  Understand (Gemini Nano)     │
                    │  Classify  (on-device)        │
                    │  Route     (local decision)   │
                    │  Control   (command center)   │
                    └───────────────┬──────────────┘
                                    │
                       Only EXECUTION delegated
                                    ↓
                    ┌──────────────────────────────┐
                    │      LAPTOP = THE HANDS       │
                    │                               │
                    │  Search files                 │
                    │  Apply patches                │
                    │  Run terminals                │
                    │  Execute tests                │
                    │  Report results               │
                    └──────────────────────────────┘
```

The phone isn't a remote. It isn't a display. It's where decisions are made. The laptop is a dumb executor that does what the phone tells it.

---

## 4. Product Design

### 4.1 Core Loop

```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  1. OBSERVE      Phone camera captures error/screen/diagram   │
│       ↓                                                        │
│  2. UNDERSTAND   Gemini Nano analyzes ON-DEVICE (no cloud)    │
│       ↓                                                        │
│  3. CONFIRM      Developer sees analysis, speaks "Fix it"     │
│       ↓                                                        │
│  4. EXECUTE      Laptop agent searches, patches, runs tests   │
│       ↓                                                        │
│  5. VERIFY       Results stream back to phone — PASS/FAIL     │
│       ↓                                                        │
│  6. EXPLAIN      Phone shows what changed and why             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### 4.2 Why CONFIRM (Step 3) Is Critical

- The developer ALWAYS sees what the phone understood before action is taken
- This prevents Devin's 46% rejection problem
- It makes the demo safe (if analysis is wrong, developer can correct it)
- It signals to judges that this is "developer amplification, not replacement"

### 4.3 Phone UI

```
┌──────────────────────────────────────────┐
│  DevLens                         [Mic] ● │  ← Always-visible voice toggle
├──────────────────────────────────────────┤
│                                          │
│         ┌──────────────────────┐         │
│         │                      │         │
│         │  CAMERA VIEWFINDER   │         │  ← Top 60%: Live camera
│         │                      │         │
│         │  [Error detected]    │         │  ← Overlay: real-time OCR
│         │                      │         │
│         └──────────────────────┘         │
│                                          │
├──────────────────────────────────────────┤
│  Analysis (on-device):                   │  ← Bottom 40%: Agent feed
│  "TypeError in auth middleware.          │
│   Null reference at line 47.             │
│   Confidence: 94%"                       │
│                                          │
│  Voice: "Fix it and run tests"           │  ← Voice command shown
│                                          │
│  Executing on laptop...                  │  ← Status
│  ├─ Searching files         ✓            │
│  ├─ Generating patch        ✓            │
│  ├─ Applying fix            ✓            │
│  └─ Running tests           ...          │
│                                          │
│  ✅ 12 tests passed, 0 failed           │  ← Result
│                                          │
├──────────────────────────────────────────┤
│  [Capture]    [Voice]    [History]       │  ← Bottom nav
└──────────────────────────────────────────┘
```

### 4.4 Advanced Capabilities (v2)

These features extend the core loop with deeper repository intelligence and document-grounded compliance.

**Code Graph & Blast-Radius Ranking**
- Laptop: tree-sitter parses full repo → call graph, import graph, type graph
- Graph serialized (~4-12 MB for 200k LOC) and synced to phone
- Bounded traversal: 2.5M tokens → 1,500-3,000 per query
- Every diff reordered by blast radius — riskiest changes surface first
- Risk score: callers × severity × recency of last failure

**Phone-First PR Review**
- GitHub push event webhooks → phone receives diff
- Code graph resolves diff to graph nodes
- Gemini Nano generates per-hunk summaries on-device
- Voice commands: approve, comment, request-changes
- Draft PR for mechanical fixes (null checks, missing imports)

**RAG Document Intelligence**
- Upload from phone camera (OCR), phone files, laptop transfer, or URL
- Supported: PDF, Markdown, Text, HTML, Word, Images
- Locally indexed into vector store (never leaves machine)
- Every fix validated against team docs before applying
- Use cases: API compliance, style guide enforcement, security policies, migration guides

**Gitflow-Aware Agent**
- Understands branch conventions (main, develop, feature/*, hotfix/*)
- Correlates errors with specific commits via git log
- Auto-selects the correct branch for fixes
- Stash safety: auto-stash before patches, auto-pop on revert

---

## 5. Technical Architecture

### 5.1 Phone Side (Kotlin + Jetpack Compose)

```
┌─────────────────────────────────────────────────────────────┐
│                        PHONE APP                            │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                PERCEPTION LAYER                       │  │
│  │                                                       │  │
│  │  CameraX (ImageAnalysis)                              │  │
│  │       ↓                                               │  │
│  │  ML Kit Text Recognition v2 (real-time OCR)           │  │
│  │       ↓                                               │  │
│  │  Error Pattern Detector (regex: stack traces, HTTP)   │  │
│  │       ↓                                               │  │
│  │  ML Kit GenAI Image Description (if not plain text)   │  │
│  └──────────────────────────┬────────────────────────────┘  │
│                              ↓                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │            INTELLIGENCE LAYER (ON-DEVICE)             │  │
│  │                                                       │  │
│  │  Gemini Nano Prompt API (via AICore):                 │  │
│  │    · Error classification                             │  │
│  │    · Severity assessment                              │  │
│  │    · Root cause hypothesis                            │  │
│  │    · Action plan generation                           │  │
│  │    · Privacy screening (detect secrets)               │  │
│  │                                                       │  │
│  │  ML Kit GenAI Speech Recognition:                     │  │
│  │    · Streaming transcription                          │  │
│  │    · Intent extraction (fix, explain, undo, test)     │  │
│  └──────────────────────────┬────────────────────────────┘  │
│                              ↓                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                  COMMAND LAYER                         │  │
│  │                                                       │  │
│  │  Intent Router:                                       │  │
│  │    "fix_error" → {file_search, patch, test}           │  │
│  │    "explain"   → {file_read, summarize}               │  │
│  │    "test"      → {test_runner}                        │  │
│  │    "undo"      → {git_revert}                         │  │
│  │    "show"      → {file_read, display}                 │  │
│  │                                                       │  │
│  │  Structured Command Builder:                          │  │
│  │    Packages intent + context into JSON command        │  │
│  │                                                       │  │
│  │  WebSocket Client (OkHttp):                           │  │
│  │    Sends command → Laptop                             │  │
│  │    Receives progress stream ← Laptop                  │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              UI LAYER (Jetpack Compose)                │  │
│  │                                                       │  │
│  │  CameraPreview (CameraX viewfinder)                   │  │
│  │  AnalysisOverlay (detected text, bounding boxes)      │  │
│  │  AgentFeed (scrolling action log)                     │  │
│  │  VoiceIndicator (recording state)                     │  │
│  │  ConnectionStatus (laptop link health)                │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 Laptop Side (Node.js + TypeScript)

```
┌─────────────────────────────────────────────────────────────┐
│                      LAPTOP DAEMON                          │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              COMMUNICATION LAYER                      │  │
│  │                                                       │  │
│  │  WebSocket Server (ws library, port 8765)             │  │
│  │    · Receives structured commands from phone          │  │
│  │    · Streams progress events back                     │  │
│  │    · Heartbeat / reconnection handling                │  │
│  │                                                       │  │
│  │  mDNS Advertisement (optional: auto-discovery)        │  │
│  │    OR: QR code with IP:port for quick pairing         │  │
│  └──────────────────────────┬────────────────────────────┘  │
│                              ↓                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │            EXECUTION LAYER (DUMB TOOLS)               │  │
│  │                                                       │  │
│  │  FileSearchTool:                                      │  │
│  │    glob + ripgrep → find files by pattern/text        │  │
│  │                                                       │  │
│  │  FileReadTool:                                        │  │
│  │    fs.readFile → return file contents                 │  │
│  │                                                       │  │
│  │  PatchTool:                                           │  │
│  │    Receive diff → apply with fs.writeFile             │  │
│  │    (git stash for safety before any change)           │  │
│  │                                                       │  │
│  │  TerminalTool:                                        │  │
│  │    node-pty → spawn shell → execute command           │  │
│  │    Stream stdout/stderr back via WebSocket            │  │
│  │                                                       │  │
│  │  TestRunnerTool:                                      │  │
│  │    Detect test framework → run tests → parse results  │  │
│  │                                                       │  │
│  │  GitTool:                                             │  │
│  │    simple-git → status, diff, revert, log             │  │
│  └──────────────────────────┬────────────────────────────┘  │
│                              ↓                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │        REASONING LAYER (CLOUD — ONLY WHEN NEEDED)     │  │
│  │                                                       │  │
│  │  OpenRouter API:                                      │  │
│  │    · Triggered ONLY for complex multi-file reasoning  │  │
│  │    · Patch generation (code synthesis)                │  │
│  │    · Architecture analysis                            │  │
│  │                                                       │  │
│  │  The phone decides IF this is needed.                 │  │
│  │  Simple errors → phone handles entirely.              │  │
│  │  Complex debugging → phone delegates to cloud.        │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. Communication Protocol

**Phone → Laptop (structured command):**

```json
{
  "id": "cmd_001",
  "type": "execute",
  "intent": "fix_error",
  "context": {
    "error_text": "TypeError: Cannot read properties of undefined (reading 'user')",
    "error_type": "null_reference",
    "severity": "high",
    "on_device_hypothesis": "Missing null check before object property access",
    "suggested_search": "user property access middleware auth",
    "voice_instruction": "Fix it and run the tests"
  },
  "tools_requested": ["file_search", "file_read", "patch", "test_run"],
  "cloud_reasoning_needed": true
}
```

**Laptop → Phone (progress stream):**

```json
{ "id": "cmd_001", "step": 1, "tool": "file_search",   "status": "complete", "result": "Found: src/middleware/auth.js" }
{ "id": "cmd_001", "step": 2, "tool": "file_read",     "status": "complete", "result": "Line 47: const id = req.user.id" }
{ "id": "cmd_001", "step": 3, "tool": "cloud_reason",  "status": "complete", "result": "Patch: add null check" }
{ "id": "cmd_001", "step": 4, "tool": "patch",         "status": "complete", "result": "Applied to auth.js:47" }
{ "id": "cmd_001", "step": 5, "tool": "test_run",      "status": "complete", "result": "12 pass, 0 fail" }
{ "id": "cmd_001", "type": "complete", "summary": "Fixed null reference. All tests passing." }
```

---

## 7. Signature Feature: Whiteboard Architecture Drift

### 7.1 How It Works

1. Developer draws architecture on paper or whiteboard (or points at an existing diagram)
2. Phone camera captures the drawing
3. On-device: ML Kit OCR + Gemini Nano extracts component names and relationships
4. Phone sends component list to laptop
5. Laptop scans repository structure, `package.json`, imports
6. Cloud AI compares drawn architecture vs actual code structure
7. Reports drift: "Your diagram shows Redis caching, but no Redis dependency exists"

### 7.2 Why This Is the Differentiator

- Zero external hardware (just paper and a marker)
- Makes the camera essential — cannot replicate without it
- Visually dramatic in 30 seconds of demo time
- Demonstrates intelligence inversion (phone understands the drawing, laptop just scans files)
- No competitor offers this capability

### 7.3 Technical Flow

```
Camera Frame
     ↓
ML Kit OCR (extracts text labels: "Auth", "API", "Redis", "DB")
     ↓
Gemini Nano: "Given these labels and spatial positions,
  describe the architecture: components, connections, data flow"
     ↓
On-device output:
  { components: ["Auth Service", "API Gateway", "Redis Cache", "PostgreSQL"],
    connections: [["API Gateway", "Auth Service"], ["Auth Service", "Redis Cache"]] }
     ↓
Send to laptop: "Map these components to the repository"
     ↓
Laptop: scan package.json, directory tree, import statements
     ↓
Cloud AI: "Compare drawn architecture vs found code structure"
     ↓
Result: "DRIFT: Redis Cache in diagram but no redis/ioredis in package.json"
```

---

## 8. Demo Script (5 Minutes)

Setup: Phone pointed at laptop. Laptop has a Node.js project with a deliberate bug open.

**[0:00–0:20] Act 1 — The Problem**

> "It's 11:40 PM. You've been staring at the same bug for forty minutes. The error is in the terminal. The context is in the browser, the docs, the IDE, and a Slack thread from yesterday. Your AI assistant needs you to screenshot, copy, paste, and explain — five minutes just to ask the right question. DevLens changes that."

**[0:20–1:20] Act 2 — Visual Error Detection**

- Terminal shows `TypeError: Cannot read properties of undefined (reading 'user')`
- Point phone at screen
- Phone overlays: "Error detected: null reference"
- Phone shows on-device analysis: "Missing validation before user object access. auth.js likely."
- **Judge takeaway:** Intelligence is on the phone. Not cloud. Instant.

**[1:20–2:20] Act 3 — Voice Fix**

- Developer speaks: "Fix it and run the tests"
- Phone shows: transcription → intent → command sent
- Laptop terminal streams: searching → patching → testing
- Phone displays: "✅ 12 tests passed. Fix: added null check at line 47."
- **Judge takeaway:** Complete loop. Observe → Reason → Act → Verify.

**[2:20–3:50] Act 4 — Architecture Drift (The Signature Moment)**

- Developer grabs paper and draws: `App → API → Cache → DB`
- Points phone at it
- Phone: "I see an architecture diagram: App, API Gateway, Redis Cache, Database"
- Phone sends to laptop for comparison
- Result: "DRIFT: Your diagram shows Redis Cache but the project has no Redis dependency."
- Developer: "Add Redis"
- Agent: installs package, creates cache layer file, updates configuration
- **Judge takeaway:** Physical world → digital world reasoning. Only possible with a phone camera.

**[3:50–4:20] Act 5 — Close**

> "Point. Speak. Fixed. DevLens is the first developer tool with eyes and ears — because your AI debugger shouldn't need you to type what it could just see."

---

## 9. 19-Day Prep Plan

### Week 1: Foundation (Aug 25–31)

| Day | Task | Deliverable |
|-----|------|-------------|
| 1–2 | Android project scaffold | CameraX + ML Kit + Compose project compiling |
| 3–4 | ML Kit OCR pipeline | Camera → text extraction working on any Android device |
| 5–6 | WebSocket bridge | Phone connects to Node.js server, bidirectional JSON |
| 7 | Laptop daemon scaffold | node-pty + ws + file tools skeleton |

### Week 2: Integration (Sep 1–7)

| Day | Task | Deliverable |
|-----|------|-------------|
| 8–9 | Gemini Nano integration | AICore prompt API working (test on supported device) |
| 10–11 | Voice pipeline | ML Kit Speech or SpeechRecognizer → text → intent |
| 12–13 | Agent tools (laptop) | file_search, file_read, terminal execution working |
| 14 | OpenRouter wrapper | API calls with auto-routing, error handling |

### Week 3: Polish & Rehearse (Sep 8–11)

| Day | Task | Deliverable |
|-----|------|-------------|
| 15 | End-to-end test | Full loop: camera → OCR → voice → laptop fix → test → result |
| 16 | UI polish | Compose UI clean, status indicators functional |
| 17 | Demo rehearsal | Practice 5-minute script 3 times minimum |
| 18 | Demo project prep | Node.js project with deliberate bug + architecture to draw |

### Scope Boundary

**Before the hackathon (scaffolding only):**
- Project structure and dependencies configured
- Camera + ML Kit pipeline proven working
- WebSocket bridge skeleton
- Laptop daemon skeleton with tool interfaces
- OpenRouter client wrapper
- UI component library (camera view, chat feed, status bar)

**During the 30 hours (the product):**
- Complete end-to-end integration
- Gemini Nano intelligence routing
- Agent orchestration logic
- Architecture drift detection
- Session memory
- Demo polish and testing

---

## 10. Risk Mitigations

| Risk | Probability | Mitigation |
|------|-------------|------------|
| Gemini Nano not on loaner device | 20% | Fall back to on-device regex + pattern matching for classification; use OpenRouter for reasoning |
| Demo fails on stage | 15% | Pre-record backup video; have 2 demo scenarios ready; practice 5x |
| WebSocket drops during demo | 10% | Auto-reconnect; visual indicator; use Office Kit clipboard as emergency fallback |
| OCR misreads error text | 10% | Show confidence score; allow manual correction via voice; use clean error text for demo |
| Architecture drift not ready in time | 25% | P2 feature. Core loop (observe → fix → verify) is a complete, winning product without it |
| Another team attempts similar concept | 5% | Intelligence inversion + on-device execution makes DevLens structurally different even if concepts overlap |

---

## 11. Why This Wins

1. **Novel architecture** — intelligence inversion places decision-making on the phone, not the cloud
2. **Mirrors the winning formula** — Delhi 1st place won with on-device, local-first; DevLens does the same
3. **Maximizes HackTracker naturally** — camera, voice, and on-device AI are the product, not add-ons
4. **Memorable identity** — "phone is the brain, laptop is the hands" survives judge deliberation
5. **Dramatic visual demo** — point camera at bug, see fix applied, watch tests pass
6. **Developer-in-the-loop** — human confirms before execution, preventing Devin's 46% rejection failure mode
7. **Defensible technical depth** — multi-layer on-device AI + hybrid routing + WebSocket bridge
8. **No external hardware** — paper and a marker are all the wow feature needs
9. **Complete product story** — one loop, perfectly executed, not a prototype or a platform
10. **Clear scalability narrative** — MVP today, product tomorrow, but judges see the focus

---

## 12. References

1. Animesh Jantwal. "Team DP on DAG secured 1st place." LinkedIn, 2026. https://www.linkedin.com/posts/animeshjantwal_proud-to-share-that-team-dp-on-dag-secured-activity-7469776197833474048-kl7l — *"No cloud, no internet — pure raw hardware optimization running 100% locally."*
2. Kurbat Aitaev. "What Judges Actually Score: Notes from a Year of Hackathon Judging." DEV Community, 2026. https://dev.to/kurbaitaev/what-judges-actually-score-notes-from-a-year-of-hackathon-judging-3p4l — *"A narrow thing done well beats an ambitious broken platform every time."*
3. iQOO x Reskilll. "Official Hackathon Guide and Scoring." https://iqoo.reskilll.com/guide
4. Litmus Tools. "Devin AI Review 2026." https://litmustools.com/review/devin/ — *46% rejection rate; best at narrow, boring, well-scoped work.*
5. Anthropic. "Claude Code Issue #48492: Screenshot Downscaling." GitHub. https://github.com/anthropics/claude-code/issues/48492 — *Screenshots aggressively downscaled, model can't read small text.*
6. Google. "ML Kit GenAI Documentation." https://developers.google.com/ml-kit/genai — *iQOO devices explicitly listed in supported devices.*
7. Qualcomm. "Snapdragon 8 Gen 3 Product Brief." https://www.qualcomm.com/content/dam/qcomm-martech/dm-assets/documents/Snapdragon-8-Gen-3-SM8650-Q-AB-Product-Brief.pdf — *45+ TOPS, supports up to 10B parameter models on-device.*
8. Atomic Robot. "ML Kit On-Device OCR for Android." https://atomicrobot.com/blog/mlkit-on-device-ocr-android/ — *Production-ready, <100ms per frame on flagship devices.*
9. Kevin Xu. "Android Multimodal On-Device AI: Deep Engineering Notes." https://xckevin.com/en/blog/android-multimodal-on-device-ai/ — *~1.8s first token, 12 tok/s generation on Pixel 8 Pro.*
10. OpenRouter. "Client SDKs Overview." https://openrouter.ai/docs/client-sdks/overview — *400+ models, auto-routing, Flutter SDK available.*
11. tests.ws. "Kotlin Android WebSocket Guide." https://tests.ws/guides/kotlin-android-websocket — *Production-ready OkHttp WebSocket, handles reconnection, lifecycle-aware.*
12. Mingooland. "How to Win a Hackathon: Notes from the Judging Table." 2026. https://mingooland.com/2026/06/how-to-win-a-hackathon-notes-from-the-judging-table/ — *"Put the judge in the shoes of the user and walk them through what happens."*
13. Nithin K. "iQOO Hackathon KhataOS." LinkedIn, 2026. https://www.linkedin.com/posts/nithin-k18_hackathon-iqoohackathon-agenticai-activity-7476715757213765633-3U86 — *"Architecture was one of the strongest in the room."*
14. iQOO. "OriginOS 6: Office Kit." https://www.iqoo.com/en/originos — *Screen mirror + file transfer + remote control + clipboard sync.*
15. Picovoice. "Android Speech Recognition Guide." https://picovoice.ai/blog/android-speech-recognition/ — *ML Kit GenAI Speech: API 31+, on-device, streaming.*
