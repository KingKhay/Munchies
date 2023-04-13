/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
        colors: {
          'lightgreen': '#c2e5cf',
          'golden-yellow': '#ffe8bc',
          'purple-blue': '#d3ddff',
          'error-blue': '#56aaff',
          'error-deep-blue': '#002d6f'
        },
    },
  },
  plugins: [],
}
