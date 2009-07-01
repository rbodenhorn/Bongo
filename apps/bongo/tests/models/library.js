// ==========================================================================
// Project:   Bongo.Library Unit Test
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Bongo module test ok equals same stop start */

module("Bongo.Library");

// TODO: Replace with real unit test for Library
test("Should have fixtures", function() {
  var expected = 1;
  var result   = Bongo.store.findAll(Bongo.Library).get('length');
  equals(result, expected, "should have library fixtures");
});

// type in command line http://localhost:4020/bongo/en/current/tests/models/photo_group.html

// to test all type http://localhost:4020/bongo/en/current/tests.html
