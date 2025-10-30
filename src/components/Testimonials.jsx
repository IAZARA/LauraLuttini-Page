import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Excelente atención y claridad. Resolví mi consulta laboral rápidamente.',
    author: 'Marina P.',
  },
  {
    quote: 'Nos ordenaron la contabilidad y los impuestos, ¡un antes y un después!',
    author: 'Estudio Creativo CABA',
  },
  {
    quote: 'Muy profesionales y humanos. Seguimiento constante del caso.',
    author: 'Diego R.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-4xl font-bold">Testimonios</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <p className="text-ink-900">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-ink-700">— {t.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
