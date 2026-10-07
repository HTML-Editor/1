/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#0B1F3A",
        accent: "#F4B400",
        orange: "#F97316",
        light: "#F5F7FA",
        text: "#111827",
        muted: "#6B7280",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      keyframes: {
        zoomIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },

      animation: {
        zoomIn: "zoomIn 0.8s ease-out forwards",
        
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};