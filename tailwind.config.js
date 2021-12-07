module.exports = {
  mode: 'jit',
  purge: {
    enabled: 'true',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'mdtall': ['MD-Tall', 'sans-serif'],
      'barcode': ['LibreBarcode', 'serif'],
      'readex': ['Readex', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero': "url('./media/bg-keyboard.jpg')",
      },
      height: {
        lg: '450px',
      },
      width: {
        lg: '800px',
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
