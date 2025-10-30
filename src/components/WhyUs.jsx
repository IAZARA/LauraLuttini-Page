import React from 'react'
import { motion } from 'framer-motion'

const pillars = [
  { title: 'Trato personalizado', desc: 'Acompañamiento cercano y lenguaje claro en cada etapa.' },
  { title: 'Respuesta ágil', desc: 'Priorizamos tu tiempo con tiempos de respuesta cortos.' },
  { title: 'Equipo multidisciplinario', desc: 'Visión integral legal y contable para mejores decisiones.' },
  { title: 'Honorarios claros', desc: 'Transparencia desde el inicio, sin sorpresas.' },
]

function IconCheck({ className = 'w-6 h-6 text-rose-600' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function WhyUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl md:text-4xl font-bold">Por qué elegirnos</h2>
          <p className="mt-3 text-ink-700">Cuatro pilares que nos definen y guían nuestro trabajo.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              className="card card-hover p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="flex items-start gap-3">
                <IconCheck />
                <div>
                  <h3 className="font-semibold text-lg text-ink-900">{p.title}</h3>
                  <p className="mt-1 text-ink-700">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

