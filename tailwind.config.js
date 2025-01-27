/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        secondary: "#16a34a",
        success: "#15803d",
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        display: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 