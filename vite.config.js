import { defineConfig } from 'vite'

// Config para permitir el host público de Railway en `vite preview`.
// Si cambiás el dominio, agregalo en `preview.allowedHosts`.
export default defineConfig({
  preview: {
    host: true,
    port: Number(process.env.PORT) || 5173,
    // Permití explícitamente el dominio público de Railway
    allowedHosts: [
      'lauraluttini-page-production.up.railway.app',
    ],
  },
})

