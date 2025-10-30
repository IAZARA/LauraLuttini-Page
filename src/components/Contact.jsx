import React, { useState } from 'react'
import { sendForm } from '../lib/sendForm.js'
import { validateEmail, validatePhone } from '../lib/validators.js'
import Toast from './Toast.jsx'
import { WHATSAPP_URL, BUSINESS } from '../lib/config.js'
import { trackEvent } from '../lib/analytics.js'

export default function Contact() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipo: 'Legal',
    mensaje: '',
    website: '', // honeypot
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ open: false, type: 'success', message: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const validate = () => {
    const e = {}
    if (!form.nombre.trim()) e.nombre = 'Ingresá tu nombre.'
    if (!validateEmail(form.email)) e.email = 'Ingresá un email válido.'
    if (form.telefono && !validatePhone(form.telefono)) e.telefono = 'Ingresá un teléfono válido.'
    if (!form.mensaje.trim()) e.mensaje = 'Contanos brevemente tu consulta.'
    return e
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return
    if (form.website) return // honeypot

    try {
      setLoading(true)
      await sendForm(form)
      setToast({ open: true, type: 'success', message: '¡Gracias! Te responderemos en el día hábil.' })
      setForm({ nombre: '', email: '', telefono: '', tipo: 'Legal', mensaje: '', website: '' })
      trackEvent('form_submit_success')
    } catch (err) {
      setToast({ open: true, type: 'error', message: 'Ocurrió un error. Probá nuevamente en unos minutos.' })
      trackEvent('form_submit_error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-16 md:py-24">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-2xl md:text-4xl font-bold">Contacto</h2>
          <p className="mt-3 text-ink-700">Contanos tu consulta y te respondemos en el día hábil.</p>

          <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-ink-900">Nombre</label>
                <input
                  id="nombre" name="nombre" type="text" autoComplete="name"
                  value={form.nombre} onChange={onChange}
                  aria-describedby={errors.nombre ? 'err-nombre' : undefined}
                  aria-invalid={Boolean(errors.nombre)}
                  className="mt-1 w-full rounded-md border border-rose-200 px-3 py-2 focus-visible:ring-2 focus-visible:ring-rose-400"
                />
                {errors.nombre && <p id="err-nombre" className="mt-1 text-sm text-rose-600">{errors.nombre}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink-900">Email</label>
                <input
                  id="email" name="email" type="email" autoComplete="email"
                  value={form.email} onChange={onChange}
                  aria-describedby={errors.email ? 'err-email' : undefined}
                  aria-invalid={Boolean(errors.email)}
                  className="mt-1 w-full rounded-md border border-rose-200 px-3 py-2 focus-visible:ring-2 focus-visible:ring-rose-400"
                />
                {errors.email && <p id="err-email" className="mt-1 text-sm text-rose-600">{errors.email}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-ink-900">Teléfono</label>
                <input
                  id="telefono" name="telefono" type="tel" autoComplete="tel"
                  value={form.telefono} onChange={onChange}
                  aria-describedby={errors.telefono ? 'err-telefono' : undefined}
                  aria-invalid={Boolean(errors.telefono)}
                  className="mt-1 w-full rounded-md border border-rose-200 px-3 py-2 focus-visible:ring-2 focus-visible:ring-rose-400"
                />
                {errors.telefono && <p id="err-telefono" className="mt-1 text-sm text-rose-600">{errors.telefono}</p>}
              </div>
              <div>
                <label htmlFor="tipo" className="block text-sm font-medium text-ink-900">Tipo de consulta</label>
                <select
                  id="tipo" name="tipo" value={form.tipo} onChange={onChange}
                  className="mt-1 w-full rounded-md border border-rose-200 px-3 py-2 focus-visible:ring-2 focus-visible:ring-rose-400"
                >
                  <option>Legal</option>
                  <option>Contable</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-ink-900">Mensaje</label>
              <textarea
                id="mensaje" name="mensaje" rows={5}
                value={form.mensaje} onChange={onChange}
                aria-describedby={errors.mensaje ? 'err-mensaje' : undefined}
                aria-invalid={Boolean(errors.mensaje)}
                className="mt-1 w-full rounded-md border border-rose-200 px-3 py-2 focus-visible:ring-2 focus-visible:ring-rose-400"
              />
              {errors.mensaje && <p id="err-mensaje" className="mt-1 text-sm text-rose-600">{errors.mensaje}</p>}
            </div>

            {/* Honeypot */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Dejar vacío</label>
              <input id="website" name="website" type="text" value={form.website} onChange={onChange} tabIndex={-1} autoComplete="off" />
            </div>

            <div className="flex items-center gap-3">
              <button type="submit" disabled={loading} className="btn btn-primary">
                {loading ? 'Enviando…' : 'Enviar consulta'}
              </button>
              <a href={WHATSAPP_URL} className="btn btn-secondary" onClick={() => trackEvent('cta_whatsapp_contact')}>WhatsApp</a>
            </div>
          </form>
        </div>

        <aside className="space-y-4">
          <div className="card p-5">
            <h3 className="font-semibold text-ink-900">Datos de contacto</h3>
            <ul className="mt-2 text-ink-700 text-sm space-y-1">
              <li><strong>Email:</strong> {BUSINESS.email}</li>
              <li><strong>Tel:</strong> {BUSINESS.telefono}</li>
              <li><strong>Horario:</strong> {BUSINESS.horario}</li>
              <li><strong>Zona:</strong> {BUSINESS.areaServida}</li>
            </ul>
          </div>
          <div className="card p-5">
            <p className="text-ink-700 text-sm">
              Atendemos en CABA. Nos encontramos por <strong>San Telmo</strong> y también brindamos atención en modalidad online.
            </p>
          </div>
        </aside>

        <Toast open={toast.open} type={toast.type} message={toast.message} onClose={() => setToast((t) => ({ ...t, open: false }))} />
      </div>
    </section>
  )
}
