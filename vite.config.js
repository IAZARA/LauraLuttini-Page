import { defineConfig } from 'vite'

// Habilita los dominios del sitio tanto en dev (server)
// como en producción con `vite preview` (Railway).
export default defineConfig({
  server: {
    // opcional: útil si alguna vez probás en LAN o con túneles
    allowedHosts: [
      'estudioluttini.com',
      'www.estudioluttini.com',
      'lauraluttini-page-production.up.railway.app',
    ],
  },
  preview: {
    host: true,
    port: Number(process.env.PORT) || 5173,
    // Permitimos tanto el dominio de Railway como el personalizado
    allowedHosts: [
      'estudioluttini.com',
      'www.estudioluttini.com',
      'lauraluttini-page-production.up.railway.app',
    ],
  },
})
