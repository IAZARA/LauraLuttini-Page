import React from 'react'
import { WHATSAPP_URL } from '../lib/config.js'
import { trackEvent } from '../lib/analytics.js'

function IconWhatsApp({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.52 3.48A11.93 11.93 0 0 0 12.06 0C5.44.02.1 5.36.12 11.98c0 2.11.55 4.18 1.6 6.01L0 24l6.17-1.62a11.93 11.93 0 0 0 5.89 1.56h.01c6.62-.02 11.96-5.36 11.98-11.98a11.9 11.9 0 0 0-3.53-8.48Z" fill="#25D366"/>
      <path d="M12.06 21.3h-.01a9.3 9.3 0 0 1-4.75-1.3l-.34-.2-3.66.96.98-3.57-.22-.36a9.27 9.27 0 0 1-1.42-4.99C2.62 6.83 7.03 2.43 12.08 2.41c2.48 0 4.81.97 6.56 2.73a9.23 9.23 0 0 1 2.72 6.56c-.02 5.05-4.43 9.45-9.3 9.6Z" fill="#fff"/>
      <path d="M17.41 14.34c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.7-1.62-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.91-2.18-.24-.58-.49-.5-.66-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.47 1.06 2.9 1.21 3.1.15.2 2.08 3.18 5.03 4.46.7.3 1.25.48 1.68.62.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.97-1.37.24-.68.24-1.27.17-1.37-.07-.1-.26-.17-.55-.32Z" fill="#25D366"/>
    </svg>
  )
}

export default function CTAWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      onClick={() => trackEvent('whatsapp_floating_button')}
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-white border border-rose-200 shadow-pastel px-4 py-2 hover:-translate-y-0.5 transition-transform focus-visible:ring-2 focus-visible:ring-rose-400 float-anim"
      aria-label="Abrir WhatsApp"
    >
      <IconWhatsApp className="w-5 h-5" />
      <span className="hidden sm:inline text-sm font-medium text-ink-900">WhatsApp</span>
    </a>
  )
}
