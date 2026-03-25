/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dani: '#ee0181',
      },
      fontFamily: {
        inter: ["'Inter Tight'", 'sans-serif'],
        jakarta: ["'Plus Jakarta Sans'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
