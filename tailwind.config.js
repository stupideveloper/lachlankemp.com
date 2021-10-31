const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.cool-gray.300'),
            h1: {
              color: theme('colors.cool-gray.300')
            },
            h2: {
              color: theme('colors.cool-gray.400')
            },
            h3: {
              color: theme('colors.cool-gray.500')
            },
            a: {
              color: theme('colors.blue.600')
            }
          },
        }

      }),
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      blue: colors.blue,
      yellow: colors.amber,
      black: colors.black,
      orange: colors.orange,
      white: colors.white,
      purple: colors.purple,
      green: colors.green,
      'cool-gray': colors.coolGray,
      'mountain-meadow': {  DEFAULT: '#1FBF9F',  '50': '#CDF7EE',  '100': '#B7F3E7',  '200': '#8BECD9',  '300': '#5FE5CA',  '400': '#33DEBC',  '500': '#1FBF9F',  '600': '#18937A',  '700': '#116756',  '800': '#0A3B31',  '900': '#030F0D'},
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      'button-large': '100px'
     }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
