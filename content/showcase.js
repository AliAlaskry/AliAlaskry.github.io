// Each object in "items" is one project card.
//
// - "thumbnail": path to a single IMAGE (never a video) shown on the card.
//   Leave it "" until you have one — the card shows a placeholder instead.
// - "links": an array of { label, url }. Any entry with an empty "url" is
//   automatically hidden — both the small link on the card and the button
//   inside the full-screen view. The first one with a url shows on the card.
// - "contribution": an array of bullet points shown in the full-screen view.
//   Leave it as an empty array [] and the site automatically shows a line
//   crediting the work to you solo — no need to write a placeholder yourself.
// - "mediaGroups": what the full-screen view shows, grouped under a title —
//   e.g. "Gameplay", "Technical", "Dashboard". Each group's "items" is a list
//   of { type, src } — type is "image" or "video" (or leave it out and it's
//   guessed from the file extension). An empty items list = group not shown.
window.SiteContent = window.SiteContent || {};
window.SiteContent.showcase = {
  heading: "Showcase",
  hint: "Click a project to see the full story.",
  items: [
    {
      status: "building",
      title: "Vertical Slice — Multiplayer Combat Arena",
      stack: "Photon Fusion 2 · VContainer · engine-agnostic core",
      note: "Flagship project, in progress.",
      description: "A small multiplayer vertical slice: pick up and equip weapons, fight in a shared arena, with combat and inventory synced across 2-4 players. Built on an engine-agnostic, unit-tested core with a VContainer composition root and an event bus decoupling gameplay from UI.",
      contribution: [
        "Designed the architecture: engine-agnostic core, VContainer composition root, and event bus",
        "Built the gameplay systems — inventory, equipment, and combat resolution",
        "Implemented the Photon Fusion 2 networking layer end to end"
      ],
      thumbnail: "",
      links: [
        { label: "Play", url: "" },
        { label: "Code", url: "" }
      ],
      mediaGroups: [
        { title: "Gameplay", items: [] },
        { title: "Technical", items: [] }
      ]
    },
    {
      status: "case-note",
      title: "Historical Mobile Game",
      stack: "Android · iOS · team leadership",
      note: "Lead role: 50+ asset city-level integration, 15+ screen UI rebuild, 30→60+ FPS pass.",
      description: "Led Unity production for a historical mobile game, scaling the team from 5 to 10, rebuilding UI/UX across 15+ screens, and directing a refactor of 8+ legacy systems into modular architecture.",
      contribution: [
        "Set technical direction and architecture standards for the team",
        "Ran sprint planning and day-to-day production coordination",
        "Contributed hands-on C# development alongside leading the team"
      ],
      thumbnail: "",
      links: [
        { label: "Play", url: "" }
      ],
      mediaGroups: [
        { title: "Gameplay", items: [] },
        { title: "Dashboard", items: [] }
      ]
    },
    {
      status: "case-note",
      title: "Educational Multiplayer Battle Royale",
      stack: "Modular architecture · NavMesh AI · anti-cheat",
      note: "Co-founded product.",
      description: "Co-developed an educational multiplayer battle royale game: scalable modular architecture, NavMesh-based AI, anti-cheat logic, and a ~60% load-time reduction.",
      contribution: [
        "Co-founded the project and helped shape its direction",
        "Wrote gameplay programming and the core architecture",
        "Handled performance optimization and localization support"
      ],
      thumbnail: "",
      links: [
        { label: "Play", url: "" }
      ],
      mediaGroups: [
        { title: "Gameplay", items: [] },
        { title: "Technical", items: [] }
      ]
    },
    {
      status: "case-note",
      title: "Online Multiplayer Card Game",
      stack: "Photon PUN 2 · PlayFab",
      note: "Delivered a client project in ~3 months.",
      description: "Built an online multiplayer card game with Photon PUN 2 and PlayFab, including rule-based AI bots and full backend integration.",
      contribution: [
        "Delivered the project end to end as the sole freelance developer",
        "Built the UI/UX from scratch",
        "Handled backend integration with Photon PUN 2 and PlayFab"
      ],
      thumbnail: "",
      links: [
        { label: "Play", url: "" }
      ],
      mediaGroups: [
        { title: "Gameplay", items: [] }
      ]
    }
  ]
};
