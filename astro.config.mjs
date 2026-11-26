// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

const siteUrl =
  import.meta.env.SITE_URL ??
  (import.meta.env.VERCEL_URL ? `https://${import.meta.env.VERCEL_URL}` : 'https://velix.com');

export default defineConfig({
  site: siteUrl,
  output: 'static',
  adapter: vercel(),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
