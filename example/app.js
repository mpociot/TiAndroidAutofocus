
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var autofocus = require('de.marcelpociot.autofocus');
win.add( autofocus.createView() );


win.add( Ti.UI.createTextField({
	width: 100,
	value: "I don't autofocus"
}) );

win.open();