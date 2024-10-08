const colors = require('tailwindcss/colors')

module.exports = {
  content : ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '28': '7rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '44': '11rem',
      '48': '12rem',
      '52': '13rem',
      '56': '14rem',
      '60': '15rem',
      '96': '24rem',
      'full': '100%',
     },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '8': '8px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      green: colors.emerald,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    outline: {
      green: '2px solid rgba(6, 78, 59, 1)',
    }
  },
  variants: {
    extend: {
      backgroundColor: ['even', 'odd', 'hover', 'disabled'],
      opacity: ['disabled']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
