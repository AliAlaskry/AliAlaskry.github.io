// Master switches for the whole site. Change values here — never in the HTML or main.js.

window.SiteConfig = {
  // Pick one:
  //   "console"  — dark graphite, amber accent (default)
  //   "midnight" — dark, cool blue-black, cyan accent
  //   "forest"   — dark charcoal-green, moss accent
  //   "arcade"   — near-black, violet accent (a bit more game-dev energy, still restrained)
  //   "daylight" — light warm paper, terracotta accent
  //   "slate"    — light cool gray-blue, indigo accent (a lighter, more corporate option)
  //   "mono"     — stark black & white, no color anywhere
  theme: "midnight",

  // Master on/off switch for all motion on the page (hover lifts, reveal-on-scroll,
  // background fades, pulsing dot, etc). Set to false for a fully static page.
  animations: true,

  // How content animates in as you scroll to it:
  //   "fade-up"    — rises up while fading in (default, most common)
  //   "fade"       — simple fade, no movement
  //   "scale"      — grows in from slightly smaller
  //   "slide"      — slides in from the left
  //   "slide-right"— slides in from the right
  //   "drop"       — drops down from slightly above
  //   "blur"       — sharpens into focus from a soft blur
  //   "none"       — no animation, content just appears
  revealStyle: "scale",

  // Order and labels of the upper nav bar. Remove an entry to remove it from the nav
  // (the section itself still needs "sections.<id> = false" below to actually hide).
  nav: [
    { id: "hero", label: "Intro" },
    { id: "achievements", label: "Achievements" },
    { id: "showcase", label: "Showcase" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "systems", label: "Playbook" },
    { id: "contact", label: "Contact" }
  ],

  // Set any of these to false to hide that section completely (nav link disappears too).
  sections: {
    hero: true,
    achievements: true,
    showcase: true,
    skills: true,
    experience: true,
    systems: true,
    contact: true
  },

  // "grid" or "list"
  showcaseLayout: "list",

  // "horizontal" (swipe/drag-scroll cards, click-and-hold to drag on desktop) or
  // "vertical" (a stacked list of small clickable cards, no dragging needed)
  achievementsLayout: "horizontal",

  // The résumé button in the top-right of the nav bar
  showResumeButton: true,

  // OPTIONAL: one color that gets subtly blended into every section's background
  // automatically (a different, gentle strength per section, so the "as you scroll"
  // effect still works) — instead of having to write out all seven by hand.
  // Leave it "" to just use the current theme's own backgrounds. Unused right now
  // since every section is set explicitly below — kept here in case you ever clear
  // the `backgrounds` object and want a quick one-line alternative instead.
  backgroundSeed: "",

  // Per-section background tints. Each one is a gentle blend of the *current theme's
  // own accent color* into the *current theme's own background* — so the "mood shifts
  // slightly as you scroll" effect stays subtle and eye-comfortable, and automatically
  // re-tunes itself correctly no matter which theme above is active (dark or light).
  // The percentage is the only thing that changes section to section. Raise/lower a
  // number for more/less contrast on that one section, or replace a value with any
  // plain CSS color to pin that section exactly. Leave a section out, or clear this
  // whole object, to fall back to backgroundSeed (or the theme's own flat background).
  backgrounds: {
    hero:         "color-mix(in srgb, var(--accent) 4%, var(--bg))",
    achievements: "color-mix(in srgb, var(--accent) 7%, var(--bg))",
    showcase:     "color-mix(in srgb, var(--accent) 5%, var(--bg))",
    skills:       "color-mix(in srgb, var(--accent) 9%, var(--bg))",
    experience:   "color-mix(in srgb, var(--accent) 3%, var(--bg))",
    systems:      "color-mix(in srgb, var(--accent) 8%, var(--bg))",
    contact:      "color-mix(in srgb, var(--accent) 11%, var(--bg))"
  }
};

// Applied immediately (before the rest of the page loads) so there's no flash of the
// wrong theme. Don't remove this line.
document.documentElement.setAttribute('data-theme', window.SiteConfig.theme || 'console');
