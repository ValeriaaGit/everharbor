/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#083D77",
        gold: "#F4D35E",
        warm: "#EE964B",
        light: "#F8F4E3",
      },
      fontFamily: {
        heading: ['Bigilla', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

