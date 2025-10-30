// Mock submit function. Replace easily with Formspree/Netlify/EmailJS.

// How to switch:
// - Formspree: fetch('https://formspree.io/f/XXXX', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
// - Netlify: add data-netlify="true" and name to the <form>, then POST to '/' with encoded fields.
// - EmailJS: emailjs.send('service_id', 'template_id', values, 'public_key')

export async function sendForm(values) {
  // Simulate network latency and success
  await new Promise((res) => setTimeout(res, 700))

  // Throw to simulate error: uncomment next line
  // throw new Error('Mock error')

  return { ok: true }
}

