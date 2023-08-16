/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        red: "#FF0000",
        blackText: "#3E3E3E",
        green: "#056203",
        navyBlue: "#042873",
        skyBlue: "#0394D5",
        blueBackground: "#E6F1F0",
        grayBackground: "#EEEEEE"
      },
      fontFamily: {
        primary: "Poppins"
      }
    },
  },
  plugins: [],
}

