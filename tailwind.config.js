module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '25': 25,
      '30': 30,
      '40': 40,
      '45': 45,
      '50': 50,
      '75': 75,
      '100': 100,
      'auto': 'auto',
    },
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif']
      },
      padding: {
        '30x': "30%"
      },
      minHeight: {
        '100': '100px',
        '200': '200px',
        '400': '400px',
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
        '10xl': '110rem',
      },
      colors: {
        button: {
          initial: "#7875FC",
          through: "#F586C4",
          final: "#F9AE83",
        },
        discortics: {
          '100': '#101014',

          'quote': '#1b2e4b',
          'header': '#232327',
          'line': '#272727',
        },
        maid: {
          'border': '#4ef0fc',
          'bg': '#030005'
        }
      },
      translate: {
        '110': '30rem',
        '120': '40rem',
        '-110': '-30rem',
        '-120': '-40rem',
      },
      margin: {
        '110': '30rem',
        '120': '40rem',
        '130': '50rem',
        '140': '60rem',
        '-110': '-30rem',
        '-120': '-40rem',
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
      backdropBlur: {
        super: '100px',
        gigant: '180px',
      }
    }
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
      backgroundColor: ['checked'],
      translate: ['active', 'group-hover', 'group-focus', 'hover'],
      visibility: ['hover', 'focus', 'group-hover', 'group-focus'],
    },
  },
  plugins: [],
}
