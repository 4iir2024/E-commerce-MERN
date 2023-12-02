/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E6655",
      },
    },
  },
  plugins: [],

  corePlugins: {
    preflight: false,
  },
};
