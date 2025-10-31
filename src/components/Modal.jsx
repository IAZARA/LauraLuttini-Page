import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ open, title, onClose, children }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const prev = document.activeElement
    document.body.style.overflow = 'hidden'
    ref.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      prev?.focus?.()
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-hidden="true"
        >
          {/* Backdrop rosado suave con blur */}
          <div className="absolute inset-0 bg-rose-100/60 backdrop-blur-sm" />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="absolute inset-0 grid place-items-center px-4"
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ type: 'spring', stiffness: 240, damping: 18 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div ref={ref} tabIndex={-1} className="w-full max-w-lg bg-white rounded-xl shadow-pastel border border-rose-100 p-5">
              <div className="flex items-start justify-between gap-4">
                <h3 id="modal-title" className="text-lg font-semibold text-ink-900">{title}</h3>
                <button
                  onClick={onClose}
                  aria-label="Cerrar"
                  className="rounded-md px-2 py-1 text-ink-900 hover:bg-rose-50 focus-visible:ring-2 focus-visible:ring-rose-400"
                >
                  ×
                </button>
              </div>
              <div className="mt-3 text-ink-700 text-sm">
                {children}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

