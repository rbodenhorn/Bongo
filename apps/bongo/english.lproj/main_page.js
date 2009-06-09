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
    childViews: 'labelView'.w(),
    
    labelView: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, width: 200, height: 18 },
      tagName: "h1", value: "SproutCore for the challenged"
    })
  })

});