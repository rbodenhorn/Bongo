// ==========================================================================
// Project:   Bongo.PhotoGroup
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Bongo */

/** @class
  
  (Document your Model here)
  
  @extends SC.Record
  @version 0.1
*/
Bongo.PhotoGroup = SC.Record.extend( SC.TreeItemContent,
/** @scope Bongo.PhotoGroup.prototype */ {
  count: 2,
  treeItemChildren: function() {
    return this.getEach('library', 'subscription');
  }.property('library', 'subscription').cacheable(),
  treeItemIsGrouped: YES,
  
  library: SC.Record.toOne('Bongo.Library'),
  subscription: SC.Record.toOne('Bongo.Subscription')
  
});
