# DevLens — Technical Feasibility Study

> **Point. Speak. Fixed.** — *The first developer tool with eyes and ears.*

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Hackathon Context](#2-hackathon-context)
3. [Hardware Platform](#3-hardware-platform)
4. [Technical Architecture](#4-technical-architecture)
5. [Intelligence Routing](#5-intelligence-routing)
6. [Build Scope](#6-build-scope)
7. [Risk Assessment](#7-risk-assessment)
8. [Competitive Landscape](#8-competitive-landscape)
9. [Wow Feature: Architecture Drift Detection](#9-wow-feature-architecture-drift-detection)
10. [Pre-Hackathon Checklist](#10-pre-hackathon-checklist)
11. [Technology Stack](#11-technology-stack)
12. [Feasibility Verdict](#12-feasibility-verdict)
13. [Appendices](#13-appendices)

---

## 1. Executive Summary

| Dimension | Assessment |
|-----------|-----------|
| Technical Feasibility | **HIGH** — All core components have proven Android APIs |
| 30-Hour Buildability | **MEDIUM-HIGH** — Requires disciplined MVP scoping |
| Hackathon Fit | **EXCELLENT** — Maps to all 6 scoring dimensions |
| Novelty | **HIGH** — No existing tool combines physical-world perception with agentic code execution |
| Demo Potential | **VERY HIGH** — Visually dramatic before/after story |

---

## 2. Hackathon Context

### 2.1 Scoring Rubric

| Criterion | Weight | DevLens Alignment |
|-----------|--------|-------------------|
| End Product Quality | 30% | Complete observe → fix → verify loop |
| Novelty and Impact | 20% | Physical + digital context fusion |
| Creative Phone Use (HackTracker) | 15% | Camera, mic, on-device AI are core product |
| Technical Depth | 15% | Multi-layer architecture, hybrid AI routing |
| Office Kit Usage (HackTracker) | 10% | Clipboard sync, screen mirror, file transfer |
| Demo and Presentation | 10% | 5-act demo with clear before/after |

### 2.2 Key Constraints

| Constraint | Detail |
|-----------|--------|
| Duration | 30 hours (Sat 10:00 → Sun ~17:00) |
| Red Light phase | ~55% — phone-only via Office Kit, laptops restricted |
| Green Light phase | ~45% — both devices |
| Loaner device | iQOO 15 series, Snapdragon 8 Elite Gen 5, OriginOS 6 |
| HackTracker | Tracks camera, voice, on-device AI, Office Kit usage automatically |
| Demo surface | Must run on iQOO phone. Phone must have a real role. |
| Local models | On-device / open-source models earn brownie points |
| External hardware | Not recommended. Phone-first, software-first. |
| Office Kit | Requires Windows 10+ or macOS 10.14.6+. No Linux. |

### 2.3 Track

**Developer Tools** — "Build tools that help developers create, test, deploy, or collaborate faster using AI."

---

## 3. Hardware Platform

### 3.1 iQOO 15 Specifications

| Component | Spec | Relevance |
|-----------|------|-----------|
| Chipset | Snapdragon 8 Elite Gen 5 (3nm) | NPU for on-device inference |
| NPU | Hexagon, ~45+ TOPS INT8 | Runs quantized models locally |
| RAM | 12–16 GB LPDDR5X Ultra | Model inference + app headroom |
| Storage | 256–512 GB UFS 4.1 | Local model storage (~1.8 GB) |
| Camera | Triple 50MP | High-quality OCR input |
| Display | 6.85" 2K 144Hz AMOLED | Developer UI canvas |
| Battery | 7000 mAh | 8–10h active use per charge |
| OS | Android 16, OriginOS 6 | ML Kit GenAI, AICore access |
| Connectivity | Wi-Fi 7, BT 5.4 | Low-latency local networking |

### 3.2 On-Device AI Capabilities (Confirmed)

| Capability | API | Status on iQOO 15 |
|-----------|-----|-------------------|
| Text Recognition (OCR) | ML Kit Text Recognition v2 | Available — listed in supported devices |
| Image Description | ML Kit GenAI Image Description | Available — iQOO confirmed |
| Speech Recognition | ML Kit GenAI Speech (Basic) | Available — API 31+ |
| Prompt API | ML Kit GenAI Prompt (Gemini Nano) | Available — multimodal text+image |
| Summarization | ML Kit GenAI Summarization | Available |
| Object Detection | ML Kit Object Detection | Available (generic objects) |
| Custom Models | LiteRT + Qualcomm AI Engine Direct | Available — NPU delegate |

---

## 4. Technical Architecture

### 4.1 Phone Layer — Framework Decision

| Option | Verdict | Rationale |
|--------|---------|-----------|
| **Kotlin + Jetpack Compose** | **Selected** | First-class CameraX, ML Kit, AICore, OkHttp APIs |
| Flutter | Rejected | Poor CameraX integration, ML Kit via plugins only |
| React Native | Rejected | No native camera/ML Kit access without bridges |

### 4.2 Phone Pipelines

**Camera/Perception:**

```
CameraX ImageAnalysis → ML Kit OCR (<100ms) → Gemini Nano Image Description → Error Classifier → Context Engine
```

- CameraX + ML Kit OCR: production-ready, real-time on flagship devices
- Gemini Nano multimodal: ~1.8s first token, 12 tok/s thereafter
- ML Kit GenAI confirmed available on iQOO devices

**Voice:**

```
Microphone → ML Kit Speech Recognition (on-device) → Gemini Nano Intent Extraction → Agent Command
```

- ML Kit GenAI Speech: API 31+, on-device, streaming
- Fallback: Android SpeechRecognizer API (widely available)
- Alternative: Whisper.cpp via JNI (~42MB model, fully offline)

**Communication:**

```
OkHttp WebSocket Client → Local Wi-Fi → Node.js WebSocket Server → node-pty + fs + simple-git
```

- OkHttp WebSocket: battle-tested, production-ready
- node-pty + WebSocket: powers VS Code terminal (proven architecture)
- Pairing: mDNS/Bonjour or QR code with IP:port

### 4.3 Laptop Layer — Agent Daemon

| Option | Verdict | Rationale |
|--------|---------|-----------|
| **Node.js + TypeScript** | **Selected** | node-pty native, fast WebSocket, OpenRouter SDK |
| Python | Alternative | pty module less mature on Windows |

**Tool execution layer:**

| Tool | Implementation | Purpose |
|------|---------------|---------|
| FileSearch | glob + ripgrep | Find relevant files |
| FileRead | fs.readFile | Return file contents |
| Patch | fs.writeFile + git stash | Apply code changes safely |
| Terminal | node-pty | Execute shell commands |
| TestRunner | child_process.spawn | Run test frameworks |
| Git | simple-git | Status, diff, revert, log |

**Cloud AI (OpenRouter):**

- Single endpoint, OpenAI-compatible
- 400+ models with automatic provider failover
- `openrouter/auto` for intelligent model selection
- Free credits provided during hackathon

### 4.4 Office Kit Integration

| Feature | DevLens Use |
|---------|------------|
| Screen Mirror | Capture errors from mirrored laptop screen during Red Light |
| Clipboard Sync | Smart prompt delivery from phone to laptop (Copilot Bridge mode) |
| File Transfer | Context files phone → laptop; results laptop → phone |
| Remote Control | Voice commands translated to keyboard/mouse actions |

Office Kit usage is tracked by HackTracker (10% of score). DevLens's core workflow naturally maximizes this.

---

## 5. Intelligence Routing

| Input | Complexity | Route | Rationale |
|-------|-----------|-------|-----------|
| Camera → OCR text | Low | LOCAL (ML Kit) | Fast, private, offline |
| Camera → image understanding | Low–Medium | LOCAL (Gemini Nano) | On-device multimodal |
| Voice → transcript | Low | LOCAL (ML Kit Speech) | Low latency, privacy |
| Error classification | Low | LOCAL (regex + Nano) | Pattern matching |
| Multi-file debugging | High | CLOUD (OpenRouter) | Needs large context |
| Patch generation | High | CLOUD (OpenRouter) | Complex code synthesis |
| Architecture analysis | High | CLOUD (OpenRouter) | Long reasoning chains |
| Whiteboard → structure | Medium | HYBRID | Local OCR + Cloud reasoning |

**Why this matters for scoring:**
- Technical Depth (15%): intelligent routing demonstrates architectural sophistication
- Creative Phone Use (15%): on-device processing is tracked and rewarded
- Novelty (20%): hybrid local+cloud is explicitly called out as compelling

---

## 6. Build Scope

### 6.1 Priority Tiers

**P0 — Core Loop (must ship, ~19h)**

| Feature | Estimate | Dependency |
|---------|----------|------------|
| Camera → OCR → Error Detection | 3h | CameraX + ML Kit |
| Voice Input → Command | 2h | ML Kit Speech |
| WebSocket Phone ↔ Laptop | 3h | OkHttp + ws |
| Agent: File Search + Read | 2h | glob + fs |
| Agent: Terminal Execution | 2h | node-pty |
| OpenRouter Integration | 2h | fetch + API key |
| Gemini Nano Context Analysis | 2h | ML Kit Prompt API |
| Basic UI (camera + chat + status) | 3h | Jetpack Compose |

**P1 — Differentiators (should ship, ~6h)**

| Feature | Estimate |
|---------|----------|
| Patch Generation + Application | 2h |
| Test Runner + Verification | 1.5h |
| Session Memory | 1.5h |
| Office Kit / Copilot Bridge | 1h |

**P2 — Wow Feature (~2.5h)**

| Feature | Estimate | Risk |
|---------|----------|------|
| Whiteboard → Architecture Drift Detection | 2.5h | Low |

### 6.2 Time Budget

| Block | Hours |
|-------|-------|
| P0 (Core Loop) | 19h |
| P1 (Differentiators) | 6h |
| P2 (Wow Feature) | 2.5h |
| Buffer / Debug | 2.5h |
| **Total** | **30h** |

Tight but achievable for a team of 3 with pre-built scaffolding.

### 6.3 Explicitly Out of Scope

Custom UI animations, multi-language support, account/auth, database persistence, browser automation, CI/CD integration, multi-project support.

---

## 7. Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-----------|--------|------------|
| Gemini Nano unavailable on loaner | Low | High | Fallback to OpenRouter for all reasoning; ML Kit OCR/Speech still work |
| Office Kit pairing fails | Medium | Medium | Fall back to pure WebSocket over Wi-Fi |
| WebSocket drops during demo | Medium | Low | Auto-reconnect with exponential backoff; connection status UI |
| OCR misreads error text | Low | Medium | Cloud fallback if confidence < threshold; use clean demo text |
| Time insufficient for full MVP | Medium | High | Pre-build scaffolding; P0 alone is a complete product |
| Demo fails on stage | Medium | High | Pre-record backup video; rehearse 5x; two demo scenarios ready |
| Similar concept from other team | Low | Medium | Intelligence inversion + on-device execution is structurally unique |
| HackTracker under-captures usage | Low | High | Design workflow to maximize camera + voice + Office Kit time |
| Speech recognition poor quality | Low | Low | Fall back to typed commands in chat UI |

---

## 8. Competitive Landscape

| Tool | Category | DevLens Advantage |
|------|----------|-------------------|
| Cursor / Windsurf | Desktop AI IDE | Multimodal perception (camera + voice), not text-only |
| Devin | Autonomous cloud agent | Phone-first, developer-in-loop, real-time, verified fixes |
| Treena | Mobile IDE | On-device intelligence (not cloud relay), acts on YOUR laptop |
| OffCoder | AI coding on phone | Perceives YOUR environment, not a sandbox |
| Claw Code Mobile | Android agent | Camera + voice as input, not just terminal |
| PocketShell | Voice SSH client | Understands code context, not just terminal relay |
| GitHub Copilot | Code suggestions | Physical-world perception, verification loop |

**No existing tool combines:** phone camera as perception layer + voice commands + on-device AI + laptop execution + autonomous verification + session memory.

See `docs/strategy/competitive-intel.md` for detailed Phase 2 competitor analysis.

---

## 9. Wow Feature: Architecture Drift Detection

### Why This Feature

1. Pure phone-first — only needs the built-in camera
2. Zero external dependencies — paper and a marker
3. Visually dramatic — draw architecture, phone understands it
4. Unique — no existing tool maps drawings to code
5. Demonstrates on-device AI — OCR + Gemini Nano
6. Works during Red Light — camera is phone-only

### Technical Flow

```
Phone Camera → ML Kit OCR (extract labels) → Gemini Nano (infer architecture)
     ↓
Send component list to laptop → Scan directory tree, package.json, imports
     ↓
Cloud AI: Compare drawn architecture vs actual code structure
     ↓
Report: "Your diagram shows Redis Cache, but no Redis dependency exists."
```

### Feasibility: Very High

ML Kit OCR + Image Description confirmed on iQOO. No external hardware. LLM reasoning about architecture is well-established. Demo is self-contained.

---

## 10. Pre-Hackathon Checklist

### Scaffolding (allowed before event)

- [ ] Android project: Compose + CameraX + ML Kit dependencies
- [ ] Laptop daemon: Node.js + WebSocket + node-pty skeleton
- [ ] OpenRouter client wrapper
- [ ] WebSocket protocol definition (JSON message types)
- [ ] UI component library (camera view, chat, status bar)

### Items to Bring

- [ ] Laptop (Windows 10+ or macOS 10.14.6+)
- [ ] Laptop charger
- [ ] Phone stand for camera demos
- [ ] Whiteboard markers + paper for architecture drawing
- [ ] USB-C cable (backup file transfer)

### Accounts

- [ ] OpenRouter account + API key
- [ ] GitHub repository
- [ ] Reskilll platform registration

### Team Arize

| Member | Role | Responsibility |
|--------|------|---------------|
| **Adit Jain** (Leader) | Mobile Dev Lead | Android app, CameraX, ML Kit, Compose UI |
| **Ayush Pandey** | Agent/Backend Dev | Laptop daemon, agent logic, OpenRouter, tools |
| **Mehir Singh** | Integration/Demo | Office Kit, WebSocket bridge, demo prep, pitch |

---

## 11. Technology Stack

### Phone (Android)

| Layer | Technology |
|-------|-----------|
| UI | Jetpack Compose |
| Camera | CameraX (ImageAnalysis) |
| OCR | ML Kit Text Recognition v2 |
| Image AI | ML Kit GenAI Image Description (Gemini Nano) |
| Voice | ML Kit GenAI Speech / SpeechRecognizer fallback |
| Reasoning | Gemini Nano Prompt API via AICore |
| Networking | OkHttp (WebSocket) |
| State | ViewModel + StateFlow |

### Laptop (Daemon)

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js + TypeScript |
| WebSocket | ws library |
| Terminal | node-pty |
| Files | fs + glob |
| Git | simple-git |
| AI | OpenRouter API (OpenAI-compatible) |

### Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Phone framework | Native Kotlin | Best CameraX + ML Kit integration |
| Laptop runtime | Node.js | node-pty + WebSocket best-in-class |
| Cloud AI | OpenRouter | Multi-model, free hackathon credits |
| Transport | WebSocket over Wi-Fi | Real-time bidirectional, low latency |
| On-device model | Gemini Nano (AICore) | Pre-installed, no download |
| Wow feature | Whiteboard → Drift | Phone camera essential, zero deps |
| OCR | ML Kit v2 (on-device) | Real-time, private, HackTracker points |
| Voice | ML Kit Speech (Basic) | On-device, streaming, reliable |

---

## 12. Feasibility Verdict

| Component | Confidence |
|-----------|-----------|
| Camera → OCR → Error Detection | 95% (proven) |
| Voice → Command Interpretation | 90% (proven) |
| WebSocket Phone ↔ Laptop | 95% (proven) |
| Laptop Agent (search/read/patch/test) | 90% (proven) |
| OpenRouter Cloud Reasoning | 95% (proven) |
| On-device Gemini Nano | 80% (device-dependent) |
| Office Kit Integration | 85% (built-in OS) |
| Architecture Drift Detection | 85% (no external deps) |
| Complete loop in 30 hours | 70% (achievable with prep) |

**Verdict: BUILD IT.**

Every component is individually proven. The risk is time management, mitigated by pre-building scaffolding and demo-driven development.

---

## 13. Appendices

### A. API References

| API | URL |
|-----|-----|
| CameraX | developer.android.com/media/camera/camerax |
| ML Kit Text Recognition | developers.google.com/ml-kit/vision/text-recognition/v2/android |
| ML Kit GenAI | developers.google.com/ml-kit/genai |
| Gemini Nano / AICore | developer.android.com/ai/gemini-nano |
| ML Kit Speech | developers.google.com/ml-kit/genai/speech-recognition/android |
| OkHttp | square.github.io/okhttp |
| OpenRouter | openrouter.ai/docs |
| node-pty | github.com/microsoft/node-pty |
| ws | github.com/websockets/ws |
| simple-git | github.com/steveukx/git-js |

### B. Rejected Alternatives

| Approach | Reason |
|----------|--------|
| Flutter | Poor CameraX/ML Kit integration |
| SSH instead of WebSocket | Higher latency, no bidirectional streaming |
| llama.cpp on phone | Too slow for complex reasoning, battery drain |
| Browser extension | No phone hardware (camera/voice/HackTracker) |
| Cloud-only AI | Misses on-device scoring, adds latency |
| Pre-built agent framework | Overkill, not phone-first |

### C. Backup Plans

| Failure | Fallback |
|---------|----------|
| Gemini Nano unavailable | OpenRouter for all reasoning |
| Whiteboard OCR inaccurate | Use printed/typed diagrams |
| WebSocket unreliable | Office Kit clipboard as bridge |
| OCR too slow | Still photo + async analysis |
| Time runs out on P1 | Ship P0 only (still complete) |
| Demo fails | Pre-recorded backup video |
| Office Kit fails | Pure WebSocket (lose 10%) |
| Speech recognition poor | Typed commands in chat UI |
