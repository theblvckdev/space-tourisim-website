/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B0D17",
        lightBlue: "#D0D6F9",
      },
    },
    fontFamily: {
      bellefair: ["Bellefair", "sans-serif"],
      barlow: ["Barlow Condensed", "sans-serif"],
    },
  },
  plugins: [],
};
