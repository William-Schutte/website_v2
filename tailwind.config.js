module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'mdtall': ['MD-Tall', 'sans-serif'],
      'barcode': ['LibreBarcode', 'serif'],
      'readex': ['Readex', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero': "url('./media/images/bg-keyboard.jpg')",
      },
      height: {
        l: '40vh',
        xl: '60vh',
      },
      width: {
        xl: '107vh',
      },
      fontSize: {
        'customL': ['8rem', '8rem'],
        'customXL': ['14rem', '14rem'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
