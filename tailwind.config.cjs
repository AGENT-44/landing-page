/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        white: 'var(--white)',
        gray: 'var(--gray)',
        black: 'var(--black)',
      },
      // fontFamily: {
      //   epilogue: ["Epilogue", 'sans-serif'],
      //   poppins: ["Poppins", 'sans-serif']
      // },
    },
  },

  plugins: [],
}
