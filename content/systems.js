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
      id: "large-systems",
      title: "How I structure large systems",
      steps: [
        "Gameplay rules are written outside the engine, in plain, framework-free code.",
        "That core is unit-tested on its own, before a single MonoBehaviour touches it.",
        "Engine code stays a thin adapter — translating results into visuals, animations, and effects."
      ]
    },
    {
      id: "leading-teams",
      title: "How I lead teams",
      steps: [
        "Start with a sprint cadence everyone can actually keep, not the one that looks best on paper.",
        "Make blockers visible early — a hidden blocker costs more the longer it hides.",
        "Review in public: task status, dependencies, and asset pipeline are documentation, not tribal knowledge."
      ]
    },
    {
      id: "handling-failure",
      title: "How I handle failure",
      steps: [
        "A full inventory slot or a missing item is an expected outcome, not an exception.",
        "Systems return a result the caller can react to, instead of throwing and hoping someone catches it.",
        "This keeps failure handling visible in the code that calls it, not buried three layers up."
      ]
    }
  ]
};
