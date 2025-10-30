import { useEffect } from 'react'

export default function Seo({ title, description, image = '/og.jpg', url = '/' }) {
  useEffect(() => {
    if (title) document.title = title
    const setMeta = (name, content, attr = 'name') => {
      if (!content) return
      let el = document.querySelector(`meta[${attr}='${name}']`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    setMeta('description', description)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:image', image, 'property')
    setMeta('og:url', url, 'property')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', image)
  }, [title, description, image, url])
  return null
}

