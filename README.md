# Estudio Jurídico-Contable Laura Luttini — Landing (React + Vite + Tailwind + Framer Motion)

Proyecto one-page responsive, listo para producción, con micro-animaciones, SEO, accesibilidad y formulario funcional (mock).

## Requisitos

- Node 18+

## Comandos

```bash
npm i
npm run dev     # ambiente de desarrollo
npm run build   # build producción
npm run preview # servir build local
```

## Deploy en Railway

1) Conectá el repo en Railway (New Project → Deploy from GitHub).

2) Railway usará Nixpacks (Node). No necesitás Dockerfile. Detecta:
   - `build`: `npm run build`
   - `start`: `npm start` (sirve `dist` con Vite Preview)

3) Variables/puerto: Railway define `PORT` automáticamente. El script `start` usa `--port $PORT --host`.

4) Primera vez: al crear el servicio, Railway hará el build y expondrá una URL.

5) SPA/estáticos: las imágenes se sirven desde `public/`. Si agregás nuevas, colocarlas ahí.

Comandos de verificación local (imitando Railway):

```bash
npm run build
PORT=8080 npm start
```

## Estructura

- `src/components/` — componentes UI (Header, Hero, Services, WhyUs, About, Testimonials, FAQ, Contact, Footer, CTAWhatsApp, Seo, SchemaOrg, Toast)
- `src/lib/` — utilidades (analytics, validators, sendForm, config)
- `public/` — estáticos (robots.txt, sitemap.xml, og.jpg)

## Personalización rápida

- Número de WhatsApp: editar `src/lib/config.js` → `WHATSAPP_NUMBER` y (opcional) `WHATSAPP_TEXT`.
- Email, teléfono visible, horarios: editar `src/lib/config.js` → objeto `BUSINESS`.
- SEO base (título/desc/imagen): `index.html` y/o `src/components/Seo.jsx`.
- Colores: variables en `src/index.css` (`:root { --rose-..., --ink-... }`).

## Formulario

- Validaciones cliente: email, teléfono (opcional), campos requeridos.
- Anti-spam: honeypot `website`.
- Toasts de éxito/error accesibles.
- Mock de envío en `src/lib/sendForm.js` (simula latencia y éxito).

Para integrar con servicios externos:

- Formspree: reemplazar `sendForm` por `fetch('https://formspree.io/f/XXXX', {...})` con `body: JSON.stringify(values)`.
- Netlify Forms: agregar `data-netlify="true"` y `name` al `<form>`, y enviar POST a `/` con `FormData`.
- EmailJS: `emailjs.send('service_id', 'template_id', values, 'public_key')`.

## Accesibilidad

- Focus visible (`ring-rose-400`), navegación por teclado.
- Acordeón FAQ con `aria-expanded`, `aria-controls`, regiones etiquetadas.
- Inputs con `label` y `aria-describedby` para errores.
- Secciones con `scroll-margin-top` para evitar que el header tape anclas.

## Animaciones (Framer Motion)

- Parallax sutil en Hero (respeta `prefers-reduced-motion`).
- Fade-up en secciones al entrar al viewport.
- Stagger en tarjetas de Servicios.

## Analítica

- Mock en `src/lib/analytics.js` con `trackEvent(...)`.
- Dejar comentado el snippet de GA4/Plausible ahí mismo para activar fácilmente.

## SEO

- Meta tags OG/Twitter en `index.html` y `Seo.jsx`.
- JSON-LD LocalBusiness + LegalService + AccountingService vía `SchemaOrg.jsx`.
- `robots.txt` y `sitemap.xml` en `public/`.

## Lighthouse (objetivos)

- Performance ≥ 90, SEO ≥ 95, A11y ≥ 95.
- Usar imágenes WebP/AVIF y `loading="lazy"` donde corresponda (la demo usa ilustrativos y placeholders).

## Notas

- La imagen `public/og.jpg` es un placeholder. Reemplazá por un JPG 1200×630.
- Este proyecto es mobile-first y responsive (≥360px, tablet, desktop).
