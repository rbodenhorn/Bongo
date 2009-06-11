// ==========================================================================
// Project:   Bongo.Library
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Bongo */

sc_require('models/photo_group');

/** @class

  (Document your Model here)

  @extends Bongo.PhotoGroup
  @version 0.1
*/
Bongo.Library = Bongo.PhotoGroup.extend(
/** @scope Bongo.Library.prototype */ {
  
  count: function() {
    this.getPath('folders.length') ;
  }.property('*folders.length').cacheable(),
  
  treeItemChildren: function() {
    return this.get('folders') ;
  }.property('folders').cacheable(),

  name: SC.Record.attr(String),
  
  photoGroup: SC.Record.toOne('Bongo.PhotoGroup'),
  folders: SC.Record.toMany('Bongo.Folder')
  
}) ;
