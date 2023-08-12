/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,mdx}',
    './components/**/*.{js,ts,jsx,mdx}',
    './theme.config.tsx',
    './page-data.js'
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  darkMode: 'class'
}
