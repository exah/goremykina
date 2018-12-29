const pictures = [
  {
    id: 0,
    year: 2011,
    slug: 'landscape-with-birds',
    locales: {
      ru: {
        name: 'Пейзаж с птицами',
        material: 'холст / масло'
      },
      en: {
        name: 'Landscape with Birds',
        material: 'oil on canvas'
      }
    },
    size: '80x100',
    color: '#F6F1ED',
    original: {
      url: '/pictures/landscape-with-birds-original.jpg',
      width: 1800,
      height: 1440
    },
    zoomed: {
      url: '/pictures/landscape-with-birds.jpg',
      width: 4137,
      height: 3309
    }
  },
  {
    id: 1,
    year: 2010,
    slug: 'shore',
    locales: {
      ru: {
        name: 'Берег',
        material: 'холст / масло'
      },
      en: {
        name: 'Shore',
        material: 'oil on canvas'
      }
    },
    size: '100x80',
    original: {
      url: '/pictures/shore-original.jpg',
      width: 1431,
      height: 1800
    },
    zoomed: {
      url: '/pictures/shore.jpg',
      width: 3463,
      height: 4357
    }
  },
  {
    id: 2,
    year: 2011,
    slug: 'evening',
    locales: {
      ru: {
        name: 'Вечер',
        material: 'холст / масло'
      },
      en: {
        name: 'Evening',
        material: 'oil on canvas'
      }
    },
    color: '#F3ECEC',
    size: '54x77',
    original: {
      url: '/pictures/evening-original.jpg',
      width: 1800,
      height: 1261
    },
    zoomed: {
      url: '/pictures/evening.jpg',
      width: 4718,
      height: 3305
    }
  },
  {
    id: 3,
    year: 2011,
    slug: 'illusions-0',
    locales: {
      ru: {
        name: 'Иллюзии',
        material: 'холст / масло'
      },
      en: {
        name: 'Illusions',
        material: 'oil on canvas'
      }
    },
    color: '#AFACBF',
    size: null,
    original: {
      url: '/pictures/illusions-0-original.jpg',
      width: 1507,
      height: 1800
    },
    zoomed: {
      url: '/pictures/illusions-0.jpg',
      width: 1760,
      height: 2102
    }
  },
  {
    id: 4,
    year: 2011,
    slug: 'illusions-1',
    locales: {
      ru: {
        name: 'Иллюзии',
        material: 'холст / масло'
      },
      en: {
        name: 'Illusions',
        material: 'oil on canvas'
      }
    },
    size: '70x140',
    original: {
      url: '/pictures/illusions-1-original.jpg',
      width: 1800,
      height: 905
    },
    zoomed: {
      url: '/pictures/illusions-1.jpg',
      width: 5129,
      height: 2578
    }
  },
  {
    id: 5,
    slug: 'illusions-2',
    locales: {
      ru: {
        name: 'Иллюзии',
        material: 'холст / масло'
      },
      en: {
        name: 'Illusions',
        material: 'oil on canvas'
      }
    },
    size: '70x140',
    original: {
      url: '/pictures/illusions-2-original.jpg',
      width: 1800,
      height: 899
    },
    zoomed: {
      url: '/pictures/illusions-2.jpg',
      width: 5119,
      height: 2556
    }
  },
  {
    id: 6,
    slug: 'illusions-3',
    locales: {
      ru: {
        name: 'Иллюзии',
        material: 'холст / масло'
      },
      en: {
        name: 'Illusions',
        material: 'oil on canvas'
      }
    },
    size: '70x100',
    original: {
      url: '/pictures/illusions-3-original.jpg',
      width: 1800,
      height: 1268
    },
    zoomed: {
      url: '/pictures/illusions-3.jpg',
      width: 4978,
      height: 3506
    }
  },
  {
    id: 7,
    slug: 'illusions-4',
    locales: {
      ru: {
        name: 'Иллюзии',
        material: 'холст / масло'
      },
      en: {
        name: 'Illusions',
        material: 'oil on canvas'
      }
    },
    size: '90x140',
    original: {
      url: '/pictures/illusions-4-original.jpg',
      width: 1800,
      height: 1162
    },
    zoomed: {
      url: '/pictures/illusions-4.jpg',
      width: 5065,
      height: 3261
    }
  },
  {
    id: 8,
    slug: 'illusions-5',
    locales: {
      ru: {
        name: 'Иллюзии',
        material: 'холст / масло'
      },
      en: {
        name: 'Illusions',
        material: 'oil on canvas'
      }
    },
    size: '90x140',
    original: {
      url: '/pictures/illusions-5-original.jpg',
      width: 1800,
      height: 1155
    },
    zoomed: {
      url: '/pictures/illusions-5.jpg',
      width: 5081,
      height: 3261
    }
  },
  {
    id: 9,
    year: 2011,
    slug: 'angel',
    locales: {
      ru: {
        name: 'Ангел',
        material: 'холст / масло'
      },
      en: {
        name: 'Angel',
        material: 'oil on canvas'
      }
    },
    color: '#ECEADF',
    size: '58x80',
    original: {
      url: '/pictures/angel-original.jpg',
      width: 1800,
      height: 1311
    },
    zoomed: {
      url: '/pictures/angel.jpg',
      width: 4565,
      height: 3325
    }
  },
  {
    id: 10,
    year: 2016,
    slug: 'unnamed-2',
    locales: {
      ru: {
        name: null,
        material: 'холст / масло'
      },
      en: {
        name: null,
        material: 'oil on canvas'
      }
    },
    color: '#D4DDDC',
    size: null,
    original: {
      url: '/pictures/unnamed-2-original.jpg',
      width: 1537,
      height: 1800
    },
    zoomed: {
      url: '/pictures/unnamed-2.jpg',
      width: 1844,
      height: 2160
    }
  },
  {
    id: 11,
    year: 2010,
    slug: 'fok',
    locales: {
      ru: {
        name: 'Фок',
        material: 'холст / масло'
      },
      en: {
        name: 'Fok',
        material: 'oil on canvas'
      }
    },
    color: '#C2C5CE',
    size: '120x100',
    original: {
      url: '/pictures/fok-original.jpg',
      width: 1512,
      height: 1800
    },
    zoomed: {
      url: '/pictures/fok.jpg',
      width: 3385,
      height: 4030
    }
  },
  {
    id: 12,
    year: 2008,
    slug: 'rain',
    locales: {
      ru: {
        name: 'Дождь',
        material: 'холст / масло'
      },
      en: {
        name: 'Rain',
        material: 'oil on canvas'
      }
    },
    color: '#D0E8ED',
    size: '50x40',
    original: {
      url: '/pictures/rain-original.jpg',
      width: 1403,
      height: 1800
    },
    zoomed: {
      url: '/pictures/rain.jpg',
      width: 1846,
      height: 2368
    }
  },
  {
    id: 13,
    year: 2007,
    slug: 'legend-of-the-kara-dag',
    locales: {
      ru: {
        name: 'Легенда Карадага',
        material: 'холст / масло'
      },
      en: {
        name: 'Legend of The Kara Dag',
        material: 'oil on canvas'
      }
    },
    size: '100x120',
    original: {
      url: '/pictures/legend-of-the-kara-dag-original.jpg',
      width: 1800,
      height: 1515
    },
    zoomed: {
      url: '/pictures/legend-of-the-kara-dag.jpg',
      width: 2204,
      height: 1855
    }
  },
  {
    id: 14,
    year: 2008,
    slug: 'evening-2',
    locales: {
      ru: {
        name: 'Вечер',
        material: 'холст / масло'
      },
      en: {
        name: 'Evening',
        material: 'oil on canvas'
      }
    },
    size: '55x70',
    original: {
      url: '/pictures/evening-2-original.jpg',
      width: 1800,
      height: 1179
    },
    zoomed: {
      url: '/pictures/evening-2.jpg',
      width: 2416,
      height: 1582
    }
  },
  {
    id: 15,
    year: 2007,
    slug: 'violet-music',
    locales: {
      ru: {
        name: 'Фиолетовая музыка',
        material: 'холст / масло'
      },
      en: {
        name: 'Violet Music',
        material: 'oil on canvas'
      }
    },
    size: '100x80',
    original: {
      url: '/pictures/violet-music-original.jpg',
      width: 1447,
      height: 1800
    },
    zoomed: {
      url: '/pictures/violet-music.jpg',
      width: 1822,
      height: 2266
    }
  },
  {
    id: 16,
    year: 2007,
    slug: 'self-portrait',
    locales: {
      ru: {
        name: 'Автопортрет с цветком',
        material: 'холст / масло'
      },
      en: {
        name: 'Self-portait with Flower',
        material: 'oil on canvas'
      }
    },
    size: '100x80',
    original: {
      url: '/pictures/self-portrait-original.jpg',
      width: 1434,
      height: 1800
    },
    zoomed: {
      url: '/pictures/self-portrait.jpg',
      width: 1768,
      height: 2220
    }
  }
]

export {
  pictures
}
