/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "var(--font-PlayfairDisplay)",
    },
    extend: {
      colors: {
        primary: "#f09b36",
        secondary: "#21201e",
      },
    },
  },
  plugins: [],
};
