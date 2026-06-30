# estlopacu.github.io

Personal portfolio of Esteban López Acuña. Built with [Astro](https://astro.build) + React 18 + TypeScript, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build → dist/
npm run preview  # preview the production build
```

## Deploy

Pushing to `dev` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`),
which builds the Astro site and publishes it to GitHub Pages.

## Structure

- `src/components/ds/` — design-system components (Button, Card, Tag, …)
- `src/components/sections/` — portfolio sections (Hero, About, Experience, …)
- `src/styles/` — design tokens + portfolio CSS
- `design-system/` — design-system source of truth
- `pokedesk/` — separate prebuilt sub-project (unrelated)

## Credits

Made by Esteban López Acuña
