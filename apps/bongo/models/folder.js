// ==========================================================================
// Project:   Bongo.Folder
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Bongo */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Bongo.Folder = SC.Record.extend(
/** @scope Bongo.Folder.prototype */ {
  
  icon: 'sc-icon-folder-16',
  
  name: SC.Record.attr(String),
  library: SC.Record.toOne('Bongo.Library'),
  photos: SC.Record.toMany('Bongo.Photo')
  
});
