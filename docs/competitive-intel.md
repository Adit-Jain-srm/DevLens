# Competitive Intelligence & Hackathon Guide

## Phase 2 Competitor Analysis — Teams Selected for On-Site Build

---

## Competitor 1: Repo Guardian (TEAM APEX OS)

**Repo:** [github.com/AJAYMYTH/Repo-Guardian-IqooReskill](https://github.com/AJAYMYTH/Repo-Guardian-IqooReskill)
**Team:** 3 members (Javali Ajayakumar, Chethan Kumar, Raviteja M)
**City:** Bengaluru (Phase 1, Aug 29-30)
**Track:** Developer Tools

### What It Is

An on-device AI code review and fix agent. The phone ingests GitHub webhook diffs, runs a quantized Qwen 2.5-Coder 7B model on the Snapdragon NPU to generate patches, and dispatches them to the developer's laptop for test validation via WireGuard P2P mesh.

### Architecture

```
GitHub (Webhook) → iQOO Phone (NPU Inference) → Laptop (Docker test sandbox)
                         ↑                              ↓
                   Qwen 2.5-Coder 7B               Test Results
                   INT4-AWQ on Hexagon               → PR merged
```

### Strengths (What Got Them Selected)

| Strength | Detail | Lesson for DevLens |
|----------|--------|-------------------|
| **100% privacy narrative** | "0 bytes uploaded to cloud" is a powerful, instantly understood metric | Frame DevLens's on-device processing with equally sharp numbers |
| **Polished presentation website** | Astro.js site with animated architecture diagrams, interactive CI/CD loop simulator, telemetry dashboard — deployed on Vercel | Our submission needs visual polish, not just markdown docs |
| **Benchmark comparison table** | Direct comparison vs Copilot/CodeRabbit/Sweep with specific numbers (3.2s vs 18.5s, $0 vs $3600/yr, 2.1W vs 700W) | Quantified claims beat qualitative claims. We need concrete numbers. |
| **Interactive simulator** | Auto-playing 3-step animation showing webhook → NPU inference → test validation with live telemetry | An interactive demo concept (even simulated) impresses judges scrolling quickly |
| **Track record section** | 5 prior hackathon projects listed with stack details | Show prior work to build credibility |
| **Strong PRD/TRD docs** | Separate Product Requirements and Technical Requirements documents | Organized, structured thinking signals engineering maturity |
| **Specific model choice** | Qwen 2.5-Coder 7B (INT4-AWQ) — 2.81GB footprint, 38.4 tok/s, 128k context | Specific > vague. Name the exact model, quant method, memory footprint |

### Weaknesses (Our Opportunities)

| Weakness | Detail | DevLens Advantage |
|----------|--------|-------------------|
| **It's a concept prototype, not working software** | PRD explicitly says: "This is NOT a working product. Its job is to make the architecture legible." The repo is an Astro website, not an Android app. | DevLens can have actual working components (CameraX pipeline, WebSocket bridge) even before the hackathon |
| **No phone-side AI is actually running** | The "interactive simulator" is a pre-scripted animation, not real inference | If we demo real on-device OCR running on an actual phone, that alone beats this |
| **Narrow scope: only GitHub PR review** | Only handles code review on push events. No debugging, no camera, no voice, no physical-world context | DevLens does debugging (57% of dev time), not just review |
| **No camera/voice use** | Phone is a compute node, not a perception device. Camera and mic unused. | HackTracker won't register much "creative phone use" for them (15% of score!) |
| **Office Kit is a transport layer, not integral** | WireGuard P2P bypasses Office Kit entirely — they may lose the 10% Office Kit score | DevLens routes through Office Kit by design, capturing the full 10% |
| **Benchmarks are theoretical** | "38.4 tok/s" and "3.2 seconds" are claimed but not demonstrated — PRD says "this is not a working product" | Real measurements from actual device > theoretical claims |
| **No user interaction during debugging** | Fully autonomous: the agent acts without developer input or confirmation | Devin's 46% rejection rate shows autonomous-without-oversight fails |

### Key Takeaway

Repo Guardian got selected on **presentation quality and bold positioning** — "0 bytes, $0 cost, 100% local" is a headline that sticks. But under the hood it's a website, not a product. If DevLens shows real working components alongside equally bold positioning, we win.

---

## Competitor 2: GLANCE (SanjayKumar N B)

**Repo:** [github.com/sanjaykumar-nb/GLANCE_IQOO](https://github.com/sanjaykumar-nb/GLANCE_IQOO)
**Team:** Solo builder
**City:** Bengaluru (Phase 1, Aug 29-30)
**Track:** Developer Tools

### What It Is

Code review and error triage from a phone using an on-device code graph. GLANCE builds a compact call/import graph of the repository on the laptop, syncs it to the phone (4-12 MB), then uses bounded graph traversal to extract only the ~1,500-3,000 tokens relevant to a specific change or error — feeding that to a Gemma-3n-class INT4 model running entirely on the NPU.

### Architecture

```
Laptop (tree-sitter → graph build → serialize) → Phone (graph store → bounded traversal)
                                                        ↓
Phone triggers: PR notification / Camera (stack trace) / Build failure
                                                        ↓
                                              Gemma-3n (on-device NPU)
                                                        ↓
                                         Blast-radius ranking + summaries
                                                        ↓
                                      Voice approve/comment/request-changes
                                                        ↓
                                          GitHub REST API (draft PR)
```

### Strengths (What Got Them Selected — This Is The Dangerous One)

| Strength | Detail | Lesson for DevLens |
|----------|--------|-------------------|
| **Exceptionally clear problem statement** | The "engineer on the metro at 8:40 PM" scenario is vivid, relatable, and specific. It makes you FEEL the problem. | Our problem statement needs an equally visceral human scenario |
| **One sharp technical insight** | "2.5M tokens → 1,500-3,000 tokens via bounded graph traversal" — the entire project is one quantifiable compression trick | DevLens needs a similarly sharp "this is the technical trick" |
| **Honest scope boundaries** | "GLANCE does not write your code. It tells you what to look at, and why." Shows mature judgment about what a small model CAN'T do | We should be equally honest about what on-device models can and can't do |
| **Blast-radius ranking** | Diffs reordered by how many call sites they affect — the riskiest change appears first | This is a genuinely useful feature we should consider incorporating |
| **Camera for stack traces** | "A photographed stack trace from a QA machine is a common way errors reach an engineer" — specific, true, and uses the camera meaningfully | Our camera use is similar but broader; validate this works early |
| **Graph > embeddings argument** | "Embedding similarity retrieves code that *looks* related. A call graph retrieves code that *is* related." Technically sharp, correct, and memorable. | We need to articulate WHY our approach is structurally better, not just different |
| **Design rationale section** | Every decision has a "why X not Y" explanation. Shows engineering maturity. | Add explicit rationale for every major decision in our submission |
| **Figma prototype** | Has a Figma prototype link showing the UI concept | A visual prototype (even low-fidelity) dramatically strengthens a submission |
| **Solo builder narrative** | One person, clear division of work. Shows it's achievable. | Our team of 3 should map roles clearly to show we can execute MORE |
| **Incremental sync** | Full graph once at session start, then only deltas. Shows they've thought about real-world constraints. | Mention data efficiency and real-world constraints in our design |

### Weaknesses (Our Opportunities)

| Weakness | Detail | DevLens Advantage |
|----------|--------|-------------------|
| **Read-only: does NOT fix bugs** | "GLANCE does not write your code." Only reviews and triages. No autonomous fixing, no patch generation, no test running. | DevLens goes end-to-end: observe → fix → test → verify. Complete loop. |
| **Only README exists in the repo** | No code, no prototype, no Figma implementation — just a README (albeit an excellent one) | If we have ANY working code, we're ahead |
| **No verification loop** | Shows what to look at, but doesn't confirm fixes work | DevLens runs tests and proves the fix works — our verification loop is a differentiator |
| **Voice is approve/comment only** | Voice is used to approve/reject, not to command debugging actions | DevLens: voice drives the entire agent ("fix this", "run tests", "explain this function") |
| **No session memory** | Each review is independent, no accumulated debugging context | DevLens builds a Developer Context Graph across the session |
| **Single-language graph** | "Graph construction currently targets a single language" | Our cloud reasoning handles any language via OpenRouter |
| **Passive triggers only** | Waits for PR notifications or build failures. Developer can't actively investigate. | DevLens is active: developer points camera at anything and asks questions |
| **No architecture drift detection** | Graph maps existing code structure, doesn't compare against intended architecture | Our whiteboard → code comparison is a unique capability |

### Key Takeaway

GLANCE got selected on **writing quality, intellectual honesty, and one sharp technical insight** (graph-based token compression). The README is arguably the best-written hackathon submission I've analyzed — clear, specific, honest about limitations. But it's read-only (no fixes), has no code, and no verification loop. DevLens does everything GLANCE does AND then fixes the problem AND proves the fix works.

---

## Head-to-Head: DevLens vs Both Competitors

| Capability | Repo Guardian | GLANCE | DevLens |
|-----------|--------------|--------|---------|
| **Perception** | GitHub webhooks only | PR + Camera + Build failures | Camera + Voice + Screen + Code + Tests |
| **On-device model** | Qwen 2.5-Coder 7B (claimed) | Gemma-3n (planned) | Gemini Nano (confirmed on iQOO) |
| **Actually works?** | No (concept website) | No (README only) | Will have working components |
| **Fixes bugs?** | Yes (generates patches) | No (read-only) | Yes (observe → fix → verify) |
| **Runs tests?** | Yes (Docker sandbox) | No | Yes (laptop terminal execution) |
| **Camera use** | None | Stack trace photos | Real-time error detection, whiteboard scanning, screen reading |
| **Voice use** | None | Approve/reject only | Full command interface ("fix this", "run tests", "explain") |
| **Office Kit** | Bypassed (WireGuard) | Used for sync | Central to architecture |
| **HackTracker score potential** | Low (no camera/voice) | Medium (camera + voice limited) | High (camera + voice + on-device AI integral) |
| **Writing quality** | Good (marketing-oriented) | Excellent (engineer-oriented) | Must be excellent (both audiences) |
| **Prototype depth** | Website (Astro + Tailwind) | Figma link | Needs: working Android camera + WebSocket demo |
| **Novel insight** | "0 bytes uploaded" | "2.5M → 1,500 tokens via graph" | "Intelligence inversion: phone = brain, laptop = hands" |

---

## What We Must Do Better

### 1. Match Repo Guardian's Presentation Quality

They built a polished website with animations, interactive simulator, benchmark tables. Our submission needs visual impact — not necessarily a website, but:
- Architecture diagrams that are sharp and memorable
- Quantified benchmark claims (latency, memory, accuracy — with sources)
- Interactive or video element showing the concept

### 2. Match GLANCE's Writing Quality

GLANCE's README is the clearest hackathon submission I've seen. Every section has:
- One specific human scenario
- One sharp technical insight
- Honest scope boundaries
- "Why X not Y" rationale for every decision

Our SUBMISSION.md needs to achieve this standard.

### 3. Beat Both on Working Components

Neither has working code. The highest-leverage thing we can do before submission:
- **Record a 60-second video** of CameraX + ML Kit OCR running on an actual Android phone
- **Show the WebSocket bridge** working between phone and laptop
- **Demo Gemini Nano** responding to a prompt on-device

Even ONE working component puts us ahead of both competitors.

### 4. Beat Both on HackTracker Potential

The scoring is:
- 15% Creative phone use (camera, voice, on-device AI)
- 10% Office Kit usage

Repo Guardian: Low HackTracker (no camera, no voice, bypasses Office Kit)
GLANCE: Medium HackTracker (camera for photos, basic voice)
DevLens: High HackTracker (camera + voice + on-device AI are THE CORE PRODUCT)

This is a structural advantage we must emphasize in the submission.

### 5. Our Novel Insight Must Be As Sharp As Theirs

- Repo Guardian's hook: "0 bytes uploaded — 100% local"
- GLANCE's hook: "2.5M tokens → 1,500 tokens via graph traversal"
- **DevLens's hook: "Intelligence lives on the phone. Execution lives on the laptop."**

This needs to be the FIRST THING a judge reads.

---

## Hackathon Rules & Logistics (Complete Reference)

Source: [iqoo.reskilll.com/guide](https://iqoo.reskilll.com/guide)

### Format

- **Duration:** 30 hours (Sat 10:00 → Sun ~17:00)
- **Red Light / Green Light:**
  - Green Light (~45%): laptop + phone, no restrictions
  - Red Light (~55%): phone only, or phone + Office Kit paired to laptop. Direct laptop use restricted.
- **Final demo:** Must run on iQOO phone. Phone can't be just a display screen.

### Device

- iQOO 15 series loaner (one per person, handed at check-in)
- HackTracker pre-installed — tracks camera, voice, on-device AI, Office Kit usage
- Devices remain iQOO property, must stay in venue

### Office Kit

- Bridges phone ↔ laptop: screen mirror, file transfer, remote control, clipboard
- Requires Windows 10+ or macOS 10.14.6+ (NO Linux)
- Usage tracked by HackTracker → feeds directly into scoring (10%)
- Pairing covered in Saturday teach-in

### Scoring Rubric

| Criterion | Weight | What Judges Look For |
|-----------|--------|---------------------|
| End Product Quality | 30% | Does it work? Is it useful? Would someone keep using it? |
| Novelty & Impact | 20% | Originality and real-world impact |
| Creative Phone Use (HackTracker) | 15% | Camera, voice, on-device AI usage (device telemetry, not self-reported) |
| Technical Depth | 15% | Architecture, code quality, robustness, real use of hardware |
| Office Kit Usage (HackTracker) | 10% | Phone-laptop bridge usage (device telemetry, not self-reported) |
| Demo & Presentation | 10% | 3-5 minute pitch, demo on iQOO phone |

### Evaluation Flow

1. Two scored evaluation rounds (Sat evening, Sun morning)
2. No elimination at eval rounds — they feed scoring
3. Top 10 selected for final pitch
4. Top 6 per city advance to Grand Finale (3 student, 3 professional)
5. Standout teams beyond Top 6 can also earn Finale slots

### Build Rules

- **Original work only** — code written during event window
- **Open-source libraries OK** with attribution
- **Carrying in a completed app is NOT OK** — scaffolding is fine
- Repo + demo assets submitted on Reskilll platform before hard cutoff
- Late submissions may get scoring penalties or DQ

### Tracks (City Battles)

1. FinTech and Commerce (city battles only)
2. Smart Education (city battles only)
3. HealthTech (city battles only)
4. **Productivity** (city battles + finale)
5. **Smart Living** (city battles + finale)
6. **Developer Tools** (city battles + finale) ← OUR TRACK
7. **Open Innovation** (wildcard, everywhere)

### Prizes

- Total pool: ₹40,00,000 across city battles + finale
- Top 6 per city advance to Grand Finale (Oct 9-11, Bengaluru)
- Grand Finale: 48 hours, Friday evening to Sunday evening

### Code of Conduct

- Zero tolerance for harassment, discrimination, intimidation
- Respect everyone
- Help others when you can
- Report problems to organizers immediately

### IP & Data

- You retain IP on your submission
- iQOO and Reskilll get non-exclusive, royalty-free right to review/showcase
- Submissions treated as confidential, accessed only by organizing team

---

## Action Items for DevLens Team

### Before Submission Deadline

- [ ] Sharpen SUBMISSION.md to match GLANCE's writing quality
- [ ] Add a visceral human problem scenario (like GLANCE's "engineer on the metro")
- [ ] Add quantified benchmark claims with sources (like Repo Guardian's table)
- [ ] Create or link a visual prototype (Figma, video, or working demo)
- [ ] Record a 60-second video of CameraX + OCR working on an actual phone
- [ ] Add a "Why X not Y" design rationale section
- [ ] Emphasize HackTracker advantage (camera + voice + on-device AI = core product)
- [ ] List team members with specific roles and prior work

### Before the Hackathon (19 days)

- [ ] Build working CameraX + ML Kit pipeline (proof of concept)
- [ ] Build working WebSocket bridge (phone ↔ laptop)
- [ ] Test Gemini Nano on any supported device
- [ ] Prepare demo project with deliberate bug
- [ ] Practice the 5-minute demo script 5 times
- [ ] Ensure laptop is Windows 10+ or macOS 10.14.6+
- [ ] Set up OpenRouter account with API key

### At the Hackathon

- [ ] Use Office Kit CONTINUOUSLY (10% of score is tracked usage)
- [ ] Use camera and voice CONTINUOUSLY (15% of score is tracked usage)
- [ ] Build demo story first, features second
- [ ] Keep UI minimal and functional
- [ ] Reserve last 4 hours for demo prep + rehearsal
