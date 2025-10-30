/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        rose: {
          50: 'var(--rose-50)',
          100: 'var(--rose-100)',
          200: 'var(--rose-200)',
          300: 'var(--rose-300)',
          400: 'var(--rose-400)',
          600: 'var(--rose-600)'
        },
        ink: {
          400: 'var(--ink-400)',
          700: 'var(--ink-700)',
          900: 'var(--ink-900)'
        },
        bg: 'var(--bg)',
        card: 'var(--card)'
      },
      boxShadow: {
        pastel: 'var(--shadow)'
      },
      borderRadius: {
        xl: 'var(--radius-xl)',
        md: 'var(--radius-md)'
      },
      backgroundImage: {
        'rose-grad': 'linear-gradient(135deg, var(--rose-200), var(--rose-400))'
      }
    }
  },
  plugins: [],
}

