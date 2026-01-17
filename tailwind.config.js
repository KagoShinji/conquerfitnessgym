/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fed636",     // yellow
        secondary: "#E63946",   // red accent
        darkBg: "#111111",
        lightText: "#F5F5F5",
      },
    },
  },
  plugins: [],
}
