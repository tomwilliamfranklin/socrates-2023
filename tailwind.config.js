/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#061425",
      secondary: "#2B3036",
      accent: "#f4d35e",
      accent1: "#f4d45e",
      accent2: "#ef4444",
      accent3: "#0ea5e9",
      secondaryAccent: "#577399",
      secondaryLight: "#516170",
      light: "#bdd5ea",

      primaryDark: "#191919",
      highlight: "#e80000",
      whiteColor: "#f7f7ff",
      blackColor: "#000814",
      greyColor: "#c5c5c5",
      transparent: "transparent",
    },
    //   extend: {
    //     backgroundImage: {
    //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //       "gradient-conic":
    //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    //     },
    //   },
  },
  plugins: [],
};
