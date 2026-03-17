/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'cursive'],
      },
      colors: {
        gold: {
          400: '#d4a843',
          500: '#c49a2e',
        }
      }
    },
  },
  plugins: [],
}

