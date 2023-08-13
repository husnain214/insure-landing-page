/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['DM Serif Display', 'sans-serif'],
        'body': ['Karla', 'sans-serif'],
      },
      colors: {
        primary: '#2D2641',
        accent: '#96A9C6',
        'neutral-dark': '#2C2830',
        'neutral-gray': '#837D88',
        'neutral-light': '#FAFAFA',
      },
      screens: {

      },
    },
  },
  plugins: [],
};
