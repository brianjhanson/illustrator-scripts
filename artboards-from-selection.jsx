// Artboard Fit Height
//
// Creates an artboard sized to each selected object
// 
// Copyright 2015 Brian Hanson

if ( app.documents.length > 0 ) {
    doc = app.activeDocument;
} else {
    Window.alert("You must open at least one document.");
}

if ( app.selection.length > 0 ) {
    objects = app.selection;
} else {
    Window.alert("You must select at least one object.");
}

function CreateArtboards() {
  var nextArtboardIndex = doc.artboards.length;

  for (var i = 0; i < objects.length; i++) {
    var currentObject = objects[i];
    var currentObjectRect = currentObject.visibleBounds;
    
    doc.artboards.insert(currentObjectRect, nextArtboardIndex);
    nextArtboardIndex++;
  }
}

CreateArtboards();
