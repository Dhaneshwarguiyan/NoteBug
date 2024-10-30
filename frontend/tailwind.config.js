/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    colors:{
      primary_dark: "#1e1e2f",
      slate_blue:"#5f6caf",
      peach_orange:"#ffb86c",
      light_grey:"#dbd9d9",
      extra_light_grey:"#555763",
      white:"#ffffff"
    },
    fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
    },
  },
  plugins: [],
}

