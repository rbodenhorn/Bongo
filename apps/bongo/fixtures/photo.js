// ==========================================================================
// Project:   Bongo.Photo Fixtures
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Bongo */

sc_require('models/photo');

Bongo.Photo.FIXTURES = [

  // All fixture records must have a unique primary key (default 'guid').
  // Adding photos for subscriber
  

  { guid: 1,
    url: "http://www.freefoto.com/images/12/13/12_13_4---Flowers-in-a-Garden-Border_web.jpg",
    folder: 1
  },
  
  { guid: 2,
    url: "http://www.freefoto.com/images/12/33/12_33_10---Daffodils_web.jpg?&k=Daffodils",
    folder: 1
   },
  
  { guid: 3,
    url: "http://www.freefoto.com/images/12/32/12_32_5---Crocuses_web.jpg?&k=Crocuses",
    folder:1
   },
  
  { guid: 4,
    url: "http://www.freefoto.com/images/1351/04/1351_04_59---Eiffel-Tower--Paris--France_web.jpg?&k=Eiffel+Tower%2C+Paris%2C+France",
    folder:2
    },
  
  { guid: 5,
    url: "http://www.freefoto.com/images/1351/13/1351_13_4---The-Louvre--Paris--France_web.jpg?&k=The+Louvre%2C+Paris%2C+France",
    folder:2
   },
   
  { guid: 6,
    url: "http://www.freefoto.com/images/1351/07/1351_07_53---Notre-Dame-Cathedral--Paris--France_web.jpg?&k=Notre+Dame+Cathedral%2C+Paris%2C+France",
    folder:2
    },
   
  { guid: 7,
    url: "http://www.freefoto.com/images/34/10/34_10_62---Hereford_web.jpg?&k=Hereford",
    folder:3
   },
   
  { guid: 8,
    url: "http://www.freefoto.com/images/34/10/34_10_4---Hereford_web.jpg?&k=Hereford",
    folder:3
   },
  
  { guid: 9,
    url: "http://www.freefoto.com/images/1047/06/1047_06_54_thumb.jpg?ffid=1047-06-54&k=Holy+Trinity+Church%2C+Coventry",
    folder:3
   },
  
  { guid: 10,
    url: "http://www.kevinfreitas.net/img/20070131-mt-rainier.jpg",
    folder:4
   },
  
  { guid: 11,
    url: "http://www.terragalleria.com/images/np-pacific/mora20621.jpeg",
    folder:4
   },
     
  { guid: 12,
    url: "http://www.mtrainierphoto.com/The_Institute_files/Rainier-Photo-Workshops.jpg",
    folder:4
   },
   
  { guid: 13,
    url: "http://www.freefoto.com/images/1222/02/1222_02_97---Great-Fountain-Geyser--Yellowstone-National-Park--USA_web.jpg?&k=Great+Fountain+Geyser%2C+Yellowstone+National+Park%2C+USA",
    folder:5
    },
    
  { guid: 14,
    url: "http://www.freefoto.com/images/1222/02/1222_02_17---Great-Fountain-Geyser--Yellowstone-National-Park--USA_web.jpg?&k=Great+Fountain+Geyser%2C+Yellowstone+National+Park%2C+USA",
    folder:5
    },
    
  { guid: 15,
    url: "http://www.freefoto.com/images/1222/02/1222_02_45---Great-Fountain-Geyser--Yellowstone-National-Park--USA_web.jpg?&k=Great+Fountain+Geyser%2C+Yellowstone+National+Park%2C+USA",
    folder:5
    },
    
    // Adding photos for subscriber
  
  { guid: 16,
    url: "http://www.freefoto.com/images/12/13/12_13_4---Flowers-in-a-Garden-Border_web.jpg",
    subscriber: 1
  },
  
  { guid: 17,
    url: "http://www.freefoto.com/images/12/33/12_33_10---Daffodils_web.jpg?&k=Daffodils",
    subscriber: 1
   },
  
  { guid: 18,
    url: "http://www.freefoto.com/images/12/32/12_32_5---Crocuses_web.jpg?&k=Crocuses",
    subscriber:1
   },
  
  { guid: 19,
    url: "http://www.freefoto.com/images/1351/04/1351_04_59---Eiffel-Tower--Paris--France_web.jpg?&k=Eiffel+Tower%2C+Paris%2C+France",
    subscriber:2
   },
  
  { guid: 20,
    url: "http://www.freefoto.com/images/1351/13/1351_13_4---The-Louvre--Paris--France_web.jpg?&k=The+Louvre%2C+Paris%2C+France",
    subscriber:2
   },
   
  { guid: 21,
    url: "http://www.freefoto.com/images/1351/07/1351_07_53---Notre-Dame-Cathedral--Paris--France_web.jpg?&k=Notre+Dame+Cathedral%2C+Paris%2C+France",
    subscriber:2
   },
   
  { guid: 22,
    url: "http://www.freefoto.com/images/34/10/34_10_62---Hereford_web.jpg?&k=Hereford",
    subscriber:3
   },
   
  { guid: 23,
    url: "http://www.freefoto.com/images/34/10/34_10_4---Hereford_web.jpg?&k=Hereford",
    subscriber:3
   },
  
  { guid: 24,
    url: "http://www.freefoto.com/images/1047/06/1047_06_54_thumb.jpg?ffid=1047-06-54&k=Holy+Trinity+Church%2C+Coventry",
    subscriber:3
   },
  
  { guid: 25,
    url: "http://www.kevinfreitas.net/img/20070131-mt-rainier.jpg",
    subscriber:4
   },
  
  { guid: 26,
    url: "http://www.terragalleria.com/images/np-pacific/mora20621.jpeg",
    subscriber:4
   },
  
  { guid: 27,
    url: "http://www.mtrainierphoto.com/The_Institute_files/Rainier-Photo-Workshops.jpg",
    subscriber:4
   },
   
  { guid: 28,
    url: "http://www.freefoto.com/images/1222/02/1222_02_97---Great-Fountain-Geyser--Yellowstone-National-Park--USA_web.jpg?&k=Great+Fountain+Geyser%2C+Yellowstone+National+Park%2C+USA",
    subscriber:5
   },
  
  { guid: 29,
    url: "http://www.freefoto.com/images/1222/02/1222_02_17---Great-Fountain-Geyser--Yellowstone-National-Park--USA_web.jpg?&k=Great+Fountain+Geyser%2C+Yellowstone+National+Park%2C+USA",
    subscriber:5
   },
  
  { guid: 30,
    url: "http://www.freefoto.com/images/1222/02/1222_02_45---Great-Fountain-Geyser--Yellowstone-National-Park--USA_web.jpg?&k=Great+Fountain+Geyser%2C+Yellowstone+National+Park%2C+USA",
    subscriber:5
   }
  

];
