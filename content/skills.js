// "heading" is the section title. "groups" becomes the tabs — each group's "items"
// is shown as a vertical list of cards when that tab is active. Searching (the box
// above the tabs) looks across every group's items regardless of which tab is open.
window.SiteContent = window.SiteContent || {};
window.SiteContent.skills = {
  heading: "What I bring to a team",
  hint: "Search a skill, or browse by group.",
  groups: [
    {
      category: "Architecture & Code",
      items: ["Modular Unity architecture", "SOLID principles", "Dependency injection (VContainer)", "Design patterns", "Assembly Definitions", "ScriptableObjects"]
    },
    {
      category: "Networking & Multiplayer",
      items: ["Photon Fusion 2", "Photon PUN 2 / Realtime", "Socket.IO", "PlayFab", "REST APIs / UnityWebRequest"]
    },
    {
      category: "Mobile, XR & WebGL",
      items: ["Android & iOS", "WebGL & PC", "Meta Quest (XR Interaction Toolkit)", "Responsive UI", "Cross-platform deployment"]
    },
    {
      category: "Optimization & QA",
      items: ["Unity Profiler", "Memory & frame-rate optimization", "Asset & loading optimization", "Custom debug tooling"]
    },
    {
      category: "Leadership & Tooling",
      items: ["Agile / Scrum", "Sprint planning", "Stakeholder reporting", "Git, GitHub, Plastic SCM, Perforce"]
    }
  ]
};
