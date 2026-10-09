/** @type {import('tailwindcss').Config} */

export default {
  // Tailwind only generates CSS for classes it finds in these files.
  // If you create files outside src/ or index.html, add their path here.
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  // Dark mode is switched by adding a 'dark' class (not currently used by the site).
  darkMode: "class",

  theme: {
    extend: {
      // BRAND COLOURS - usable as class names, e.g. bg-primary, text-accent.
      // Change a hex value here to recolour everything that uses that name.
      // (Many pages also hard-code colours like bg-[#0B1F3A]; search for the hex to change those.)
      colors: {
        primary: "#0B1F3A",
        accent: "#F4B400",
        orange: "#F97316",
        light: "#F5F7FA",
        text: "#111827",
        muted: "#6B7280",
      },

      // Font family helper (class 'font-poppins'). The font itself is loaded in src/index.css.
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      // CUSTOM ANIMATION 'zoomIn' (fade + grow). Used by headings via hover:animate-zoomIn.
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

      // Registers the keyframes above as a class: animate-zoomIn (0.8s).
      animation: {
        zoomIn: "zoomIn 0.8s ease-out forwards",
        
      },
    },
  },

  // tailwindcss-animate adds extra ready-made animation classes.
  plugins: [require("tailwindcss-animate")],
};