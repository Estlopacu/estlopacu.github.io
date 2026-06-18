# Portfolio UI Kit

An interactive, single-page recreation of Esteban López Acuña's developer portfolio — modernized from the original online-CV (`Estlopacu/estlopacu.github.io`).

## Screens / sections
- **Nav** (`Nav.jsx`) — fixed glass header with monogram, section links, light/terminal theme toggle, "Hire me" CTA.
- **Hero** (`Hero.jsx`) — headline, status tags, CTAs, circular portrait, terminal motif.
- **About** (`About.jsx`) — bio + stats card alongside animated skill meters.
- **Experience** (`Experience.jsx`) — vertical timeline built from the real CV data.
- **Projects** (`Projects.jsx`) — image cards that reveal the tech stack on hover.
- **Contact** (`Contact.jsx`) — terminal-themed (dark) CTA, social links, education list, footer.

## Composition
Every section composes design-system primitives from the bundle
(`window.EstlopacuPortfolioDesignSystem_604ed3`): `Button`, `Tag`, `Card`,
`SectionHeading`, `SkillBar`, `TerminalPrompt`, `SocialLink`.

## Interactions
- Scroll-reveal (`.pf-reveal` + IntersectionObserver fade-up).
- Light ⇄ terminal theme toggle, persisted to `localStorage`.
- Smooth-scroll anchor nav; animated underlines; hover lifts; project hover overlays.

## Notes
- Icons via Lucide (CDN). Content (jobs, education, skills, projects) is lifted verbatim from the source repo's JSON/components.
