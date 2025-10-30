import React, { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-5 z-40 rounded-full bg-rose-300 text-ink-900 shadow-pastel w-10 h-10 grid place-items-center hover:-translate-y-0.5 transition-transform focus-visible:ring-2 focus-visible:ring-rose-400"
      aria-label="Volver arriba"
    >
      ↑
    </button>
  )
}

