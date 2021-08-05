module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-1": "-1"
      },
      minWidth: {
        500: "500px",
      },
      fontFamily: {
        ArimaMadurai: "'Arima Madurai', cursive"
      },
      lineHeight: {
        screen: "100vh"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
