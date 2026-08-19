export const SITE = {
  title: 'velix | Soluciones Digitales',
  name: 'velix',
  description:
    'Agencia de desarrollo web, backend, bases de datos y frontend. Transformamos ideas en soluciones digitales escalables.',
  url: import.meta.env.SITE_URL ?? 'https://velix.com',
  locale: 'es',
  email: 'hola@velix.com',
  social: {
    twitter: '#',
    github: '#',
    linkedin: '#',
  },
} as const;

export const POSTS_PER_PAGE = 4;
