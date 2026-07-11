# Ali Alaskry — Portfolio Site

A static site — no build step, no framework — ready to deploy to GitHub Pages
as-is. Open `index.html` in any browser and it works, no server required.

Everything you'd want to change — text, sections, layout, colors — lives in
plain JavaScript objects under `content/`. **You never need to edit
`index.html`, `js/main.js`, or `css/styles.css`.**

## Structure

```
index.html            Page shell — empty containers only, nothing to edit here
css/styles.css         All styling
js/main.js             Reads the content files below and builds every section
content/config.js      Master switches: nav, section visibility, layout, backgrounds
content/hero.js         Intro section + the "Who is Ali" video
content/achievements.js Achievements — drag-scroll or vertical cards, click for the full story
content/showcase.js     Project showcase (cards + full-screen view)
content/skills.js       Skills (horizontal group tabs + search)
content/experience.js   Work history (console-style, expandable)
content/systems.js      "Playbook" — how-you-work entries with steps
content/contact.js      Contact links (add/edit/remove/reorder freely)
assets/                Résumé + project screenshots/clips go here
```

## Preview locally

Double-click `index.html`, or open it from your browser's File menu.

## How the page is organized

- **Hero** fills the first screen and is centered. Its primary button opens a
  short video where you introduce yourself.
- Every section afterward lines up under the same left/right edges as the
  hero, with its title centered and a short hint underneath explaining what
  you can do there ("Click a card to see how it happened," etc.).
- **Upper nav bar never disappears**, at any screen size — if there isn't
  room for every label, the bar scrolls horizontally instead of hiding.
- **Sidebar** (right edge, desktop only) shows sub-items for whichever
  section you're on, and jumps straight to (and opens) the one you click. On
  narrower screens, where there's no room for it, the same sub-items appear
  as a scrollable strip directly under the nav bar instead — nothing is lost,
  it just moves.
- **Achievements** scroll horizontally by default — click and hold to drag on
  desktop, or swipe on a phone — or can be switched to a plain vertical list
  of small rows (see Config below).
- **Skills** group tabs also scroll horizontally the same way.
- **Experience** and **Playbook** each only ever have one entry open at a
  time — opening a new one closes whichever was open.
- **Achievements** and **Showcase** cards both open the same full-screen
  view, with a divider line between each block that's actually shown:
  achievements show the story as numbered steps, showcase projects show
  description, your contribution (bulleted), grouped media, and links —
  whichever of those a given entry actually has.
- **Background** shifts subtly from section to section as you scroll — a
  barely-there mood change, not a spotlight — using whichever theme is
  active. Override any single section's tint in `config.js` if you want.
- A large, very faint number sits behind each section (01, 02, 03…),
  computed from whichever sections are actually visible.

## Config — `content/config.js`

```js
theme: "console" | "midnight" | "daylight" | "mono"
animations: true | false           // master on/off switch for all motion on the page
revealStyle: "fade-up" | "fade" | "scale" | "slide" | "none"   // how content animates in on scroll
sections: { achievements: false, ... }   // hide a section (its nav link goes too)
showcaseLayout: "grid" | "list"
achievementsLayout: "horizontal" | "vertical"
backgrounds: { contact: "#241a12" }  // OPTIONAL — overrides one section's background;
                                      // leave empty and every section just uses the theme's own tint
backgroundSeed: "#d8f5b1"            // OPTIONAL — one color, auto-blended subtly into every
                                      // section's background at a different strength each,
                                      // instead of writing all seven out by hand
```

`backgrounds` (per-section, exact) always wins for a given section if both are set;
`backgroundSeed` fills in everywhere else; if neither is set, the active theme's own
background is used. This is why the current `backgrounds` object is empty — the seed
above is already doing the work.

### Themes

Four built in, switched with one line:

- **console** (default) — dark graphite, amber accent. The "Unity Editor at night" look.
- **midnight** — dark, cooler blue-black with a cyan accent.
- **daylight** — light warm paper background with a terracotta accent, for a lighter first impression.
- **mono** — stark black and white, no color anywhere — just type and layout.

Switching themes changes everything at once: every color, every section's
background tint, button/badge contrast, and shadow depth. There's nothing
else to touch. Want a fifth theme? Copy one of the `html[data-theme="..."]`
blocks near the top of `css/styles.css`, rename it, adjust the colors, and
reference the new name from `theme` in `content/config.js`.

### Animations

`animations: false` turns off every transition and animation on the page at
once (hover lifts, the pulsing "current role" dot, background fades,
reveal-on-scroll) — a fully static page, regardless of the visitor's own
OS motion settings. `revealStyle` only affects how sections fade in as you
scroll to them, independent of the master switch.

## Editing content — add, change, delete, reorder

| Section | File | Add | Reorder | Delete |
|---|---|---|---|---|
| Intro | `content/hero.js` | edit fields directly | — | — |
| Achievements | `content/achievements.js` | copy a block inside `items` | move the block | remove the block |
| Showcase | `content/showcase.js` | copy a project block inside `items` | move the block | remove the block |
| Skills | `content/skills.js` | copy a group block, or an item inside `items` | move blocks/items | remove the block/item |
| Experience | `content/experience.js` | copy a job block inside `items` (give it a unique `id`) | move the block | remove the block |
| Playbook | `content/systems.js` | copy an entry inside `items` (give it a unique `id`), or a line inside its `steps` | move entries/steps | remove them |
| Contact | `content/contact.js` | copy a `{ label, url }` line inside `items` | move the line | remove the line, or set `url` to `""` |

Order in each file's list = order on the page. Save, refresh — nothing to rebuild.

### Achievements specifics

Each card has `value` (the big number), `text` (short line under it),
`context` (company/project tag), and — for the full-screen popup —
`description` and `steps` (a numbered how-I-did-it list). The steps
currently in the file are **drafts based on your CV bullets** — rewrite them
to match what you actually did before this goes out to anyone.

### Showcase specifics

- `thumbnail`: path to a single **image** (never a video) shown on the card.
  Leave it `""` and the card shows a "media pending" placeholder instead.
- `links`: an array of `{ label, url }`. Leave `url` as `""` and that link is
  automatically hidden, on the card and inside the full-screen view.
- `contribution`: an array of bullet points shown in the full-screen view.
  Leave it as `[]` and the site shows a line crediting the work to you solo
  — no need to write a placeholder yourself.
- `mediaGroups`: what appears in the full-screen popup, grouped under a title
  (e.g. "Gameplay", "Technical", "Dashboard"). Each group's `items` is a list
  of `{ type, src }` — `type` is `"image"` or `"video"` (or leave it out and
  it's guessed from the file extension). An empty group simply isn't shown.

### Skills specifics

The search box filters across every group's `items` regardless of which tab
is open; clearing it returns you to the tab you had selected.

### Intro video specifics

In `content/hero.js`: `introButtonLabel` is the button text. `introVideo` is
`{ type, src }` — `type: "video"` for a file you host yourself, or
`type: "youtube"` with a normal YouTube link or video ID as `src`. Leave
`src` empty and the button still works, showing "Video coming soon."

## Publish to GitHub Pages

1. Create a GitHub repo (e.g. `ali-alaskry-portfolio`, or `<username>.github.io`
   for the root of your GitHub domain).
2. Push everything in this folder to the repo's `main` branch.
3. In the repo: **Settings → Pages → Source → Deploy from a branch → `main` /
   `(root)` → Save**.
4. Your site goes live at `https://<username>.github.io/<repo-name>/` (or
   `https://<username>.github.io/` for the special repo name) within a couple
   of minutes.
5. Any future update: edit a file in `content/`, commit, push. GitHub Pages
   picks it up automatically.

## Adding real showcase media later

Drop the file in `assets/img/`, then reference it from `content/showcase.js`
— either as a card `thumbnail` (image only) or inside a project's
`mediaGroups`. No other file needs to change.

## Cross-platform notes

Built mobile-first where it matters: horizontal-scroll strips use native
touch scrolling (plus click-and-hold dragging on desktop for achievements),
tap targets are sized for fingers, the nav bar and sub-navigation adapt
instead of disappearing on narrow screens, and the full-screen view goes
edge-to-edge on phones instead of floating in a tiny box.
