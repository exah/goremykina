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
    slug: '2',
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
    color: '#d5d8e1',
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
  },
  {
    id: 17,
    year: 2009,
    slug: 'inspiration',
    locales: {
      ru: {
        name: 'Вдохновение',
        material: 'холст / масло'
      },
      en: {
        name: 'Inspiration',
        material: 'oil on canvas'
      }
    },
    color: '#dae2eb',
    size: '100x120',
    original: {
      url: '/pictures/inspiration-original.jpg',
      width: 1800,
      height: 1506
    },
    zoomed: {
      url: '/pictures/inspiration.jpg',
      width: 2888,
      height: 2416
    }
  },
  {
    id: 18,
    year: 2009,
    slug: 'air',
    locales: {
      ru: {
        name: 'Воздух',
        material: 'холст / масло'
      },
      en: {
        name: 'Air',
        material: 'oil on canvas'
      }
    },
    size: '100x120',
    original: {
      url: '/pictures/air-original.jpg',
      width: 1800,
      height: 1505
    },
    zoomed: {
      url: '/pictures/air.jpg',
      width: 3927,
      height: 3284
    }
  },
  {
    id: 19,
    year: 2008,
    slug: 'stones',
    locales: {
      ru: {
        name: 'Камни',
        material: 'холст / масло'
      },
      en: {
        name: 'Stones',
        material: 'oil on canvas'
      }
    },
    color: '#c7d1d0',
    size: '100x120',
    original: {
      url: '/pictures/stones-original.jpg',
      width: 1800,
      height: 1489
    },
    zoomed: {
      url: '/pictures/stones.jpg',
      width: 2220,
      height: 1836
    }
  },
  {
    // Красное море - х.м. - 100x90 - 2009
    id: 20,
    year: 2009,
    slug: 'red-sea',
    locales: {
      ru: {
        name: 'Красное море',
        material: 'холст / масло'
      },
      en: {
        name: 'Red Sea',
        material: 'oil on canvas'
      }
    },
    size: '100x90',
    original: {
      url: '/pictures/red-sea-original.jpg',
      width: 1611,
      height: 1800
    },
    zoomed: {
      url: '/pictures/red-sea.jpg',
      width: 1944,
      height: 2172
    }
  },
  {
    // К морю - х.м. - 80x100 - 2006
    id: 21,
    year: 2006,
    slug: 'to-the-sea',
    locales: {
      ru: {
        name: 'К морю',
        material: 'холст / масло'
      },
      en: {
        name: 'To the Sea',
        material: 'oil on canvas'
      }
    },
    size: '80x100',
    original: {
      url: '/pictures/to-the-sea-original.jpg',
      width: 1800,
      height: 1433
    },
    zoomed: {
      url: '/pictures/to-the-sea.jpg',
      width: 2200,
      height: 1752
    }
  },
  {
    // Чайки - х.м. - 50x70 - 2007
    id: 22,
    year: 2007,
    slug: 'seagulls',
    locales: {
      ru: {
        name: 'Чайки',
        material: 'холст / масло'
      },
      en: {
        name: 'The Seagulls',
        material: 'oil on canvas'
      }
    },
    color: '#e0e2d3',
    size: '50x70',
    original: {
      url: '/pictures/seagulls-original.jpg',
      width: 1800,
      height: 1408
    },
    zoomed: {
      url: '/pictures/seagulls.jpg',
      width: 2122,
      height: 1660
    }
  },
  {
    // Пейзаж с неопознаным объектом - х.м. - 80x100 - 2007
    id: 23,
    year: 2007,
    slug: 'landscape-with-unidentified-object',
    locales: {
      ru: {
        name: 'Пейзаж с неопознаным объектом',
        material: 'холст / масло'
      },
      en: {
        name: 'Landscape with Unidentified Object',
        material: 'oil on canvas'
      }
    },
    color: '#bebbb2',
    size: '80x100',
    original: {
      url: '/pictures/landscape-with-unidentified-object.jpg',
      width: 1200,
      height: 952
    },
    zoomed: {
      url: '/pictures/landscape-with-unidentified-object.jpg',
      width: 1200,
      height: 952
    }
  },
  {
    // Крым. Этюд. - х.м. - 40x30 - 2007
    id: 24,
    year: 2007,
    slug: 'crimea-study',
    locales: {
      ru: {
        name: 'Крым. Этюд.',
        material: 'холст / масло'
      },
      en: {
        name: 'Crimea. Study.',
        material: 'oil on canvas'
      }
    },
    color: '#94a2a2',
    size: '80x100',
    original: {
      url: '/pictures/crimea-study-original.jpg',
      width: 1362,
      height: 1800
    },
    zoomed: {
      url: '/pictures/crimea-study.jpg',
      width: 1792,
      height: 2368
    }
  },
  {
    // Над Египтом - х.м. - 70x120 - 2009
    id: 25,
    year: 2009,
    slug: 'over-egypt',
    locales: {
      ru: {
        name: 'Над Египтом',
        material: 'холст / масло'
      },
      en: {
        name: 'Over Egypt',
        material: 'oil on canvas'
      }
    },
    color: '#e8dfdb',
    size: '70x120',
    original: {
      url: '/pictures/over-egypt-original.jpg',
      width: 1800,
      height: 1046
    },
    zoomed: {
      url: '/pictures/over-egypt.jpg',
      width: 2550,
      height: 1482
    }
  },
  {
    // Молитва - х.м. - 50x80 - 2008
    id: 26,
    year: 2008,
    slug: 'prayer',
    locales: {
      ru: {
        name: 'Молитва',
        material: 'холст / масло'
      },
      en: {
        name: 'Prayer',
        material: 'oil on canvas'
      }
    },
    size: '50x80',
    original: {
      url: '/pictures/prayer-original.jpg',
      width: 1800,
      height: 1070
    },
    zoomed: {
      url: '/pictures/prayer.jpg',
      width: 2632,
      height: 1564
    }
  },
  {
    // Музка моря - х.м. - 30x35 - 2007
    id: 27,
    year: 2007,
    slug: 'music-of-the-sea',
    locales: {
      ru: {
        name: 'Музыка моря',
        material: 'холст / масло'
      },
      en: {
        name: 'Music of the Sea',
        material: 'oil on canvas'
      }
    },
    color: '#cbcfce',
    size: '30x35',
    original: {
      url: '/pictures/music-of-the-sea-original.jpg',
      width: 1800,
      height: 1544
    },
    zoomed: {
      url: '/pictures/music-of-the-sea.jpg',
      width: 2024,
      height: 1736
    }
  },
  {
    id: 28,
    year: null,
    slug: '3',
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
    color: '#d7dade',
    size: null,
    original: {
      url: '/pictures/unnamed-3-original.jpg',
      width: 1800,
      height: 1515
    },
    zoomed: {
      url: '/pictures/unnamed-3.jpg',
      width: 2524,
      height: 2124
    }
  },
  {
    // Парк - х.м. - 100x80 - 2008
    id: 29,
    year: 2008,
    slug: 'park',
    locales: {
      ru: {
        name: 'Парк',
        material: 'холст / масло'
      },
      en: {
        name: 'Park',
        material: 'oil on canvas'
      }
    },
    size: '100x80',
    original: {
      url: '/pictures/park-original.jpg',
      width: 1800,
      height: 1430
    },
    zoomed: {
      url: '/pictures/park.jpg',
      width: 1762,
      height: 2218
    }
  },
  {
    // Портрет Тани - х.м. - 100x60 - 2007
    id: 30,
    year: 2007,
    slug: 'portrait-of-tanya',
    locales: {
      ru: {
        name: 'Портрет Тани',
        material: 'холст / масло'
      },
      en: {
        name: 'Portrait of Tanya',
        material: 'oil on canvas'
      }
    },
    size: '100x60',
    original: {
      url: '/pictures/portrait-of-tanya-original.jpg',
      width: 1055,
      height: 1800
    },
    zoomed: {
      url: '/pictures/portrait-of-tanya.jpg',
      width: 1412,
      height: 2408
    }
  },
  {
    // Мечта - х.м. - 101x61 - 2006
    id: 31,
    year: 2006,
    slug: 'dream',
    locales: {
      ru: {
        name: 'Мечта',
        material: 'холст / масло'
      },
      en: {
        name: 'Dream',
        material: 'oil on canvas'
      }
    },
    color: '#d1dfe4',
    size: '101x61',
    original: {
      url: '/pictures/dream-original.jpg',
      width: 1081,
      height: 1800
    },
    zoomed: {
      url: '/pictures/dream.jpg',
      width: 1501,
      height: 2500
    }
  },
  {
    // Ностальгия - х.а. - 100x60 - 2006
    id: 32,
    year: 2006,
    slug: 'nostalgia',
    locales: {
      ru: {
        name: 'Ностальгия',
        material: 'холст / акрил'
      },
      en: {
        name: 'Nostalgia',
        material: 'acrylic on canvas'
      }
    },
    color: '#c0bfcd',
    size: '100x60',
    original: {
      url: '/pictures/nostalgia-original.jpg',
      width: 1060,
      height: 1800
    },
    zoomed: {
      url: '/pictures/nostalgia.jpg',
      width: 1462,
      height: 2482
    }
  },
  {
    // Музыка. Отдых - х.а. - 70x90 - 2006
    id: 33,
    year: 2006,
    slug: 'music-relaxation',
    locales: {
      ru: {
        name: 'Музыка. Отдых',
        material: 'холст / акрил'
      },
      en: {
        name: 'Music. Relaxation',
        material: 'acrylic on canvas'
      }
    },
    color: '#ebf7fc',
    size: '70x90',
    original: {
      url: '/pictures/music-relaxation.jpg',
      width: 1200,
      height: 951
    },
    zoomed: {
      url: '/pictures/music-relaxation.jpg',
      width: 1200,
      height: 951
    }
  },
  {
    // Диптих - Волна - х.м. - 100x120 - 2009.jpg
    // Диптих - Алегро - х.м. - 100x120 - 2008.jpg
    id: 34,
    year: 2006,
    slug: 'diptych',
    locales: {
      ru: {
        name: 'Диптих. Волна / Алегро',
        material: 'холст / масло'
      },
      en: {
        name: 'Diptych. Wave / Alegro',
        material: 'oil on canvas'
      }
    },
    color: '#BBC6C8',
    size: '100x120',
    original: {
      url: '/pictures/diptych.jpg',
      width: 1800,
      height: 990
    },
    zoomed: {
      url: '/pictures/diptych.jpg',
      width: 3869,
      height: 2128
    }
  }
]

export { pictures }
