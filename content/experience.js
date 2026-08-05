// "heading"/"hint" are the small section title and note above the list.
// "items" is one object per job, most recent first. Give each one a short unique "id" —
// it's used to jump to and open that specific entry from the sidebar.
// "current: true" gives it the pulsing orange dot — keep this on exactly one entry.
window.SiteContent = window.SiteContent || {};
window.SiteContent.experience = {
  heading: "work history",
  hint: "Click a line to expand it.",
  items: [
    {
      id: "rar-it",
      current: true,
      title: "Lead Unity Developer / Technical Lead",
      company: "RAR IT",
      dates: "Dec 2025 — Present",
      summary: "Historical mobile game (Android/iOS) — team scaled 5 → 11, frame rate 30 → 60+ FPS",
      details: [
        "Promoted from Senior Unity Developer, Nov 2025",
        "First month on the ground: built synced elevator and interactable systems (doors and similar)",
        "Scaled and stabilized the production team from 5 to 11 members (including himself) across development, art, level design, game design, and narrative",
        "Designed the Agile production workflow: 2-week sprints, task review, dependency tracking, blocker reporting",
        "Built structured stakeholder reporting that answered business-critical questions without unnecessary technical detail",
        "Led integration of a large city level with 50+ 3D models",
        "Delivered a full UI/UX rebuild across 15+ screens",
        "Directed refactor of 8+ legacy systems into modular architecture using assembly definitions",
        "Improved frame rate ~30 → 60+ FPS, cut load/startup time ~15%",
        "Set and enforced GitHub workflow rules and cross-discipline communication standards as the team grew",
        "Built an internal desktop tool aggregating manager and peer review with performance metrics into per-employee reports",
        "Reviewed code across the team for SOLID/SRP adherence and code-smell cleanup",
        "Supervised 7+ game design documents and 3+ new dialogue sequences"
      ]
    },
    {
      id: "arabtesting",
      current: false,
      title: "Unity XR Developer",
      company: "Arabtesting Company",
      dates: "Oct 2025 — Nov 2025",
      summary: "Meta Quest VR experiences — frame rate 20 → 60–75 FPS with CPU/GPU/memory gains",
      details: [
        "Developed and optimized Unity VR experiences for therapeutic, educational, and behavioral-improvement goals on Meta Quest",
        "Built gameplay systems, project structure, and debugging workflow from the ground up",
        "Improved frame rate from ~20 to 60–75 FPS alongside CPU, GPU, and memory optimization",
        "Applied XR Interaction Toolkit, Addressables, and Photon Networking to improve maintainability and stability"
      ]
    },
    {
      id: "freelance-2025",
      current: false,
      title: "Freelance Unity Game Developer",
      company: "Self-employed",
      dates: "Apr 2025 — Aug 2025",
      summary: "Rule-based AI bots, Socket.IO multiplayer, and cross-platform monetization integrations",
      details: [
        "Implemented rule-based AI bots and custom card-game logic for offline play and gameplay variation",
        "Built Socket.IO-based multiplayer systems and tested REST/HTTP APIs with Postman",
        "Integrated authentication, AdMob ads, IAP, and localization across Android, iOS, WebGL, and PC"
      ]
    },
    {
      id: "lessonera",
      current: false,
      title: "Co-founder / Unity Game Developer",
      company: "Lessonera Company",
      dates: "Jun 2022 — Apr 2025",
      summary: "Educational multiplayer battle royale — load time cut ~80%, codebase migrated to modular assemblies",
      details: [
        "Previously Unity Game Developer (freelance contract), Jan 2022 — Jun 2022, before becoming Co-founder",
        "Co-developed an educational multiplayer battle royale: gameplay programming, architecture, performance, UI, localization",
        "Migrated the codebase into six independent, tested assembly-definition modules: Localization, PlayerCore, Sync, Network, UIView, WebView",
        "Cut cold-start load time from 24–26s to 4–6s and reduced build size ~20%",
        "Built the full battle-royale character loop: combat, equipment, inventory, store",
        "Built NavMesh-based AI and anti-cheat logic for secure competitive play",
        "Integrated WebView for an external education platform and AWS backend APIs",
        "Worked across level design and UI development during the project's lifetime",
        "Contributed to key business decisions as the project scaled"
      ]
    },
    {
      id: "freelance-2020",
      current: false,
      title: "Freelance Unity Game Developer",
      company: "Self-employed",
      dates: "Jul 2020 — Jan 2022",
      summary: "Real-time multiplayer card and board games — Photon, PlayFab, session recovery, responsive UI",
      details: [
        "Built two real-time multiplayer platforms on Photon and PlayFab: a poker game with custom rule variants and fair card dealing, and a three-game platform (backgammon, closed backgammon, 31) with chat, friends, and daily rewards",
        "Engineered session-recovery (auto-reconnect, rejoin-last-room) and a fully responsive UI system with zero element overlap across screen sizes",
        "Integrated authentication, IAP, ads, and localization across Android, iOS, WebGL, and PC"
      ]
    }
  ]
};
