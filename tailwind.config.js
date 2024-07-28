/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy"],
      },
      colors: {
        customDark: "#02060C",
        footer: 'rgba(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
};
