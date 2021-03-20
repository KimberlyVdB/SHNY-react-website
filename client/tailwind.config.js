module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      xs: "480px",
      sm: "660px",
      md: "820px",
      lg: "980px",
      xl: "1200px",
      fontFamily: {
        heading: ['Open Sans', ...defaultTheme.fontFamily.sans],
        primary: ['Poppins', ...defaultTheme.fontFamily.sans],
        quote: ['Fondamento', ...defaultTheme.fontFamily.cursive],
      },
    extend: {
      color: {
        'primary': '#06BDE1', 
        'black': '#333333',
        'white': '#FFFFFF'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  }
}
