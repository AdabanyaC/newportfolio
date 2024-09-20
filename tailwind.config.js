/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      acorn: ["acorn"],
    },
    extend: {
      colors: {
        "cream-light": "#FDF6E4",
        "pink-dark": "#F8B6C3",
        "wow-green": "#025A4E",
        "wow-gray": "#4C6763",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slide: "slide 30s linear infinite",
      },
    },
  },
  plugins: [],
};
