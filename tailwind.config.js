/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cricket-blue': '#004aad',
        'cricket-red': '#b41a43',
      }
    },
  },
  plugins: [],
}
