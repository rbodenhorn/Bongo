// ==========================================================================
// Project:   Bongo.PhotoGroup Unit Test
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Bongo module test ok equals same stop start */

module("Bongo.PhotoGroup");

// TODO: Replace with real unit test for PhotoGroup
test("Should have fixtures", function() {
  var expected = 1;
  var result   = Bongo.store.findAll(Bongo.PhotoGroup).get('length');
  equals(result, expected, "should have %@ photogroup fixtures".fmt(expected));
});

// ToRun go to Firefox and type in the http://localhost:4020/bongo/en/current/tests/models/photo_group.html 
// to test all type http://localhost:4020/bongo/en/current/tests.html
