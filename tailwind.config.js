/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lmf-dark': '#0f0f0f',
        'lmf-gold': '#C5A065',
        'lmf-cream': '#F5F1E6',
      },
    },
  },
  plugins: [],
}