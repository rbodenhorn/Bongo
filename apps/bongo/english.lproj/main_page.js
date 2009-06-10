// ==========================================================================
// Project:   Bongo - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals Bongo */

// This page describes the main user interface for your application.  
Bongo.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'contentArea bottomBar'.w(),
    
    contentArea: SC.SplitView.design({
      layout: { left: 0, top: 0, right: 0, bottom: 40 },
      layoutDirection: SC.LAYOUT_HORIZONTAL,
      autoresizeBehavior: SC.RESIZE_BOTTOM_RIGHT,
      
      topLeftView: SC.ScrollView.design({
        layout: { top: 0, left: 0, right: 0, bottom: 0 },
        hasHorizontalScroller: NO,
        contentView: SC.ListView.design({
          // contentValueKey: 'title',
          // contentIconKey:  'icon',
          // contentUnreadCountKey: 'unread',
          // hasContentIcon: YES,
          // contentBinding: 'SampleControls.filesController'//,
          //selectionBinding: 'SampleControls.filesController.selection'
          // selectOnMouseDown: YES,
          // canReorderContent: YES
        })
      }),
      
      bottomRightView: SC.ScrollView.design({
        layout: { top: 0, left: 0, right: 0, bottom: 0 },
        hasHorizontalScroller: NO,
        contentView: SC.GridView.design({
          // contentValueKey: 'title',
          // contentIconKey:  'icon',
          // contentUnreadCountKey: 'unread',
          // hasContentIcon: YES,
          // contentBinding: 'SampleControls.filesController'//,
          //selectionBinding: 'SampleControls.filesController.selection'
          // selectOnMouseDown: YES,
          // canReorderContent: YES
        })
      }),
      
    }),

    bottomBar: SC.View.design({
      layout: { left: 0, height: 40, right: 0, bottom: 0 }
    })

  })

});
