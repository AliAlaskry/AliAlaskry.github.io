// "heading"/"hint" are the small section title and note above the list.
// "items" is one object per job, most recent first. Give each one a short unique "id" —
// it's used to jump to and open that specific entry from the sidebar.
// "current: true" gives it the pulsing orange dot — keep this on exactly one entry.
window.SiteContent = window.SiteContent || {};
window.SiteContent.experience = {
  heading: "Console — work history",
  hint: "Click a line to expand it.",
  items: [
    {
      id: "rar-it",
      current: true,
      title: "Lead Unity Developer / Technical Lead",
      company: "RAR IT",
      dates: "Dec 2025 — Present",
      summary: "Historical mobile game (Android/iOS) — team scaled 5 → 10, frame rate 30 → 60+ FPS",
      details: [
        "Promoted from Senior Unity Developer, Nov 2025",
        "Scaled and stabilized the production team from 5 to 10 members",
        "Designed the Agile production workflow: sprints, task review, blocker reporting",
        "Led integration of a large city level with 50+ 3D models",
        "Delivered a full UI/UX rebuild across 15+ screens",
        "Directed refactor of 8+ legacy systems into modular architecture",
        "Improved frame rate ~30 → 60+ FPS, cut load time ~15%"
      ]
    },
    {
      id: "arabtesting",
      current: false,
      title: "Unity XR Developer",
      company: "Arabtesting Company",
      dates: "Oct 2025 — Nov 2025",
      summary: "Therapeutic & educational VR on Meta Quest",
      details: [
        "Built gameplay systems and project structure for VR from the ground up",
        "Applied XR Interaction Toolkit, Addressables, Photon Networking, Plastic SCM"
      ]
    },
    {
      id: "freelance-2025",
      current: false,
      title: "Freelance Unity Game Developer",
      company: "Self-employed",
      dates: "Apr 2025 — Aug 2025",
      summary: "Rule-based AI bots, Socket.IO multiplayer, cross-platform builds",
      details: [
        "Implemented rule-based AI bots and custom card-game logic",
        "Built Socket.IO multiplayer systems, tested REST/HTTP APIs with Postman",
        "Integrated auth, ads, IAP, and localization across Android/iOS/WebGL/PC"
      ]
    },
    {
      id: "lessonera",
      current: false,
      title: "Co-founder / Unity Game Developer",
      company: "Lessonera",
      dates: "Jun 2022 — Apr 2025",
      summary: "Educational multiplayer battle royale — modular architecture, −60% load time",
      details: [
        "Previously Freelance Contract, Jan 2022 — Jun 2022",
        "Co-developed an educational multiplayer battle royale game",
        "Designed scalable modular architecture with reusable assemblies",
        "Improved load times ~60% and reduced build size ~20%",
        "Built NavMesh AI systems and anti-cheat logic",
        "Integrated WebView and AWS backend APIs"
      ]
    },
    {
      id: "freelance-2020",
      current: false,
      title: "Freelance Unity Game Developer",
      company: "Self-employed",
      dates: "Jul 2020 — Jan 2022",
      summary: "Real-time multiplayer card games, Ludo, board & bidding games",
      details: [
        "Built an online multiplayer card game with Photon PUN 2 + PlayFab (~3 months)",
        "Implemented rule-based AI bots and custom card-game logic",
        "Integrated auth, ads, IAP, and localization across platforms"
      ]
    }
  ]
};
