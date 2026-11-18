# CLAUDE.md

## Project

Astro 5 static portfolio site → `https://estlopacu.github.io`.

## Stack

- Astro 5 + React 18 integration
- TypeScript
- Motion (animation library)
- Output: static (`astro build` → `out/`)

## Commands

```bash
npm run dev      # dev server
npm run build    # static build → out/
npm run preview  # preview build
```

## Branch & Deploy

- **PRs target `dev`** (default branch)
- GitHub Pages deploys from `dev` branch
- If a deploy fails with "Branch X is not allowed to deploy to github-pages", add it to the `github-pages` environment branch policy in repo settings
- `.nojekyll` required at root — Jekyll strips `_`-prefixed files otherwise
- To force a fresh deploy: push an empty commit to `dev`

## Worktree sessions

New Claude Code sessions for this project run in isolated git worktrees under `.claude/worktrees/`. Run all commands from the worktree path, not the repo root.

## Tooling

- **Prettier** — `.prettierrc` with `prettier-plugin-astro`. Run: `npx prettier --write src`
- **ESLint** — `eslint.config.mjs`. Run: `npx eslint src`
- **Husky + lint-staged** — pre-commit hook runs ESLint + Prettier on staged files automatically
- **Type check** — `npx tsc --noEmit` or `npx astro check`

CI runs all checks (astro check → tsc → eslint → prettier → build) on every PR and push to `dev`.

## Conventions

- No comments unless the WHY is non-obvious
- No backwards-compatibility shims for removed code
- Prefer editing existing files over creating new ones

## UI workflow

- Start the dev server and verify the change in the browser before finishing any UI task. Use `preview_start` with the configured launch name.
- Do not open a PR immediately. Present the result first and wait for the user to confirm before opening one.
