window.SiteContent = window.SiteContent || {};
window.SiteContent.hero = {
  title: "Ali Alaskry",
  role: "Senior Unity Developer & Technical Lead",
  pitch: "I build multiplayer game systems that still make sense when the team — and the codebase — triples in size.",
  tags: ["Mobile", "Multiplayer", "XR", "Architecture", "Performance"],

  // Text on the hero button that opens the intro video. Change it to whatever you like —
  // "Who is Ali", "Introduction", "Meet Ali", etc.
  introButtonLabel: "Who is Ali",

  // The video that plays when that button is clicked.
  // "type": "video" for a file you host yourself (put it in assets/, e.g. "assets/intro.mp4"),
  //         or "youtube" for a normal YouTube link or video ID.
  //         or "image" for a normal images.
  // Leave "src" empty until it's ready — the button still works and shows "coming soon".
  introVideo: {
    type: "image",
    src: "me.JPEG"
  }
};
