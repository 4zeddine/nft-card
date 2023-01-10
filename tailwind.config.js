/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main-blue': 'hsl(217, 54%, 11%)',
        'dark-blue':'hsl(216, 50%, 16%)',
        'light-blue':'hsl(215, 32%, 27%)',
        'soft-blue':'hsl(215, 51%, 70%)',
        'cyan':'hsl(178, 100%, 50%)',
      },
      fontFamily: {
        'Outfit': ['Outfit'],
      },
    },
  },
  plugins: [],
}
