# Estlopacu Portfolio Design System

A personal-brand design system for **Luis Esteban López Acuña** — a full-stack software engineer, originally from Costa Rica and based in Berlin, Germany for the last 8 years. It powers his portfolio: a place to showcase projects, work experience, and skills, and to land his dream job. The aesthetic is **"terminal modernism"** — the heritage developer/terminal personality of his original CV, elevated with modern type, a refined blue palette, and rich, tasteful motion.

## Source material
This system is derived from the engineer's own repository:

- **GitHub:** [`Estlopacu/estlopacu.github.io`](https://github.com/Estlopacu/estlopacu.github.io) (branch `dev`) — the original React online-CV (circa 2018). Explore it for the original content, structure, and styling decisions this system modernizes.

The original DNA we kept and lifted forward:
- **VT323** — the terminal/pixel display font from the original CV, retained as a brand accent.
- **Deep blue** `#004BA8` (primary) → `#337ACA` (bright azure) — extended into a full tonal ramp.
- **Slate** `#4A525A` — extended into a neutral/ink ramp for "terminal" dark surfaces.
- The **50px spacing rhythm**, the **circular portrait**, **skill bars**, and **swing-on-hover** social icons.

Real assets imported from the repo live in `assets/` (profile photo, two project screenshots, favicon).

---

## CONTENT FUNDAMENTALS

**Voice.** First person, warm but precise — an engineer who cares about craft, not a salesperson. Confident without bragging. Example: *"I'm a full-stack developer from Costa Rica who cares about the craft."*

**Address.** Speak as **"I"** to describe self; address the visitor as **"you"** in CTAs (*"Let's build something"*, *"Get in touch"*). Avoid corporate "we."

**Casing.** Headings and display text are **sentence case** (*"Things I've built"*, not "Things I've Built"). Monospace eyebrows and labels are **lowercase**, often prefixed with a `//` comment glyph (*`// selected work`*) or a shell prompt (*`esteban@portfolio:~$`*). Tech tags keep their canonical casing (React, Node.js, TypeScript, MySQL).

**Terminal/code register.** Lean into developer idiom for accents and CTAs: `whoami`, `cat about.md`, `./hire --role=engineer`, `$ npm run hire`. Use sparingly — one or two per screen — as flavor, never for primary body copy.

**Tone of body copy.** Plain, direct, concrete. State what was built, the stack, and the outcome. No buzzword soup, no "synergy." Numbers are specific (*"10+ years"*, *"6 years at GetYourGuide"*, *"~7% conversion lift"*).

**Bilingual context.** Esteban is Costa Rican and lives in Berlin; project names and some source content are Spanish (*Contratista Costa Rica*, *#MamáVaPrimero*). Lead with the "from Costa Rica, based in Berlin" framing in bios. Keep proper nouns in their original language; write UI/portfolio copy in English unless localizing.

**Emoji.** Not used. The developer accent comes from monospace type, the `//` and `$` glyphs, and the terminal motif — never emoji.

---

## VISUAL FOUNDATIONS

**Color.** A confident deep-blue brand (`--blue-600 #004BA8`) with a bright azure highlight (`--blue-400 #337ACA`). Neutrals are a cool slate ramp (anchored on `--slate-600 #4A525A`) running all the way to ink-blue `--blue-950` for terminal surfaces. The signature accent is a **terminal green** (`--signal-400 #3DDC84`) used for prompts, "open to work" status, success, and hover glows on dark. Semantic status colors (success/warning/danger/info) round it out. Two themes ship: a clean **light** default and a `data-theme="terminal"` **dark** scope.

**Type.** Four families, each with a clear job:
- **Space Grotesk** — display & headings (modern technical edge), sentence case, tight tracking (−0.02em), tight leading (1.05) at large sizes.
- **IBM Plex Sans** — body & UI, generous leading (1.7).
- **JetBrains Mono** — labels, eyebrows, code, data, tags; uppercase mono labels track wide (0.12em).
- **VT323** — terminal accent / heritage prompts only.
Scale is a 1.250 major-third ramp from 11px → 80px.

**Spacing & layout.** 8px base scale; `--space-8` (48px) preserves the original 50px rhythm. Containers cap at 640/860/1120/1320px. Sections breathe with `--space-12` (96px) vertical padding. Layout uses CSS grid with `gap`; a fixed glass nav (72px) sits on top.

**Backgrounds.** Mostly flat surfaces — white cards on a slate-50 page, ink-blue for terminal/dark sections. **No** decorative full-bleed gradients. The only gradients are functional: skill-bar fills (blue→azure / green) and the portrait ring (azure→signal). Imagery is limited to the user's own project screenshots and portrait — cool/neutral toned.

**Corner radii.** Soft but not pill-everything: cards `--radius-lg` (18px), buttons/inputs `--radius-sm` (8px), chips `--radius-xs` (4px), portrait/monogram circular. 

**Shadows.** Cool, **blue-tinted** elevation (`rgba(6,34,63,…)`) from `xs`→`xl`. Two special effects: `--shadow-glow` (azure focus ring) and `--shadow-signal` (green glow) for emphasis on dark.

**Cards.** White surface, 1px `--border-subtle`, `--radius-lg`, soft `--shadow-sm`. Interactive cards lift `translateY(-4px)` and deepen shadow on hover, border tints blue. Terminal cards are dark with a green hover glow.

**Borders.** Hairline 1px `--border-subtle` (slate-200) for dividers; `--border-strong` for inputs; brand-blue for emphasis; translucent white on dark surfaces.

**Motion.** Three curves: `--ease-out` (snappy settle, default), `--ease-in-out` (symmetric), `--ease-spring` (slight overshoot, for the social-icon swing and playful bits). Durations 140 / 240 / 420 / 700ms. Signature animations: scroll-reveal fade-up (`.pf-reveal`, 700ms), blinking terminal cursor, skill bars filling on scroll-into-view, animated nav underlines, the heritage **swing** on social icons, a bobbing scroll hint. All decorative motion respects `prefers-reduced-motion`.

**Hover & press.** Hover = lift (`translateY(-1px/-4px)`) + darker brand / soft tint + deeper shadow. Press = settle back + slight scale-down (0.985). Focus = azure glow ring (`--shadow-glow`). Links grow an underline from the left.

**Transparency & blur.** Used deliberately: the nav uses `backdrop-filter: blur(12px)` over a `color-mix` translucent surface; project hover overlays use a translucent ink-blue scrim.

---

## ICONOGRAPHY

The original CV used **FontAwesome** (solid + brand icons: `faAt`, `faMobile`, `faGithub`, `faLinkedin`, `faFacebookSquare`). This system standardizes on **[Lucide](https://lucide.dev)** — a modern, consistent 2px-stroke open-source set that covers the same needs (`github`, `linkedin`, `mail`, `phone`, `map-pin`, `arrow-down`, `moon`, `sun`).

> **Substitution flag:** Lucide replaces FontAwesome. Stroke style differs (Lucide is outline/stroke, FA brand icons are filled glyphs). If you require the exact original brand marks, re-add FontAwesome — but Lucide is the recommended modern default here.

**Usage.** Load Lucide from CDN (`https://unpkg.com/lucide@0.453.0/dist/umd/lucide.min.js`), render `<i data-lucide="github"></i>`, then call `lucide.createIcons()`. The `SocialLink` component wraps this with the heritage swing hover. Icons inherit `currentColor` and size to ~18–20px. No icon font is bundled; no emoji; the `//` and `$` glyphs are typographic, not icons.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry point (consumers link this); `@import`s the token layers + fonts.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter wrapper.

**Tokens** (`tokens/`)
- `fonts.css` — Google Fonts import (Space Grotesk, IBM Plex Sans, JetBrains Mono, VT323).
- `colors.css` — blue/slate ramps, signal/azure accents, semantic + surface/text aliases, terminal theme.
- `typography.css` — families, scale, weights, leading, tracking, semantic roles.
- `spacing.css` — spacing, radii, borders, shadows, motion (easing/durations), layout sizes.

**Foundation cards** (`cards/`) — Design System tab specimens: Type (display, body, mono, terminal, scale), Colors (brand, neutrals, accents, surfaces), Spacing (scale, radii, shadows, motion), Brand (wordmark, portrait).

**Components**
- `components/core/` — `Button`, `Tag`, `Card`.
- `components/portfolio/` — `SectionHeading`, `SkillBar`, `TerminalPrompt`, `SocialLink`.
- Each: `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`; one `*.card.html` per directory.

**UI kits**
- `ui_kits/portfolio/` — interactive single-page portfolio (Nav, Hero, About, Experience, Projects, Contact). Entry `index.html`; see its `README.md`.

**Assets** (`assets/`) — `profile.jpg`, `project-contratistacr.png`, `project-mamavaprimero.png`, `favicon.ico`.

> Components are reached at runtime via `window.EstlopacuPortfolioDesignSystem_604ed3`. The bundle (`_ds_bundle.js`), manifest, and lint config are generated automatically — do not edit them.
