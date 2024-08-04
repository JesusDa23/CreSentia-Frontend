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
        'green-hover': '#1E523E'
        }

    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

