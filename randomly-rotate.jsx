var selectedObjects = app.activeDocument.selection;
var angleLock = prompt("Angle objects should lock to", 90);
var randomNum = Math.floor(Math.random()*360/angleLock);

if(selectedObjects.length > 0) {
  for(i = 0; i < selectedObjects.length; i++) {
    selectedObjects[i].rotate(angleLock * randomNum);
  }
}