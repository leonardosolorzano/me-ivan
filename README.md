# velix

Sitio web de la agencia velix: desarrollo web, backend, bases de datos y frontend.

Construido con [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com) v4 y desplegable como SSR con el adapter de Node.

## Estructura

```text
/
├── public/
│   └── images/blog/        # Portadas de los posts
├── src/
│   ├── actions/            # Astro Actions (formulario de contacto)
│   ├── components/         # Secciones de la página y componentes UI
│   ├── content/
│   │   └── blog/           # Posts del blog en Markdown
│   ├── layouts/
│   ├── pages/
│   │   ├── blog/           # Listado (con paginación) y detalle de posts
│   │   ├── rss.xml.ts      # Feed RSS
│   │   ├── robots.txt.ts   # Robots generado desde la URL del sitio
│   │   └── 404.astro
│   └── consts.ts           # Datos del sitio (título, URL, redes sociales)
└── astro.config.mjs
```

## Comandos

| Comando | Acción |
| :------ | :----- |
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Build de producción a `./dist/` |
| `pnpm preview` | Previsualiza el build localmente (SSR) |

## Configuración

Copia `.env.example` a `.env` y ajusta:

- `SITE_URL` — URL pública del sitio (sitemap, RSS, Open Graph, robots.txt).
- `CONTACT_WEBHOOK_URL` — URL de un servicio de email (Formspree, Resend, Make, Zapier, Discord webhook, etc.). El formulario de contacto envía un POST con JSON `{ name, email, service, message }`. Sin este valor, el formulario muestra un error indicando que falta configurar.

Datos del sitio (nombre, descripción, redes sociales) en `src/consts.ts`.

## Añadir un post

Crea un archivo Markdown en `src/content/blog/`:

```md
---
title: Título del post
description: Resumen que aparece en listados y SEO.
pubDate: 2026-08-01
category: Desarrollo Web
readTime: 5 min
coverImage: /images/blog/mi-post.svg
coverAlt: Descripción de la imagen
draft: false
---

Contenido del post en Markdown.
```

El post aparece automáticamente en el blog (ordenado por fecha), en el home, en el sitemap y en el RSS.
