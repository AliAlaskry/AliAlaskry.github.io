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
  items:[
    {
      status: "paused",
      title: "Historical Mobile Game",
      stack: "Unity · C# · Assembly Definitions · Agile/Scrum",
      note: "In production at RAR IT as Lead Developer. Not yet publicly shipped — production paused for reasons unrelated to the engineering work.",
      description: "Leading Unity production for a historical mobile game (Android/iOS): scaled the team from 5 to 11, took frame rate from ~30 to 60+ FPS, and rebuilt the UI/UX across 15+ screens while directing a refactor of 8+ legacy systems into modular architecture.",
      contribution: [
        "Scaled and stabilized the production team from 5 to 11 members",
        "Designed the Agile production workflow: sprints, task review, blocker reporting, stakeholder status reporting",
        "Directed refactoring of 8+ legacy systems into modular architecture using assembly definitions",
        "Improved frame rate ~30 → 60+ FPS and cut load/startup time ~15%",
        "Built an internal desktop tool aggregating manager and peer review with performance metrics into per-employee reports"
      ],
      thumbnail: "assets\\Showcase\\Thumbnails\\Rad3Eledwan.png",
      links: [],
      mediaGroups: [
        { title: "Process & Leadership", items: [] }
      ]
    },
    {
      status: "shipped",
      title: "Educational Multiplayer Battle Royale",
      stack: "Photon · Unity Assembly Definitions · AWS · UnityWebRequest",
      note: "Co-founded and built as Lead Developer at Lessonera.",
      description: "A student-focused multiplayer battle royale with a full character loop — combat, equipment, inventory, and store — built on a codebase migrated from monolithic to six independent, tested assembly-definition modules (Localization, PlayerCore, Sync, Network, UIView, WebView).",
      contribution: [
        "Migrated the codebase into modular, independently testable assemblies",
        "Cut cold-start load time from 24–26s to 4–6s and reduced build size ~20%",
        "Built the battle-royale character systems: combat, equipment, inventory, store",
        "Integrated RESTful APIs via UnityWebRequest and built a WebView system for an external education platform",
        "Worked across level design and UI development during the project's lifetime"
      ],
      thumbnail: "assets\\Showcase\\Thumbnails\\Lessonera.png",
      links: [],
      mediaGroups: [
        { title: "Gameplay", items: [] },
        { title: "Architecture", items: [] }
      ]
    },
    {
      status: "shipped",
      title: "Multiplayer Card & Board Platform",
      stack: "Photon · PlayFab · C#",
      note: "Client freelance project — three games, one shared platform. Currently facing listing issues on Google Play; not live in the store at the moment.",
      description: "A platform of three real-time multiplayer games (closed backgammon, backgammon, and 31) built for a freelance client, with a full social and retention layer: text and voice chat, friends system, daily rewards, rematch requests, lifetime player stats, and a rule-based AI that fills in for offline or idle players. Ludo and Domino were also brought to ~90% completion on the same platform.",
      contribution: [
        "Built session-recovery: auto-reconnect and rejoin-last-room logic backed by PlayFab-stored state",
        "Engineered a fully responsive UI system with zero element overlap across screen sizes",
        "Implemented in-match text chat, voice chat, quick-chat, and a rule-based fallback AI bot",
        "Built the registration/auth, daily-rewards, and IAP + multi-network ad integration",
        "Collaborated with a second programmer over GitHub across a two-month build phase"
      ],
      thumbnail: "assets\\Showcase\\Thumbnails\\Tawltna.png",
      links: [],
      mediaGroups: [
        { title: "Gameplay", items: [] },
        { title: "Responsive UI Demo", items: [] }
      ]
    },
    {
      status: "shipped",
      title: "Meta Quest XR Experiences",
      stack: "Unity XR Interaction Toolkit · Addressables · Photon",
      note: "Built for therapeutic and educational use cases.",
      description: "VR experiences for Meta Quest built for therapeutic, educational, and behavioral-improvement goals — project structure, gameplay systems, and performance tuning built from the ground up.",
      contribution: [
        "Built the project from the ground up: structure, gameplay systems, debugging workflow",
        "Improved frame rate from 20 to 60–75 FPS alongside CPU, GPU, and memory optimization",
        "Applied XR Interaction Toolkit and Addressables for maintainability across the project"
      ],
      thumbnail: "assets\\Showcase\\Thumbnails\\XR.JPEG",
      links: [],
      mediaGroups: [
        { title: "In-Headset Footage", items: [] }
      ]
    },
    {
      status: "status unclear",
      title: "Tarneeb — Real-Time Card Game",
      stack: "Socket.IO · native socket calls · C#",
      note: "Built as a webview game inside a Saudi client's app. Shipping status on the client's side was never confirmed.",
      description: "A real-time Tarneeb implementation built for a Saudi client, delivered as a webview experience inside their app. The same socket architecture was reused to build a second card game for the same client.",
      contribution: [
        "Built the real-time game logic and turn/round sync using Socket.IO and native socket calls",
        "Reused the socket architecture to ship a second card game for the same client"
      ],
      thumbnail: "assets\\Showcase\\Thumbnails\\Tarneeb.JPEG",
      links: [],
      mediaGroups: [
        { title: "Gameplay", items: [] }
      ]
    },
    {
      status: "shipped",
      title: "Real-Time Poker Platform",
      stack: "Photon · PlayFab · C#",
      note: "Client freelance project. Currently facing listing issues on Google Play; not live in the store at the moment.",
      description: "A multiplayer poker game built for a freelance client with custom rule variants layered on standard poker: provably fair card distribution, and special per-player abilities like swapping cards post-deal or doubling points on a win.",
      contribution: [
        "Implemented fair card-dealing logic and the custom special-ability rule set",
        "Built the multiplayer session layer on Photon with PlayFab as backend",
        "Integrated AdMob monetization",
        "Worked with a 2D artist to bring vector art into the game via Adobe Illustrator asset extraction"
      ],
      thumbnail: "assets\\Showcase\\Thumbnails\\KingOfGames.png",
      links: [],
      mediaGroups: [
        { title: "Gameplay", items: [] }
      ]
    }
  ]
};
