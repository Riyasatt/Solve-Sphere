/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        accent : "#3A4F39",
        accent2:"#068300"
      },
      backgroundImage:{
        "hero-image" : "url('./src/assets/hero-image.jpg')"
      }
    },
  },
  plugins: [],
}