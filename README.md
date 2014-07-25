TiAndroidAutofocus
==================

Prevents TextFields in Android to autofocus

### Usage
Simply create a View using this module above the first TextField occurence to prevent autofocus.
That's it!

**JS Usage**


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
	
**Alloy usage**

	<View platform="android" module="de.marcelpociot.autofocus" />
	<TextField value="No more ugly autofocus!" />
	
