# DevLens — Video Walkthrough Script

**Format:** Screen recording of website + voiceover
**Target length:** 2:00–2:30 (punchy, no filler)
**Tone:** Confident, technical, fast-paced. Like a YC demo day pitch, not a tutorial.
**Recording tip:** Use smooth scrolling (trackpad/scroll animation). Pause 2-3s on each section so viewers can read key text. Click the interactive simulator auto-play button live.

---

## SCENE 1 — THE HOOK [0:00–0:15]

**[Screen: Hero section, page just loaded. Animations playing — floating particles, phone mockup cycling through states, counter stats animating up.]**

> *"Point. Speak. Fixed."*
>
> *"DevLens is the first developer tool with eyes and ears. Your phone camera reads the error. Your voice drives the agent. Your laptop fixes, tests, and verifies — in under thirty seconds."*

**[Let the phone mockup cycle through: SCANNING → ERROR DETECTED → VOICE PROCESSING → FIXED. Hold 2 seconds on the stats: 100ms OCR, 60pt accuracy gap, 30sec loop, 57% debug time.]**

---

## SCENE 2 — THE PROBLEM [0:15–0:35]

**[Scroll smoothly to Problem section. Pause on the title "40 minutes of pain. The fix was one line."]**

> *"Here's the real problem. Priya spent forty minutes on a one-line bug — not because the fix was hard, but because she spent the entire time being the bridge between what she could see and what her AI tool could understand."*

**[Scroll to the Before/After cards. Hold on them.]**

> *"Before DevLens: five minutes of context assembly, screenshots, copy-paste. With DevLens: point, speak, thirty seconds, twelve tests passing."*

---

## SCENE 3 — LIVE SIMULATOR [0:35–1:05]

**[Scroll to "How It Works" section. Click the AUTO-PLAY button on the simulator.]**

> *"Watch it work. Three phases."*

**[Step 1 auto-plays — POINT tab highlights, typewriter text appears in terminal]**

> *"Phase one: POINT. The phone camera captures the error. ML Kit OCR extracts text on-device in under a hundred milliseconds. Gemini Nano classifies it — all without leaving the phone."*

**[Step 2 auto-plays — SPEAK tab, purple terminal text]**

> *"Phase two: SPEAK. 'Fix this and run the tests.' Voice transcribed, intent extracted, command dispatched to the laptop over WebSocket."*

**[Step 3 auto-plays — FIXED tab, green terminal text, test results streaming]**

> *"Phase three: FIXED. The laptop agent searches the codebase, finds the git diff from yesterday, patches three route handlers, runs all twelve tests — and reports back: verified."*

**[Hold on the green "ALL 12 TESTS PASSING" status badge for 2 seconds.]**

---

## SCENE 4 — ARCHITECTURE [1:05–1:25]

**[Scroll to Architecture section. Pause on the animated SVG Data Flow Topology.]**

> *"The architecture is what we call Intelligence Inversion. Traditional tools put intelligence in the cloud. DevLens puts it on the phone. The phone is the brain — CameraX, ML Kit, Gemini Nano, Context Engine. The laptop is the hands — six execution tools, OpenRouter for complex reasoning only when needed."*

**[Let the animated particles travel between nodes for 3 seconds. Then scroll to the Traditional vs Inverted comparison cards.]**

> *"Cloud tools: type, wait, hope. DevLens: point, speak, verified."*

---

## SCENE 5 — STANDOUT FEATURES [1:25–1:50]

**[Scroll through the feature cards quickly — let the scroll-reveal animations play. Pause on Code Graph & Blast Radius.]**

> *"Nine capabilities, but three stand out."*

**[Scroll to Git Integration section. Hover over the blast-radius SVG diagram.]**

> *"First — code graph intelligence. tree-sitter parses your repo into a call graph. Every diff is ranked by blast radius. The function touching nine call sites surfaces first. Two-point-five million tokens reduced to fifteen hundred."*

**[Scroll to RAG Documents section.]**

> *"Second — document-grounded compliance. Upload your API spec, style guide, or security policy. Every fix is validated against your team's rules before it touches your code."*

**[Scroll to Wow Feature — Whiteboard → Code.]**

> *"Third — the signature feature. Point your phone at a whiteboard architecture diagram. DevLens reads it, maps it to your codebase, and tells you where reality has drifted from the plan. Zero external hardware — just paper and a marker."*

---

## SCENE 6 — GUARDRAILS + SAFETY [1:50–2:00]

**[Scroll to Guardrails section. Let the cards animate in.]**

> *"And the developer stays in control. Confirm before execute. Git stash safety net. Confidence scoring. Privacy-first routing — Gemini Nano screens for secrets on-device before anything touches the cloud. Six guardrails, eight edge cases handled."*

**[Quickly expand one accordion edge case — e.g., "Fix makes tests fail worse" — to show the handling.]**

---

## SCENE 7 — RESEARCH + SCORING [2:00–2:20]

**[Scroll to Research section. Let the citation cards with metrics animate in.]**

> *"Every architectural decision is backed by evidence. Ten peer-reviewed 2026 citations — NOFire, ACM, arXiv. The sixty-point accuracy gap between single-modal and multi-modal debugging is structural. It can't be closed by improving models. You need camera and voice. That's the research. That's why this works."*

**[Scroll briefly to HackTracker Alignment — show the scoring bar filling 100%.]**

> *"And it maps to all six judging criteria. Camera, voice, and on-device AI aren't bolted on for HackTracker points — they are the product."*

---

## SCENE 8 — CLOSE [2:20–2:30]

**[Scroll to the Team CTA section at the bottom. The "Point. Speak. Fixed." headline and buttons visible.]**

> *"Team Arize. Three builders. One loop. Point. Speak. Fixed."*
>
> *"Because your AI debugger shouldn't need you to type what it could just see."*

**[Hold on the final frame for 3 seconds. Fade to black or freeze.]**

---

## PRODUCTION NOTES

### Recording Setup
- **Browser:** Chrome, fullscreen, dark mode (matches the site theme)
- **Resolution:** 1920×1080 minimum, 2560×1440 preferred
- **Scrolling:** Use smooth scroll (trackpad gestures or scroll animation extension)
- **Mouse:** Hide cursor when not clicking interactive elements
- **Audio:** Record voiceover separately, mix over screen recording

### Timing Targets

| Scene | Duration | Section on Website |
|-------|----------|--------------------|
| 1. Hook | 15s | Hero |
| 2. Problem | 20s | Problem |
| 3. Simulator | 30s | How It Works (click auto-play) |
| 4. Architecture | 20s | Architecture + SVG topology |
| 5. Features | 25s | Features + Git + RAG + Wow |
| 6. Guardrails | 10s | Guardrails + Edge Cases |
| 7. Research | 20s | Research + HackTracker |
| 8. Close | 10s | Team + CTA |
| **Total** | **~2:30** | |

### Key Moments to Nail
1. **The simulator auto-play** (Scene 3) — this is the "wow" moment. Make sure the typewriter terminal text is visible and the step transitions are smooth.
2. **The blast-radius SVG** (Scene 5) — hover over it to show the callers/callees. This is the technical depth signal.
3. **The research metrics** (Scene 7) — let "29% → 89%" and "57%" animate in. These numbers stick.
4. **The phone mockup cycling** (Scene 1) — let it complete at least one full cycle before scrolling.

### What NOT to Do
- Don't read every word on screen — summarize, don't narrate
- Don't pause too long on any section — momentum matters
- Don't explain how the website was built — explain what DevLens does
- Don't use background music that competes with the voiceover
