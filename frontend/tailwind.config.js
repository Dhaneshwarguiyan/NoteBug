/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors:{
      primary_dark: "#1e1e2f",
      slate_blue:"#5f6caf",
      peach_orange:"#ffb86c",
      light_grey:"#abb2bf",
      white:"#ffffff"
    },
    fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
    },
  },
  plugins: [],
}

