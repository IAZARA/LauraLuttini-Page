import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    category: 'Legales',
    name: 'Asesoramiento legal integral',
    bullets: [
      'Contratos y acuerdos',
      'Familia y sucesiones',
      'Laboral y reclamos',
    ],
  },
  {
    category: 'Contables',
    name: 'Gestión contable e impuestos',
    bullets: [
      'Monotributo y RI',
      'Impuestos y balances',
      'Sueldos y sociedades',
    ],
  },
  {
    category: 'Peritaje',
    name: 'Peritaje contable',
    bullets: [
      'Pericias judiciales y de parte',
      'Dictámenes e informes periciales',
      'Inscripta como perito contable',
    ],
  },
  {
    category: 'Consultoría',
    name: 'Consultoría y procesos',
    bullets: [
      'Planeamiento fiscal',
      'Procesos y cumplimiento',
      'Due diligence y auditoría',
    ],
  },
  {
    category: 'Empresas',
    name: 'Societario y startups',
    bullets: [
      'Constitución de sociedades',
      'Acuerdos de socios',
      'Libros y asambleas',
    ],
  },
  {
    category: 'Impositiva',
    name: 'Regularización fiscal',
    bullets: [
      'Planes de pago',
      'Moratorias y regímenes',
      'Altas, bajas y recategorizaciones',
    ],
  },
]

function IconCard({ className = 'w-6 h-6 text-rose-600' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

export default function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl md:text-4xl font-bold">Servicios</h2>
          <p className="mt-3 text-ink-700">Soluciones legales, contables y de consultoría, explicadas simple y enfocadas en resultados.</p>
        </div>
        <motion.div
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((s, i) => (
            <motion.article
              key={i}
              variants={item}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="card card-hover p-5 border border-rose-100"
              aria-label={`${s.category}: ${s.name}`}
            >
              <div className="flex items-start gap-3">
                <IconCard />
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-400">{s.category}</p>
                  <h3 className="mt-1 font-semibold text-lg text-ink-900">{s.name}</h3>
                </div>
              </div>
              <ul className="mt-3 list-disc list-inside text-ink-700 text-sm space-y-1">
                {s.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
              <div className="mt-4">
                <a href="#contacto" className="text-sm font-medium text-rose-600 hover:underline">Ver más</a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
