/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        NavShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
      },
      colors: {
        yellow: "#FFCE07",
        gray: "#C4C4C4",
      },
    },
  },
  plugins: [],
};
