Action button for the Estlopacu portfolio — brand-blue by default, with a signal-green `terminal` variant for the developer accent.

```jsx
<Button variant="primary" size="lg">View work</Button>
<Button variant="secondary" iconLeft={<i data-lucide="download" />}>Résumé</Button>
<Button variant="terminal">$ npm run hire</Button>
<Button variant="ghost" as="a" href="#contact">Contact</Button>
```

Variants: `primary` · `secondary` (outline) · `ghost` (text) · `terminal` (mono green).
Sizes: `sm` · `md` · `lg`. Pass `as="a"` + `href` for link buttons. `iconLeft` / `iconRight` accept any node (Lucide `<i data-lucide>` icons recommended).
