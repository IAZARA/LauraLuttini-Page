import React, { useState } from 'react'

const faqs = [
  { q: '¿Cuáles son los plazos típicos?', a: 'Depende del tipo de trámite o proceso. Te orientamos desde el inicio con estimaciones realistas y te mantenemos al tanto de cada avance.' },
  { q: '¿Qué documentación necesito?', a: 'Al contactarnos, te pediremos lo esencial según tu caso (DNI, contratos, facturas, etc.). Si falta algo, te ayudamos a conseguirlo.' },
  { q: '¿Qué medios de pago aceptan?', a: 'Transferencia, tarjeta (según caso), y planes para pymes. Emitimos comprobante oficial.' },
  { q: '¿Atienden en modalidad online?', a: 'Sí, reuniones por videollamada y firma digital cuando aplica. También atendemos en CABA de forma presencial.' },
  { q: '¿La primera consulta tiene costo?', a: 'Ofrecemos una primera orientación breve sin costo por WhatsApp o email. Consultas en profundidad y seguimiento tienen honorarios accesibles.' },
  { q: '¿En cuánto tiempo responden?', a: 'Respondemos en el día hábil. Si es urgente, indicánoslo en el mensaje y priorizamos tu caso.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-2xl md:text-4xl font-bold">Preguntas frecuentes</h2>
        <div className="mt-6 divide-y divide-rose-100 border border-rose-100 rounded-xl">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            const panelId = `faq-panel-${i}`
            const btnId = `faq-button-${i}`
            return (
              <div key={i} className="p-4 md:p-5">
                <button
                  id={btnId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  className="w-full text-left flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-rose-400"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="font-medium text-ink-900">{item.q}</span>
                  <span
                    aria-hidden="true"
                    className={`text-rose-600 inline-block transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} mt-2`}
                >
                  <div className="overflow-hidden text-ink-700">{item.a}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
