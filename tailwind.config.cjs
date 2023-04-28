/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {

  },
  theme: {
    theme: {
      screens: {
        'xs': '320px',

        'lg': '1074px',

        'xl': '1420px'
      },
    },
  },
  plugins: [require('daisyui')],
}