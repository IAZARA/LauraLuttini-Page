// Centraliza configuración del submit del formulario.
// Definí VITE_FORMSPREE_ENDPOINT en tus variables de entorno (build-time)
// Ejemplo: VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/XXXXXXX

export const FORM_ENDPOINT = import.meta.env?.VITE_FORMSPREE_ENDPOINT || ''

