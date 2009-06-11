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
        contentView: SC.SourceListView.design({
          contentValueKey: 'name',
          // contentIconKey:  'icon',
          // contentUnreadCountKey: 'unread',
          // hasContentIcon: YES,
          contentBinding: 'Bongo.photoGroupsController.arrangedObjects'
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
      layout: { left: 0, height: 40, right: 0, bottom: 0 },
      classNames: 'bottom-bar',
      childViews: 'plusButton minusButton editButton sizeSlider minsizeLabel maxsizeLabel countLabel'.w(),

      plusButton: SC.ButtonView.design({
        layout: { left: 10, top: 8, height: 21, width: 80 },
        title: "+",
        target: Bongo,
        action: 'addFolder'
      }),
      
      minusButton: SC.ButtonView.design({
        layout: { left: 120, top: 8, height: 21, width: 80 },
        title: "-",
        target: Bongo,
        action: 'removeFolder'
      }),
    
      editButton: SC.ButtonView.design({
        layout: { left: 600, top: 8, height: 21, width: 80 },
        title: "Edit",
        classNames: 'edit-button',
     }),
  
      sizeSlider: SC.SliderView.design({
        layout: { left: 750, top: 10, height: 15, width: 200 },
        value: 100, minimum: 50, maximum: 320
      }),
    
      minsizeLabel: SC.LabelView.design({
        layout: { left: 720, top: 8, height: 21, width: 30 },
        escapeHTML: NO,
        classNames: 'minsize',
        value: "50"
      }),
    
      maxsizeLabel: SC.LabelView.design({
        layout: { left: 970, top: 8, height: 21, width: 30 },
        escapeHTML: NO,
        classNames: 'maxsize',
        value: "320"
      }),
    
      countLabel: SC.LabelView.design({
        layout: { left: 350, top: 10, height: 25, width: 200 },
        classNames: 'count-label',
        value: "photo count" + "  items"
      })
    })    
  })
  
}); 
