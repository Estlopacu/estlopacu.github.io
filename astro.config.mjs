// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// User page (estlopacu.github.io) → base path is "/", no `base` needed.
export default defineConfig({
  site: 'https://estlopacu.github.io',
  output: 'static',
  integrations: [react()],
});
