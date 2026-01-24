/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-light": "#ffffff",
        "bg-dark": "#161f29ff",
        "surface-light": "#2b3035ff",
        "surface-dark": "#1b263b",
        "text-light": "#212529",
        "text-dark": "#e0e1dd",
        primary: {
          light: "#A0522D",  // marrón claro
          DEFAULT: "#8B4513", // marrón estándar
          dark: "#5C2A0C",   // marrón oscuro
        },
      },
    },
  },
  plugins: [],
};
