// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // TODO: set to the production domain once it is registered.
  site: 'https://funkellabs.example',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Keep font subsets as separate files so unicode-range can skip the unused ones.
      assetsInlineLimit: (file) => (/\.(woff2?|ttf)$/.test(file) ? false : undefined),
    },
  },
});
