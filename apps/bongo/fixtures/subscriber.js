// ==========================================================================
// Project:   Bongo.Subscriber Fixtures
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Bongo */

sc_require('models/subscriber');

Bongo.Subscriber.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  { guid: 1,
    name: "Bob's Photos",
    subscription: 1,
    photos: [1]},
  
  { guid: 2,
    name: "Dave's Photos",
    subscription: 1},
  
  { guid: 3,
    name: "Ken's Photos",
    subscription: 1,
    photos: [3]},
  
  { guid: 4,
    name: "Sue's Photos",
    subscription: 1},
  
  { guid: 5,
    name: "Linda's Photos",
    subscription: 1}

];
