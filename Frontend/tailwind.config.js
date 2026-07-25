// tailwind.config.js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-light": "#fbfaff",
        "bg-dark": "#0a0716",
        "surface-light": "#f1ecfb",
        "surface-dark": "#150f2b",
        "text-light": "#1c1730",
        "text-dark": "#ede9fe",
        primary: {
          light: "#a78bfa",  // violeta medio
          DEFAULT: "#7c3aed", // violeta profundo
          dark: "#5b21b6",   // violeta oscuro
        },
        secondary: "#4338ca", // índigo profundo
        accent: "#2563eb",    // azul intenso
      },
      keyframes: {
        'spin-slow': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } }
      },
      animation: {
        'spin-slow': 'spin-slow 4s linear infinite'
      }
    },
  },
  plugins: [],
};
