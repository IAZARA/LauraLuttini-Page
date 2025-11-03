import React, { useEffect, useState } from 'react'
import { trackEvent } from '../lib/analytics.js'
import { WHATSAPP_URL } from '../lib/config.js'

function IconWhatsApp({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.52 3.48A11.93 11.93 0 0 0 12.06 0C5.44.02.1 5.36.12 11.98c0 2.11.55 4.18 1.6 6.01L0 24l6.17-1.62a11.93 11.93 0 0 0 5.89 1.56h.01c6.62-.02 11.96-5.36 11.98-11.98a11.9 11.9 0 0 0-3.53-8.48ZM12.06 21.3h-.01a9.3 9.3 0 0 1-4.75-1.3l-.34-.2-3.66.96.98-3.57-.22-.36a9.27 9.27 0 0 1-1.42-4.99C2.62 6.83 7.03 2.43 12.08 2.41c2.48 0 4.81.97 6.56 2.73a9.23 9.23 0 0 1 2.72 6.56c-.02 5.05-4.43 9.45-9.3 9.6Zm5.35-6.96c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.15-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.7-1.62-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.91-2.18-.24-.58-.49-.5-.66-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.47 1.06 2.9 1.21 3.1.15.2 2.08 3.18 5.03 4.46.7.3 1.25.48 1.68.62.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.97-1.37.24-.68.24-1.27.17-1.37-.07-.1-.26-.17-.55-.32Z" fill="currentColor"/>
    </svg>
  )
}

function IconInstagram({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm6-2.2a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
    </svg>
  )
}

function IconMail({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.75 5.5h16.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H3.75c-.69 0-1.25-.56-1.25-1.25V6.75c0-.69.56-1.25 1.25-1.25Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll spy to highlight current section
  useEffect(() => {
    const ids = ['inicio', 'servicios', 'sobre-mi', 'faq', 'contacto']
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-55% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const navItem = (href, label) => (
    <a
      key={href}
      href={href}
      aria-current={active === href.replace('#','') ? 'page' : undefined}
      className={`px-3 py-2 rounded-md text-sm font-medium focus-visible:ring-2 focus-visible:ring-rose-400 ${active === href.replace('#','') ? 'text-ink-900 font-semibold' : 'text-ink-700 hover:text-ink-900'}`}
    >
      {label}
    </a>
  )

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 shadow' : 'bg-white/50'}`}
      aria-label="Encabezado principal"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-2 font-display text-lg md:text-xl font-semibold text-ink-900">
            <img src="/iconoL-l.png" alt="" width="36" height="36" className="w-9 h-9 rounded-md object-contain" loading="eager" decoding="async" />
            <span className="inline-flex flex-col items-center leading-tight">
              <span
                className="block"
                style={{ fontFamily: "Garamond, Georgia, 'Times New Roman', serif" }}
              >
                Laura Luttini
              </span>
              <span
                className="block text-[11px] md:text-xs text-ink-700"
                style={{ fontFamily: "Garamond, Georgia, 'Times New Roman', serif" }}
              >
                & asociados
              </span>
            </span>
          </a>
          <nav className="hidden md:flex items-center" aria-label="Navegación principal">
            {navItem('#inicio', 'Inicio')}
            {navItem('#servicios', 'Servicios')}
            {navItem('#sobre-mi', 'Sobre mí')}
            {navItem('#faq', 'FAQ')}
            {navItem('#contacto', 'Contacto')}
          </nav>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <a
              href="https://www.instagram.com/estudioluttini/"
              onClick={() => trackEvent('instagram_icon_header')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-rose-300 text-ink-900 hover:bg-rose-400 focus-visible:ring-2 focus-visible:ring-rose-400"
              aria-label="Ver Instagram @estudioluttini"
            >
              <IconInstagram />
            </a>
            <a
              href="#contacto"
              onClick={() => trackEvent('email_icon_header')}
              className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-rose-300 text-ink-900 hover:bg-rose-400 focus-visible:ring-2 focus-visible:ring-rose-400"
              aria-label="Ir al formulario de contacto"
            >
              <IconMail />
            </a>
            <a
              href={WHATSAPP_URL}
              onClick={() => trackEvent('whatsapp_icon_header')}
              className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-rose-300 text-ink-900 hover:bg-rose-400 focus-visible:ring-2 focus-visible:ring-rose-400"
              aria-label="Escribir por WhatsApp"
            >
              <IconWhatsApp />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
