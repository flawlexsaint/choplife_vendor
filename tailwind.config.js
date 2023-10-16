/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      primary: "#5C7E64",
      secondary: "#2D2D2D66",
    },
    fontFamily: {
      commissioner: ["Commissioner", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
