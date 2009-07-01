// ==========================================================================
// Project:   Bongo.Photo Unit Test
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Bongo module test ok equals same stop start */

module("Bongo.Photo");

// TODO: Replace with real unit test for Photo
test("Should have fixtures", function() {
  var expected = 30;
  var result   = Bongo.store.findAll(Bongo.Photo).get('length');
  equals(result, expected, "should have %@ photos fixtures".fmt(expected));
});

// ToRun go to Firefox and type in the http://localhost:4020/bongo/en/current/tests/models/photo.html 
// to test all type http://localhost:4020/bongo/en/current/tests.html
