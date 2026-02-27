# Portfolio2 — Complete Agent Context Document

> Exhaustive reference for any AI agent working on this codebase.
> Contains every architectural decision, pixel value, class name, behavioral detail, and rationale.
> Last updated: 2026-02-26

---

## 1. Project Overview

**Owner:** Andrew Vong
**Type:** Personal portfolio website
**Description:** A single-page scrolling portfolio with a moody, dark aesthetic. The entire page sits on a black background with a translucent, slightly blurred landscape photograph (Sequoia sunrise) fixed behind all content. A cream-colored floating navbar hides and reveals on scroll. The hero section displays the owner's name in large fluid typography with a cycling animated subtitle. Subsequent sections present biographical text and project placeholders.

**URL (dev):** `http://localhost:5173`
**Deployment:** Not yet deployed. No CI/CD configured. `dist/` folder exists from a previous build.

---

## 2. Tech Stack (Exact Versions)

| Layer | Package | Version (from package.json) | Notes |
|---|---|---|---|
| UI Framework | `react` | `^19.2.0` | React 19 with StrictMode enabled |
| DOM Renderer | `react-dom` | `^19.2.0` | `createRoot` API |
| Build Tool | `vite` | `^7.3.1` | ESM-based, fast HMR |
| Vite React Plugin | `@vitejs/plugin-react` | `^5.1.1` | JSX transform, fast refresh |
| CSS Framework | `tailwindcss` | `^4.2.1` | **v4** — CSS-first config, NOT JS config |
| Tailwind Vite Plugin | `@tailwindcss/vite` | `^4.2.1` | Replaces PostCSS setup from v3 |
| Linter | `eslint` | `^9.39.1` | Flat config format (eslint.config.js) |
| ESLint Plugins | `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` | `^7.0.1`, `^0.4.24` | |
| Globals | `globals` | `^16.5.0` | Browser globals for ESLint |
| Type Definitions | `@types/react`, `@types/react-dom` | `^19.2.7`, `^19.2.3` | Present in devDeps but project uses .jsx not .tsx |

**Critical:** This project uses **Tailwind CSS v4**. There is NO `tailwind.config.js` file. Theme customization is done via the `@theme {}` CSS directive in `src/index.css`. Do not create a `tailwind.config.js` — it will be ignored.

**No TypeScript.** All source files are `.jsx`. The `@types/*` packages are present from the Vite scaffold but unused.

**No router.** No `react-router-dom` or any routing library. Navigation is anchor-based (`#landing`, `#about`, `#projects`) with `scroll-behavior: smooth` on `<html>`.

---

## 3. Complete File Tree

```
portfolio2/
├── .claude/                    # Claude Code project config (auto-generated)
├── .gitignore                  # Standard Vite gitignore (node_modules, dist, logs, editor files)
├── AGENT.md                    # THIS FILE — agent context document
├── README.md                   # Default Vite scaffold README (not customized)
├── dist/                       # Previous production build output (gitignored)
├── eslint.config.js            # ESLint flat config — JS/JSX, react-hooks, react-refresh
├── index.html                  # Vite entry point — Google Fonts, viewport meta, Figma capture script
├── node_modules/               # Dependencies (gitignored)
├── package.json                # Project manifest
├── package-lock.json           # Lockfile
├── public/
│   └── vite.svg                # Default Vite favicon (1497 bytes) — should be replaced
├── src/
│   ├── main.jsx                # Entry: StrictMode > App, mounted to #root
│   ├── App.jsx                 # Root component: fixed bg image + Navbar + main sections
│   ├── index.css               # @import "tailwindcss" + @theme tokens + global body styles
│   ├── assets/
│   │   ├── react.svg           # Default Vite scaffold asset (4126 bytes, unused)
│   │   └── sequoia-sunrise.jpg # Background photo (9,023,538 bytes / ~8.6 MB, 3840x2160)
│   └── components/
│       ├── Navbar.jsx           # Fixed floating nav, scroll-reactive show/hide
│       ├── Landing.jsx          # Hero: fluid "ANDREW VONG" + cycling "currently {word}"
│       ├── AboutMe.jsx          # Bio text blocks + placeholder image row
│       └── Projects.jsx         # Project + Spotify placeholders
└── vite.config.js              # defineConfig: [react(), tailwindcss()]
```

---

## 4. Figma Source File

| Property | Value |
|---|---|
| File key | `qc5ngoghUfdFDHO4iBo9v9` |
| File URL | `https://www.figma.com/design/qc5ngoghUfdFDHO4iBo9v9/Untitled` |
| File name | "Untitled" |
| Canvas type | **Infinite canvas** — no fixed artboard |
| Background image node | `3:3` (named "Sequoia-Sunrise") |
| Nav bar node | `3:6` (named "nav") |

### Figma Scaling Context (Critical)

The Figma file was NOT designed inside a standard viewport frame (like 1440x900). Elements were placed on an infinite canvas at arbitrary sizes:

| Figma Element | Figma Width | What it represents |
|---|---|---|
| Nav bar rectangle | 615px | The full nav bar |
| Text frames | ~596px | Content width |
| Background image | Unconstrained | Full-bleed background |

These pixel values do not map to any viewport percentage. The scaling history:

1. **Initial implementation:** Used Figma values directly → nav was 615px (only 43% of a 1440px screen)
2. **First rescale (70%):** Changed to `max-w-[1008px]` → felt too wide, nav text (11px) looked lost in the huge bar
3. **Final rescale (60%):** Changed to `max-w-[864px]` → 60% of 1440px, good balance between the original cramped layout and the overly wide first rescale

**Target viewport:** 1440px (industry standard desktop). All `max-w-[864px]` values derive from 1440 × 0.6 = 864.

---

## 5. Design System — Complete Reference

### 5.1 Color Palette

| Hex | CSS Token (if any) | Tailwind Class Used | Where |
|---|---|---|---|
| `#000000` | — | `bg-black` | Page background (`App.jsx` root div) |
| `#fef9ed` | `--color-cream` | `bg-[#fef9ed]` | Navbar background |
| `#5d524b` | `--color-nav-text` | `text-[#5d524b]` | Navbar "AV" logo + nav links (About, Projects, Contact) |
| `#644d4d` | — | `text-[#644d4d]` | Navbar smiley `:)` |
| `#fff2f2` | `--color-body-text-light` | `text-[#fff2f2]` | Hero "ANDREW" |
| `#fff5f5` | — | `text-[#fff5f5]` | Hero "VONG" (very slightly different from ANDREW) |
| `#ebd7d7` | — | `text-[#ebd7d7]` | Hero "currently ..." subtitle |
| `#ddd6d6` | `--color-body-text` | `text-[#ddd6d6]` | AboutMe + Projects body text |
| `white/10` | — | `bg-white/10` | AboutMe placeholder image boxes background |
| `white/20` | — | `border-white/20` | AboutMe placeholder image boxes border |

**Note:** The CSS tokens in `@theme {}` are defined but most components use the hex values directly in Tailwind arbitrary classes rather than the token names. This is a consistency issue that could be cleaned up.

### 5.2 Typography

Google Fonts loaded in `index.html`:
```
Libre Baskerville: 400, 700
Sora: 400, 700
Space Grotesk: 400, 500
Red Hat Display: 400, 500
```

| Font | CSS Token | Tailwind Class Pattern | Size | Weight | Where |
|---|---|---|---|---|---|
| Sora | `--font-sora` | `font-['Sora']` | `clamp(48px, 7vw, 108px)` via inline style | `font-bold` (700) | Hero "ANDREW" and "VONG" |
| Space Grotesk | `--font-space` | `font-['Space_Grotesk']` | `clamp(13px, 1.1vw, 16px)` via inline style | Regular (400) | Hero "currently ..." subtitle |
| Space Grotesk | `--font-space` | `font-['Space_Grotesk']` | `text-[12px]` | Regular (400) | Navbar smiley `:)` |
| Libre Baskerville | `--font-libre` | `font-['Libre_Baskerville']` | `text-[24px]` | Regular (400) | Navbar "AV" logo |
| Libre Baskerville | `--font-libre` | `font-['Libre_Baskerville']` | `text-[11px]` | Regular (400) | Navbar links (About, Projects, Contact) |
| Red Hat Display | `--font-redhat` | `font-['Red_Hat_Display']` | `text-[24px]` | Regular (400) | AboutMe + Projects body text |

**Fluid typography details:**
- Hero heading uses `clamp(48px, 7vw, 108px)`:
  - At 686px viewport → clamps to minimum 48px
  - At 768px → 53.8px
  - At 1440px → 100.8px
  - At 1543px+ → clamps to maximum 108px
- Subtitle uses `clamp(13px, 1.1vw, 16px)`:
  - At 1182px → 13px (minimum)
  - At 1440px → 15.8px
  - At 1455px+ → 16px (maximum)
- These use inline `style={{ fontSize: 'clamp(...)' }}` because Tailwind's `text-[...]` doesn't support `clamp()` functions

### 5.3 Layout System

| Property | Value | Derivation |
|---|---|---|
| Target viewport | 1440px | Industry standard desktop |
| Content max-width | `864px` | 1440 × 0.6 = 864 |
| Content centering | `mx-auto` | Tailwind auto margins |
| Navbar side padding | `px-6` (24px) | Inside the 864px container |
| Content section padding | `px-8` (32px) | Inside the 864px container |
| Content section vertical padding | `py-20` (80px) | Top and bottom |
| Navbar top offset | `mt-6` (24px) | Gap between top of viewport and nav bar |
| Navbar height | `h-[44px]` (44px) | Fixed, does not scale |

**Responsive behavior (no breakpoints):**
- Above 864px + padding: content centered with whitespace on sides
- At 864px and below: content fills available width minus padding
- At very small viewports: hero text floors at 48px (clamp minimum), content still readable with px-8 padding
- No `sm:`, `md:`, `lg:` breakpoints used anywhere — fully fluid

### 5.4 Z-Index Stacking

| Layer | Z-Index | Element |
|---|---|---|
| Background image | `z-0` | Fixed `<div>` wrapping the `<img>` in App.jsx |
| Main content | `z-10` | `<main>` wrapping Landing, AboutMe, Projects |
| Navbar | `z-50` | The `<nav>` element |

---

## 6. Component-by-Component Specification

### 6.1 `src/main.jsx`

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```
- Imports `./index.css` (triggers Tailwind processing)
- StrictMode enabled (double-renders in dev for detecting side effects)

### 6.2 `src/App.jsx`

**Imports:** `Navbar`, `Landing`, `AboutMe`, `Projects`, `sequoiaBg` (jpg asset)

**Structure:**
```
<div className="relative bg-black min-h-screen">
  <div className="fixed inset-0 z-0">           ← background layer
    <img src={sequoiaBg} ... />                   ← the sunrise photo
  </div>
  <Navbar />                                      ← outside <main>, fixed position
  <main className="relative z-10">                ← content above background
    <Landing />
    <AboutMe />
    <Projects />
  </main>
</div>
```

**Background image classes (on `<img>`):**
- `w-full h-full` — fills the fixed container
- `object-cover` — covers without distortion, crops edges
- `opacity-40` — 40% opacity over the black background, creating a dark moody overlay
- `blur-[0.75px]` — very subtle blur to soften the photo
- `pointer-events-none select-none` — non-interactive, non-selectable

**Why `<img>` instead of CSS `background-image`?** Tailwind utility classes (`opacity-40`, `blur-[0.75px]`) work directly on elements. With `background-image` you'd need pseudo-elements or extra wrappers to achieve the same blur + opacity effect.

### 6.3 `src/components/Navbar.jsx`

**State:**
- `visible` (boolean, default `true`) — controls slide in/out
- `lastScrollY` (useRef, default `0`) — stores previous scroll position

**Scroll behavior logic (useEffect):**
```
if currentScrollY < lastScrollY → show (scrolling UP)
if currentScrollY >= lastScrollY → hide (scrolling DOWN)
```
- Event listener: `scroll`, passive
- Cleanup: removes listener on unmount

**Outer shell:** `<nav>` element
- `fixed top-0 left-0 w-full z-50` — pinned to top of viewport, full width, above all content
- `transition-transform duration-300` — 300ms slide animation
- When visible: `translate-y-0` (in view)
- When hidden: `-translate-y-full` (slid completely above viewport)

**Container:** `<div className="mx-auto max-w-[864px] mt-6">`
- Centers the nav bar content at 864px max-width
- 24px top margin creates floating effect (gap between viewport top and nav)

**Inner bar:** `<div className="bg-[#fef9ed] h-[44px] flex items-center justify-between px-6 relative">`
- Cream background, 44px tall, flex row with items vertically centered
- `justify-between` pushes `:)` left and nav links right
- `relative` is needed as positioning context for the absolutely-centered `AV` logo
- `px-6` (24px) side padding

**Left element — Smiley:**
```html
<span className="font-['Space_Grotesk'] text-[12px] text-[#644d4d] select-none">
  :)
</span>
```
- Space Grotesk, 12px, dark brown color
- `select-none` prevents text selection (decorative element)
- In normal document flow (not absolute)

**Center element — Logo:**
```html
<a href="#landing" className="absolute left-1/2 -translate-x-1/2 font-['Libre_Baskerville'] text-[24px] text-[#5d524b] leading-none no-underline">
  AV
</a>
```
- `absolute left-1/2 -translate-x-1/2` — **true center** of the 864px bar regardless of sibling widths
- Why not flexbox centering? The `:)` on the left (~15px wide) and the nav links on the right (~170px wide) have very different widths. A `flex-1 justify-center` approach centers within remaining space, NOT within the full bar, causing a visible leftward shift of "AV". Absolute positioning solves this.
- Libre Baskerville, 24px, nav text color
- `leading-none` — no extra line height
- `no-underline` — removes default link underline
- Links to `#landing` (scrolls to top)

**Right element — Nav links:**
```html
<div className="flex items-center gap-[29px]">
  <a href="#about" ...>About</a>
  <a href="#projects" ...>Projects</a>
  <span ...>Contact</span>
</div>
```
- Flex row with 29px gap between items
- Each link: Libre Baskerville, 11px, `text-[#5d524b]`, `no-underline`
- Hover: `hover:opacity-70 transition-opacity` (fades to 70% on hover)
- **Contact is a `<span>`, not `<a>`** — `cursor-default`, no href (placeholder, not yet linked)

### 6.4 `src/components/Landing.jsx`

**State:**
- `wordIndex` (number, default `0`) — current index in CYCLING_WORDS
- `fade` (boolean, default `true`) — controls opacity transition

**Constants:**
```js
const CYCLING_WORDS = ['learning', 'building', 'exploring', 'creating', 'growing']
```

**Animation logic (useEffect):**
```
Every 2200ms:
  1. Set fade = false (word fades out over 300ms via CSS transition)
  2. After 300ms timeout:
     a. Advance wordIndex by 1 (wraps via modulo)
     b. Set fade = true (new word fades in over 300ms)
```
- Total cycle: 300ms fade-out + 300ms fade-in + 1600ms visible = 2200ms
- Cleanup: clears interval on unmount

**Section wrapper:**
```html
<section id="landing" className="relative h-screen w-full flex items-center justify-center">
```
- `h-screen` — exactly one viewport height (not `min-h-screen`)
- `flex items-center justify-center` — perfect center both axes
- `id="landing"` — anchor target for navbar "AV" link

**Hero content container:**
```html
<div className="relative z-10 flex flex-col items-center gap-4">
```
- Column layout, centered, 16px gap between name block and subtitle

**Name block:**
```html
<div className="flex flex-col items-center leading-tight">
  <h1 ... style={{ fontSize: 'clamp(48px, 7vw, 108px)' }}>ANDREW</h1>
  <h1 ... style={{ fontSize: 'clamp(48px, 7vw, 108px)' }}>VONG</h1>
</div>
```
- Two separate `<h1>` elements stacked vertically (semantically questionable — could be one h1 with a `<br>`)
- `leading-tight` on wrapper + `leading-none` on each h1 — minimizes vertical gap between ANDREW and VONG
- Both are Sora bold
- `m-0` removes default heading margins
- **ANDREW** is `text-[#fff2f2]`, **VONG** is `text-[#fff5f5]` — very subtle color difference (intentional from Figma)

**Subtitle:**
```html
<p className="font-['Space_Grotesk'] text-[#ebd7d7] m-0"
   style={{ fontSize: 'clamp(13px, 1.1vw, 16px)' }}>
  currently{' '}
  <span className="inline-block transition-opacity duration-300"
        style={{ opacity: fade ? 1 : 0 }}>
    {CYCLING_WORDS[wordIndex]}
  </span>
</p>
```
- "currently" is always visible; only the cycling word fades
- `inline-block` on the span is required for `transition-opacity` to work properly on inline text
- `duration-300` — 300ms transition matches the setTimeout delay
- Opacity controlled via inline style (React dynamic value), not Tailwind class toggle

### 6.5 `src/components/AboutMe.jsx`

**No state.** Pure presentational component.

**Section wrapper:**
```html
<section id="about" className="relative min-h-screen w-full flex items-center">
```
- `min-h-screen` (not `h-screen`) — allows content to exceed viewport height if needed
- `flex items-center` — vertically centers content within the section
- No `justify-center` — content aligns left within the centered max-width container

**Content container:**
```html
<div className="relative z-10 w-full max-w-[864px] mx-auto px-8 py-20 flex flex-col gap-14 font-['Red_Hat_Display'] text-[24px] text-[#ddd6d6] leading-normal">
```
- `max-w-[864px] mx-auto` — matches navbar width, centered
- `px-8` (32px) side padding, `py-20` (80px) top/bottom padding
- `gap-14` (56px) between the two text blocks
- All text inherits: Red Hat Display, 24px, `#ddd6d6`, normal line height

**Academic block:**
```
academically.. (nerd emoji)
studying cs + math @ Texas A&M
incoming swe intern @ ?
(blank line)
interests lie in machine learning, infra, and healthcare tech + research!
```
- Each line is a `<p className="m-0">` (margin removed to control spacing via parent gap)
- `&amp;` renders as `&` for "Texas A&M"
- Blank line achieved with `<p className="m-0">&nbsp;</p>`

**Free time block:**
```
on my free time..
(blank)
i lift, play basketball, watch netflix, and occasionally play tft :)
(blank)
(blank)
(insert images of Rockets, Attack on Titan, TFT penguin)  ← 60% opacity
```
- Placeholder instruction text at `opacity-60`
- Below it, a row of three placeholder image boxes:

**Placeholder image boxes:**
```html
<div className="flex gap-4 mt-4">
  <div className="w-24 h-24 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
    <span className="text-xs text-center opacity-60">Rockets</span>
  </div>
  <!-- same for AoT, TFT -->
</div>
```
- 96×96px (`w-24 h-24`), rounded corners (`rounded-lg`), semi-transparent white bg + border
- Label text: `text-xs` (12px), centered, 60% opacity
- **These are placeholders** — need to be replaced with actual images (Houston Rockets, Attack on Titan, TFT penguin)

### 6.6 `src/components/Projects.jsx`

**No state.** Pure presentational component. Same structural pattern as AboutMe.

**Content container:** Same as AboutMe but `gap-10` (40px) instead of `gap-14`

**Projects placeholder:**
```
some of my favorite projects :)
to be updated soon ...  ← 60% opacity
```

**Spotify placeholder:**
```
check my spotify to see what i'm listening to :)
(plugin to display most listened artists)  ← 60% opacity
```
- `&apos;` used for the apostrophe in "i'm"

---

## 7. Configuration Files

### 7.1 `vite.config.js`
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```
- No custom port, aliases, proxy, or other config — pure defaults
- Dev server runs on port 5173

### 7.2 `eslint.config.js`
- ESLint 9 flat config format
- Ignores `dist/`
- Applies to `**/*.{js,jsx}`
- Extends: `js.configs.recommended`, `reactHooks.configs.flat.recommended`, `reactRefresh.configs.vite`
- Browser globals
- Custom rule: `no-unused-vars` with `varsIgnorePattern: '^[A-Z_]'` (allows unused uppercase/underscore vars — for React component imports)

### 7.3 `index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Andrew Vong</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Sora:wght@400;700&family=Space+Grotesk:wght@400;500&family=Red+Hat+Display:wght@400;500&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**Important:** The Figma capture script (`mcp.figma.com/...`) is a **temporary development tool** and **must be removed before deployment**. It was injected to capture the live site into Figma for design sync.

### 7.4 `src/index.css`
```css
@import "tailwindcss";

@theme {
  --color-cream: #fef9ed;
  --color-nav-text: #5d524b;
  --color-body-text: #ddd6d6;
  --color-body-text-light: #fff2f2;
  --font-libre: 'Libre Baskerville', serif;
  --font-sora: 'Sora', sans-serif;
  --font-space: 'Space Grotesk', sans-serif;
  --font-redhat: 'Red Hat Display', sans-serif;
}

html { scroll-behavior: smooth; }
body { margin: 0; padding: 0; background-color: #000; }
```

**Tailwind v4 `@theme` block:** These tokens generate CSS custom properties AND make them available as Tailwind utilities:
- `--color-cream` → `bg-cream`, `text-cream`, etc.
- `--font-sora` → `font-sora`
- However, components currently use arbitrary value syntax (`font-['Sora']`, `text-[#fef9ed]`) instead of the token-based utilities (`font-sora`, `text-cream`). This is a consistency issue.

### 7.5 `.gitignore`
Standard Vite gitignore: `node_modules`, `dist`, `dist-ssr`, `*.local`, logs, editor directories.

---

## 8. Asset Details

### `src/assets/sequoia-sunrise.jpg`
- **Dimensions:** 3840 × 2160 (4K)
- **File size:** 9,023,538 bytes (~8.6 MB)
- **Source:** Downloaded from Figma node `3:3` (named "Sequoia-Sunrise")
- **Usage:** Single fixed background image in `App.jsx`
- **Optimization needed:** 8.6 MB is very large for a web background. Should be compressed (target ~200-500KB) for production. Consider WebP format.

### `src/assets/react.svg`
- Default Vite scaffold asset, 4126 bytes
- **Unused** — can be deleted

### `public/vite.svg`
- Default Vite favicon, 1497 bytes
- **Should be replaced** with a custom favicon

---

## 9. Behavioral Details

### Page Load
1. Vite serves `index.html`
2. Google Fonts load (with preconnect for speed)
3. React mounts `<App />` into `#root`
4. Background image loads (8.6 MB — will be slow on slow connections)
5. Navbar appears at top with 24px offset
6. Landing section fills viewport with centered name
7. Cycling word animation starts immediately (first word: "learning")

### Scrolling
- `html { scroll-behavior: smooth }` — all anchor navigation is animated
- Navbar hides with a 300ms slide-up when scrolling down
- Navbar reappears with a 300ms slide-down when scrolling up (even slightly)
- The scroll detection compares current vs previous scroll position — any upward movement triggers show, any downward triggers hide
- **Edge case:** At the very top of the page (scrollY = 0), the navbar is always visible because the initial state is `visible: true` and scrolling up from near-top triggers the show condition

### Anchor Navigation
- Clicking "AV" logo → scrolls to `#landing` (top of page)
- Clicking "About" → scrolls to `#about` section
- Clicking "Projects" → scrolls to `#projects` section
- Clicking "Contact" → nothing (span, no href)
- Smooth scroll animation via CSS `scroll-behavior: smooth`

### Word Cycling Animation
- Sequence: learning → building → exploring → creating → growing → learning → ...
- Timing: 2200ms per word (300ms fade out, ~0ms swap, 300ms fade in, 1600ms visible)
- CSS transition: `transition-opacity duration-300` (300ms ease)
- No pause on hover or visibility change — runs continuously

---

## 10. Known Issues, TODOs & Technical Debt

### Must Fix Before Deployment
1. **Remove Figma capture script** from `index.html` — it's a development tool, not for production
2. **Optimize background image** — 8.6 MB JPEG is too large; compress to ~200-500KB or use WebP with a JPEG fallback
3. **Replace default favicon** — `public/vite.svg` should be a custom icon

### Content Placeholders (Need Real Content)
4. **Contact link** — navbar "Contact" is a `<span>` with no action; needs `mailto:` link, contact form, or section
5. **Projects section** — "to be updated soon..." needs actual project cards/descriptions
6. **Spotify widget** — "(plugin to display most listened artists)" needs Spotify API integration or embed
7. **AboutMe image row** — three 96×96 placeholder boxes labeled "Rockets", "AoT", "TFT" need real images

### Technical Debt
8. **Inconsistent design token usage** — `@theme` tokens defined but components use hardcoded hex values in arbitrary classes instead of token utilities (e.g., `text-[#5d524b]` instead of `text-nav-text`)
9. **Two `<h1>` tags** on Landing page — semantically should be one `<h1>` (for SEO/accessibility)
10. **No `<meta description>`** in index.html
11. **No Open Graph / social meta tags**
12. **No accessibility considerations** — no skip-nav link, no aria labels, no reduced-motion media query for the cycling animation
13. **Unused `react.svg`** in `src/assets/` — leftover from Vite scaffold
14. **No mobile hamburger menu** — nav links may overflow on very narrow screens (though the small 11px text + 29px gaps fit within ~320px minimum)

### Future Features (Mentioned in Placeholders)
15. Project cards/grid with actual portfolio pieces
16. Spotify listening activity widget/embed
17. Interest images (Rockets, Attack on Titan, TFT)
18. Contact functionality

---

## 11. Design Decisions & Rationale Log

| Decision | Options Considered | Choice | Rationale |
|---|---|---|---|
| Content width | 615px (Figma), 1008px (70%), 864px (60%) | **864px (60%)** | 615px was too narrow (43% of 1440px). 1008px was too wide — 11px nav text looked lost. 864px balanced proportion. |
| Navbar AV centering | Flexbox (`flex-1 justify-center`) vs absolute positioning | **Absolute** (`left-1/2 -translate-x-1/2`) | Left `:)` is ~15px, right links are ~170px. Flex centering offsets AV toward the narrower side. Absolute gives true mathematical center. |
| Hero font sizing | Fixed `45px` (from Figma) vs fluid `clamp()` | **`clamp(48px, 7vw, 108px)`** | 45px was only 3.1% of 1440px viewport — too small for a hero heading. Industry standard is 5-8vw. Clamp provides fluid scaling with floor/ceiling. |
| Background technique | CSS `background-image` vs `<img>` element | **`<img>` element** | Tailwind's `opacity-40` and `blur-[0.75px]` utilities work directly on elements. CSS background-image would need pseudo-elements or extra wrappers. |
| Navbar scroll detection | Intersection Observer vs scroll event | **Scroll event** with `useRef` | Simple, works everywhere, no threshold tuning needed. Passive listener for performance. |
| Tailwind config | `tailwind.config.js` (v3) vs `@theme {}` (v4) | **`@theme {}` in CSS** | Project uses Tailwind v4 which uses CSS-first configuration. No JS config file. |
| Smooth scroll | JS `scrollIntoView` vs CSS `scroll-behavior` | **CSS** `scroll-behavior: smooth` | Zero-JS solution, works with standard anchor links, browser-native performance. |
| Word animation | CSS animation keyframes vs React state + setTimeout | **React state** | Gives programmatic control over word sequence, easy to modify words/timing, opacity transition via CSS. |

---

## 12. Quick Reference for Common Tasks

### Adding a new section
1. Create `src/components/NewSection.jsx`
2. Follow the pattern: `<section id="newsection" className="relative min-h-screen w-full flex items-center">`
3. Content wrapper: `<div className="relative z-10 w-full max-w-[864px] mx-auto px-8 py-20 ...">`
4. Import and add to `App.jsx` inside `<main>`
5. Add nav link in `Navbar.jsx`

### Changing the content width
- Update `max-w-[864px]` in THREE files: `Navbar.jsx`, `AboutMe.jsx`, `Projects.jsx`
- Landing.jsx doesn't need it (flexbox centered, no max-width)

### Adding a new font
1. Add to the Google Fonts URL in `index.html` (append `&family=Font+Name:wght@400;700`)
2. Add CSS token in `src/index.css` `@theme {}` block: `--font-name: 'Font Name', sans-serif;`
3. Use in components: `font-['Font_Name']` or `font-name` (if using the token)

### Adding a new color
1. Add to `@theme {}` in `src/index.css`: `--color-name: #hex;`
2. Use in components: `text-name`, `bg-name`, or `text-[#hex]` for one-off usage

### Modifying the cycling words
- Edit the `CYCLING_WORDS` array in `Landing.jsx` line 3
- Change timing: `2200` (interval) and `300` (fade duration) in the useEffect
