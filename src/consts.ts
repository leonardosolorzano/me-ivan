export const SITE = {
  title: 'velix | Soluciones Digitales',
  name: 'velix',
  description:
    'Estudio de desarrollo web: sitios estáticos ultrarrápidos y aplicaciones dinámicas con Astro, Next.js, React, Python, FastAPI, Strapi y PostgreSQL.',
  url:
    import.meta.env.SITE_URL ??
    (import.meta.env.VERCEL_URL ? `https://${import.meta.env.VERCEL_URL}` : 'https://velix.com'),
  locale: 'es',
  email: 'hola@velix.com',
  social: {
    twitter: '#',
    github: '#',
    linkedin: '#',
  },
} as const;

export const POSTS_PER_PAGE = 4;
