// ==========================================================================
// Project:   Bongo.Subscriber
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Bongo */

/** @class
  
  (Document your Model here)
  
  @extends SC.Record
  @version 0.1
*/
Bongo.Subscriber = SC.Record.extend(
/** @scope Bongo.Subscriber.prototype */ {
  
  name: SC.Record.attr(String),
  subscription: SC.Record.toOne('Bongo.Subscription'),
  photos: SC.Record.toMany('Bongo.Photo')
  
}) ;
