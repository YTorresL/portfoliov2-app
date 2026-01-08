/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./presentation/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        corn: ["SuperCorn-X3xGg", "sans-serif"],
        silly: ["SillyHandScriptRegular-X33EP", "sans-serif"],
      },
      colors: {
        primary: "#445334",
        secondary: "#F6AA19",
        Linen: "#FAF0E4",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
}
