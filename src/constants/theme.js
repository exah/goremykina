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
      all: {
        fontSize: 18,
        fontFamily: 'system-ui, sans-serif',
        lineHeight: 19 / 16,
        letterSpacing: 0.18
      },
      sm: {
        fontSize: 16
      }
    },
    default: {
      fontSize: '1rem',
      fontFamily: 'system-ui, sans-serif',
      fontWeight: 500,
      lineHeight: 19 / 16,
      letterSpacing: 0.18
    },
    title: {
      fontSize: `${24 / 20}rem`,
      lineHeight: 19 / 16,
      fontWeight: 400,
      letterSpacing: 0.18
    },
    text: {
      all: {
        fontSize: `${(20 / 18)}rem`,
        fontFamily: 'system-ui, sans-serif',
        fontWeight: 400,
        lineHeight: 21 / 19,
        letterSpacing: 0.2
      },
      sm: {
        fontSize: `${(20 / 16)}rem`
      }
    },
    caption: {
      fontSize: `${(12 / 16)}rem`,
      fontFamily: 'system-ui, sans-serif',
      fontWeight: 300,
      lineHeight: 14 / 12,
      letterSpacing: 0.18
    }
  }
}

export {
  THEME
}
