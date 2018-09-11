const pictures = [
  {
    id: 0,
    year: 2011,
    slug: 'landscape-with-birds',
    name: 'Пейзаж с птицами',
    material: 'холст / масло',
    color: '#F6F1ED',
    size: '80x100',
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
    name: 'Берег',
    material: 'холст / масло',
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
    name: 'Вечер',
    material: 'холст / масло',
    color: '#F2D8DB',
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
    slug: 'unnamed-1',
    name: 'Без названия',
    material: 'холст / масло',
    color: '#AFACBF',
    size: '???x??',
    original: {
      url: '/pictures/unnamed-1-original.jpg',
      width: 1507,
      height: 1800
    },
    zoomed: {
      url: '/pictures/unnamed-1.jpg',
      width: 1760,
      height: 2102
    }
  },
  {
    id: 4,
    year: 2011,
    slug: 'illusions-1',
    name: 'Иллюзии',
    material: 'холст / масло',
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
    name: 'Иллюзии',
    material: 'холст / масло',
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
    name: 'Иллюзии',
    material: 'холст / масло',
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
    name: 'Иллюзии',
    material: 'холст / масло',
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
    name: 'Иллюзии',
    material: 'холст / масло',
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
    name: 'Ангел',
    material: 'холст / масло',
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
    name: 'Без названия',
    material: 'холст / масло',
    color: '#D4DDDC',
    size: '??x??',
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
    name: 'Фок',
    material: 'холст / масло',
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
    name: 'Дождь',
    material: 'холст / масло',
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
    name: 'Легенда Карадага',
    material: 'холст / масло',
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
    name: 'Вечер',
    material: 'холст / масло',
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
    name: 'Фиолетовая музыка',
    material: 'холст / масло',
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
    name: 'Автопортрет с цветком',
    material: 'холст / масло',
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
