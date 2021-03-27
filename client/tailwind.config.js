const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    screens: {
      xs: "480px",
      sm: "660px",
      md: "820px",
      lg: "980px",
      xl: "1200px",
    },
    fontFamily: {
      heading: ['Open Sans', ...defaultTheme.fontFamily.sans],
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      mono: ['Fondamento', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        primary: '#06BDE1',
        black: '#333333',
      },
    },
  },
  variants: {
    extend: {
      margin: ['first', 'last'],
      padding: ['first', 'last']
    },
  },
  plugins: [],
}
