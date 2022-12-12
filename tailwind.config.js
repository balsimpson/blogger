// const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./content/*.md",
    "./pages/*.vue",
    "./layouts/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      stone: colors.stone,
      teal: colors.teal,
      amber: colors.amber,
    },
    extend: {
      fontFamily: {
        arvo: ["Arvo", "serif"],
        lora: ["Lora", "serif"],
       },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('./assets/js/components')
  ],
}