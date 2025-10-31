import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './Modal.jsx'

// Nuevo set de servicios con imágenes y contenido provisto
const services = [
  {
    title: 'CONSTITUCIÓN DE SOCIEDAD Y START UP SOCIETARIO',
    img: '/imagen_1.png',
    teaser:
      'Ponga en marcha tu Sociedad o emprendimiento desde el momento inicial; Encuadre societario más conveniente, inscripciones en IGJ, AFIP, Rentas, permisos para poder facturar, habilitación de controlador fiscal, etc.',
    modalIntro:
      'Ofrecemos asesoramiento para la elección y constitución de la forma societaria más conveniente para tu proyecto, con un análisis profesional de las particularidades de tu negocio.',
    bullets: [
      'Determinación del encuadre societario apropiado',
      'Constitución de sociedades y redacción del contrato',
      'Cambios estatutarios',
      'Dictámenes de precalificación',
      'Reorganizaciones: Transformación, Fusión y Escisión',
      'Aumento y/o reducción del capital social',
      'Estados Contables auditados/certificados y legalizaciones',
      'Registraciones contables y plan de cuentas',
      'Presentación de balances y trámites varios',
    ],
  },
  {
    title: 'ASESORAMIENTO IMPOSITIVO Y PREVISIONAL',
    img: '/Imagen_2.png',
    teaser:
      'El asesoramiento impositivo y previsional constituye hoy una de las bases fundamentales en el desarrollo de cualquier emprendimiento.',
    modalIntro: 'Para empleados en relación de dependencia:',
    bullets: [
      'Confección del Formulario 572 (SIRADIG)',
      'Asesoramiento sobre deducciones del Impuesto a las Ganancias',
      'DDJJ de Ganancias y Bienes Personales (informativas o determinativas)',
      'Certificación de ingresos para trámites bancarios',
      'Certificación de origen de fondos',
      'Certificación de fondos lícitos (UIF)',
    ],
  },
  {
    title: 'RESPONSABLES INSCRIPTOS',
    img: '/imagen3.jpg',
    teaser:
      'Gestión integral para comercios y profesionales: altas, liquidaciones mensuales y acompañamiento permanente para que te enfoques en tu negocio.',
    modalIntro:
      'Somos especialistas en comerciantes y autónomos. Nos encargamos de tus impuestos de punta a punta para que puedas dedicarte a crecer.',
    bullets: [
      'Inscripciones impositivas',
      'Liquidaciones mensuales de IVA, Ingresos Brutos, Régimen de Información de Compras y Ventas y Libro IVA Digital',
      'Liquidación anual de Ganancias y Bienes Personales',
      'Sueldos, cargas sociales y aportes sindicales',
      'Tasas municipales',
      'Asesoramiento ante inspecciones',
      'Otras liquidaciones impositivas y previsionales',
      'Gestión de comprobantes electrónicos',
      'Moratorias y planes de pago',
    ],
  },
  {
    title: 'MONOTRIBUTISTAS',
    img: '/imagen4.jpg',
    teaser:
      'Acompañamiento simple para monotributistas: altas, recategorizaciones y obligaciones al día con foco en claridad y previsibilidad.',
    modalIntro:
      'Nos aseguramos de que mantengas al día tus obligaciones impositivas y te encuentres correctamente categorizado.',
    bullets: [
      'Inscripciones impositivas',
      'Liquidaciones mensual y anual de Ingresos Brutos',
      'Recategorizaciones semestrales de Monotributo',
      'Sueldos y cargas sociales, aportes sindicales',
      'Tasas municipales',
      'Asesoramiento ante inspecciones',
      'Otras liquidaciones impositivas y previsionales',
      'Gestión de comprobantes electrónicos',
      'Moratorias y planes de pago',
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-4xl font-bold">Nuestros Servicios</h2>

        <motion.div
          className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 items-stretch"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((s, i) => (
            <motion.article key={i} variants={item} className="flex flex-col h-full">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-44 md:h-48 lg:h-52 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-extrabold tracking-tight text-ink-900">
                {s.title}
              </h3>
              <p className="mt-3 text-ink-700 text-sm leading-relaxed">
                {s.teaser}
              </p>
              <div className="mt-auto pt-3">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="btn btn-secondary text-sm"
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
          title={active !== null ? services[active].title : ''}
        >
          {active !== null && (
            <div className="space-y-3">
              {services[active].modalIntro && <p>{services[active].modalIntro}</p>}
              <p className="font-medium">Principales servicios brindados:</p>
              <ul className="list-disc list-inside text-ink-700">
                {services[active].bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
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
