/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  darkMode: "class",
  theme: {
    extend: {
      screens: {
        mb: "275px",
      },
      fontFamily: {
        roboto: ["roboto"],
      },
    },
  },
  plugins: [],
};
