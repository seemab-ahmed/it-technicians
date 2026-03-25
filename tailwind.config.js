/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./JavaScript/**/*.js"],
  theme: {
    extend: {
      colors: {
        dani: "#ee0181",
      },
      fontFamily: {
        inter: ["'Inter Tight'", "sans-serif"],
        jakarta: ["'Plus Jakarta Sans'", "sans-serif"]
      },
    },
  },
  plugins: [],
};
