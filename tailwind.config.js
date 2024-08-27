/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in': 'slide-in 1s ease-out forwards',
      },
      fontFamily: {
        'dm-serif': ['"DM Serif Text"', 'serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
        'oswald': ['"Oswald"', 'sans-serif'],
        'qwitcher-grypen': ['"Qwitcher Grypen"', 'cursive'],
      },
      colors: {
        'custom-blue': '#DBE2EF',
        'navbar-blue': '#176B87',
        'navbar-dark': '#31304D',
        'navbar-light': '#9EB8D9',
        'navbar-bright': '#00A9FF',
        'navbar-custom': '#3559E0', // Added custom navbar color
      },
    },
  },
  plugins: [],
};
