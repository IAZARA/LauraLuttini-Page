import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './Modal.jsx'

const services = [
  {
    category: 'Legales',
    name: 'Asesoramiento legal integral',
    details:
      'Redacción y revisión de contratos, acuerdos de confidencialidad, reclamos y mediaciones. Acompañamiento en trámites y estrategias preventivas para evitar conflictos.',
    bullets: [
      'Contratos y acuerdos',
      'Familia y sucesiones',
      'Laboral y reclamos',
    ],
  },
  {
    category: 'Contables',
    name: 'Gestión contable e impuestos',
    details:
      'Organización contable para monotributistas y responsables inscriptos. Liquidación de impuestos, balances, sueldos y asesoramiento permanente para tu actividad.',
    bullets: [
      'Monotributo y RI',
      'Impuestos y balances',
      'Sueldos y sociedades',
    ],
  },
  {
    category: 'Peritaje',
    name: 'Peritaje contable',
    details:
      'Intervención como perito contable de oficio o de parte. Informes, dictámenes y asistencia en audiencias con claridad técnica y foco en la evidencia.',
    bullets: [
      'Pericias judiciales y de parte',
      'Dictámenes e informes periciales',
      'Soporte en audiencias',
    ],
  },
  {
    category: 'Consultoría',
    name: 'Consultoría y procesos',
    details:
      'Análisis de procesos, cumplimiento normativo y mejoras operativas. Implementación de buenas prácticas para ordenar tu negocio y reducir riesgos.',
    bullets: [
      'Planeamiento fiscal',
      'Procesos y cumplimiento',
      'Due diligence y auditoría',
    ],
  },
  {
    category: 'Empresas',
    name: 'Societario y startups',
    details:
      'Constitución de sociedades, acuerdos entre socios, libros y asambleas. Acompañamiento a startups desde la idea hasta la puesta en marcha.',
    bullets: [
      'Constitución de sociedades',
      'Acuerdos de socios',
      'Libros y asambleas',
    ],
  },
  {
    category: 'Impositiva',
    name: 'Regularización fiscal',
    details:
      'Planes de pago, moratorias y regularización de deudas. Altas, bajas y recategorizaciones para ponerte al día con AFIP/AGIP/ARBA.',
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
  const [active, setActive] = useState(null) // índice del servicio activo

  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl md:text-4xl font-bold">Servicios</h2>
          <p className="mt-3 text-ink-700">Soluciones legales, contables e impositivas, explicadas simple y enfocadas en resultados.</p>
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
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="text-sm font-medium text-rose-600 hover:underline focus-visible:ring-2 focus-visible:ring-rose-400 rounded"
                >
                  Ver más
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
        {/* Modal de detalle */}
        <Modal
          open={active !== null}
          onClose={() => setActive(null)}
          title={active !== null ? `${services[active].category} · ${services[active].name}` : ''}
        >
          {active !== null && (
            <div className="space-y-3">
              <p>{services[active].details}</p>
              <ul className="list-disc list-inside text-ink-700">
                {services[active].bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
              <p className="text-sm">¿Querés saber más? Podés escribirnos y te orientamos según tu caso.</p>
              <div className="pt-1">
                <a href="#contacto" className="btn btn-primary text-sm" onClick={() => setActive(null)}>
                  Consultar ahora
                </a>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  )
}
