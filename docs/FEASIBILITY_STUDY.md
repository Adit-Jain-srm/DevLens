# DevLens — Deep Research & Feasibility Study

## iQOO Hackathon 2026 · City Battles · Developer Tools Track

---

## Executive Summary

**DevLens** is a phone-first multimodal AI developer agent that bridges the physical developer workspace (camera, voice, hardware) with the digital codebase (IDE, terminal, tests) — then investigates, acts, and verifies fixes through the laptop.

| Dimension | Assessment |
|-----------|-----------|
| Technical Feasibility | **HIGH** — All core components have proven Android APIs/libraries |
| 30-Hour Buildability | **MEDIUM-HIGH** — Requires disciplined MVP scoping |
| Hackathon Fit | **EXCELLENT** — Maps directly to all 6 scoring dimensions |
| Novelty | **HIGH** — No existing tool combines physical-world perception + agentic code execution |
| Demo Potential | **VERY HIGH** — Visually dramatic before/after story |

---

## 1. Hackathon Context & Scoring Alignment

### Confirmed Scoring Rubric (from official sources)

| Criterion | Weight | DevLens Strength |
|-----------|--------|-----------------|
| End Product Quality | 30% | Complete observe → fix → verify loop |
| Novelty & Impact | 20% | Physical + digital context fusion (unique) |
| Creative Phone Use (HackTracker) | 15% | Camera, microphone, on-device AI — all tracked |
| Technical Depth | 15% | Multi-agent architecture, hybrid AI routing, WebSocket bridge |
| Office Kit Usage (HackTracker) | 10% | Phone controls laptop IDE/terminal via Office Kit |
| Demo & Presentation | 10% | Highly visual 5-act demo story |

### Key Hackathon Constraints

- **30-hour build** (Sat 10:00 → Sun ~17:00)
- **55% Red Light** (phone-only via Office Kit, laptops restricted)
- **45% Green Light** (both devices)
- **iQOO loaner phone**: iQOO 15 series (Snapdragon 8 Elite Gen 5, 12-16GB RAM, OriginOS 6, Android 16)
- **HackTracker**: Automatically records camera, voice, on-device AI usage durations
- **Demo runs on phone**: Final pitch must execute on the iQOO device
- **Phone must have a REAL role**: Can't be just a display — must be central to the solution
- **Local/open-source model brownie points**: On-device inference is explicitly rewarded
- **External hardware NOT recommended**: Phone-first, software-first. External IoT carries risk.
- **Office Kit requires Windows 10+ or macOS 10.14.6+**: No Linux support
- **You stay for 30 hours**: Leaving midway = disqualification

### Track Selection

**Developer Tools** — "Build tools that help developers create, test, deploy, or collaborate faster using AI."

DevLens is a natural fit. It's a developer productivity tool that uses AI to bridge observation and action.

---

## 2. Hardware Platform Analysis

### iQOO 15 Series Specifications (Loaner Device)

| Component | Spec | Relevance to DevLens |
|-----------|------|---------------------|
| Chipset | Snapdragon 8 Elite Gen 5 (3nm) | NPU for on-device AI inference |
| NPU | Hexagon NPU, ~45+ TOPS INT8 | Runs quantized models locally |
| RAM | 12-16 GB LPDDR5X Ultra | Sufficient for model inference + app |
| Storage | 256-512 GB UFS 4.1 | Space for local models (~1-2 GB) |
| Camera | Triple 50MP (main + telephoto + ultrawide) | High-quality OCR, hardware recognition |
| Display | 6.85" 2K 144Hz AMOLED | Large canvas for developer UI |
| Battery | 7000 mAh | Sustained 30-hour operation |
| OS | Android 16, OriginOS 6 | ML Kit GenAI APIs, AICore access |
| Connectivity | Wi-Fi 7, Bluetooth 5.4 | Fast local network to laptop |

### On-Device AI Capabilities (Confirmed)

| Capability | API/Library | Status on iQOO 15 |
|-----------|-------------|-------------------|
| Text Recognition (OCR) | ML Kit Text Recognition v2 | **Available** — listed in supported devices |
| Image Description | ML Kit GenAI Image Description | **Available** — iQOO 15 confirmed |
| Speech Recognition | ML Kit GenAI Speech (Basic mode) | **Available** — API 31+ |
| Prompt API (Gemini Nano) | ML Kit GenAI Prompt API | **Available** — multimodal text+image |
| Summarization | ML Kit GenAI Summarization | **Available** |
| Object Detection | ML Kit Object Detection | **Available** (generic objects) |
| Custom TFLite Models | LiteRT (TFLite) + NPU delegate | **Available** — Qualcomm AI Engine Direct |

---

## 3. Technical Architecture — Feasibility Assessment

### 3.1 Phone Layer (Android App)

#### Framework Choice

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| **Kotlin + Jetpack Compose** | Native performance, best CameraX integration, full ML Kit access | Single-platform | **RECOMMENDED** |
| Flutter | Cross-platform, fast UI | Poor CameraX integration, ML Kit via plugins only | Not ideal |
| React Native | Fast UI iteration | No native camera/ML Kit access without bridges | Not suitable |

**Decision: Native Kotlin + Jetpack Compose**

Rationale: CameraX, ML Kit, AICore, and OkHttp WebSocket all have first-class Kotlin APIs. The phone IS the platform — cross-platform is unnecessary.

#### Camera/Perception Pipeline (PROVEN FEASIBLE)

```
CameraX ImageAnalysis
       ↓
ML Kit Text Recognition v2 (real-time OCR)
       ↓
ML Kit GenAI Image Description (Gemini Nano)
       ↓
Error Pattern Classifier (regex + local model)
       ↓
Context Engine
```

**Evidence:**
- CameraX + ML Kit OCR: Production-ready, real-time on flagship devices
- Latency: ~1.8s first-token for image+text on Gemini Nano multimodal
- Throughput: 12+ tokens/sec generation after first token
- ML Kit GenAI confirmed available on iQOO devices

#### Voice Pipeline (PROVEN FEASIBLE)

```
Microphone
       ↓
ML Kit Speech Recognition (Basic Mode, on-device)
       ↓
Transcript
       ↓
Intent Classification (Gemini Nano Prompt API)
       ↓
Agent Command
```

**Evidence:**
- ML Kit GenAI Speech Recognition: API 31+, on-device, streaming
- Alternative fallback: Android SpeechRecognizer API (widely available)
- Whisper.cpp via JNI: ~42MB model, fully offline, proven on Android

#### Phone → Laptop Communication (PROVEN FEASIBLE)

```
Android App
       ↓
OkHttp WebSocket Client
       ↓
Local Wi-Fi Network (same network)
       ↓
Laptop Daemon (Node.js / Python)
       ↓
Terminal (node-pty) + File System + Git
```

**Evidence:**
- OkHttp WebSocket: Battle-tested, production-ready
- node-pty + WebSocket: Powers VS Code's terminal, proven architecture
- Same-network discovery: mDNS/Bonjour or QR code pairing
- Alternative: Office Kit screen mirror + remote control for HackTracker points

### 3.2 Laptop Layer (Agent Daemon)

#### Technology Choice

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| **Node.js + TypeScript** | node-pty native, fast WebSocket, OpenRouter SDK | Single runtime | **RECOMMENDED** |
| Python | Rich AI ecosystem | node-pty equivalent (pty) less mature on Windows | Alternative |

#### Agent Orchestrator Architecture

```
WebSocket Server (receives commands from phone)
       ↓
Agent Router (classifies intent)
       ↓
┌─────────────────────────────────────────┐
│  Tool Execution Layer                    │
├──────────────┬──────────────┬───────────┤
│ File Search  │ File Read/   │ Terminal  │
│ (glob/grep)  │ Write/Patch  │ (node-pty)│
├──────────────┼──────────────┼───────────┤
│ Git Ops      │ Test Runner  │ Browser   │
│ (simple-git) │ (spawn)      │ (optional)│
└──────────────┴──────────────┴───────────┘
       ↓
OpenRouter API (complex reasoning)
       ↓
Response → Phone (WebSocket)
```

#### Cloud AI via OpenRouter (PROVEN FEASIBLE)

**Why OpenRouter:**
- Single API endpoint, OpenAI-compatible
- 400+ models (Claude, GPT-4, Gemini, Llama, etc.)
- Automatic provider failover
- `openrouter/auto` for intelligent model selection
- Free credits provided during hackathon weekend

**Integration:**
```typescript
// Drop-in OpenAI SDK compatibility
const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
  headers: { 'Authorization': `Bearer ${OPENROUTER_API_KEY}` },
  body: JSON.stringify({
    model: 'openrouter/auto', // or specific model
    messages: [{ role: 'user', content: contextualPrompt }]
  })
});
```

### 3.3 Office Kit Integration (REQUIRED FOR SCORING)

**What Office Kit provides:**
- Screen mirroring (phone sees laptop screen)
- File transfer (phone ↔ laptop)
- Remote control (phone drives laptop input)
- Clipboard sync

**How DevLens uses Office Kit:**
1. **Red Light Phase**: Phone mirrors laptop screen → camera captures errors from mirrored display
2. **File Transfer**: Phone sends captured context to laptop daemon; laptop sends results back
3. **Remote Control**: Voice commands from phone execute as keyboard/mouse on laptop
4. **Clipboard**: Copy error text from laptop screen to phone's context engine

**HackTracker Impact**: Using Office Kit continuously throughout the build scores the full 10%. Since DevLens's core workflow REQUIRES phone-laptop bridging, this is naturally maximized.

---

## 4. Complexity/Privacy Router (Local vs Cloud)

### Routing Decision Matrix

| Input Type | Complexity | Route | Rationale |
|-----------|-----------|-------|-----------|
| Camera → OCR text | Low | LOCAL (ML Kit) | Fast, private, offline |
| Camera → Image description | Low-Medium | LOCAL (Gemini Nano) | On-device multimodal |
| Voice → Transcript | Low | LOCAL (ML Kit Speech) | Low latency, privacy |
| Error classification | Low | LOCAL (regex + Nano) | Pattern matching |
| "Find the bug" | High | CLOUD (OpenRouter) | Multi-file reasoning |
| "Generate a patch" | High | CLOUD (OpenRouter) | Complex code generation |
| Architecture analysis | High | CLOUD (OpenRouter) | Long-context reasoning |
| Whiteboard → structure | Medium | HYBRID | Local OCR + Cloud reasoning |

### Why This Matters for Judging

- **Technical Depth (15%)**: Intelligent routing demonstrates architectural sophistication
- **Creative Phone Use (15%)**: On-device processing is tracked and rewarded
- **Novelty (20%)**: Hybrid local+cloud is explicitly called out as technically compelling

---

## 5. MVP Scope for 30-Hour Build

### What to Build (Ordered by Priority)

#### P0 — Core Loop (Must Ship)

| Feature | Time Estimate | Dependencies |
|---------|--------------|--------------|
| Camera → OCR → Error Detection | 3h | CameraX + ML Kit |
| Voice Input → Command | 2h | ML Kit Speech or SpeechRecognizer |
| WebSocket Phone ↔ Laptop Bridge | 3h | OkHttp + Node.js server |
| Laptop Agent: File Search + Read | 2h | glob + fs |
| Laptop Agent: Terminal Execution | 2h | node-pty |
| OpenRouter Integration (reasoning) | 2h | fetch + API key |
| Gemini Nano Context Analysis | 2h | ML Kit Prompt API |
| Basic UI (camera view + chat + results) | 3h | Jetpack Compose |
| **P0 Total** | **~19h** | |

#### P1 — Differentiators (Should Ship)

| Feature | Time Estimate | Dependencies |
|---------|--------------|--------------|
| Patch Generation + Application | 2h | diff + fs.writeFile |
| Test Runner + Verification | 1.5h | child_process.spawn |
| Session Memory (conversation context) | 1.5h | In-memory store |
| Office Kit Integration Points | 1h | Built-in OS feature |
| **P1 Total** | **~6h** | |

#### P2 — "Wow" Feature (One of)

| Feature | Time Estimate | Risk |
|---------|--------------|------|
| Hardware ↔ Code Reasoning (ESP32) | 3h | Medium (needs demo hardware) |
| Whiteboard → Repository Mapping | 2.5h | Low (OCR + LLM reasoning) |
| Architecture Drift Detection | 2h | Low (git + LLM comparison) |

#### Time Budget

```
Total Available: 30 hours (with sleep/breaks: ~22 effective coding hours)

P0 (Core Loop):        19h
P1 (Differentiators):   6h
P2 (Wow Feature):       2.5h
Buffer/Debug:           2.5h
                       ------
Total:                  30h
```

**Assessment: TIGHT but achievable for a team of 2-3 with prepared architecture.**

### What NOT to Build

- Complex custom UI animations
- Multi-language support
- Account/auth system
- Database persistence (in-memory is fine)
- Browser automation
- CI/CD integration
- Multi-project support

---

## 6. Risk Assessment & Mitigations

### Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|-----------|
| Gemini Nano not available on loaner device | LOW | HIGH | Fallback: OpenRouter for all reasoning; still use ML Kit OCR/Speech |
| Office Kit pairing issues | MEDIUM | MEDIUM | Pre-test with same-model iQOO; fallback to pure WebSocket |
| WebSocket connection drops | MEDIUM | LOW | Auto-reconnect with exponential backoff; connection status UI |
| OCR accuracy on complex errors | LOW | MEDIUM | Send full image to cloud if local OCR confidence < threshold |
| 30h insufficient for full MVP | MEDIUM | HIGH | Pre-build laptop daemon framework before hackathon |
| Hardware demo (ESP32) fails live | MEDIUM | LOW | Have whiteboard demo as backup "wow" feature |

### Strategic Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|-----------|
| Other teams build similar concept | LOW | MEDIUM | Physical-world perception is unique angle; demo hardware |
| Judges don't understand the technical depth | MEDIUM | MEDIUM | 5-minute demo script with clear before/after |
| HackTracker doesn't capture enough phone use | LOW | HIGH | Design workflow to maximize camera + voice + Office Kit time |
| Demo fails on stage | MEDIUM | HIGH | Pre-record backup video; practice demo 3x before pitch |

---

## 7. Competitive Landscape & Differentiation

### Existing Mobile Dev Tools (2026)

| Tool | What It Does | DevLens Differentiation |
|------|--------------|------------------------|
| Treena | Mobile IDE with cloud agents | No physical-world perception, no camera/hardware |
| OffCoder | AI coding on phone | Code-only, no multimodal context, no laptop bridge |
| Claw Code Mobile | Agent framework on Android | Terminal agent only, no camera/voice/hardware |
| Acode | Code editor + terminal | Editor, not an agent; no AI reasoning |
| PocketShell | Voice SSH client | Terminal control only, no code understanding |
| GitHub Copilot (Chat) | Code suggestions | Desktop-only, no physical context, no verification |
| Cursor / Windsurf | AI IDE | Desktop-only, text-only context |

### DevLens's Unique Position

**No existing tool combines:**
1. Phone camera as perception layer
2. Voice as command interface
3. On-device AI for privacy + speed
4. Laptop agent for code execution
5. Autonomous verify loop (not just generate)
6. Physical-to-digital context bridging

This is genuinely novel. The closest concept would be someone manually screenshotting → pasting into ChatGPT → manually applying fixes. DevLens automates the entire pipeline.

---

## 8. "Wow" Feature Deep Dive — Whiteboard/Screen → Repository Intelligence

### Why Pivot Away from Hardware ↔ Code

The organizers explicitly state: *"External hardware / IoT (ESP32, sensors, etc.) — Not recommended. This is a phone-first, software-first hackathon."* Carrying external hardware adds risk (sourcing, setup time, demo reliability) and the phone still has to be central.

### Why Whiteboard → Repository is the Strongest Choice Now

1. **Pure phone-first** — Only needs the camera (built into the loaner device)
2. **Zero external dependencies** — No hardware to source or fail
3. **Visually dramatic** — Draw architecture on paper/whiteboard, phone understands it
4. **Unique** — No existing tool maps hand-drawn architecture to actual code
5. **Demonstrates on-device AI** — OCR + Gemini Nano image understanding
6. **Works during Red Light** — Camera capture is phone-only activity

### Technical Approach

```
Phone Camera
       ↓
ML Kit Text Recognition (on-device OCR)
+ ML Kit Image Description (Gemini Nano)
"I see a diagram: Mobile App → API Gateway → Auth Service → Database"
       ↓
Send to Cloud (OpenRouter)
"Map these components to the project repository structure"
       ↓
Laptop Agent
- Scan: directory tree, package.json, route files
- Match: "Auth Service" → auth/controller.ts, auth/middleware.ts
       ↓
Cloud Reasoning — Drift Detection
"Your diagram shows an API Gateway, but the code routes directly to services"
       ↓
Report on Phone
"Architecture drift detected: API Gateway is drawn but not implemented"
```

### Demo Scenarios

**Scenario A: Whiteboard → Code Mapping**
- Draw a simple architecture on paper (available at any venue)
- Point phone camera at it
- DevLens maps each box to actual files in the repository
- Phone shows the mapping with file references

**Scenario B: Architecture Drift Detection**
- Draw what the architecture SHOULD be
- DevLens compares against what the code ACTUALLY does
- Identifies missing components, extra components, wrong connections

**Scenario C: Documentation → Bug Finding**
- Point phone at API documentation (on laptop screen via Office Kit mirror)
- DevLens: "Your docs say POST /users/{id}, but your code uses PUT"
- Identifies discrepancies between documentation and implementation

### Feasibility Assessment: VERY HIGH

- ML Kit OCR + Image Description: Confirmed on iQOO devices
- No external hardware needed
- LLM reasoning about architecture is well-established
- File scanning and pattern matching is trivial
- Demo is self-contained and completely reliable

---

## 9. Demo Script (5 Minutes)

### Act 1: The Problem (30s)

> "Developers don't debug in a clean text environment. They deal with terminals, browser consoles, whiteboards, and voice explanations. Current AI tools only see your code — DevLens sees your entire development world."

### Act 2: Visual Error Detection (60s)

- Point phone at laptop screen showing a `TypeError: Cannot read properties of undefined`
- Phone OCR detects error instantly (on-device, no cloud call)
- DevLens: "I see a TypeError in the auth middleware. Let me find the source."
- Laptop agent searches repository, identifies `authMiddleware.js:47`
- Shows the relevant code on phone with highlighted problem

### Act 3: Voice-Driven Fix (60s)

- Developer speaks: "Fix this bug and run the tests"
- Phone transcribes locally (on-device speech recognition)
- Command sent to laptop agent via Office Kit bridge
- Agent generates patch, applies it, runs `npm test`
- Results stream back: "12 tests passed, 0 failed"
- Phone displays green verification badge

### Act 4: Whiteboard → Code Intelligence (90s) — THE WOW MOMENT

- Draw simple architecture on a piece of paper: "Auth → API → DB"
- Point phone camera at it
- DevLens: "I see an architecture diagram with Auth Service, API Layer, and Database"
- DevLens maps to repository: "Auth Service → /src/auth/, API → /src/routes/, DB → /src/models/"
- DevLens detects drift: "Your diagram shows a caching layer, but no Redis dependency exists in package.json"
- Suggests: "Should I add Redis caching to match your architecture?"

### Act 5: Session Intelligence (30s)

- Developer: "Summarize what we fixed today"
- DevLens generates structured incident report from session memory
- Shows: Root cause, fix applied, tests verified, architecture findings

### Act 6: Close (30s)

> "DevLens sees what your coding copilot can't. It's the first developer tool that bridges observation, reasoning, action, and verification — all with the phone as the developer's eyes and voice."

---

## 10. Pre-Hackathon Preparation Checklist

### Code to Pre-Build (Allowed: frameworks/scaffolding, NOT the product)

- [ ] Android project scaffold (Compose, CameraX, ML Kit dependencies)
- [ ] Laptop daemon scaffold (Node.js, WebSocket, node-pty setup)
- [ ] OpenRouter client wrapper
- [ ] WebSocket protocol definition (JSON message types)
- [ ] Basic UI component library (camera view, chat bubbles, status indicators)

### Items to Bring

- [ ] Laptop (Windows 10+ or macOS 10.14.6+ — NO LINUX, Office Kit requirement)
- [ ] Laptop charger
- [ ] Phone stand/tripod (for camera-pointing demos)
- [ ] Whiteboard markers (for architecture drawing demo)
- [ ] Paper/notebook for hand-drawn architecture diagrams
- [ ] USB-C cable (for backup file transfer)

### Accounts to Set Up

- [ ] OpenRouter account + API key (free credits available)
- [ ] GitHub repository (for submission)
- [ ] Reskilll platform registration

### Knowledge to Prepare

- [ ] CameraX + ML Kit integration patterns
- [ ] OkHttp WebSocket client patterns
- [ ] node-pty terminal spawning
- [ ] OpenRouter API format
- [ ] iQOO Office Kit pairing procedure (covered in Saturday teach-in)
- [ ] Jetpack Compose camera preview patterns

---

## 11. Team Composition (Ideal: 2-3 people)

| Role | Responsibility | Skills Needed |
|------|---------------|---------------|
| **Mobile Dev (Lead)** | Android app, CameraX, ML Kit, Compose UI | Kotlin, Jetpack Compose, CameraX |
| **Backend/Agent Dev** | Laptop daemon, agent logic, OpenRouter, tools | Node.js/TypeScript, terminal automation |
| **Integration/Demo** | Office Kit, WebSocket bridge, demo prep, pitch | Full-stack, public speaking |

For a solo build, merge roles 2+3 and simplify the UI.

---

## 12. Technology Stack Summary

### Phone (Android)

| Layer | Technology |
|-------|-----------|
| UI | Jetpack Compose |
| Camera | CameraX (ImageAnalysis) |
| OCR | ML Kit Text Recognition v2 |
| Image AI | ML Kit GenAI Image Description (Gemini Nano) |
| Voice | ML Kit GenAI Speech Recognition / SpeechRecognizer fallback |
| Local Reasoning | Gemini Nano Prompt API via AICore |
| Networking | OkHttp (WebSocket) |
| State | ViewModel + StateFlow |
| DI | Hilt or manual |

### Laptop (Daemon)

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js + TypeScript |
| WebSocket Server | ws library |
| Terminal | node-pty |
| File Operations | fs + glob |
| Git | simple-git |
| AI Reasoning | OpenRouter API (OpenAI-compatible) |
| Process Management | child_process |

### Communication Protocol

```json
{
  "type": "command",
  "source": "phone",
  "payload": {
    "intent": "fix_error",
    "context": {
      "error_text": "TypeError: Cannot read properties of undefined",
      "source": "camera_ocr",
      "voice_command": "Fix this and run the tests",
      "image_description": "Terminal window showing Node.js stack trace"
    }
  }
}
```

---

## 13. Key Technical Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Phone framework | Native Kotlin | Best CameraX + ML Kit integration |
| Laptop runtime | Node.js | node-pty + WebSocket are best-in-class |
| Cloud AI provider | OpenRouter | Multi-model access, free hackathon credits |
| Phone ↔ Laptop transport | WebSocket over Wi-Fi | Real-time bidirectional, low latency |
| On-device model | Gemini Nano (via AICore) | Pre-installed on device, no download needed |
| Wow feature | Whiteboard → Architecture Drift | Makes phone camera indispensable, zero external deps |
| OCR approach | ML Kit v2 (on-device) | Real-time, privacy-preserving, HackTracker points |
| Voice approach | ML Kit Speech (Basic) | On-device, streaming, reliable |

---

## 14. Feasibility Verdict

### OVERALL: FEASIBLE with disciplined scoping

| Component | Feasibility | Confidence |
|-----------|------------|-----------|
| Camera → OCR → Error Detection | Proven | 95% |
| Voice → Command Interpretation | Proven | 90% |
| WebSocket Phone ↔ Laptop | Proven | 95% |
| Laptop Agent (search/read/patch/test) | Proven | 90% |
| OpenRouter Cloud Reasoning | Proven | 95% |
| On-device Gemini Nano | High (device-dependent) | 80% |
| Office Kit Integration | High (built-in OS) | 85% |
| Whiteboard → Architecture Drift | Very High (no external deps) | 85% |
| Complete loop in 30 hours | Achievable | 70% |

### Critical Success Factors

1. **Pre-scaffold the project** — Don't waste hackathon hours on boilerplate
2. **Test ML Kit on the actual loaner device** — Verify AICore availability early
3. **Keep the UI minimal** — Chat interface + camera view + status. Nothing fancy.
4. **Demo-driven development** — Build the demo story first, then implement backwards
5. **Office Kit usage throughout** — Don't just use it for demo, use it during the build

### Final Recommendation

**BUILD IT.** DevLens has:
- A genuinely novel angle (physical + digital context)
- Proven technical components
- Perfect hackathon-fit (phone-first, camera, voice, on-device AI, Office Kit)
- A dramatic demo story
- Clear differentiation from all existing tools

The biggest risk is time management. Mitigate by pre-building scaffolding and practicing the architecture before the event.

---

## Appendix A: Key API References

| API | Documentation |
|-----|--------------|
| CameraX | https://developer.android.com/media/camera/camerax |
| ML Kit Text Recognition | https://developers.google.com/ml-kit/vision/text-recognition/v2/android |
| ML Kit GenAI APIs | https://developers.google.com/ml-kit/genai |
| Gemini Nano / AICore | https://developer.android.com/ai/gemini-nano |
| ML Kit Speech Recognition | https://developers.google.com/ml-kit/genai/speech-recognition/android |
| OkHttp WebSocket | https://square.github.io/okhttp/ |
| OpenRouter API | https://openrouter.ai/docs |
| node-pty | https://github.com/microsoft/node-pty |
| ws (WebSocket) | https://github.com/websockets/ws |
| simple-git | https://github.com/steveukx/git-js |

## Appendix B: Alternative Approaches Considered & Rejected

| Approach | Why Rejected |
|----------|-------------|
| Flutter app | Poor CameraX/ML Kit integration, adds complexity |
| SSH instead of WebSocket | Higher latency, complex key management, no bidirectional streaming |
| Run LLM on phone directly (llama.cpp) | Too slow for complex reasoning, battery drain, Gemini Nano better |
| Browser extension instead of phone app | Doesn't use phone hardware (no camera/voice/HackTracker points) |
| Cloud-only AI | Misses on-device scoring, adds latency, privacy concerns |
| Pre-built agent framework (Claw Code) | Overkill, harder to customize, not phone-first |

## Appendix C: Backup Plans

| If This Fails... | Do This Instead... |
|-------------------|-------------------|
| Gemini Nano unavailable on loaner | Use OpenRouter for all reasoning (lose some "on-device" points) |
| Whiteboard OCR inaccurate | Use typed/printed architecture diagrams instead of hand-drawn |
| WebSocket unreliable | Use Office Kit file transfer + clipboard as communication bridge |
| OCR too slow for real-time | Capture still photo, analyze async, show loading state |
| Time runs out on P1 | Ship P0 core loop only — still a complete product |
| Judges confused by concept | Lead with the live demo, explain architecture after |
| Office Kit pairing fails | Use pure WebSocket over local Wi-Fi (lose 10% Office Kit score) |
| Speech recognition poor | Fall back to typed commands in phone chat UI |
