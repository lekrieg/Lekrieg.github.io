import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// https://astro.build/config
export default defineConfig({
  site: 'https://lekrieg.github.io',
  // If repo name is different, uncomment:
  // base: '/repo-name',
  integrations: [mdx()]
});