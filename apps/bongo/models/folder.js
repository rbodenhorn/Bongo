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
  
  unread: function() {
    return this.getPath('photos.length') ;
  }.property('photos'),
  
  name: SC.Record.attr(String),
  library: SC.Record.toOne('Bongo.Library'),
  photos: SC.RecordAttribute.create({
    toType: function(record, key, value) {
      var cacheKey = '__photos__'+ SC.guidFor(record) ;
      var query = record[cacheKey] ;
      if (!query) {
        query = record[cacheKey] = record.get('store').findAll(SC.Query.create({
          recordType: 'Bongo.Photo',
          conditions: "folder = %@",
          parameters: [record]
          // orderBy: "priority DESC, lowerCaseName"
        }));
      }
      return query ;
    }
  })
  
});
