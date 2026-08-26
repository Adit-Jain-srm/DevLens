# DevLens — Design Specification (v2: Winning Edition)

## iQOO Hackathon 2026 · Chennai · Sep 12-13 · Developer Tools Track

---

## One-Line Identity (What Judges Remember)

> **"Point. Speak. Fixed."**

*The first developer tool with eyes and ears.*

When judges reconvene and ask "which one was that?" — the answer is: "the one where you point the phone at the bug and say fix it."

### The Scenario That Makes You Feel It

It's 11:40 PM. Priya has been staring at the same bug for forty minutes. Her terminal shows a TypeError. Her browser console has CORS errors. The API docs say one thing, the actual response says another. She opens Cursor. Types "I'm getting a TypeError..." and stops. To explain this to the AI she'd need to screenshot the terminal, copy the console, paste Slack messages, point to the file, explain the history. Five minutes of context assembly for a question that might not be the right question.

So she guesses. Adds a null check. Runs tests. Three fail. Different error. Another guess. By 12:30 AM she finds it — a refactored middleware moved `req.user` to `req.auth.user`. Forty minutes. The fix was one line.

**With DevLens:** Point phone at terminal. "Fix this." Agent finds the renamed path in yesterday's git diff, patches the three route handlers, runs tests: "Fixed. 12 passing." Under 30 seconds.

---

## Strategic Positioning

### Why This Wins (Evidence-Based)

| Signal | Source | How DevLens Aligns |
|--------|--------|-------------------|
| 1st place Delhi iQOO Hackathon won with "100% local, no cloud" | [Animesh Jantwal, LinkedIn](https://www.linkedin.com/posts/animeshjantwal_proud-to-share-that-team-dp-on-dag-secured-activity-7469776197833474048-kl7l) | On-device Gemini Nano as primary intelligence |
| Judges reward "a narrow thing done well" over ambitious platforms | [DEV Community: What Judges Actually Score](https://dev.to/kurbaitaev/what-judges-actually-score-notes-from-a-year-of-hackathon-judging-3p4l) | One loop: Observe → Reason → Act → Verify |
| HackTracker rewards on-device AI, camera, voice usage | [Official iQOO scoring](https://iqoo.reskilll.com/guide) | These ARE the product, not add-ons |
| Devin's 46% rejection rate proves autonomous-without-oversight fails | [Devin 2026 Reviews](https://litmustools.com/review/devin/) | Developer stays in control via voice |
| Cursor/Claude Code can't read screens reliably (downscale, blur) | [Claude Code Issue #48492](https://github.com/anthropics/claude-code/issues/48492) | Phone camera = high-fidelity perception |

### Competitive Landscape (Referenced)

| Product | What It Does | DevLens Differentiation |
|---------|-------------|------------------------|
| **Devin** ($20/mo) | Autonomous cloud agent, async PRs | DevLens: phone-first, human-in-loop, real-time, on-device intelligence |
| **Cursor** (Desktop IDE) | In-editor AI assistance, text-only context | DevLens: multimodal (camera + voice), physical-world perception |
| **Claude Code** (Terminal) | Terminal agent, screenshot support (broken) | DevLens: reliable high-res camera capture, not downscaled screenshots |
| **Treena** (Mobile IDE) | Cloud agents from phone | DevLens: on-device intelligence (not cloud relay), laptop execution |
| **OffCoder** (Android) | AI coding on phone, cloud sandboxes | DevLens: perceives YOUR environment, acts on YOUR laptop |
| **Claw Code Mobile** | Agent framework on Android | DevLens: camera + voice as input (not just terminal text) |
| **PocketShell** | Voice SSH client | DevLens: understands code context, not just terminal relay |
| **screenshot-to-code** (Web) | Screenshot → UI code | DevLens: screenshot → bug diagnosis → fix → verification |

### The Gap Nobody Has Filled

```
                    ┌─────────────────────────────────────────────┐
                    │          PERCEPTION                          │
                    │  Camera · Voice · Physical World             │
                    │                                              │
                    │  WHO DOES THIS FOR DEVELOPERS?               │
                    │                                              │
                    │  Devin?     No. Text tickets only.           │
                    │  Cursor?    No. Code files only.             │
                    │  Claude?    No. Screenshots break.           │
                    │  Copilot?   No. Autocomplete only.           │
                    │                                              │
                    │  ═══════════════════════════════════         │
                    │  DevLens?   YES. Camera + Voice + NPU.       │
                    │  ═══════════════════════════════════         │
                    └─────────────────────────────────────────────┘
```

---

## The Novel Architecture: Intelligence Inversion

### Traditional AI Dev Tools

```
Developer → Text Input → Cloud AI → Text Response → Developer manually applies
                              ↑
                     Intelligence HERE
                     (cloud, latent, blind)
```

### DevLens (Inverted)

```
Developer → Physical World → Phone Camera/Mic
                                    ↓
                        ┌──────────────────────────┐
                        │   PHONE = THE BRAIN       │
                        │                           │
                        │   Perceive (ML Kit OCR)   │
                        │   Understand (Gemini Nano)│
                        │   Classify (on-device)    │
                        │   Route (local decision)  │
                        │   Control (command center) │
                        └──────────┬───────────────┘
                                   │
                          Only EXECUTION delegated
                                   ↓
                        ┌──────────────────────────┐
                        │   LAPTOP = THE HANDS      │
                        │                           │
                        │   Search files            │
                        │   Apply patches           │
                        │   Run terminals           │
                        │   Execute tests           │
                        │   Report results          │
                        └──────────────────────────┘
```

**This is the novel contribution.** The phone isn't a remote. It isn't a display. It's where decisions are made. The laptop is a dumb executor that does what the phone tells it.

---

## Product Design

### Core Loop (The Only Thing That Matters)

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   1. OBSERVE        Phone camera captures error/screen/diagram     │
│        ↓                                                            │
│   2. UNDERSTAND     Gemini Nano analyzes ON-DEVICE (no cloud)      │
│        ↓                                                            │
│   3. CONFIRM        Developer sees analysis, speaks "Fix it"       │
│        ↓                                                            │
│   4. EXECUTE        Laptop agent searches, patches, runs tests     │
│        ↓                                                            │
│   5. VERIFY         Results stream back to phone — PASS/FAIL       │
│        ↓                                                            │
│   6. EXPLAIN        Phone shows what changed and why               │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

### Why "CONFIRM" (Step 3) is Critical

From Approach B (Anti-Devin philosophy):
- The developer ALWAYS sees what the phone understood before action is taken
- This prevents Devin's 46% rejection problem
- It makes the demo safe (if analysis is wrong, developer can correct it)
- It shows judges that this is "developer amplification, not replacement"

### Phone UI Design (Minimal, Functional)

```
┌─────────────────────────────────────────┐
│  DevLens                        [Mic] 🔴│   ← Always-visible voice toggle
├─────────────────────────────────────────┤
│                                          │
│         ┌───────────────────────┐        │
│         │                       │        │
│         │   CAMERA VIEWFINDER   │        │   ← Top 60%: Live camera
│         │                       │        │
│         │   [Error detected]    │        │   ← Overlay: real-time OCR
│         │                       │        │
│         └───────────────────────┘        │
│                                          │
├─────────────────────────────────────────┤
│  🧠 On-device analysis:                 │   ← Bottom 40%: Agent feed
│  "TypeError in auth middleware.          │
│   Null reference at line 47.             │
│   Confidence: 94%"                       │
│                                          │
│  🎤 "Fix it and run tests"              │   ← Voice command shown
│                                          │
│  ⚡ Executing on laptop...               │   ← Status
│  ├─ Searching files         ✓            │
│  ├─ Generating patch        ✓            │
│  ├─ Applying fix            ✓            │
│  └─ Running tests           ⏳           │
│                                          │
│  ✅ 12 tests passed, 0 failed           │   ← Result
│                                          │
├─────────────────────────────────────────┤
│ [📷 Capture] [🎤 Voice] [📋 History]   │   ← Bottom nav
└─────────────────────────────────────────┘
```

---

## Technical Architecture (Detailed)

### Phone Side (Kotlin + Jetpack Compose)

```
┌─────────────────────────────────────────────────────────────────┐
│                         PHONE APP                                 │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              PERCEPTION LAYER                             │    │
│  │                                                           │    │
│  │  CameraX (ImageAnalysis)                                 │    │
│  │       ↓                                                   │    │
│  │  ML Kit Text Recognition v2 (real-time OCR)              │    │
│  │       ↓                                                   │    │
│  │  Error Pattern Detector (regex: stack traces, HTTP codes) │    │
│  │       ↓                                                   │    │
│  │  ML Kit GenAI Image Description (if not plain text)      │    │
│  └────────────────────────────┬────────────────────────────┘    │
│                               ↓                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              INTELLIGENCE LAYER (ON-DEVICE)               │    │
│  │                                                           │    │
│  │  Gemini Nano Prompt API (via AICore):                    │    │
│  │    • Error classification                                 │    │
│  │    • Severity assessment                                  │    │
│  │    • Root cause hypothesis                                │    │
│  │    • Action plan generation                               │    │
│  │    • Privacy screening (detect secrets)                   │    │
│  │                                                           │    │
│  │  ML Kit GenAI Speech Recognition:                        │    │
│  │    • Streaming transcription                              │    │
│  │    • Intent extraction (fix, explain, undo, test)        │    │
│  └────────────────────────────┬────────────────────────────┘    │
│                               ↓                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              COMMAND LAYER                                 │    │
│  │                                                           │    │
│  │  Intent Router:                                           │    │
│  │    "fix_error" → {file_search, patch, test}              │    │
│  │    "explain"   → {file_read, summarize}                  │    │
│  │    "test"      → {test_runner}                            │    │
│  │    "undo"      → {git_revert}                            │    │
│  │    "show"      → {file_read, display}                    │    │
│  │                                                           │    │
│  │  Structured Command Builder:                              │    │
│  │    Packages intent + context into JSON command            │    │
│  │                                                           │    │
│  │  WebSocket Client (OkHttp):                              │    │
│  │    Sends command → Laptop                                 │    │
│  │    Receives progress stream ← Laptop                     │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              UI LAYER (Jetpack Compose)                    │    │
│  │                                                           │    │
│  │  CameraPreview (CameraX viewfinder)                      │    │
│  │  AnalysisOverlay (detected text, bounding boxes)         │    │
│  │  AgentFeed (scrolling action log)                        │    │
│  │  VoiceIndicator (recording state)                        │    │
│  │  ConnectionStatus (laptop link health)                   │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

### Laptop Side (Node.js + TypeScript)

```
┌─────────────────────────────────────────────────────────────────┐
│                       LAPTOP DAEMON                               │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              COMMUNICATION LAYER                           │    │
│  │                                                           │    │
│  │  WebSocket Server (ws library, port 8765)                │    │
│  │    • Receives structured commands from phone              │    │
│  │    • Streams progress events back                         │    │
│  │    • Heartbeat / reconnection handling                    │    │
│  │                                                           │    │
│  │  mDNS Advertisement (optional: auto-discovery)           │    │
│  │    OR: QR code with IP:port for quick pairing            │    │
│  └────────────────────────────┬────────────────────────────┘    │
│                               ↓                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              EXECUTION LAYER (DUMB TOOLS)                 │    │
│  │                                                           │    │
│  │  FileSearchTool:                                          │    │
│  │    glob + ripgrep → find relevant files by pattern/text  │    │
│  │                                                           │    │
│  │  FileReadTool:                                            │    │
│  │    fs.readFile → return file contents                     │    │
│  │                                                           │    │
│  │  PatchTool:                                               │    │
│  │    Receive diff → apply with fs.writeFile                │    │
│  │    (git stash for safety before any change)              │    │
│  │                                                           │    │
│  │  TerminalTool:                                            │    │
│  │    node-pty → spawn shell → execute command              │    │
│  │    Stream stdout/stderr back via WebSocket               │    │
│  │                                                           │    │
│  │  TestRunnerTool:                                          │    │
│  │    Detect test framework → run tests → parse results     │    │
│  │                                                           │    │
│  │  GitTool:                                                 │    │
│  │    simple-git → status, diff, revert, log                │    │
│  └────────────────────────────┬────────────────────────────┘    │
│                               ↓                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │              REASONING LAYER (CLOUD — ONLY WHEN NEEDED)   │    │
│  │                                                           │    │
│  │  OpenRouter API:                                          │    │
│  │    • Triggered ONLY for complex multi-file reasoning     │    │
│  │    • Patch generation (code synthesis)                    │    │
│  │    • Architecture analysis                                │    │
│  │                                                           │    │
│  │  The phone decides IF this is needed.                     │    │
│  │  Simple errors → phone handles entirely.                 │    │
│  │  Complex debugging → phone delegates to cloud.           │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

### Communication Protocol

```json
// PHONE → LAPTOP: Structured command
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

// LAPTOP → PHONE: Progress stream
{ "id": "cmd_001", "step": 1, "tool": "file_search", "status": "complete", "result": "Found: src/middleware/auth.js" }
{ "id": "cmd_001", "step": 2, "tool": "file_read", "status": "complete", "result": "Line 47: const id = req.user.id" }
{ "id": "cmd_001", "step": 3, "tool": "cloud_reason", "status": "complete", "result": "Patch: add null check" }
{ "id": "cmd_001", "step": 4, "tool": "patch", "status": "complete", "result": "Applied to auth.js:47" }
{ "id": "cmd_001", "step": 5, "tool": "test_run", "status": "complete", "result": "12 pass, 0 fail" }
{ "id": "cmd_001", "type": "complete", "summary": "Fixed null reference. All tests passing." }
```

---

## The "Wow" Feature: Whiteboard → Architecture Drift

### What It Does

1. Developer draws architecture on paper/whiteboard (or points at existing diagram)
2. Phone camera captures it
3. On-device: ML Kit OCR + Gemini Nano extracts component names and relationships
4. Phone sends component list to laptop
5. Laptop scans repository structure, package.json, imports
6. Cloud AI compares drawn architecture vs actual code structure
7. Reports DRIFT: "Your diagram shows Redis caching, but no Redis dependency exists"

### Why It's the "Wow"

- Zero external hardware (just paper and a marker)
- Makes the camera ESSENTIAL (can't do this without it)
- Visually dramatic in 30 seconds of demo
- Demonstrates the intelligence inversion (phone understands the drawing, laptop just scans files)
- No competitor does this

### Technical Implementation

```
Camera Frame
     ↓
ML Kit OCR (extracts text labels: "Auth", "API", "Redis", "DB")
     ↓
Gemini Nano Prompt: "Given these labels and their spatial positions, 
describe the architecture: components, connections, data flow"
     ↓
On-device output: { components: ["Auth Service", "API Gateway", "Redis Cache", "PostgreSQL"], 
                     connections: [["API Gateway", "Auth Service"], ["Auth Service", "Redis Cache"]] }
     ↓
Send to laptop: "Map these components to the repository"
     ↓
Laptop: scan package.json, directory tree, import statements
     ↓
Cloud AI: "Compare drawn architecture vs found code structure. Report differences."
     ↓
Result: "DRIFT: Redis Cache appears in diagram but package.json has no redis/ioredis dependency"
```

---

## Demo Script (5 Minutes — Rehearsed)

### Setup (10s)
Phone pointed at laptop. Laptop has a Node.js project with a deliberate bug open.

### Act 1: The Problem (20s)
> "It's 11:40 PM. You've been staring at the same bug for forty minutes. The error is in the terminal. The context is in the browser, the docs, the IDE, and a Slack thread from yesterday. Your AI assistant needs you to screenshot, copy, paste, and explain — five minutes just to ask the right question. DevLens changes that."

### Act 2: Visual Error Detection (60s)
- Terminal shows `TypeError: Cannot read properties of undefined (reading 'user')`
- Point phone at screen
- Phone overlays: "Error detected: null reference"
- Phone shows on-device analysis: "Missing validation before user object access. auth.js likely."
- **Judges see:** Intelligence is ON THE PHONE. Not cloud. Instant.

### Act 3: Voice Fix (60s)
- Developer speaks: "Fix it and run the tests"
- Phone shows: transcription → intent → command sent
- Laptop terminal streams: searching → patching → testing
- Phone displays: "✅ 12 tests passed. Fix: added null check at line 47."
- **Judges see:** Complete loop. Observe → Reason → Act → Verify. Done.

### Act 4: Architecture Drift — THE WOW (90s)
- Developer grabs a piece of paper and draws: `App → API → Cache → DB`
- Points phone at it
- Phone: "I see an architecture diagram: App, API Gateway, Redis Cache, Database"
- Phone sends to laptop for comparison
- Result: "⚠️ DRIFT: Your diagram shows Redis Cache but the project has no Redis dependency. Missing component."
- Developer: "Add Redis"
- Agent: installs package, creates cache layer file, updates configuration
- **Judges see:** Physical world → digital world reasoning. Only possible with a phone camera.

### Act 5: Close (30s)
> "Point. Speak. Fixed. DevLens is the first developer tool with eyes and ears — because your AI debugger shouldn't need you to type what it could just see."

---

## 19-Day Pre-Hackathon Plan

### Week 1 (Aug 25 - Aug 31): Foundation

| Day | Task | Deliverable |
|-----|------|-------------|
| 1-2 | Android project scaffold | CameraX + ML Kit + Compose project compiling |
| 3-4 | ML Kit OCR pipeline | Camera → text extraction working on any Android device |
| 5-6 | WebSocket bridge | Phone connects to Node.js server, bidirectional JSON |
| 7 | Laptop daemon scaffold | node-pty + ws + file tools skeleton |

### Week 2 (Sep 1 - Sep 7): Integration

| Day | Task | Deliverable |
|-----|------|-------------|
| 8-9 | Gemini Nano integration | AICore prompt API working (test on supported device) |
| 10-11 | Voice pipeline | ML Kit Speech or SpeechRecognizer → text → intent |
| 12-13 | Agent tools (laptop) | file_search, file_read, terminal execution working |
| 14 | OpenRouter wrapper | API calls with auto-routing, error handling |

### Week 3 (Sep 8 - Sep 11): Polish & Rehearse

| Day | Task | Deliverable |
|-----|------|-------------|
| 15 | End-to-end test | Full loop: camera → OCR → voice → laptop fix → test → result |
| 16 | UI polish | Compose UI looks clean, status indicators work |
| 17 | Demo rehearsal | Practice the 5-minute script 3 times |
| 18 | Demo project prep | Node.js project with deliberate bug + architecture to draw |

### What's Built BEFORE the Hackathon (scaffolding only)

- Project structure and dependencies configured
- Camera + ML Kit pipeline proven working
- WebSocket bridge skeleton
- Laptop daemon skeleton with tool interfaces
- OpenRouter client wrapper
- UI component library (camera view, chat feed, status bar)

### What's Built DURING the 30 Hours (the actual product)

- Complete end-to-end integration
- Gemini Nano intelligence routing
- Agent orchestration logic
- Architecture drift detection feature
- Session memory
- Demo polish and testing

---

## Risk Mitigations (Updated)

| Risk | Probability | Mitigation |
|------|------------|-----------|
| Gemini Nano not on loaner device | 20% | Fall back to on-device regex + pattern matching for classification; use OpenRouter for reasoning |
| Demo fails on stage | 15% | Pre-record backup video; have 2 demo scenarios ready; practice 5x |
| WebSocket drops during demo | 10% | Auto-reconnect; visual indicator; use Office Kit clipboard as emergency fallback |
| OCR misreads error text | 10% | Show confidence score; allow manual correction via voice; have clean error text for demo |
| Not enough time for architecture drift | 25% | This is P2. If time runs out, core loop (observe→fix→verify) is still a complete, winning product |
| Other teams do similar concept | 5% | The "intelligence inversion" + on-device execution makes it structurally different even if concept overlaps |

---

## Why This Wins (Summary)

1. **Novel architecture** nobody else has (intelligence inversion)
2. **Mirrors the winning formula** from the Delhi 1st place (on-device, local-first)
3. **Naturally maximizes HackTracker** (camera + voice + on-device AI ARE the product)
4. **One-line identity** that survives judge deliberation ("phone is the brain, laptop is the hands")
5. **Dramatic visual demo** (point camera → see fix → tests pass)
6. **Developer-in-the-loop** prevents demo failures (human confirms before execution)
7. **Defensible technical depth** (multi-layer on-device AI + hybrid routing + WebSocket bridge)
8. **No external hardware dependencies** (paper and marker for the wow feature)
9. **Complete product story** (not a prototype, not a platform — one loop, perfectly executed)
10. **Clear scalability narrative** (MVP → product → platform, but judges see the focus)

---

## References

| Topic | Source | Key Insight |
|-------|--------|-------------|
| Delhi 1st place winner | [LinkedIn: Animesh Jantwal](https://www.linkedin.com/posts/animeshjantwal_proud-to-share-that-team-dp-on-dag-secured-activity-7469776197833474048-kl7l) | "No cloud, no internet — pure raw hardware optimization running 100% locally" |
| iQOO Hackathon KhataOS | [LinkedIn: Nithin K](https://www.linkedin.com/posts/nithin-k18_hackathon-iqoohackathon-agenticai-activity-7476715757213765633-3U86) | "Architecture was one of the strongest in the room" but Red Zone development was the challenge |
| What judges actually score | [DEV Community](https://dev.to/kurbaitaev/what-judges-actually-score-notes-from-a-year-of-hackathon-judging-3p4l) | "A narrow thing done well beats an ambitious broken platform every time" |
| Devin AI limitations | [Litmus Review 2026](https://litmustools.com/review/devin/) | 46% rejection rate; best at narrow, boring, well-scoped work |
| Claude Code vision bugs | [GitHub Issue #48492](https://github.com/anthropics/claude-code/issues/48492) | Screenshots aggressively downscaled, model can't read small text |
| ML Kit GenAI on iQOO | [Google ML Kit Docs](https://developers.google.com/ml-kit/genai) | iQOO devices explicitly listed in supported devices |
| Snapdragon NPU capabilities | [Qualcomm Product Brief](https://www.qualcomm.com/content/dam/qcomm-martech/dm-assets/documents/Snapdragon-8-Gen-3-SM8650-Q-AB-Product-Brief.pdf) | 45+ TOPS, supports up to 10B parameter models on-device |
| CameraX + ML Kit real-time OCR | [Atomic Robot Blog](https://atomicrobot.com/blog/mlkit-on-device-ocr-android/) | Production-ready, <100ms per frame on flagship devices |
| Gemini Nano multimodal latency | [Deep Android Engineering Notes](https://xckevin.com/en/blog/android-multimodal-on-device-ai/) | ~1.8s first token, 12 tok/s generation on Pixel 8 Pro |
| OpenRouter capabilities | [OpenRouter Docs](https://openrouter.ai/docs/client-sdks/overview) | 400+ models, auto-routing, Flutter SDK available |
| OkHttp WebSocket | [tests.ws Guide](https://tests.ws/guides/kotlin-android-websocket) | Production-ready, handles reconnection, lifecycle-aware |
| Hackathon winning strategy | [Mingooland](https://mingooland.com/2026/06/how-to-win-a-hackathon-notes-from-the-judging-table/) | "Put the judge in the shoes of the user and walk them through what happens" |
| iQOO Office Kit | [OriginOS 6](https://www.iqoo.com/en/originos) | Screen mirror + file transfer + remote control + clipboard sync |
| On-device speech 2026 | [Picovoice Guide](https://picovoice.ai/blog/android-speech-recognition/) | ML Kit GenAI Speech: API 31+, on-device, streaming |
