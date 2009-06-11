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
Bongo.PhotoGroup = SC.Record.extend(
/** @scope Bongo.PhotoGroup.prototype */ {
  
  library: SC.Record.toOne('Bongo.Library'),
  subscription: SC.Record.toOne('Bongo.Subscription')
  
});
