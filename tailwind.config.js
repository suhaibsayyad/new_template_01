/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'sm': '576px',
      'md': '768px',
      'lg':'992px',
      'xl' : '1200px',
      '2xl' : '1400px'
    },
    extend: {
      colors:{
        brightRed: 'hsl(12,88%,59%)',
      }
    },
  },
  plugins: [],
}


