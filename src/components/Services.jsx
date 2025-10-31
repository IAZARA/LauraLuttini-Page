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
      'DDJJ de Ganancias y Bienes Personales (informativas o determinativas)'
    ],
  },
  {
    title: 'CERTIFICACIONES CONTABLES Y DECLARACIONES JURADAS',
    img: '/imagen_5.jpeg',
    teaser:
      'Certificaciones contables y legales para trámites bancarios, acreditación de fondos y cumplimiento regulatorio (UIF).',
    modalIntro: 'Certificación de Ingresos para trámites bancarios; Certificación Origen de Fondos; Declaración de ganancia; Declaración de Bienes Personales; Certificación de fondos lícitos (UIF), etc.',
    bullets: [
      'Certificación de ingresos para trámites bancarios',
      'Certificación de origen de fondos',
      'Certificación de fondos lícitos (UIF)'
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
      'Acompañamiento para monotributistas: altas, recategorizaciones y obligaciones al día con foco en claridad y previsibilidad.',
    modalIntro:
      'Te asesoramos para que mantengas al día tus obligaciones impositivas y te encuentres correctamente categorizado.',
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
  {
    title: 'DERECHO CIVIL Y PATRIMONIAL',
    img: '/imagen_7.png',
    teaser:
      'Acciones y defensas en juicios civiles y patrimoniales. Contratos, sucesiones y recuperación de activos con enfoque práctico.',
    body: [
      'Asesoramos e intervenimos en juicios civiles y patrimoniales, incluyendo daños y perjuicios, cobro de sumas de dinero, sucesiones, recuperación de activos e inmuebles, y conflictos entre herederos.',
      'También realizamos redacción y revisión de contratos, negociaciones, medidas cautelares y procesos urgentes, con una estrategia integral en los fueros civil, patrimonial y penal.'
    ],
  },
  {
    title: 'DERECHO EMPRESARIAL, COMERCIAL, LABORAL Y TRIBUTARIO',
    img: '/imagen_6bis.png',
    teaser:
      'Acompañamiento a empresas y profesionales: societario, comercial, laboral e impositivo, con enfoque preventivo y estratégico.',
    body: [
      'Brindamos asesoramiento integral a empresas y profesionales en materia comercial, societaria, laboral y tributaria.',
      'Intervenimos en conflictos judiciales y administrativos, defensas ante ARCA, fiscos provinciales y el Tribunal Fiscal de la Nación. Desarrollamos estrategias de planeamiento fiscal y contractual para optimizar la gestión empresarial y prevenir contingencias.'
    ],
  },
  {
    title: 'DERECHO PENAL ECONÓMICO Y COMPLIANCE',
    img: '/imagen_8.png',
    teaser:
      'Defensa y prevención en delitos económicos y financieros. Programas de compliance y PLA/FT a medida.',
    body: [
      'Actuamos en investigaciones y procesos penales vinculados a delitos económicos y financieros, tales como lavado de activos, evasión fiscal, administración fraudulenta, corrupción y delitos societarios.',
      'Brindamos asesoramiento preventivo y defensa técnica en todas las etapas del proceso penal.',
      'Desarrollamos e implementamos programas de compliance y prevención del lavado de activos (PLA/FT), adaptados a la normativa vigente y a las necesidades de cada organización. Nuestra intervención combina experiencia técnica contable, jurídica y forense, garantizando un enfoque integral y estratégico.'
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
              {Array.isArray(services[active].body) && services[active].body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {Array.isArray(services[active].bullets) && services[active].bullets.length > 0 && (
                <>
                  <p className="font-medium">Principales servicios brindados:</p>
                  <ul className="list-disc list-inside text-ink-700">
                    {services[active].bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </>
              )}
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
