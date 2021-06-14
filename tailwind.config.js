module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '0.75': '0.1875rem',
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
      colors: {
        'text-gray': '#3f4954',
        'midnight':'#104f55',
        'ghostwhite': '#f8f7fc',
        'whitesmoke': '#edeef0',
        'text-dark': '#444',
        'medium-blue': '#a1c4fd',
        'light-blue': '#c2e9fb'
      },
      fontFamily: {
        Abel : ['Abel'],
        TT : ['TT'],
        Champagne : ['Champagne'],
        Oswald : ['Oswald'],
        Raleway: ['Raleway']
      },
      backgroundImage: {
        '120': 'linear-gradient(120deg, var(--tw-gradient-stops))'
      },
      zIndex: {
        '9': 9
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [],
}
