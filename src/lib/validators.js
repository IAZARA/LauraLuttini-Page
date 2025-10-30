export function validateEmail(email) {
  if (!email) return false
  const re = /^(?:[a-zA-Z0-9_'^&/+-])+(?:\.(?:[a-zA-Z0-9_'^&/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/
  return re.test(String(email).trim())
}

// Accepts AR typical: digits, spaces, +, -, parentheses. Length sanity check 6-20.
export function validatePhone(phone) {
  if (!phone) return true
  const cleaned = String(phone).replace(/[^0-9+]/g, '')
  return cleaned.length >= 6 && cleaned.length <= 20
}

