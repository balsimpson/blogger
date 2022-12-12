const plugin = require('tailwindcss/plugin')
// const colors = require("tailwindcss/colors");
module.exports = plugin(({ addComponents, theme }) => {
  addComponents({
    '.txt-input': {
      display: "flex",
      padding: "0.75rem",
      paddingRight: "3rem",
      marginBottom: "1.25rem",
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: "400",
      alignItems: "center",
      width: "100%",
      borderRadius: "0.25rem",
      borderWidth: "2px",
      backgroundColor: theme('colors.stone[700]'),
      focusWithin: theme('colors.amber[500]')
    },
    '.btn-blue': {
      backgroundColor: theme('colors.amber[500]'),
      color: '#fff',
      '&:hover': {
        backgroundColor: '#2779bd'
      },
    },
    '.btn-red': {
      backgroundColor: '#e3342f',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#cc1f1a'
      },
    },
  })
})