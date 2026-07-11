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
      description: "Took a mobile title from ~30 FPS to a stable 60+ on target devices.",
      steps: [
        "Profiled with Unity Profiler to find the actual bottlenecks, not the assumed ones",
        "Reduced draw calls through batching and material/atlas cleanup",
        "Tuned animation and asset loading to cut per-frame overhead",
        "Re-tested on target devices after each change to confirm real-world gains"
      ]
    },
    {
      value: "5 → 10",
      text: "Team members led across Unity dev, art, level design, and narrative",
      context: "RAR IT",
      description: "Scaled and stabilized production as the team roughly doubled.",
      steps: [
        "Introduced a two-week sprint cadence the whole team could actually sustain",
        "Set clear asset-import and GitHub ownership standards before adding more people",
        "Made blocker reporting visible early instead of surfacing in sprint review",
        "Delegated ownership by system so growth didn't bottleneck through one person"
      ]
    },
    {
      value: "15+ screens",
      text: "Full UI/UX rebuild for clarity and mobile player experience",
      context: "RAR IT",
      description: "Rebuilt the game's UI across 15+ screens for consistency and mobile usability.",
      steps: [
        "Audited existing screens against a single, consistent design language",
        "Rebuilt navigation and layout for one-handed mobile use",
        "Coordinated with art/UX to standardize components instead of one-off screens",
        "Rolled out changes incrementally, screen by screen, to keep the game shippable throughout"
      ]
    },
    {
      value: "8+ systems",
      text: "Legacy systems refactored into modular architecture",
      context: "RAR IT",
      description: "Directed the refactor of 8+ legacy systems into clean, modular architecture.",
      steps: [
        "Identified the systems causing the most friction for the team first",
        "Introduced Assembly Definitions to enforce real module boundaries",
        "Refactored incrementally behind the same external behavior, verified against QA",
        "Documented the new structure so the team could extend it without regressing it"
      ]
    },
    {
      value: "50+ assets",
      text: "3D models integrated into a large city level",
      context: "RAR IT",
      description: "Coordinated integration of a large city level built from 50+ 3D models.",
      steps: [
        "Set performance budgets before art started coming in, not after",
        "Coordinated with art on import settings, LODs, and batching",
        "Integrated in passes, profiling after each to catch regressions early",
        "Signed off only once frame rate and load time held on target devices"
      ]
    },
    {
      value: "20+ assets",
      text: "Legacy art assets audited and optimized",
      context: "RAR IT",
      description: "Audited and optimized 20+ legacy art assets for performance and consistency.",
      steps: [
        "Catalogued existing assets against current performance and style standards",
        "Reworked textures and meshes that were the heaviest for their visual value",
        "Standardized import settings across the set",
        "Verified visual consistency alongside the performance gains"
      ]
    },
    {
      value: "−60% load time",
      text: "Cut through profiling, scene, and asset cleanup",
      context: "Lessonera",
      description: "Reduced load times by roughly 60% through targeted profiling and cleanup.",
      steps: [
        "Profiled load sequences to find where time was actually going",
        "Cleaned up scene references and asset bundling",
        "Deferred non-critical loading until after first interaction",
        "Measured before/after on real devices, not just the editor"
      ]
    },
    {
      value: "−20% build size",
      text: "Reduced through build-pipeline improvements",
      context: "Lessonera",
      description: "Cut build size by roughly 20% through build-pipeline and asset improvements.",
      steps: [
        "Audited what was actually shipping in the build versus what was needed",
        "Compressed and re-encoded oversized textures and audio",
        "Stripped unused code paths and assets from the build pipeline",
        "Verified the smaller build still passed the same QA pass as before"
      ]
    }
  ]
};
