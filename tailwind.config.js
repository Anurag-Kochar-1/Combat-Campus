/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#22C55E",
        dark: "#0F172A",
        mid: "#ABB8C9",
        light: "#FAFAFA"
      },

      fontFamily: {
        montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
        open_sans: ['var(--font-open_sans)', ...fontFamily.sans],
      },
      cursor: {
        default: 'url(./public/images/cursors/crossHair1.png), pointer' 
      }
    },
  },
  plugins: [],
}

