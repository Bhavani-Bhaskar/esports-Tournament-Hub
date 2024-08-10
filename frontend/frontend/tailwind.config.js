// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust these extensions if necessary
  ],
  theme: {
    extend: {
      colors : {
        bg2 : "#222E40",
        card : "#101D29",
        navbar : "#1C283A",
        navtext : "#",
        blue : {
          900 : "#007FF4",
        }
      }
    },
  },
  plugins: [],
}
