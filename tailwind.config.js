/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Mono: 'Bold',
      Bookish: 'Bookish',
    },
    fontSize: {
      '5xs': '0.55rem',
      '4xs': '0.65rem',
      '3xs': '0.7rem',
      '2xs': '0.75rem',
      'xs': '0.8rem',
      'sm': '0.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem'
    }
  },
  plugins: [],
}