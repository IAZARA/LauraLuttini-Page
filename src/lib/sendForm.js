// Submit function with Formspree (or mock fallback).
// Easily switch to Netlify/EmailJS if preferred.

import { FORM_ENDPOINT } from './submitConfig.js'

export async function sendForm(values) {
  // If we have a configured Formspree endpoint, post there
  if (FORM_ENDPOINT) {
    const payload = {
      ...values,
      _subject: `Nueva consulta: ${values.tipo || 'General'} — ${values.nombre || ''}`,
      _format: 'json',
      _gotcha: values.website || '', // honeypot passthrough (Formspree ignora si vacío)
      _source: typeof window !== 'undefined' ? window.location.href : 'unknown',
    }

    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    // Formspree responde 200/2xx en éxito; errores vienen como JSON { errors: [...] }
    let data = null
    try {
      data = await res.json()
    } catch (_) {
      // Si no hay JSON, asumimos éxito si status es 2xx
    }

    if (!res.ok || (data && data.errors && data.errors.length)) {
      const msg = data?.errors?.map((e) => e.message).join(', ') || 'Error al enviar el formulario'
      throw new Error(msg)
    }

    return { ok: true }
  }

  // Fallback: modo dev simulado para no bloquear pruebas locales
  if (import.meta.env.DEV) {
    // Simular latencia y éxito
    await new Promise((res) => setTimeout(res, 600))
    // eslint-disable-next-line no-console
    console.warn('[sendForm] FORM_ENDPOINT no configurado. Usando mock en DEV.')
    return { ok: true, mock: true }
  }

  // En producción, sin endpoint configurado, lanzamos error
  throw new Error('Formulario no configurado: faltó VITE_FORMSPREE_ENDPOINT')
}
