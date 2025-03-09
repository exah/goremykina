import * as crypto from 'crypto'

const windowsOfHeaven = [
  {
    id: crypto.randomUUID(),
    year: 2023,
    slug: 'portrait-of-lee-min-ho-overcoming',
    series: 'windows-of-heaven',
    locales: {
      ru: {
        name: 'Портрет Lee Min-ho. Преодоление',
        material: 'холст / масло'
      },
      en: {
        name: 'Portrait of Lee Min-ho. Overcoming',
        material: 'oil on canvas'
      }
    },
    size: '100x85',
    color: '#F6F1ED',
    original: {
      url: '/pictures/windows-of-heaven/00-windows-of-heaven-portrait-of-lee-min-ho-overcoming-preview.jpg',
      width: 1537,
      height: 1800
    },
    zoomed: {
      url: '/pictures/windows-of-heaven/00-windows-of-heaven-portrait-of-lee-min-ho-overcoming-zoomed.jpg',
      width: 3415,
      height: 4000
    }
  },
  {
    id: crypto.randomUUID(),
    year: 2022,
    slug: 'portrait-of-lee-min-ho-song-of-waves',
    series: 'windows-of-heaven',
    locales: {
      ru: {
        name: 'Портрет Lee Min-ho. Бесконечная песня волн',
        material: 'холст / масло'
      },
      en: {
        name: 'Portrait of Lee Min-ho. Infinite Song of Waves',
        material: 'oil on canvas'
      }
    },
    size: '120x100',
    color: '#F6F1ED',
    original: {
      url: '/pictures/windows-of-heaven/01-windows-of-heaven-portrait-of-lee-min-ho-song-of-waves-preview.jpg',
      width: 1499,
      height: 1800
    },
    zoomed: {
      url: '/pictures/windows-of-heaven/01-windows-of-heaven-portrait-of-lee-min-ho-song-of-waves-zoomed.jpg',
      width: 3331,
      height: 4000
    }
  },
  {
    id: crypto.randomUUID(),
    year: 2022,
    slug: 'portrait-of-lee-min-ho-iii',
    series: 'windows-of-heaven',
    locales: {
      ru: {
        name: 'Портрет Lee Min-ho III',
        material: 'холст / масло'
      },
      en: {
        name: 'Portrait of Lee Min-ho III',
        material: 'oil on canvas'
      }
    },
    size: '60x50',
    color: '#F6F1ED',
    original: {
      url: '/pictures/windows-of-heaven/02-windows-of-heaven-portrait-of-lee-min-ho-iii-preview.jpg',
      width: 1492,
      height: 1800
    },
    zoomed: {
      url: '/pictures/windows-of-heaven/02-windows-of-heaven-portrait-of-lee-min-ho-iii-zoomed.jpg',
      width: 3316,
      height: 4000
    }
  },
  {
    id: crypto.randomUUID(),
    year: 2023,
    slug: 'stone-and-butterfly-ii',
    series: 'windows-of-heaven',
    locales: {
      ru: {
        name: 'Камень и бабочка II',
        material: 'холст / масло'
      },
      en: {
        name: 'Stone and Butterfly III',
        material: 'oil on canvas'
      }
    },
    size: '100x150',
    color: '#F6F1ED',
    original: {
      url: '/pictures/windows-of-heaven/03-windows-of-heaven-stone-and-butterfly-ii-preview.jpg',
      width: 1800,
      height: 1172
    },
    zoomed: {
      url: '/pictures/windows-of-heaven/03-windows-of-heaven-stone-and-butterfly-ii-zoomed.jpg',
      width: 4000,
      height: 2604
    }
  },
  {
    id: crypto.randomUUID(),
    year: 2023,
    slug: 'love-koo-hye-sun',
    series: 'windows-of-heaven',
    locales: {
      ru: {
        name: 'Любовь. Koo Hye-sun',
        material: 'холст / масло'
      },
      en: {
        name: 'Love. Koo Hye-sun',
        material: 'oil on canvas'
      }
    },
    size: '100x150',
    color: '#F6F1ED',
    original: {
      url: '/pictures/windows-of-heaven/04-windows-of-heaven-love-koo-hye-sun-preview.jpg',
      width: 1800,
      height: 1185
    },
    zoomed: {
      url: '/pictures/windows-of-heaven/04-windows-of-heaven-love-koo-hye-sun-zoomed.jpg',
      width: 4000,
      height: 2634
    }
  },
  {
    id: crypto.randomUUID(),
    year: 2023,
    slug: 'blooming-tree',
    series: 'windows-of-heaven',
    locales: {
      ru: {
        name: 'Цветущее дерево',
        material: 'холст / масло'
      },
      en: {
        name: 'Blooming tree',
        material: 'oil on canvas'
      }
    },
    size: '100x150',
    color: '#F6F1ED',
    original: {
      url: '/pictures/windows-of-heaven/05-windows-of-heaven-blooming-tree-preview.jpg',
      width: 1800,
      height: 1196
    },
    zoomed: {
      url: '/pictures/windows-of-heaven/05-windows-of-heaven-blooming-tree-zoomed.jpg',
      width: 4000,
      height: 2658
    }
  },
  {
    id: crypto.randomUUID(),
    year: 2023,
    slug: 'actor-portrait-of-lee-min-ho-diptych',
    series: 'windows-of-heaven',
    locales: {
      ru: {
        name: 'Актер. Портрет Lee Min-ho (диптих)',
        material: 'холст / масло'
      },
      en: {
        name: 'Actor. Portrait of Lee Min-ho (diptych)',
        material: 'oil on canvas'
      }
    },
    size: '120x100 + 120x100',
    color: '#F6F1ED',
    original: {
      url: '/pictures/windows-of-heaven/06-windows-of-heaven-actor-portrait-of-lee-min-ho-diptych-preview.jpg',
      width: 1800,
      height: 1068
    },
    zoomed: {
      url: '/pictures/windows-of-heaven/06-windows-of-heaven-actor-portrait-of-lee-min-ho-diptych-zoomed.jpg',
      width: 4000,
      height: 2373
    }
  },
  {
    id: crypto.randomUUID(),
    year: 2022,
    slug: 'general-faith-portrait-of-lee-min-ho',
    series: 'windows-of-heaven',
    locales: {
      ru: {
        name: 'Генерал. Faith. Портрет Lee Min-ho',
        material: 'холст / масло'
      },
      en: {
        name: 'General. Faith. Portrait of Lee Min-ho',
        material: 'oil on canvas'
      }
    },
    size: '60x80',
    color: '#F6F1ED',
    original: {
      url: '/pictures/windows-of-heaven/08-windows-of-heaven-general-faith-portrait-of-lee-min-ho-preview.jpg',
      width: 1800,
      height: 1325
    },
    zoomed: {
      url: '/pictures/windows-of-heaven/08-windows-of-heaven-general-faith-portrait-of-lee-min-ho-zoomed.jpg',
      width: 4000,
      height: 2945
    }
  },
  {
    id: crypto.randomUUID(),
    year: 2023,
    slug: 'queen-faith-portrait-of-park-se-young',
    series: 'windows-of-heaven',
    locales: {
      ru: {
        name: 'Королева. Faith. Портрет Park Se-Young (диптих)',
        material: 'холст / масло'
      },
      en: {
        name: 'Queen. Faith. Portrait of Park Se-Young (diptych)',
        material: 'oil on canvas'
      }
    },
    size: '80x60 + 80x60',
    color: '#F6F1ED',
    original: {
      url: '/pictures/windows-of-heaven/09-windows-of-heaven-queen-faith-portrait-of-park-se-young-diptych-preview.jpg',
      width: 1800,
      height: 1168
    },
    zoomed: {
      url: '/pictures/windows-of-heaven/09-windows-of-heaven-queen-faith-portrait-of-park-se-young-diptych-zoomed.jpg',
      width: 4000,
      height: 2595
    }
  },
  {
    id: crypto.randomUUID(),
    year: 2023,
    slug: 'yoo-in-soo-faith-portrait-kim-hee-sun',
    series: 'windows-of-heaven',
    locales: {
      ru: {
        name: 'Ю Ын Су. Faith. Портрет Kim Hee-sun',
        material: 'холст / масло'
      },
      en: {
        name: 'Yoo Eun-soo. Faith. Portrait of Kim Hee-sun',
        material: 'oil on canvas'
      }
    },
    size: '80x60',
    color: '#F6F1ED',
    original: {
      url: '/pictures/windows-of-heaven/11-windows-of-heaven-yoo-in-soo-faith-portrait-kim-hee-sun-preview.jpg',
      width: 1354,
      height: 1800
    },
    zoomed: {
      url: '/pictures/windows-of-heaven/11-windows-of-heaven-yoo-in-soo-faith-portrait-kim-hee-sun-zoomed.jpg',
      width: 3008,
      height: 4000
    }
  },
  {
    id: crypto.randomUUID(),
    year: 2022,
    slug: 'stone',
    series: 'windows-of-heaven',
    locales: {
      ru: {
        name: 'Камень',
        material: 'холст / масло'
      },
      en: {
        name: 'Stone',
        material: 'oil on canvas'
      }
    },
    size: '60x70',
    color: '#F6F1ED',
    original: {
      url: '/pictures/windows-of-heaven/12-windows-of-heaven-stone-preview.jpg',
      width: 1800,
      height: 1514
    },
    zoomed: {
      url: '/pictures/windows-of-heaven/12-windows-of-heaven-stone-zoomed.jpg',
      width: 4000,
      height: 3365
    }
  }
]

const pictures = [
  ...windowsOfHeaven,
  {
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
    year: 2011,
    slug: 'illusions-i',
    locales: {
      ru: {
        name: 'Иллюзии I',
        material: 'холст / масло'
      },
      en: {
        name: 'Illusions I',
        material: 'oil on canvas'
      }
    },
    size: '70x140',
    original: {
      url: '/pictures/illusions-i-original.jpg',
      width: 1800,
      height: 905
    },
    zoomed: {
      url: '/pictures/illusions-i.jpg',
      width: 5129,
      height: 2578
    }
  },
  {
    id: crypto.randomUUID(),
    year: 2012,
    slug: 'illusions-ii',
    locales: {
      ru: {
        name: 'Иллюзии II',
        material: 'холст / масло'
      },
      en: {
        name: 'Illusions II',
        material: 'oil on canvas'
      }
    },
    size: '70x140',
    original: {
      url: '/pictures/illusions-ii-original.jpg',
      width: 1800,
      height: 899
    },
    zoomed: {
      url: '/pictures/illusions-ii.jpg',
      width: 5119,
      height: 2556
    }
  },
  {
    id: crypto.randomUUID(),
    year: 2012,
    slug: 'illusions-iii',
    locales: {
      ru: {
        name: 'Иллюзии III',
        material: 'холст / масло'
      },
      en: {
        name: 'Illusions III',
        material: 'oil on canvas'
      }
    },
    size: '70x100',
    original: {
      url: '/pictures/illusions-iii-original.jpg',
      width: 1800,
      height: 1268
    },
    zoomed: {
      url: '/pictures/illusions-iii.jpg',
      width: 4978,
      height: 3506
    }
  },
  {
    id: crypto.randomUUID(),
    year: 2012,
    slug: 'illusions-v',
    locales: {
      ru: {
        name: 'Иллюзии V',
        material: 'холст / масло'
      },
      en: {
        name: 'Illusions V',
        material: 'oil on canvas'
      }
    },
    size: '90x140',
    original: {
      url: '/pictures/illusions-v-original.jpg',
      width: 1800,
      height: 1162
    },
    zoomed: {
      url: '/pictures/illusions-v.jpg',
      width: 5065,
      height: 3261
    }
  },
  {
    id: crypto.randomUUID(),
    year: 2012,
    slug: 'illusions-vi',
    locales: {
      ru: {
        name: 'Иллюзии VI',
        material: 'холст / масло'
      },
      en: {
        name: 'Illusions VI',
        material: 'oil on canvas'
      }
    },
    size: '90x140',
    original: {
      url: '/pictures/illusions-vi-original.jpg',
      width: 1800,
      height: 1155
    },
    zoomed: {
      url: '/pictures/illusions-vi.jpg',
      width: 5081,
      height: 3261
    }
  },
  {
    id: crypto.randomUUID(),
    year: 2012,
    slug: 'illusions-vii',
    locales: {
      ru: {
        name: 'Иллюзии VII',
        material: 'холст / масло'
      },
      en: {
        name: 'Illusions VII',
        material: 'oil on canvas'
      }
    },
    color: '#AFACBF',
    size: '60x50',
    original: {
      url: '/pictures/illusions-vii-original.jpg',
      width: 1507,
      height: 1800
    },
    zoomed: {
      url: '/pictures/illusions-vii.jpg',
      width: 1760,
      height: 2102
    }
  },
  {
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
    year: 2016,
    slug: 'sergey-burov',
    locales: {
      ru: {
        name: 'Сергей Буров',
        material: 'холст / масло'
      },
      en: {
        name: 'Sergey Burov',
        material: 'oil on canvas'
      }
    },
    color: '#D4DDDC',
    size: '30x35',
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
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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
    // Красное море - х.м. - 100x90 - 2009
    id: crypto.randomUUID(),
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
    // Над Египтом - х.м. - 70x120 - 2009
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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
    // Диптих - Волна - х.м. - 100x120 - 2009.jpg
    // Диптих - Алегро - х.м. - 100x120 - 2008.jpg
    id: crypto.randomUUID(),
    year: 2009,
    slug: 'diptych-wave',
    locales: {
      ru: {
        name: 'Диптих. Волна',
        material: 'холст / масло'
      },
      en: {
        name: 'Diptych. Wave',
        material: 'oil on canvas'
      }
    },
    color: '#BBC6C8',
    size: '100x120 / 100x60',
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
  },
  {
    // Музка моря - х.м. - 30x35 - 2007
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
    year: 2008,
    slug: 'allegro',
    locales: {
      ru: {
        name: 'Аллегро',
        material: 'холст / масло'
      },
      en: {
        name: 'Allegro',
        material: 'oil on canvas'
      }
    },
    color: '#d7dade',
    size: '100x120',
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
    id: crypto.randomUUID(),
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
    // К морю - х.м. - 80x100 - 2006
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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
    // Пейзаж с неопознаным объектом - х.м. - 80x100 - 2007
    id: crypto.randomUUID(),
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
    color: '#c8c9c3',
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
    id: crypto.randomUUID(),
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
    // Портрет Тани - х.м. - 100x60 - 2007
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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
    id: crypto.randomUUID(),
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
  }
]

export { pictures }
