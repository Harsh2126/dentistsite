/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold:         '#8B7500',
        'gold-hover': '#6e5c00',
        'gold-light': '#a08c1a',
        'gold-border':'#9c8200',
        'gold-bg':    '#f5f0dc',
        'nav-black':  '#1c1c1c',
        'soft-black': '#2d2d2d',
        'gray-strip': '#4a4a4a',
        'off-white':  '#f9f9f9',
        'text-dark':  '#2a2a2a',
        'text-mid':   '#555555',
        'text-light': '#888888',
        'border-light':'#e0e0e0',
      },
      fontFamily: {
        sans:    ['Open Sans', 'Arial', 'sans-serif'],
        heading: ['Raleway', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 4px 16px rgba(139,117,0,0.15)',
        'gold-md': '0 6px 28px rgba(139,117,0,0.18)',
        'card':    '0 2px 12px rgba(0,0,0,0.07)',
      },
      borderRadius: {
        DEFAULT: '0px',
      },
    },
  },
  plugins: [],
};
