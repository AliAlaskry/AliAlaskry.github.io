// This is the "Playbook" section — short, honest opinions on how you work, each
// expandable into concrete steps. Give each entry a short unique "id" so the sidebar
// can jump to and open it directly. Add/edit/delete/reorder entries and steps freely.
window.SiteContent = window.SiteContent || {};
window.SiteContent.systems = {
  heading: "Playbook",
  hint: "Click an entry to expand it.",
  items: [
    {
      id: "dependencies",
      title: "How I think about dependencies",
      steps: [
        "Every system is built as a plain constructor with explicit inputs — no hidden state to trace.",
        "One composition root wires everything together at startup.",
        "Result: the whole dependency graph is visible in one place, and any piece can be swapped or tested alone."
      ]
    },
    {
      id: "expected-failure",
      title: "Expected failures aren't exceptions",
      steps: [
        "A full inventory slot or a missing item isn't a bug — it's a normal outcome the code should handle explicitly.",
        "I return typed result objects instead of throwing, so callers deal with the case instead of catching around it.",
        "Exceptions stay reserved for things that actually shouldn't happen — that keeps them meaningful when they do fire."
      ]
    },
    {
      id: "profile-first",
      title: "I profile before I optimize",
      steps: [
        "Every performance pass I've shipped — 30→60 FPS, 24s→4s load time, 20→75 FPS in VR — started with a profiler, not a guess.",
        "Assumed bottlenecks are wrong often enough that skipping this step wastes more time than it saves.",
        "I re-test on target hardware after each change, because editor performance and device performance lie to each other."
      ]
    },
    {
      id: "report-up",
      title: "Reporting up is a design problem, not a status update",
      steps: [
        "Stakeholders need answers to their actual questions, not a technical log of what happened.",
        "I structure reports around decisions and risk, and keep implementation detail available on request instead of upfront.",
        "This is the same instinct as good API design: expose what the caller needs, hide what they don't."
      ]
    }
  ]
};
