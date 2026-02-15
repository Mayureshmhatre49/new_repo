/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#137fec",
        "primary-dark": "#0f66bd",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "neutral-surface": "#ffffff",
        "neutral-border": "#e5e7eb",
        "charcoal": "#2D3748",
        "bronze": "#A08C5B",
        "bronze-light": "#E8E2D2",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "sans": ["Inter", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "full": "9999px",
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(19, 127, 236, 0.05), 0 4px 16px -4px rgba(0, 0, 0, 0.02)',
        'card': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
