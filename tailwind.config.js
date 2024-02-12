/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        error: '#c32222',
        warning: '#998000',
        success: '#17824d',
      }
    },
  },
  plugins: [],
}

