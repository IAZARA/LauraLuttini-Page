import React, { Suspense } from 'react'
import Header from './components/Header.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import WhyUs from './components/WhyUs.jsx'
import About from './components/About.jsx'
const Testimonials = React.lazy(() => import('./components/Testimonials.jsx'))
const FAQ = React.lazy(() => import('./components/FAQ.jsx'))
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CTAWhatsApp from './components/CTAWhatsApp.jsx'
import BackToTop from './components/BackToTop.jsx'
import Seo from './components/Seo.jsx'
import SchemaOrg from './components/SchemaOrg.jsx'
import { BUSINESS } from './lib/config.js'

export default function App() {
  return (
    <>
      <Seo
        title="Estudio Jurídico-Contable Laura Luttini"
        description="Asesoramiento claro y cercano para personas y pymes en CABA."
        image="/og.jpg"
        url="/"
      />
      <SchemaOrg business={BUSINESS} />
      <ScrollProgress />
      <Header />
      <main id="contenido" className="min-h-screen">
        <Hero />
        <Services />
        <WhyUs />
        <About />
        <Suspense fallback={<div className="container mx-auto px-4 py-16">Cargando…</div>}>
          <Testimonials />
          <FAQ />
        </Suspense>
        <Contact />
      </main>
      <Footer />
      <CTAWhatsApp />
      <BackToTop />
    </>
  )
}
