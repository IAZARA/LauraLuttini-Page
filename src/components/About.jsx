import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const images = [
    { src: '/LAU2.jpeg', alt: 'Laura Luttini' },
  ]
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  // Auto-advance cada 4s, pausa en hover/focus
  useEffect(() => {
    if (images.length < 2) return // sin carrusel si hay una sola imagen
    const id = setInterval(() => {
      if (!isHovered) setIndex((i) => (i + 1) % images.length)
    }, 4000)
    return () => clearInterval(id)
  }, [isHovered])

  return (
    <section id="sobre-mi" className="py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-display text-2xl md:text-4xl font-bold">Sobre Laura</h2>
          <p className="mt-4 text-ink-700">
            Abogada y Contadora Pública, con más de 10 años de experiencia asesorando a personas y pymes en
            temas legales y contables. Enfocada en brindar un servicio claro, empático y orientado a resultados. También
            se especializa en peritaje contable.
          </p>
          <ul className="mt-4 list-disc list-inside text-ink-700">
            <li>Matrículas: CPACF | CPCECABA</li>
            <li>Zona: San Telmo (CABA)</li>
            <li>Modalidad: presencial y online</li>
          </ul>

          <div className="mt-6">
            <p className="text-sm text-ink-600 font-medium">Acreditaciones</p>
            <div className="mt-2 flex items-center gap-4">
              <img
                src="/escudo-azul-web.png"
                alt="Colegio Público de Abogados de la Capital Federal"
                className="h-10 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/Logo-Esc-MPF_color.png"
                alt="Ministerio Público Fiscal"
                className="h-10 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/logo-consejo.png"
                alt="Consejo Profesional de Ciencias Económicas de la CABA (CPCECABA)"
                className="h-10 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
        <motion.div
          className=""
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Carrusel de dos fotos (full-bleed dentro de la columna) */}
          <div className="relative w-full max-w-full mx-auto">
            {/* Contenedor cuadrado para ver la imagen completa */}
            <div
              className="relative w-full pt-[66%]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onFocus={() => setIsHovered(true)}
              onBlur={() => setIsHovered(false)}
            >
              <motion.img
                key={images[index].src}
                src={images[index].src}
                alt={images[index].alt}
                className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0.8, scale: 1.01 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </div>

            {/* Indicadores (solo si hay más de una imagen) */}
            {images.length > 1 && (
              <div className="mt-3 flex items-center justify-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Ver imagen ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      i === index ? 'bg-rose-400' : 'bg-rose-100 hover:bg-rose-200'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
