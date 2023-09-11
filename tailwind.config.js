/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'reloadCyan': '#B6FBFF',
      },
      fontFamily: {
        'reloadFont': ['SF Pro Display'],
      },
      keyframes: {
        wave: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)', 
          },
        },
        animation: {
          'wave': 'wave 2s ease-in-out infinite',
          'wave-reverse': 'wave-reverse 2s ease-in-out infinite',
          
        },
      },
      
    },
  },
  plugins: [],
}