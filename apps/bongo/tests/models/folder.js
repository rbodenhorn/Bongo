// ==========================================================================
// Project:   Bongo.Folder Unit Test
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Bongo module test ok equals same stop start */

module("Bongo.Folder");

// TODO: Replace with real unit test for Folder
test("Should have fixtures", function() {
  var expected = 5;
  var result   = Bongo.store.findAll(Bongo.Folder).get('length');
  equals(result, expected, "should have folders fixtues");
});

// type in command line http://localhost:4020/bongo/en/current/tests/models/photo_group.html

// to test all type http://localhost:4020/bongo/en/current/tests.html