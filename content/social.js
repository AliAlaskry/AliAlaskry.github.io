// Everything shown in a browser tab, and everything a link-preview card (LinkedIn,
// Slack, Twitter/X, Discord, iMessage, etc.) shows when someone pastes your site's
// URL. Edit the values below — main.js pushes them into the page automatically.
//
// IMPORTANT — read this before assuming it "just works": link-preview bots (the
// things that generate the little card when you paste a URL into LinkedIn/Slack/etc.)
// fetch the raw HTML and read the <meta> tags directly. They do NOT run JavaScript.
// So this file correctly updates the live page (browser tab title, and the tags if a
// crawler *does* run JS, like some Google/Facebook flows sometimes do) — but for
// guaranteed-correct previews on platforms that don't execute JS, the same values
// also need to live in the actual <meta> tags in index.html's <head>.
//
// Practically: edit this file first (it's the source of truth and keeps the live
// page correct), then copy the same title/description/image values into the
// matching <meta> tags in index.html's <head> before you push a real preview change
// (new title, new preview image, etc.) live. It's a two-minute copy, not a rebuild.
window.SiteContent = window.SiteContent || {};
window.SiteContent.social = {
  title: "Ali Alaskry | Senior Unity Developer & Technical Lead",
  description: "Senior Unity Developer and Technical Lead with 5+ years of experience building mobile, multiplayer, and XR applications. Portfolio showcasing shipped projects, architecture, technical leadership, and game systems.",
  // Shown in the Twitter/X card specifically — can be shorter/punchier than description.
  shortDescription: "Senior Unity Developer specializing in mobile, multiplayer, XR, architecture, and technical leadership.",
  url: "https://alialaskry.github.io/",
  siteName: "Ali Alaskry Portfolio",
  image: "https://alialaskry.github.io/assets/social-preview.png",
  imageAlt: "Ali Alaskry — Senior Unity Developer Portfolio"
};
