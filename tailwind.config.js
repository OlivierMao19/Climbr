/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1F1F2A", // A very dark shade of blue
        secondary: {
          DEFAULT: "#4A90E2", // A bright blue
          100: "#3A7BD5", // A slightly darker blue
          200: "#2A68C0", // An even darker blue
        },
        black: {
          DEFAULT: "#000", // Pure black
          100: "#1E1E2D", // A very dark shade of blue-gray
          200: "#232533", // A dark shade of blue-gray
        },
        gray: {
          100: "#CDCDE0", // A light gray
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
}

