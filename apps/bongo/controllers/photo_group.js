// ==========================================================================
// Project:   Bongo.photoGroupController
// ==========================================================================
/*globals Bongo */

sc_require('controllers/photo_groups');

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Bongo.photoGroupController = SC.ObjectController.create(
/** @scope Bongo.photoGroupController.prototype */ {
  
  contentBinding: SC.Binding.single('Bongo.photoGroupsController.selection')
  
}) ;
