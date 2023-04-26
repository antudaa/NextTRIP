/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    theme: {
      screens: {
        'xs': '320px',
      },
    },
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}