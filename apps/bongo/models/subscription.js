// ==========================================================================
// Project:   Bongo.Subscription
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Bongo */

sc_require('models/photo_group');

/** @class

  (Document your Model here)

  @extends Bongo.PhotoGroup
  @version 0.1
*/
Bongo.Subscription = Bongo.PhotoGroup.extend(
/** @scope Bongo.Subscription.prototype */ {
  
  count: function() {
    this.getPath('subscribers.length') ;
  }.property('*subscribers.length').cacheable(),
  
  treeItemChildren: function() {
    return this.get('subscribers') ;
  }.property('subscribers').cacheable(),
  
  name: SC.Record.attr(String),
  
  photoGroup: SC.Record.toOne('Bongo.PhotoGroup'),
  subscribers: SC.Record.toMany('Bongo.Subscriber')
  

}) ;
