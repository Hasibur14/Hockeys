/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage:{
          hero: "url('./images/banne-1.png')",
        }
      },
    },
    plugins: [],
  }