/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0.75rem",
      },
      fontFamily: {
        vazir_regular: ["vazir-_egular"],
        vazir_medium: ["vazir_medium"],
        vazir_bold: ["vazir_bold"],
      },
      colors: {
        primary: "#2b75ff",
        secondary: "#f45050",
        gray_dark: "#757575",
        gray_light: "#CBCBCB",
      },
      boxShadow: {
        primary_shadow: "0 1px 7px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
