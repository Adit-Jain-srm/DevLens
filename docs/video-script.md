# DevLens — AI Video Script

**Duration:** 2:30 – 3:00 minutes
**Style:** Clean, modern tech explainer. Dark background, minimal motion graphics, confident narration.
**Tone:** Professional but energetic. Think: a YC demo day pitch, not a corporate ad.
**Music:** Subtle electronic/ambient underscore. Builds energy in the middle, resolves at the end.

---

## SCENE 1 — The Problem (0:00 – 0:35)

**Visual:** Dark screen. A developer's desk at night — laptop, terminal open, multiple browser tabs, dim lighting. Clock shows 11:40 PM. Everything looks slightly overwhelming.

**Narration:**

> It's 11:40 PM. Priya has been staring at the same bug for forty minutes.

**Visual:** Close-up of a terminal showing `TypeError: Cannot read properties of undefined`. Then a browser console with CORS errors. Then API docs on a second monitor. Then a Slack message saying "I refactored the auth middleware." Quick cuts between all four — showing the chaos of real debugging.

> Her terminal shows a TypeError. Her browser has CORS errors. The API docs say one thing, the actual response says another. The context she needs is scattered across four different surfaces.

**Visual:** She opens an AI coding assistant. Types "I'm getting a TypeError..." then pauses. Hands stop on keyboard. Highlight the GAP — she can SEE the error, but her AI tool cannot.

> She opens her AI assistant and stops. To explain this bug, she would need to screenshot the terminal, copy the browser console, paste Slack messages, and explain the history. Five minutes of context assembly — just to ask the right question.

**Visual:** Fast-forward montage — guessing, adding a null check, running tests, tests fail, trying again, another fail. Clock spins to 12:30 AM. Finally she finds it.

> So she guesses. Forty minutes and six wrong attempts later, she finds it. A refactored middleware moved one object path. The fix was one line. The debugging was forty minutes of manually being the bridge between what she could see and what her tools could understand.

**Visual:** Text fades to center screen: **"The gap is not in AI's coding ability. It's in AI's inability to see what the developer sees."**

---

## SCENE 2 — Introducing DevLens (0:35 – 1:05)

**Visual:** Clean transition. Dark background. The DevLens logo appears — minimal, modern. Then the tagline fades in below it.

**Text on screen:**

```
DevLens
Point. Speak. Fixed.
The first developer tool with eyes and ears.
```

**Narration:**

> DevLens is the first developer tool with eyes and ears.

**Visual:** An iQOO phone enters the frame, angled naturally as if held in hand. The camera viewfinder is active, pointed at a laptop screen showing an error.

> Instead of typing what you see into a text box, you point your phone at the problem. DevLens reads the error on-device in under 100 milliseconds — no cloud, no upload, no latency.

**Visual:** The phone screen shows a real-time overlay: error text highlighted, a classification badge appearing — "TypeError · Null Reference · Auth Middleware · Confidence: 94%". All happening on the phone itself.

> Then you speak. "Fix this and run the tests."

**Visual:** A voice waveform animates on the phone screen. The words appear as transcription in real-time.

> DevLens sends a structured command to your laptop. The agent searches the codebase, finds the root cause in yesterday's git diff, generates the fix, applies the patch, runs the test suite — and reports back to your phone.

**Visual:** Split screen — phone on the left showing a progress feed (Searching files ✓, Generating patch ✓, Applying fix ✓, Running tests...), laptop terminal on the right showing actual commands executing. Then a green checkmark appears on the phone: "Fixed. 12 tests passing."

> Thirty seconds. From pointing the camera to a verified fix. No screenshots. No copy-paste. No guessing.

---

## SCENE 3 — How It Works (1:05 – 1:40)

**Visual:** Architecture diagram animates on screen. Clean, modern style — two devices connected by a bridge.

**Narration:**

> DevLens inverts the traditional AI tool architecture. In every other tool, intelligence lives in the cloud and the interface is on your device. DevLens flips this.

**Visual:** Animate the phone side lighting up — labeled "THE BRAIN". Show icons for Camera, Microphone, NPU (Gemini Nano), and Context Engine appearing inside the phone.

> Intelligence lives on the phone. The camera perceives. The microphone listens. The Snapdragon NPU classifies and reasons — all on-device, with zero cloud dependency for perception.

**Visual:** Animate a connection line from the phone to the laptop — labeled "WebSocket + Office Kit". The laptop side lights up — labeled "THE HANDS". Show icons for File Search, Terminal, Git, Test Runner.

> Execution lives on the laptop. File search, patch application, terminal commands, test execution — the laptop does what the phone tells it to do.

**Visual:** The three operating modes appear as three horizontal cards:

```
FULL AGENT         Camera → Analysis → Agent → Fix → Test → Verified
COPILOT BRIDGE     Camera → Analysis → Smart Prompt → Clipboard → Paste into any tool
QUICK CAPTURE      Camera → OCR → Text → Clipboard
```

> DevLens works three ways. Full Agent mode handles everything end-to-end. Copilot Bridge generates a context-rich prompt and syncs it to your laptop clipboard — paste it into Cursor, Claude Code, or any tool you already use. Quick Capture just grabs the error text without typing. You start simple and graduate to full autonomy.

---

## SCENE 4 — The Wow Feature (1:40 – 2:05)

**Visual:** A hand draws a simple architecture diagram on a piece of paper — boxes labeled "App", "API Gateway", "Cache", "Database" with arrows connecting them. An iQOO phone enters the frame and points at the drawing.

**Narration:**

> But DevLens does more than read errors. Draw your intended architecture on a piece of paper. Point the phone at it.

**Visual:** Phone screen shows OCR overlays detecting the text labels. Then a structured output: "Detected: App → API Gateway → Cache → Database".

> DevLens reads the diagram, maps each component to your actual repository structure — and detects drift.

**Visual:** Phone screen shows the result: "API Gateway → /src/routes/ ✓", "Cache → ⚠ No Redis dependency found in package.json. Missing component." A red highlight on the mismatch.

> "Your diagram shows a caching layer, but the project has no Redis dependency. Architecture drift detected." No other developer tool can do this — because no other tool has a camera.

---

## SCENE 5 — Why It Is Different (2:05 – 2:30)

**Visual:** Clean comparison table animates on screen, row by row:

| | Cursor | Devin | DevLens |
|---|---|---|---|
| Sees your screen | No | No | Yes (camera) |
| Hears you explain | No | No | Yes (microphone) |
| Fixes autonomously | No | Yes (46% fail) | Yes (verified) |
| Proves it works | No | Sandbox only | Real tests, real project |
| Works on device | No | No | Gemini Nano on NPU |

**Narration:**

> Cursor cannot see your screen. Devin cannot hear you explain the problem. Neither verifies fixes against your actual codebase. DevLens does all three — with intelligence running on-device, not in the cloud.

**Visual:** The research backing appears as floating citation cards:

- "57% of debugging time is spent understanding, not fixing" — ACM 2026
- "60-point accuracy gap between single-modal and multi-modal" — NOFire Benchmark
- "Active perception outperforms full screenshots" — FailureMem 2026

> This is not a hypothesis. Peer-reviewed research from 2026 confirms that multi-modal context produces a sixty-point accuracy improvement over text-only tools. The gap is structural — and DevLens is the first tool to close it.

---

## SCENE 6 — Team and Close (2:30 – 2:50)

**Visual:** Clean dark background. Team Arize appears:

```
TEAM ARIZE

Adit Jain          Mobile Dev Lead       Camera, ML Kit, On-device AI
Ayush Pandey       Agent / Backend Dev   Laptop daemon, OpenRouter, Automation
Mehir Singh        Integration / Demo    WebSocket bridge, Office Kit, Pitch
```

**Narration:**

> We are Team Arize. Three engineers building DevLens for the iQOO Hackathon 2026, Developer Tools track, Chennai.

**Visual:** Final frame. DevLens logo centered. Tagline below. GitHub link at bottom.

```
DevLens
Point. Speak. Fixed.

github.com/Adit-Jain-srm/DevLens
```

> Point. Speak. Fixed. DevLens — the first developer tool with eyes and ears.

**Visual:** Hold for 3 seconds. Fade to black.

---

## PRODUCTION NOTES FOR AI VIDEO MAKER

### Visual Style

- **Color palette:** Dark background (#0A0A0F), cyan accent (#00D4FF), white text, subtle gradients
- **Typography:** Monospace for code/technical elements (JetBrains Mono), clean sans-serif for narration text (Inter)
- **Motion:** Smooth, minimal. No flashy transitions. Elements fade in, slide up, or draw themselves. Professional, not playful.
- **Device mockups:** Use realistic iQOO phone mockup (dark colorway) and a modern laptop. Angled, not flat.

### Scene-by-Scene Visual Guidance

| Scene | Primary Visual | Animation Style |
|-------|---------------|-----------------|
| 1 (Problem) | Developer desk at night, terminal close-ups | Quick cuts between screens, slight camera shake for chaos feel |
| 2 (Intro) | Phone camera pointed at laptop, real-time overlay | Smooth zoom into phone screen, overlays animate in with slight delay |
| 3 (Architecture) | System diagram with two-device split | Draw-on animation — lines and boxes appear as if being sketched |
| 4 (Wow Feature) | Hand drawing on paper, phone scanning it | Real-world feel — slightly shaky handheld camera, then clean UI overlay |
| 5 (Comparison) | Table comparison, research citations | Rows slide in one by one, citations float in from sides |
| 6 (Team/Close) | Team names, logo, tagline | Clean fade-in, hold, professional end card |

### Narration Guidance

- **Voice:** Male or female, mid-20s to early-30s, confident and clear. Not robotic. Not overly enthusiastic. Think: a smart engineer presenting at a demo day.
- **Pace:** Moderate. Not rushed. Let the visuals carry weight. Pauses after key statements ("Thirty seconds." and "Point. Speak. Fixed.").
- **Emphasis words:** "forty minutes", "one line", "100 milliseconds", "thirty seconds", "sixty-point", "no other tool", "Point. Speak. Fixed."

### Text Overlays (Key Moments)

| Timestamp | Text on Screen |
|-----------|---------------|
| 0:00 | 11:40 PM |
| 0:30 | "The gap is not in AI's coding ability. It's in AI's inability to see what the developer sees." |
| 0:35 | DevLens · Point. Speak. Fixed. |
| 0:45 | "100ms — on-device, no cloud" |
| 1:00 | "Fixed. 12 tests passing." |
| 1:10 | PHONE = THE BRAIN · LAPTOP = THE HANDS |
| 1:25 | Full Agent · Copilot Bridge · Quick Capture |
| 1:50 | "Architecture drift detected" |
| 2:15 | 57% · 60-point gap · Active perception |
| 2:35 | TEAM ARIZE |
| 2:45 | Point. Speak. Fixed. |

### Aspect Ratios Needed

- **16:9** (primary — for submission embed, YouTube)
- **9:16** (optional — for mobile/social preview)
- **1:1** (optional — for thumbnail/social cards)

### Duration Targets

- **Ideal:** 2:45
- **Minimum:** 2:15 (cut Scene 5 comparison to just the tagline)
- **Maximum:** 3:15 (add a brief "Scalability" scene between 5 and 6)

### Music

- Subtle electronic ambient. Builds from minimal in Scene 1 to a confident midtempo in Scene 3-4. Resolves clean in Scene 6.
- Reference tracks: anything from Epidemic Sound's "Tech Corporate" or "Minimal Electronic" categories.
- No lyrics. No drops. No dubstep. This is a technical product, not a gaming highlight reel.
