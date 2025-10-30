// Simple tracker mock. Replace with GA4 or Plausible as needed.
// Example GA4 (commented):
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments)}
// gtag('js', new Date());
// gtag('config', 'G-XXXXXXX');

export function trackEvent(name, params = {}) {
  // Replace with your analytics API
  // GA4 example: gtag('event', name, params);
  // Plausible example: window.plausible?.(name, { props: params });
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log('[analytics]', name, params)
  }
}

