// ==========================================================================
// Project:   Bongo.Subscription Unit Test
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Bongo module test ok equals same stop start */

module("Bongo.Subscription");

// TODO: Replace with real unit test for Subscription
test("Should have fixtures", function() {
  var expected = 1;
  var result   = Bongo.store.findAll(Bongo.Subscription).get('length');
  equals(result, expected, "should have %@ subscriptions fixtures".fmt(expected));
});

// type in command line http://localhost:4020/bongo/en/current/tests/models/photo_group.html

// to test all type http://localhost:4020/bongo/en/current/tests.html