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
  
  icon: 'sc-icon-group-16',
  
  unread: function() {
     return this.getPath('photos.length') ;
  }.property('photos'), 
   
  name: SC.Record.attr(String),
  subscription: SC.Record.toOne('Bongo.Subscription'),
//  photos: SC.Record.toMany('Bongo.Photo')
  photos: SC.RecordAttribute.create({
    toType: function(record, key, value) {
      var cacheKey = '__photos__'+ SC.guidFor(record) ;
      var query = record[cacheKey] ;
      if (!query) {
        query = record[cacheKey] = record.get('store').findAll(SC.Query.create({
          recordType: 'Bongo.Photo',
          conditions: "subscriber = %@",
          parameters: [record]
          // orderBy: "priority DESC, lowerCaseName"
        }));
      }
      return query ;
    }
  })
  
}) ;
