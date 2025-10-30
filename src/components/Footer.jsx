import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-10 border-t border-rose-100">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-ink-700">
        <p>© {year} Estudio Jurídico-Contable Laura Luttini</p>
        <nav className="flex items-center gap-4">
          <a href="#" className="hover:underline">Términos</a>
          <a href="#" className="hover:underline">Privacidad</a>
          <a href="#" className="hover:underline">Aviso legal</a>
        </nav>
      </div>
    </footer>
  )
}

