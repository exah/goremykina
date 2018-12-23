const THEME = {
  grid: 16,
  media: {
    lg: '(min-width: 1025px)',
    md: '(min-width: 601px)',
    sm: '(max-width: 600px)'
  },
  space: {
    default: [ 0, 6, 24, 72 ],
    sm: [ 0, 6, 16, 32 ]
  },
  color: {
    gray: '#E4E4E4'
  },
  palette: {
    default: {
      bg: '#E4E4E4',
      fg: '#000000'
    },
    zoomed: {
      bg: 'transparent',
      fg: '#ffffff'
    }
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

export {
  THEME
}
