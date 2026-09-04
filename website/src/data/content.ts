export const site = {
  title: "DevLens — Point. Speak. Fixed.",
  description: "The first developer tool with eyes and ears. Your phone camera reads errors, your voice commands drive the agent, and your laptop fixes, tests, and verifies autonomously.",
  teamName: "Team Arize",
  hackathon: "iQOO Hackathon 2026",
  track: "Developer Tools Track",
  event: "Chennai · September 12–13",
  tagline: "Point. Speak. Fixed.",
  github: "https://github.com/Adit-Jain-srm/DevLens",
};

export const hero = {
  eyebrow: "TEAM ARIZE // IQOO HACKATHON 2026 // DEVELOPER TOOLS TRACK",
  headline: "Point. Speak.",
  headlineAccent: "Fixed.",
  subtitle:
    "The first developer tool with eyes and ears. 57% of debugging is comprehension — DevLens eliminates it. Phone camera reads errors in 100ms. Voice commands drive the agent. Laptop fixes, tests, and verifies. All in under 30 seconds.",
  stats: [
    {
      id: "stat-ocr",
      value: 100,
      decimals: 0,
      unit: "ms",
      label: "On-Device OCR",
      sub: "ML Kit v2 · 50MP camera · zero cloud",
      gradient: "from-[#00D4FF] to-[#10B981]",
    },
    {
      id: "stat-gap",
      value: 60,
      decimals: 0,
      unit: "pts",
      label: "Multi-Modal Accuracy Gap",
      sub: "NOFire AI SRE Benchmark 2026",
      gradient: "from-[#8B5CF6] to-[#EC4899]",
    },
    {
      id: "stat-loop",
      value: 30,
      decimals: 0,
      unit: "sec",
      label: "Error → Verified Fix",
      sub: "5-phase autonomous pipeline",
      gradient: "from-[#F59E0B] to-[#EF4444]",
    },
    {
      id: "stat-debug",
      value: 57,
      decimals: 0,
      unit: "%",
      label: "Debug Time Saved",
      sub: "ACM Grounded Theory 2026",
      gradient: "from-[#10B981] to-[#00D4FF]",
    },
  ],
};

export const problem = {
  eyebrow: "THE PROBLEM",
  title: "40 minutes of pain. The fix was one line.",
  story: [
    "It's 11:40 PM. Priya has been staring at the same bug for forty minutes.",
    "Her terminal shows a TypeError. Her browser console has three CORS errors. The API docs say the response includes a user object — but the actual response doesn't have one.",
    "She opens Cursor. Types \"I'm getting a TypeError...\" and stops. The error is in the terminal. The relevant context is spread across the browser, API docs, the IDE, and a Slack thread from yesterday where her teammate said \"I refactored the auth middleware.\"",
    "To explain this to the AI, she'd need to screenshot the terminal, copy the browser console, paste the Slack messages, point to the file, explain the history. Five minutes of context assembly for a question that might not even be the right question.",
    "So she guesses. Adds a null check. Runs tests. Three fail. Different error. Another guess. By 12:30 AM she finds it — the refactored middleware moved req.user to req.auth.user.",
  ],
  punchline: "With DevLens: Point phone at terminal. \"Fix this.\" Agent finds the renamed path in yesterday's git diff, patches the three route handlers, runs tests: \"Fixed. 12 passing.\" Under 30 seconds.",
  insight: "The gap is not in AI's coding ability. It is in AI's inability to see what the developer sees.",
};

export const howItWorks = {
  eyebrow: "HOW IT WORKS",
  title: "The Intelligence Inversion.",
  subtitle: "Intelligence lives on the phone. Execution lives on the laptop. The developer just points and speaks.",
  steps: [
    {
      id: "step-point",
      phase: "POINT",
      icon: "📸",
      title: "Phone Camera Reads the Error",
      node: "iQOO PHONE · SNAPDRAGON NPU",
      duration: "< 100ms",
      description: "CameraX captures the screen. ML Kit OCR extracts text on-device in under 100ms. Gemini Nano classifies the error type, identifies the language, and extracts the stack trace — all without leaving the phone.",
      codeSnippet: `[CAMERA]  Frame captured @ 50MP → downscaled to 1080p
[ML-KIT]  OCR v2 extraction: 23 lines detected
[NANO]   Error classified: TypeError (null reference)
[NANO]   Stack trace: src/middleware/auth.js:47
[NANO]   Confidence: 0.97 · Language: JavaScript
[ROUTE]  Complexity: MEDIUM → route to laptop agent`,
      telemetry: {
        latency: "94ms",
        model: "Gemini Nano",
        privacy: "100% On-Device",
        status: "CAPTURED & CLASSIFIED",
      },
    },
    {
      id: "step-speak",
      phase: "SPEAK",
      icon: "🎙️",
      title: "Voice Command Drives the Agent",
      node: "iQOO PHONE · ML KIT SPEECH",
      duration: "< 500ms",
      description: "ML Kit Speech Recognition captures the developer's voice command in real-time. Gemini Nano extracts intent: fix, explain, test, undo, or investigate. The structured command is dispatched to the laptop daemon over WebSocket.",
      codeSnippet: `[SPEECH]  "Fix this and run the tests"
[NANO]   Intent: FIX_AND_VERIFY
[NANO]   Targets: error context + voice instruction
[WS]     Dispatching to laptop daemon @ 192.168.1.42:8765
[CMD]    {
           "intent": "fix_error",
           "voice": "Fix this and run the tests",
           "context": { "error": "TypeError", "file": "auth.js:47" }
         }`,
      telemetry: {
        latency: "340ms",
        model: "ML Kit Speech",
        privacy: "100% On-Device",
        status: "INTENT DISPATCHED",
      },
    },
    {
      id: "step-fixed",
      phase: "FIXED",
      icon: "✅",
      title: "Laptop Fixes, Tests, and Verifies",
      node: "LAPTOP DAEMON · NODE.JS AGENT",
      duration: "~25s",
      description: "The laptop agent orchestrates: searches the codebase for relevant files, checks git history, generates a patch via OpenRouter, applies it, runs the test suite, and streams verified results back to the phone.",
      codeSnippet: `[AGENT]  Searching codebase for "req.user" references...
[GIT]    Found: auth middleware refactored 18h ago (git diff)
[GIT]    Changed: req.user → req.auth.user in middleware
[SEARCH] 3 route handlers still use old path
[PATCH]  Generating fix via OpenRouter (Claude 4)...
[APPLY]  Patched: routes/profile.js, routes/settings.js, routes/api.js
[TEST]   Running: npm test
[TEST]   ████████████████████ 12/12 passing (0 failing)
[VERIFY] All tests green. Fix verified.
[REPORT] → Phone: "Fixed. 12 tests passing."`,
      telemetry: {
        latency: "24.6s",
        model: "Claude 4 (OpenRouter)",
        privacy: "Code stays on laptop",
        status: "ALL 12 TESTS PASSING",
      },
    },
  ],
};

export const architecture = {
  eyebrow: "ARCHITECTURE",
  title: "Intelligence Inversion.",
  subtitle: "Traditional AI tools put intelligence in the cloud and UI on a screen. DevLens inverts this: intelligence on-device, execution on the laptop.",
  traditional: {
    label: "Traditional AI Dev Tools",
    flow: "Developer → Type error into text box → Cloud AI → Text response → Manually apply fix → Hope it works",
  },
  inverted: {
    label: "DevLens (Inverted)",
    flow: "Developer → Point phone camera → On-device AI perceives → Laptop agent executes → Fix verified → Developer informed",
  },
  nodes: [
    {
      id: "phone",
      name: "iQOO Phone",
      subtitle: "Snapdragon 8 Elite · Gemini Nano",
      role: "PERCEPTION & INTELLIGENCE",
      accent: "#00D4FF",
      icon: "📱",
      specs: [
        { label: "Camera", value: "CameraX + ML Kit OCR v2" },
        { label: "Voice", value: "ML Kit Speech Recognition" },
        { label: "On-Device AI", value: "Gemini Nano (AICore)" },
        { label: "NPU", value: "Snapdragon 45+ TOPS" },
      ],
    },
    {
      id: "bridge",
      name: "WebSocket Bridge",
      subtitle: "Local Wi-Fi + Office Kit",
      role: "SECURE COMMUNICATION",
      accent: "#8B5CF6",
      icon: "🔗",
      specs: [
        { label: "Protocol", value: "WebSocket (OkHttp ↔ ws)" },
        { label: "Bridge", value: "iQOO Office Kit integration" },
        { label: "Security", value: "Local network only" },
        { label: "Latency", value: "< 5ms local transfer" },
      ],
    },
    {
      id: "laptop",
      name: "Laptop Daemon",
      subtitle: "Node.js + TypeScript Agent",
      role: "EXECUTION & VERIFICATION",
      accent: "#10B981",
      icon: "💻",
      specs: [
        { label: "File Ops", value: "Search, read, write, glob" },
        { label: "Terminal", value: "node-pty command execution" },
        { label: "Git", value: "simple-git history & diffs" },
        { label: "Cloud AI", value: "OpenRouter (complex reasoning)" },
      ],
    },
  ],
};

export const features = {
  eyebrow: "CAPABILITIES",
  title: "More than a debugger.",
  subtitle: "DevLens doesn't just read errors — it understands, acts, verifies, and learns.",
  items: [
    {
      title: "Active Visual Perception",
      description: "Phone camera provides region-level, targeted visual grounding — academically proven superior to full-screenshot approaches.",
      icon: "👁️",
      badge: "CAMERA",
      accent: "#00D4FF",
    },
    {
      title: "Zero-Context-Switch Interface",
      description: "Camera + voice means the developer never leaves their debugging flow. Eliminates the 23-minute focus recovery cost.",
      icon: "🎯",
      badge: "VOICE",
      accent: "#8B5CF6",
    },
    {
      title: "End-to-End Verification",
      description: "Doesn't just suggest fixes. Applies → tests → proves → reports. Eliminates Devin's 46% rejection rate problem.",
      icon: "🔒",
      badge: "VERIFY",
      accent: "#10B981",
    },
    {
      title: "Session Debugging Memory",
      description: "Remembers what was tried, what failed, what worked. Prevents repeated failures within a session.",
      icon: "🧠",
      badge: "MEMORY",
      accent: "#F59E0B",
    },
    {
      title: "Copilot Bridge Mode",
      description: "Not locked in. Camera → analysis → smart prompt → clipboard sync → paste into Cursor, Claude Code, or any tool.",
      icon: "🌉",
      badge: "BRIDGE",
      accent: "#EC4899",
    },
    {
      title: "Architecture Drift Detection",
      description: "Point your phone at a whiteboard drawing. DevLens compares the intended architecture against the actual codebase.",
      icon: "📐",
      badge: "WOW FEATURE",
      accent: "#EF4444",
    },
  ],
};

export const wowFeature = {
  eyebrow: "SIGNATURE FEATURE",
  title: "Whiteboard → Code Comparison.",
  subtitle: "Point your phone at a whiteboard architecture diagram. DevLens reads it, maps it against your actual codebase, and shows where reality has drifted from the plan.",
  steps: [
    "Phone camera captures whiteboard diagram",
    "Gemini Nano extracts boxes, arrows, labels on-device",
    "Laptop agent maps diagram nodes to actual code modules",
    "Drift report: what matches, what's missing, what's extra",
  ],
};

export const comparison = {
  eyebrow: "WHY DEVLENS",
  title: "Where others stop, DevLens starts.",
  subtitle: "Research-backed differentiation across six dimensions.",
  rows: [
    {
      dimension: "Context Input",
      devlens: "Camera + Voice + Code + Git + Tests",
      cursor: "Text box (code files only)",
      devin: "Ticket description only",
      claudeCode: "Terminal + broken screenshots",
      evidence: "NOFire 2026: 60pt gap is structural",
    },
    {
      dimension: "Visual Perception",
      devlens: "Active camera, pointed, 100ms",
      cursor: "None",
      devin: "None",
      claudeCode: "Downscaled screenshots (buggy)",
      evidence: "FailureMem 2026: active > screenshots",
    },
    {
      dimension: "Voice Commands",
      devlens: "Full voice interface",
      cursor: "None",
      devin: "None",
      claudeCode: "None",
      evidence: "Dr. Gloria Mark: 23min focus recovery",
    },
    {
      dimension: "On-Device AI",
      devlens: "Gemini Nano + ML Kit (phone NPU)",
      cursor: "Cloud only",
      devin: "Cloud only",
      claudeCode: "Cloud only",
      evidence: "Delhi 1st place: local-first wins",
    },
    {
      dimension: "Verification",
      devlens: "Auto test → prove → report",
      cursor: "Manual apply & test",
      devin: "Applies fix, 46% rejected",
      claudeCode: "Runs tests if asked",
      evidence: "Devin 2026: 46% rejection rate",
    },
    {
      dimension: "Context Switches",
      devlens: "Zero (camera + voice)",
      cursor: "4-6 per debug cycle",
      devin: "Async (ticket based)",
      claudeCode: "2-3 (terminal based)",
      evidence: "ACM 2026: 57% time is comprehension",
    },
  ],
};

export const modes = {
  eyebrow: "THREE MODES",
  title: "Start simple. Graduate to full autonomy.",
  items: [
    {
      name: "Quick Capture",
      description: "Camera → OCR → raw text → clipboard sync. Just the error text, instantly.",
      icon: "⚡",
      accent: "#F59E0B",
      complexity: "Simple",
    },
    {
      name: "Copilot Bridge",
      description: "Camera → on-device analysis → smart prompt → clipboard sync → paste into any AI tool.",
      icon: "🌉",
      accent: "#8B5CF6",
      complexity: "Smart",
    },
    {
      name: "Full Agent",
      description: "Camera → analysis → laptop agent → fix → test → verify. Fully autonomous end-to-end.",
      icon: "🤖",
      accent: "#00D4FF",
      complexity: "Autonomous",
    },
  ],
};

export const research = {
  eyebrow: "RESEARCH-BACKED",
  title: "Built on evidence, not hype.",
  citations: [
    {
      finding: "60-point accuracy gap between single-modal (29%) and multi-modal (89%) debugging — this gap is structural, not tunable",
      source: "NOFire AI SRE Benchmark 2026",
      url: "https://www.nofire.ai/guides/NOFire-AI-SRE-Benchmark-2026.pdf",
      implication: "Text-only tools (Cursor, Claude Code) have a structural accuracy ceiling. Camera + voice is the only path to closing it.",
      metric: "29% → 89%",
    },
    {
      finding: "57% of debugging time is mental model updating — understanding the system, not writing the fix",
      source: "ACM Grounded Theory of Debugging 2026",
      url: "https://doi.org/10.1145/3797077",
      implication: "DevLens targets the 57% (comprehension), not just the 13% (code generation) that Cursor/Copilot address.",
      metric: "57%",
    },
    {
      finding: "Active perception with region-level visual grounding outperforms full-page screenshot analysis",
      source: "FailureMem · March 2026",
      url: "https://arxiv.org/pdf/2603.17826v1",
      implication: "DevLens's pointed camera capture is structurally superior to Claude Code's downscaled screenshots.",
      metric: "+3.7%",
    },
    {
      finding: "Visual dependency graphs reduce input token consumption by 26% while maintaining accuracy",
      source: "SeeRepo · June 2026",
      url: "https://arxiv.org/html/2606.14061v4",
      implication: "Whiteboard → Architecture Drift is not a gimmick — it's an academically validated technique.",
      metric: "−26%",
    },
    {
      finding: "Graph-guided investigation improves root-cause accuracy by +25 percentage points over baselines",
      source: "GALA+ · August 2026",
      url: "https://arxiv.org/html/2608.08968",
      implication: "DevLens's Developer Context Graph produces richer context than any pure-code indexing tool.",
      metric: "+25pp",
    },
    {
      finding: "A single context switch consumes 20% of cognitive capacity. Full recovery takes 23 minutes.",
      source: "Dr. Gloria Mark, UC Irvine",
      url: "https://www.ics.uci.edu/~gmark/",
      implication: "The screenshot→paste→explain→apply cycle introduces 4-6 switches. Camera + voice eliminates all of them.",
      metric: "23 min",
    },
    {
      finding: "46% of Devin's autonomous fixes are rejected by developers",
      source: "Devin 2026 Reviews (Litmus)",
      url: "https://litmustools.com/review/devin/",
      implication: "DevLens's confirm-before-execute loop prevents the autonomous-without-oversight failure mode.",
      metric: "46%",
    },
    {
      finding: "Screenshots aggressively downscaled to 1568px — model cannot read small text",
      source: "Claude Code Issue #48492",
      url: "https://github.com/anthropics/claude-code/issues/48492",
      implication: "DevLens's 50MP phone camera provides full-fidelity capture with ML Kit OCR at native resolution.",
      metric: "1568px",
    },
    {
      finding: "Targeted region inspection outperforms full-trajectory analysis for debugging",
      source: "CUADebugger · August 2026",
      url: "https://arxiv.org/html/2608.02643v1",
      implication: "Pointing the camera at exactly what matters beats dumping full screenshots into an LLM.",
      metric: "region > full",
    },
    {
      finding: "1st place Delhi iQOO Hackathon won with 100% local, no cloud execution",
      source: "Animesh Jantwal, LinkedIn 2026",
      url: "https://www.linkedin.com/posts/animeshjantwal_proud-to-share-that-team-dp-on-dag-secured-activity-7469776197833474048-kl7l",
      implication: "On-device Gemini Nano as primary intelligence mirrors the winning formula.",
      metric: "1st place",
    },
  ],
};

export const team = {
  eyebrow: "THE TEAM",
  name: "Team Arize",
  tagline: "Full-spectrum coverage across mobile, backend, and AI.",
  members: [
    {
      name: "Adit Jain",
      role: "Team Leader",
      title: "Mobile Dev Lead",
      focus: "Android app, CameraX, ML Kit, Jetpack Compose, on-device AI",
      badge: "LEADER",
    },
    {
      name: "Ayush Pandey",
      role: "Agent / Backend Dev",
      title: "Agent Architect",
      focus: "Laptop daemon, Node.js agent, OpenRouter, terminal automation",
      badge: "BACKEND",
    },
    {
      name: "Mehir Singh",
      role: "Integration / Demo",
      title: "Integration Engineer",
      focus: "WebSocket bridge, Office Kit, demo scripting, pitch delivery",
      badge: "INTEGRATION",
    },
  ],
};

export const techStack = {
  eyebrow: "TECH STACK",
  title: "Engineered for the edge.",
  layers: [
    {
      name: "Phone (Android)",
      badge: "PERCEPTION",
      accent: "#00D4FF",
      technologies: ["Kotlin", "Jetpack Compose", "CameraX", "ML Kit OCR v2", "ML Kit Speech", "Gemini Nano (AICore)", "OkHttp WebSocket"],
    },
    {
      name: "Laptop Daemon",
      badge: "EXECUTION",
      accent: "#10B981",
      technologies: ["Node.js", "TypeScript", "ws (WebSocket)", "node-pty", "simple-git", "glob / ripgrep", "OpenRouter API"],
    },
    {
      name: "Communication",
      badge: "BRIDGE",
      accent: "#8B5CF6",
      technologies: ["WebSocket over local Wi-Fi", "iQOO Office Kit", "Screen Mirror", "Clipboard Sync", "File Transfer", "Remote Control"],
    },
  ],
};

export const debugPipeline = {
  eyebrow: "THE PIPELINE",
  title: "20-30 seconds. Five phases.",
  subtitle: "From camera capture to verified fix — a complete autonomous debugging pipeline.",
  phases: [
    {
      name: "Observation",
      location: "On-Device",
      time: "<2s",
      description: "CameraX → ML Kit OCR (<100ms) → error pattern detection → Gemini Nano classification",
      output: "Error text, type, severity, component, confidence score",
      accent: "#00D4FF",
    },
    {
      name: "Understanding",
      location: "On-Device + Voice",
      time: "<5s",
      description: "Voice transcription → intent extraction → temporal hints → hypothesis refinement",
      output: "Enriched context graph with human intent and actionable command",
      accent: "#8B5CF6",
    },
    {
      name: "Investigation",
      location: "Laptop",
      time: "5-15s",
      description: "Git log → git diff → file read → OpenRouter reasoning → patch generation",
      output: "Minimal patch with supporting evidence (diff, test expectations)",
      accent: "#F59E0B",
    },
    {
      name: "Verification",
      location: "Laptop → Phone",
      time: "5-10s",
      description: "Apply patch (git stash safety) → detect test framework → run tests → parse results",
      output: "Verified result: pass/fail count, changed files, summary",
      accent: "#10B981",
    },
    {
      name: "Explanation",
      location: "On-Device",
      time: "<1s",
      description: "Update context graph → display structured result → store session learning",
      output: "What broke, why, what changed, and proof it works",
      accent: "#EC4899",
    },
  ],
};

export const contextGraph = {
  eyebrow: "DEVELOPER CONTEXT GRAPH",
  title: "Six signals. One graph.",
  subtitle: "No competitor fuses physical-world signals (camera, voice) with digital-world signals (code, tests, git).",
  signals: [
    { name: "Visual", source: "Phone camera", example: "Error text, screen state, whiteboard diagrams", icon: "👁️", accent: "#00D4FF" },
    { name: "Auditory", source: "Phone microphone", example: "\"This broke after the auth refactor\"", icon: "🎙️", accent: "#8B5CF6" },
    { name: "Code", source: "Laptop filesystem", example: "auth.js line 47, imports, dependencies", icon: "📝", accent: "#F59E0B" },
    { name: "Runtime", source: "Laptop terminal", example: "Test results, npm output, HTTP status", icon: "⚡", accent: "#10B981" },
    { name: "Temporal", source: "Git history", example: "Yesterday's commit changed auth.js", icon: "🕐", accent: "#EC4899" },
    { name: "Human", source: "Session memory", example: "\"We already tried adding a null check\"", icon: "🧠", accent: "#EF4444" },
  ],
};

export const guardrails = {
  eyebrow: "SAFETY & GUARDRAILS",
  title: "Developer stays in control.",
  subtitle: "DevLens amplifies developers — it doesn't replace them. Every action has a safety net.",
  items: [
    {
      title: "Confirm Before Execute",
      description: "The developer ALWAYS sees what DevLens understood before any code changes. No silent modifications. Prevents the 46% rejection rate that plagues fully autonomous agents.",
      icon: "🛡️",
      accent: "#10B981",
    },
    {
      title: "Git Stash Safety Net",
      description: "Every patch is preceded by an automatic git stash. If the fix breaks something, one command restores the original state. Zero risk of lost work.",
      icon: "💾",
      accent: "#00D4FF",
    },
    {
      title: "Confidence Scoring",
      description: "Every OCR extraction and error classification comes with a confidence score. Low confidence triggers a manual review prompt — no action on uncertain data.",
      icon: "📊",
      accent: "#F59E0B",
    },
    {
      title: "Privacy-First Routing",
      description: "Gemini Nano screens for secrets (API keys, passwords) on-device BEFORE any data leaves the phone. Sensitive code never touches the cloud.",
      icon: "🔐",
      accent: "#8B5CF6",
    },
    {
      title: "Graceful Degradation",
      description: "If Gemini Nano is unavailable → falls back to pattern matching. If WebSocket drops → auto-reconnect with exponential backoff. If OCR fails → allows manual text input.",
      icon: "🔄",
      accent: "#EC4899",
    },
    {
      title: "Scope Boundaries",
      description: "Agent only modifies files in the active project directory. No system-level access, no network requests outside the local Wi-Fi bridge, no package installations without confirmation.",
      icon: "🚧",
      accent: "#EF4444",
    },
  ],
};

export const edgeCases = {
  eyebrow: "EDGE CASES HANDLED",
  title: "What if things go wrong?",
  items: [
    { scenario: "OCR misreads the error text", handling: "Confidence threshold check. Below 85% → show extracted text with \"Confirm or correct?\" prompt. Developer can voice-correct." },
    { scenario: "WebSocket disconnects mid-fix", handling: "Auto-reconnect with exponential backoff (1s, 2s, 4s). Git stash already saved. Resume from last checkpoint." },
    { scenario: "Gemini Nano unavailable on device", handling: "Fallback chain: Gemini Nano → on-device regex pattern matching → Cloud AI via OpenRouter. Core OCR/Speech still works." },
    { scenario: "Fix makes tests fail worse", handling: "Automatic git stash pop to revert. Report: \"Fix reverted — 3 new failures introduced. Original state restored.\"" },
    { scenario: "Multiple errors on screen", handling: "ML Kit detects all text regions. Gemini Nano ranks by severity. Developer can tap/voice-select which to investigate first." },
    { scenario: "Error is in a language DevLens hasn't seen", handling: "OCR is language-agnostic (text extraction). OpenRouter auto-routes to the best model for that language (400+ models)." },
    { scenario: "Camera angle or lighting is poor", handling: "Real-time OCR confidence feedback. Red → yellow → green indicator shows capture quality. \"Move closer\" or \"Improve lighting\" prompts." },
    { scenario: "Developer says \"undo\" after fix is applied", handling: "Git stash pop restores the pre-fix state. Session memory records: \"Reverted fix X — try different approach.\"" },
  ],
};
