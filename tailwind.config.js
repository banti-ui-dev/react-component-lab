/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3b82f6', // blue-500
          strong: '#2563eb', // blue-600
          medium: '#60a5fa', // blue-400
        },
      },
    },
  },
  plugins: [],
}