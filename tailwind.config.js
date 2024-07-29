/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: "Gilroy",
      },
      colors: {
        offerftbg:"#f1f1f6",
        customDark: "#02060C",
        footer: 'rgba(255, 255, 255, 0.6)',
        f1: "#F0F0F5",
        brand:"rgba(2, 6, 12, 0.75)",
      },
    },
  },
  plugins: [],
};
