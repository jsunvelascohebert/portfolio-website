/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightPurple: '#E8D7FD',
        purple: '#CDB3F3',
        darkPurple: '#6B5C7D',
        lightOrange: '#FFA14D',
        orange: '#FF7900',
        darkOrange: '#CC6100'
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        nunito: ['Nunito', 'serif'],
      },
      boxShadow: {
        'lg' : '8px 8px 0px rgba(0, 0, 0, 1)',
        'md': '4px 4px 0px rgba(0, 0, 0, 1)',
        'sm': '2px 2px 0px rgba(0, 0, 0, 1)',
        'lg-blur': '8px 8px 0 rgba(0, 0, 0, 0.5)',
        'sm-inner': 'inset 2px 2px 0px rgba(0, 0, 0, 0.25)',
        'md-inner': 'inset 3px 3px 0px rgba(0, 0, 0, 0.25)',
      },
      transitionDuration: {
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
      }
    },
  },
  plugins: [
    
  ]
}

