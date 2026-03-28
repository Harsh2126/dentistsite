/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A6FE8',
        'primary-dark': '#1458C0',
        'primary-light': '#EEF5FF',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Bricolage Grotesque', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(0,0,0,0.06)',
        'card': '0 4px 30px rgba(0,0,0,0.08)',
        'blue': '0 8px 30px rgba(26,111,232,0.25)',
      },
    },
  },
  plugins: [],
};
