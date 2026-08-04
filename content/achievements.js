// "heading"/"hint" are the section title and the small line under it.
// "items" is the row (or list, in vertical mode) of cards. Clicking a card opens
// a full-screen view showing "description" and "steps" (numbered, in order).
// The steps below are DRAFTS based on your CV bullets — rewrite them to match
// what you actually did before publishing.
window.SiteContent = window.SiteContent || {};
window.SiteContent.achievements = {
  heading: "Achievements",
  hint: "Click a card to see how it happened.",
  items: [
    {
      value: "30 → 60+ FPS",
      text: "Optimization pass on a historical mobile game",
      context: "RAR IT",
      description: "Took a live mobile title from ~30 FPS to a stable 60+ on target devices without cutting visual scope.",
      steps: [
        "Profiled with Unity Profiler to find the actual bottlenecks, not the assumed ones",
        "Reduced draw calls through batching and material/atlas cleanup",
        "Tuned animation and asset loading to cut per-frame overhead",
        "Re-tested on target devices after each change to confirm real-world gains"
      ]
    },
    {
      value: "24–26s → 4–6s",
      text: "Cold-start load time reduction on a live multiplayer game",
      context: "Lessonera",
      description: "Cut load time by roughly 80% on an educational multiplayer battle royale title already in players' hands, without introducing regressions.",
      steps: [
        "Profiled the load pipeline to isolate scene, asset, and network-init costs",
        "Restructured scene loading and asset streaming to defer non-critical work",
        "Cleaned up and re-packed assets contributing disproportionate load weight",
        "Built an intro/login screen to load characters and buildings behind, instead of loading them visibly in-scene",
        "Reduced build size ~20% alongside the load-time work as a related win",
        "Validated on real devices across the target hardware range"
      ]
    },
    {
      value: "5 → 11",
      text: "Scaled and stabilized a production team mid-project",
      context: "RAR IT",
      description: "Grew the team from 5 to 11 across Unity development, art, level design, game design, and narrative, while designing the workflow that let a bigger team ship without chaos.",
      steps: [
        "Audited the existing project to find structural weak points before adding headcount",
        "Introduced a 2-week Agile sprint cycle with dedicated review and planning days",
        "Documented workflows per scenario so process didn't live only in one person's head",
        "Built stakeholder-facing status reporting that answered business questions without technical noise",
        "Set up GitHub ownership rules and cross-discipline communication standards as the team grew"
    ]
    },
    {
      value: "20 → 60–75 FPS",
      text: "Performance pass on Meta Quest XR experiences",
      context: "Arabtesting",
      description: "Optimized therapeutic and educational VR experiences on Meta Quest, improving frame rate alongside CPU, GPU, and memory usage — the full budget, not just the headline number.",
      steps: [
        "Profiled on-device using Quest-specific tooling to find real hardware bottlenecks",
        "Reduced CPU and GPU load through draw call and shader cost reduction",
        "Cut memory footprint to reduce load stutter and improve session stability",
        "Validated comfort-critical frame pacing, since dropped frames in VR directly affect user comfort"
      ]
    },
    {
      value: "Modular systems",
      text: "Migrated a monolithic codebase into tested, modular assemblies",
      context: "Lessonera",
      description: "Converted the entire game into independent assembly definitions — Localization, PlayerCore, Sync, Network, UIView, WebView and moer — each with its own test and validation coverage.",
      steps: [
        "Mapped existing coupling between systems to define clean module boundaries",
        "Extracted each domain into its own assembly definition with an explicit public surface",
        "Added test and validation units per module to catch regressions at the boundary",
        "Rebuilt cross-module communication to go through defined interfaces instead of direct references"
      ]
    },
    {
      value: "Zero UI overlap",
      text: "Built a fully responsive UI system for a multi-game platform",
      context: "Freelance — multiplayer card & board platform",
      description: "Engineered a UI response system where the same interface adapts to any screen size with no element overlap — running across a platform of games (backgammon, closed backgammon, 31) built with Photon and PlayFab.",
      steps: [
        "Defined layout rules driven by anchor and safe-area logic instead of fixed positions",
        "Built adaptive scaling that held visual hierarchy across aspect ratios",
        "Stress-tested against extreme aspect ratios to catch overlap edge cases",
        "Shipped session-recovery on top: auto-reconnect and rejoin-last-room logic backed by PlayFab-stored state"
      ]
    }
  ]
};
