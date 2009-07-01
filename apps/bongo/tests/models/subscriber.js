// ==========================================================================
// Project:   Bongo.Subscriber Unit Test
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Bongo module test ok equals same stop start */

module("Bongo.Subscriber");

// TODO: Replace with real unit test for Subscriber
test("Shold have fixtures", function() {
  var expected = 5;
  var result   = Bongo.store.findAll(Bongo.Subscriber).get('length');
  equals(result, expected, "should have %@ subscribers fixtures".fmt(expected));
});

// ToRun go to Firefox and type in the http://localhost:4020/bongo/en/current/tests/models/subscriber.html 
// to test all type http://localhost:4020/bongo/en/current/tests.html
