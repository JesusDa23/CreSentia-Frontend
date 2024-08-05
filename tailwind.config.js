/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'pink': '#D1335D',
        'pink-hover': '#E25B6D',
        'blue':'#347e72',
        'blue-hover': '#3A9C8F',
        'green': '#163D32',
        'green-hover': '#1E523E',
        'yellow': '#F7B538',
        'yellow-hover': '#FCC460 ',
        'green-family': '#94c45e',
        'green-family-hover': '#D1E2A7 '
        },

      fontFamily: {
        'Ponpis': ['Poppins-Regular']
      }


    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

