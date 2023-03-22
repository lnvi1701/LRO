/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['"Roboto Slab"', 'serif'],
        body: ['Roboto', 'sans-serif'],
    },
    },
  },
  plugins: [],
}
