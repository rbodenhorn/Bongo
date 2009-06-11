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

  name: SC.Record.attr(String),
  library: SC.Record.toOne('Bongo.Library')
  

}) ;
