import React from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
// (Hero limpio, sin CTA)

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, prefersReducedMotion ? 0 : 40])
  // Opacidad del overlay: que no tape la imagen
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.45, prefersReducedMotion ? 0.35 : 0.2])
  const initialScale = prefersReducedMotion ? 1 : 1.05

  return (
    <section id="inicio" className="relative overflow-hidden h-[55vh] md:h-[65vh] lg:h-[70vh] min-h-[360px]">
      {/* Imagen de fondo (se reemplaza el video) */}
      <motion.img
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ y }}
        src="/legalconcep.webp"
        alt="Fondo del estudio"
        loading="eager"
        initial={{ scale: initialScale, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />
      {/* Capa blanca sutil para enfriar la paleta y mejorar legibilidad */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-white z-10"
        style={{ opacity: overlayOpacity }}
      />
      {/* Cartel superpuesto con transparencia para mantener el fondo visible */}
      <motion.img
        aria-hidden="true"
        src="/EstudioLauraLuttini2.jpeg"
        alt="Estudio Laura Luttini"
        className="absolute inset-0 m-auto pointer-events-none z-20"
        style={{
          maxWidth: 'min(90%, 900px)',
          width: '100%',
          height: 'auto'
        }}
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12, scale: prefersReducedMotion ? 1 : 1.06 }}
        animate={{ opacity: 0.9, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      />
      

      {/* Brillo diagonal sutil (una sola pasada) */}
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            overflow: 'hidden'
          }}
        >
          <motion.div
            className="absolute top-[-20%] h-[140%] w-[28%] mix-blend-screen"
            style={{
              background: 'linear-gradient(110deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%)',
              transform: 'rotate(18deg)'
            }}
            initial={{ left: '-25%', opacity: 0 }}
            animate={{ left: '125%', opacity: [0, 0.45, 0] }}
            transition={{ duration: 1.3, ease: 'easeInOut', delay: 1.0, opacity: { times: [0, 0.5, 1] } }}
          />
        </motion.div>
      )}
      {/* Se elimina el contenido sobre el cartel para un encabezado limpio */}
    </section>
  )
}
