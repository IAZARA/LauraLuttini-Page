import React from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { trackEvent } from '../lib/analytics.js'
import { WHATSAPP_URL } from '../lib/config.js'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, prefersReducedMotion ? 0 : 40])
  // Opacidad del overlay: que no tape la imagen
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.45, prefersReducedMotion ? 0.35 : 0.2])

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Capa de video de fondo (reemplaza la imagen estática) */}
      <motion.video
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y }}
        src="/Video_Animado_Sin_Audio_En_Bucle.mp4"
        poster="/encabezado.png"
        playsInline
        autoPlay={!prefersReducedMotion}
        muted
        loop={!prefersReducedMotion}
        preload="metadata"
      />
      {/* Capa de gradiente por encima para mejorar legibilidad del texto */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-rose-grad"
        style={{ opacity: overlayOpacity }}
      />
      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-28">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-ink-900 tracking-tight">
            Laura Luttini
          </h1>
          <p className="mt-2 font-display text-xl md:text-2xl font-semibold text-ink-900">
            Estudio Juridico Contable e Impositivo
          </p>
          <p className="mt-4 text-lg md:text-xl text-ink-700">
            Asesoramiento claro y cercano para personas y pymes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contacto"
              className="btn btn-primary text-base"
              onClick={() => trackEvent('cta_agendar_hero')}
            >
              Agendar consulta
            </a>
            <a
              href={WHATSAPP_URL}
              className="btn btn-secondary text-base"
              onClick={() => trackEvent('cta_whatsapp_hero')}
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
