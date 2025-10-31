import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-10 border-t border-rose-100">
      <div className="container mx-auto px-4 py-8 grid grid-cols-[1fr_auto_1fr] items-center text-sm text-ink-700">
        <a
          href="https://wa.me/5411409973159"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp a Ivan Zarate"
          className="hover:underline justify-self-start"
        >
          👍 Sitio realizado por Ivan Zarate
        </a>
        <p className="justify-self-center">© {year} Estudio Jurídico-Contable Laura Luttini</p>
        {/* right column intentionally left empty for centering */}
      </div>
    </footer>
  )
}
