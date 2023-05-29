module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    colors: {
      primary: '#626C66',
      "primary-dark": '#434A42',
      secondary: '#BF0603',
      white: '#fff',
      black: '#000',
      grey: '#E3E3E3',
      'grey-dark': '#7E7E88'
    },
    extend: {
      maxWidth: {
        '58': '14.5rem',
        '60': '15rem',
        'container': '160rem',
        'container-sm': '63.25rem',
        'container-faq': '53.25rem',
      },
      fontSize: {
        '2r': '2rem',
        '2.5r': '2.5rem',
        '4r': '4rem',
      },
      zIndex: {
        'negative': '-1',
        'side-wrapper': '8900',
        'menu': '9000',
        'max': '9999',
      },
      letterSpacing: {
        "7p": '7px',
      },
      spacing: {
        "container-md": "80%",
        "container": "90%",
        "slide": "35rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
