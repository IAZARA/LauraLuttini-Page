import React, { useEffect } from 'react'

export default function Toast({ open, type = 'success', message, onClose, duration = 4000 }) {
  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => onClose?.(), duration)
    return () => clearTimeout(t)
  }, [open, duration, onClose])

  if (!open) return null

  const bg = type === 'success' ? 'bg-rose-300 text-ink-900' : 'bg-rose-100 text-ink-900 border border-rose-300'

  return (
    <div
      role={type === 'error' ? 'alert' : 'status'}
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-50 rounded-md px-4 py-3 shadow-pastel ${bg}`}
    >
      <div className="flex items-center gap-3">
        <span className="text-sm">{message}</span>
        <button onClick={onClose} className="text-sm underline focus-visible:ring-2 focus-visible:ring-rose-400">Cerrar</button>
      </div>
    </div>
  )
}

