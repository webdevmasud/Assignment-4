/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'sans']
      },
      screens:{
        ml: '800px'
      }
    },
  },
  plugins: [],
}

