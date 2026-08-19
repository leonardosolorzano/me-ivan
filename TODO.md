# TODO — velix

## ✅ Hecho

### Base del proyecto
- Sitio construido con Astro 7.
- Tailwind CSS v4 configurado.
- SSR preparado con adapter de Node.
- Estructura organizada por páginas, layouts, componentes y contenido.
- Página principal completa.
- Página 404 personalizada.
- Navegación responsive con menú móvil.

### Página principal
- Hero principal.
- Sección de servicios.
- Sección “Nosotros”.
- Vista previa del blog.
- Formulario de contacto.
- Footer con redes sociales.

### Blog
- Content Collections usando Content Layer API.
- Posts escritos en Markdown.
- Listado de artículos.
- Paginación configurada.
- Página individual para cada artículo.
- Filtrado de posts publicados y borradores.
- Categorías y tiempo estimado de lectura.
- Imágenes de portada.
- Feed RSS en `/rss.xml`.

### SEO
- Título y descripción por página.
- URLs canónicas.
- Open Graph.
- Twitter Cards.
- Sitemap automático.
- `robots.txt`.
- JSON-LD para la organización.
- JSON-LD para artículos del blog.
- URL del sitio centralizada en `src/consts.ts`.

### Contacto
- Astro Actions configurado.
- Validación de campos con Zod.
- Validación de email.
- Campo honeypot contra spam básico.
- Mensajes de error por campo.
- Estados de envío correcto y error.
- Webhook configurable mediante variable de entorno.
- Enlaces internos corregidos para volver desde `/blog` a `/#contacto`.

---

## 🔴 Prioridad alta

### Configuración de producción
- [ ] Configurar `SITE_URL` con el dominio real.
- [ ] Configurar `CONTACT_WEBHOOK_URL`.
- [ ] Confirmar que el webhook recibe correctamente los mensajes.
- [ ] Verificar que el correo de contacto del sitio sea real.
- [ ] Sustituir el dominio de ejemplo `velix.com` si todavía no es definitivo.
- [ ] Elegir plataforma de deploy: Vercel, Netlify o servidor Node.
- [ ] Probar el build de producción con `pnpm build`.
- [ ] Probar el sitio generado con `pnpm preview`.

### Enlaces y marca
- [ ] Sustituir los enlaces `#` de Twitter, GitHub y LinkedIn por URLs reales.
- [ ] Revisar que el logo definitivo esté optimizado.
- [ ] Crear una imagen Open Graph real para compartir el sitio.
- [ ] Revisar favicon y metadatos sociales.
- [ ] Confirmar nombre, email y descripción definitivos de la marca.

### Formulario
- [ ] Añadir protección contra abuso y spam más avanzada.
- [ ] Añadir rate limiting.
- [ ] Añadir límite máximo de longitud al mensaje.
- [ ] Crear una página de confirmación después del envío.
- [ ] Añadir un estado de carga más claro.
- [ ] Comprobar qué ocurre si el usuario envía el formulario sin JavaScript.
- [ ] Verificar que no se filtren errores internos del webhook al usuario.

### Calidad
- [ ] Añadir el script `astro check` al `package.json`.
- [ ] Añadir tests para la Action de contacto.
- [ ] Añadir tests para la validación del formulario.
- [ ] Configurar ESLint y Prettier.
- [ ] Configurar CI para ejecutar validaciones y build.
- [ ] Revisar errores de consola en producción.
- [ ] Probar navegación con teclado y lector de pantalla.

---

## 🟡 Prioridad media

### Contenido
- [ ] Añadir entre 8 y 10 artículos al blog.
- [ ] Reemplazar las portadas SVG por imágenes JPG o WebP reales.
- [ ] Optimizar el peso y tamaño de las imágenes.
- [ ] Revisar textos, ortografía y llamadas a la acción.
- [ ] Añadir autor y fecha de actualización a los artículos.
- [ ] Añadir artículos relacionados.
- [ ] Añadir navegación entre artículo anterior y siguiente.
- [ ] Añadir páginas o filtros por categoría.
- [ ] Añadir búsqueda de artículos.

### Portfolio
- [ ] Crear sección de proyectos realizados.
- [ ] Añadir imágenes reales de cada proyecto.
- [ ] Añadir descripción, tecnologías y resultados.
- [ ] Añadir filtros por tipo de proyecto.
- [ ] Crear páginas individuales para proyectos destacados.

### Conversión
- [ ] Añadir testimonios de clientes.
- [ ] Añadir preguntas frecuentes.
- [ ] Añadir una sección de proceso de trabajo.
- [ ] Añadir llamadas a la acción en más puntos del sitio.
- [ ] Añadir casos de éxito con resultados medibles.
- [ ] Añadir botón de contacto rápido o WhatsApp si aplica.

### Analítica
- [ ] Integrar Plausible, Umami o Google Analytics.
- [ ] Configurar Google Search Console.
- [ ] Configurar eventos para medir envíos del formulario.
- [ ] Medir clics en botones de contacto.
- [ ] Revisar indexación del sitemap.

---

## 🟢 Prioridad baja

### Legal
- [ ] Crear página de aviso legal.
- [ ] Crear política de privacidad.
- [ ] Crear política de cookies si se añade analítica que las utilice.
- [ ] Añadir enlaces legales en el footer.
- [ ] Revisar cumplimiento de GDPR.

### Internacionalización
- [ ] Añadir versión en inglés.
- [ ] Configurar rutas multidioma.
- [ ] Añadir etiquetas `hreflang`.
- [ ] Traducir los artículos principales.

### Experiencia de usuario
- [ ] Añadir modo claro/oscuro con preferencia persistente.
- [ ] Añadir animaciones de entrada sutiles.
- [ ] Revisar diseño en móvil, tablet y escritorio.
- [ ] Revisar contraste de colores.
- [ ] Añadir estados de carga y error globales.
- [ ] Mejorar navegación cuando el usuario vuelve desde un artículo.

### Mantenimiento
- [ ] Actualizar dependencias periódicamente.
- [ ] Documentar el proceso de deploy.
- [ ] Documentar cómo añadir nuevos artículos.
- [ ] Mantener actualizado `.env.example`.
- [ ] Crear estrategia de copias de seguridad.
- [ ] Revisar rendimiento con Lighthouse.
- [ ] Revisar Core Web Vitals.
