import type { APIRoute } from 'astro';
import { SITE } from '../consts';

export const prerender = true;

export const GET: APIRoute = () => {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
