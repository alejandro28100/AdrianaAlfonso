module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ArimaMadurai: "'Arima Madurai', cursive"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
