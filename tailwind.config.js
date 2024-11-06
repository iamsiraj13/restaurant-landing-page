/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1240px",
        "2xl": "1350px",
      },
      padding: "30px",
    },
    extend: {
      boxShadow: {
        custom: "0px 7px 16px 0px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        pattern: "url('./src/assets/pattern.png')",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#FEBF00",
        rblack: "#181818",
        body: "#0A1425",
        rred: "#BD1F17",
        rwhite: "#F7F8F9",
      },
    },
    plugins: [],
  },
};
