module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    stroke: {
      'nav': 'linear-gradient(to right, rgb(147, 197, 253), rgb(191, 219, 254), rgb(196, 181, 253))',
      'none': 'transparent'
    },
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
        'quicksand': ['Quicksand', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
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
      spacing: {
        '100': '30rem',
        '106': '36rem',
        '112': '42rem',

      },
      backgroundImage: {
        'featureHover': 'linear-gradient(114deg, rgba(79,164,249,0.7) -73%, rgba(242,118,250,0.7) 240%)',
        'featureHover1': 'linear-gradient(113.57deg, #4FA4F9 -74.59%, rgba(242, 118, 250, 0) 249.06%)',
        'button': 'linear-gradient(90deg, #1E1A56 -0.59%, rgba(45, 43, 120, 0.0734855) 284.31%, rgba(46, 44, 122, 0) 335.77%)',
        'navCurrent': 'linear-gradient(90deg, #7875FC 0%, #4FA4F9 0.03%, #F586C4 114.81%, rgba(249, 174, 131, 0) 317.33%)',
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
          'headervia': '#212121',
          'headerto': '#181818',
          'button': '#333334',
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
      backgroundImage: ['hover', 'focus', 'group-hover'],
      backgroundColor: ['checked'],
      width: ['hover', 'focus', 'group-hover'],
      display: ['group-hover'],
      justifyContent: ['group-hover'],
      translate: ['active', 'group-hover', 'group-focus', 'hover'],
      visibility: ['hover', 'focus', 'group-hover', 'group-focus'],
      alignItems: ['group-hover'],
    },
  },
  plugins: [],
}
