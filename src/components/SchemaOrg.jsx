import { useEffect } from 'react'

export default function SchemaOrg({ business }) {
  useEffect(() => {
    const scripts = []
    const addScript = (data) => {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.text = JSON.stringify(data)
      document.head.appendChild(s)
      scripts.push(s)
    }

    if (business) {
      const base = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: business.nombre,
        url: business.url,
        image: business.image,
        email: business.email,
        telephone: business.telefono,
        areaServed: business.areaServida,
        address: business.address,
        openingHours: business.horario,
        sameAs: business.sameAs,
      }
      addScript(base)

      addScript({
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        name: business.nombre,
        areaServed: business.areaServida,
        url: business.url,
        telephone: business.telefono,
      })

      addScript({
        '@context': 'https://schema.org',
        '@type': 'AccountingService',
        name: business.nombre,
        areaServed: business.areaServida,
        url: business.url,
        telephone: business.telefono,
      })
    }

    return () => scripts.forEach((s) => s.remove())
  }, [business])
  return null
}

