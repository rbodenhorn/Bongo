// ==========================================================================
// Project:   Bongo.Photo
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Bongo */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Bongo.Photo = SC.Record.extend(
/** @scope Bongo.Photo.prototype */ {
  
  url: SC.Record.attr(String),
  folder: SC.Record.toOne('Bongo.Folder'),
  subscriber: SC.Record.toOne('Bongo.Subscriber')
  
  
});
