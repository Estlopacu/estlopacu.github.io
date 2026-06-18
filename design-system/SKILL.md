---
name: estlopacu-design
description: Use this skill to generate well-branded interfaces and assets for Esteban López Acuña's software-engineer portfolio brand ("Estlopacu"), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick map:
- `styles.css` — link this one file to get all tokens + fonts.
- `tokens/` — colors (deep blue + slate + terminal green), typography (Space Grotesk / IBM Plex Sans / JetBrains Mono / VT323), spacing, motion.
- `components/` — Button, Tag, Card, SectionHeading, SkillBar, TerminalPrompt, SocialLink (React; reached via `window.EstlopacuPortfolioDesignSystem_604ed3`).
- `ui_kits/portfolio/` — full interactive single-page portfolio to copy from.
- `assets/` — profile photo, project screenshots, favicon.
- Icons: Lucide via CDN. No emoji. Voice: first-person, sentence-case, developer/terminal accents (`//`, `$`) used sparingly.
