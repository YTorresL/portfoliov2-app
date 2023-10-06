/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        corn: ["SuperCorn-X3xGg", "sans-serif"],
        silly: ["SillyHandScriptRegular-X33EP", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
}
