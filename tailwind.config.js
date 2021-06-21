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
      textStrokeWidth: {
        '1': '1px',
      },
      spacing: {
        '0.75': '0.1875rem',
        '1.25': '0.3125rem',
        '2.75': '0.6875rem',
        '6.4': '1.6rem',
        '7.5': '1.875rem',
        '12.5': '3.125rem',
        '37.5': '9.375rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '10vh': '10vh',
        '90vh' :'90vh'
      },
      boxShadow: {
        npicked: '0 1px 4px 0 rgba(0, 0, 0, 0.05)',
        picked: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
        labelh: '0 8px 16px 0 rgba(0, 0, 0, 0.2)'
      },
      colors: {
        'dark-gray': '#474747',

        'text-gray': '#3f4954',
        'midnight':'#104f55',
        'ghostwhite': '#f8f7fc',
        'whitesmoke': '#edeef0',
        'text-dark': '#444',
        'medium-blue': '#a1c4fd',
        'light-blue': '#c2e9fb',
        'dark-blue': '#1f2029',
        'light': '#f0eff3',
        'red': '#da2c4d',
        'yellow': '#f8ab37'
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
        radio: ['52px', '52px'],
        radioM: ['24px','30px'],
      },
      letterSpacing: {
        one: '1px',
      },
      backgroundImage: {
        '120': 'linear-gradient(120deg, var(--tw-gradient-stops))'
      },
      zIndex: {
        '2': 2,
        '9': 9,
        '-1':-1
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
