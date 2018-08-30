const THEME = {
  grid: 16,
  media: {
    D: '(min-width: 1025px)',
    T: '(max-width: 1024px)',
    M: '(max-width: 600px)'
  },
  space: {
    default: [ 0, 24, 72 ],
    M: [ 0, 16, 32 ]
  },
  color: {
    'site-background': '#E4E4E4'
  },
  textStyle: {
    root: {
      fontSize: 16,
      fontFamily: 'system-ui',
      lineHeight: 19 / 16,
      letterSpacing: 0.18
    },
    default: {
      fontSize: '1rem',
      fontFamily: 'system-ui',
      lineHeight: 19 / 16,
      letterSpacing: 0.18,
      fontWeight: 500
    },
    text: {
      fontSize: `${(19 / 16)}rem`,
      fontFamily: 'system-ui',
      lineHeight: 21 / 19,
      letterSpacing: 0.2,
      fontWeight: 400
    },
    caption: {
      fontSize: `${(12 / 16)}rem`,
      fontFamily: 'system-ui',
      lineHeight: 14 / 12,
      letterSpacing: 0.18,
      fontWeight: 300
    }
  }
}

export { THEME }
