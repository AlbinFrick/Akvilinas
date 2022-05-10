const colors = require('tailwindcss/colors')

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        primary: '#FFCCCF',
        primaryDark: '#E56B6F',
        accent: '#93B5C6',
        accentDark: '#335C67',
      },
      fontFamily: {
        roboto: "'Roboto', serif",
        allison: "'Allison', serif",
      },
      backgroundImage: {
        startSmall: "url('/images/startSmall.png')",
        start: "url('/images/start.png')",
        startOriginal: "url('/images/start.jpg')",
      },
      scale: {
        '200': '2',
        '300': '3'
      }
    }
  },

  plugins: [require('@tailwindcss/aspect-ratio')]
};

module.exports = config;