/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['"Quicksand"', "sans-serif"],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'WorkSans':['Work Sans', 'sans-serif']
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
