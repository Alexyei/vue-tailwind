module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),
    paintOrder: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },
    extend: {
      scale: {
        '25': '.25',},
      transitionDuration: { '10000':'10000ms'},
      transitionTimingFunction: {
        'popup': 'cubic-bezier(0.18,0.89,0.43,1.19)',},
      transitionProperty: {
        'top': 'top',},
    inset: {
      '-2full': '-200%',
    },
      flexGrow: {
        '2': 2,
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      minWidth: {
        '1/6': '15%',
        'lg': '32rem',
      },
      maxWidth: {
        '16': '4rem',
        'mobile-row':'24rem',
        'row': '35.125rem',
        '112.5':'28.125rem',
        '1/6': '15%',
      },
      maxHeight: {
        'row': '35.125rem',
        'max':'1000rem',

      },
      minHeight: {
        '16':'4rem',
        '17': '4.25rem',
        '22':'5.5rem',
        '23':'5.75rem',
        '31': '7.75rem'
      },
      textStrokeWidth: {
        '1': '1px',
      },
      height: {
        main: 'calc(100vh - 5.5rem - 3.5rem)',
        mobileMain: 'calc(100vh - 4rem - 4.5rem - 3rem)'
      },
      spacing: {
        '0.75': '0.1875rem',
        '1.25': '0.3125rem',
        '2.75': '0.6875rem',
        '6.4': '1.6rem',
        '7.5': '1.875rem',
        '11' : '2.75rem',
        '12.5': '3.125rem',
        '21':'5.25rem',
        '22':'5.5rem',
        '23':'5.75rem',
        '23.28':'5.82rem',
        '25.5':'6.375rem',
        '28':'6.5rem',
        '27.5': '6.875rem',
        '37.5': '9.375rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '112.5':'28.125rem',
        '10vh': '10vh',
        '90vh' :'90vh'
      },
      boxShadow: {
        checkbox: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        npicked: '0 1px 4px 0 rgba(0, 0, 0, 0.05)',
        picked: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
        labelh: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
        popup: '0 1px 4px rgba(0 ,0 ,0,0.09), 0 3px 8px rgba(0, 0, 0 , 0.09), 0 4px 13px rgba(0,0,0,0.13)'
      },
      colors: {
        'text-popup':'#686666',
        'popup-gray': 'rgba(12,13,14,0.5)',
        'dark-gray': '#474747',
        'dark-light': '#353746',
        'text-gray': '#3f4954',
        'midnight':'#104f55',
        'ghostwhite': '#f8f7fc',
        'whitesmoke': '#edeef0',
        'text-dark': '#444',
        'medium-blue': '#a1c4fd',
        'light-blue': '#c2e9fb',
        'dark-blue': '#1f2029',
        'light': '#f0eff3',
        'red-start': '#da2c4d',
        'yellow-start': '#f8ab37',
        'popup-orange':'#ffc300',
        'popup-green':'#73a942'
      },
      fontFamily: {
        Abel : ['Abel'],
        TT : ['TT'],
        Champagne : ['Champagne'],
        Oswald : ['Oswald'],
        Raleway: ['Raleway'],
        Ubuntu : ['Ubuntu']
      },
      fontSize: {
        // card: ['8px', '8px'],
        'xxs': '.6rem',
        radio: ['52px', '52px'],
        radioM: ['30px','30px'],
        notfound: ['11rem','11rem']
      },
      letterSpacing: {
        one: '1px',
      },
      backgroundImage: {
        '120': 'linear-gradient(120deg, var(--tw-gradient-stops))',
        '298':'linear-gradient(120deg, var(--tw-gradient-stops))'
      },
      zIndex: {
        '-1':-1,
        '2': 2,
        '9': 9,
        '9000':9000
      }
    },
  },
  variants: {
    textFillColor: ['responsive'],
    textStrokeColor: ['responsive'],
    textStrokeWidth: ['responsive'],
    paintOrder: ['responsive'],
    extend: {
      backgroundImage: ['hover', 'focus'],
      textColor: [
        'responsive',
        'hover',
        'focus',
        'before',
        'after','checked',
        'hover::before',
        'hover::after',
        'focus::before',
        // 'checked:hover',
        // 'checked:hover::before',
      ],
    },
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')(),
    require('tailwindcss-pseudo-elements')({
      classNameReplacer: {
        'hover:before:text-black': 'hbt',
      },
    }),
  ],
}
