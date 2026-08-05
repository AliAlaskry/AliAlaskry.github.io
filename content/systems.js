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
    },
    {
      id: "authority-model",
      title: "Client-authoritative vs. host-authoritative isn't a default, it's a decision",
      steps: [
        "I pick the authority model based on what the game actually needs to protect — competitive integrity, latency feel, or server cost — not on habit.",
        "Fast-paced local matches can tolerate client authority; anything with real stakes (ranked play, in-app purchases, PvP combat) needs a source of truth the client can't fake.",
        "I write the trade-off down as an ADR at the time I make the call, because 'why did we choose this' is the question that gets asked six months later, not on day one."
      ]
    },
    {
      id: "test-the-core",
      title: "I test the logic that can't afford to be wrong, not the whole game",
      steps: [
        "Gameplay rules — damage math, inventory state, equip/unequip — live in a plain C# layer with zero engine references, so they can be unit-tested outside Unity entirely.",
        "MonoBehaviours stay thin: they translate results into engine-side effects but don't own any rules, so there's nothing meaningful to unit-test at that layer.",
        "This means the core can be verified with fast, deterministic tests (injectable randomness included) instead of relying on manual playtesting to catch logic bugs."
      ]
    },
    {
      id: "refactor-judgement",
      title: "I refactor for the next feature, not for its own sake",
      steps: [
        "A legacy system gets touched when it's actively blocking a feature, causing bugs, or costing the team real time — not just because it's untidy.",
        "I scope refactors around a clear boundary (a module, an assembly, a subsystem) so the team can keep shipping around it instead of freezing on a rewrite.",
        "At RAR IT this meant directing 8+ legacy systems into modular architecture in parallel with active production, not as a separate cleanup phase."
      ]
    },
    {
      id: "scaling-a-team",
      title: "Scaling a team is a systems problem before it's a headcount problem",
      steps: [
        "Before adding people, I audit the project for the structural weak points that a bigger team would hit first — unclear ownership, undocumented workflow, single points of failure.",
        "I introduce process in the smallest form that solves the actual problem: a 2-week sprint cycle, explicit GitHub ownership rules, a place for blockers to surface — not process for its own sake.",
        "Going from 5 to 11 people at RAR IT worked because the workflow and reporting structure were designed before the team grew into needing them, not patched in afterward."
      ]
    }
  ]
};
