const colors = require('tailwindcss/colors')

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        border: "#999797"
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
    }
  }
};

module.exports = config;