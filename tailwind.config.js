/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#09090B",
        secondary: "#151518",
        border: "#27272A",
        text: "#FAFAFA",
        secondarytext: "#8A8A92",
      }
    },
  },
  plugins: [],
}

