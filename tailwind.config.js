module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container:{
      padding: '0 12px',
      margin: '0 auto'
    },
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
        'montserrat': ['Montserrat', 'sans-serif'],
        'grifter' : ['Grifter','sans-serif']
      },
      padding: {
        '30x': "30%"
      },
      minHeight: {
        '100': '100px',
        '80': '80px',
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
      height: {
        315: '315px',
      
      },
      width: {
        350: '400px',
      
      },
      spacing: {
        '100': '30rem',
        '106': '36rem',
        '112': '42rem',
      },
      backgroundImage: {
        'defaultBack': "url('/img/defaultBack.png')",
        'dashBack': "url('/img/dashBack.png')",
        'featureHover': 'linear-gradient(114deg, rgba(79,164,249,0.7) -73%, rgba(242,118,250,0.7) 240%)',
        'featureHover1': 'linear-gradient(113.57deg, #4FA4F9 -74.59%, rgba(242, 118, 250, 0) 249.06%)',
        'featureHoverPrem': 'linear-gradient(113.57deg, #FFDD86 -74.59%, rgba(250, 166, 118, 0.51) 249.06%)',
        'button': 'linear-gradient(90deg, #1E1A56 -0.59%, rgba(45, 43, 120, 0.0734855) 284.31%, rgba(46, 44, 122, 0) 335.77%)',
        'navCurrent': 'linear-gradient(90deg, #7875FC 0%, #4FA4F9 0.03%, #F586C4 114.81%, rgba(249, 174, 131, 0) 317.33%)',
        'buttonBg': ' linear-gradient(83.08deg, #4FEBF9 7.34%, #3FC1CD 92.07%)',
        'sidebarselectedbox': 'linear-gradient(115.76deg, #333334 18.28%, rgba(76, 78, 88, 0) 138.11%)',
        'frontText': 'linear-gradient(83.08deg, #4FEBF9 7.34%, rgba(79, 235, 249, 0.48) 92.07%)'
      },
      fontSize:{
        body13: ["13px","17px"],
        body14: ["14px","17px"],
        body15: ["15px", "120%"],
        body16: ["15px", "26px"],
        body17: ["17px","28px"],
        body53: ["53px","110%"],
        body55: ["55px","110%"],
        body22: ["22px","27px"],
        body27: ["27px","32px"],
        body42: ["42px","52px"],
        body47: ["47px","57px"],
        body48: ["48px", "64px"],
        body61: ["61px", "74px"],
      },
      colors: {
        selectorhighlight: '#5E76C0',
        featureprembbg: '#FFDD86',
        green4f: "#4FEBF9",
        black24: "#242424",
        gray9d: "#9D9D9D",
        grayb5: "#B5B5B5",
        grayd5: "#D5D5D5",
        gray8e: "#8E8E93",
        gray26: "#262626",
        graye1: "#E1EBFF",
        blue4f: "#4FEBF9",
        gray22: "#C4C4C4",
        gray7e: "#7E7E7E",
        button: {
          initial: "#7875FC",
          through: "#F586C4",
          final: "#F9AE83",
          
        },
        discortics: {
          '100': '#101014',
          'quote': '#1b2e4b',
          'header': '#232327BF',
          'line': '#272727',
          'headervia': '#212121BF',
          'headerto': '#181818BF',
          'button': '#333334',
          'dropselected': '#5E76C04D',
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
      space: ['hover']
    },
  },
  plugins: [],
}
