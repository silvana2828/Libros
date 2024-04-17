/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "azul-oscuro": "#2b3d4f",
        "azul-medio": "#354a5f",
        "gris-oscuro": "#5d6d7e",
        "gris-claro": "#bdc3c7",
        "gris-muerto": "#edf1f2",
      },
    },
  },
  plugins: [],
};

