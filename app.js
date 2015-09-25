var app = require('app')
var BrowserWindow = require('browser-window')
var ipc = require('ipc')


app.on('ready' , function() {
	var mainWindow = new BrowserWindow({
		width: 800,
		height: 600
	})
	mainWindow.loadUrl('file://' + __dirname + '/index.html')

	// var otherWindow = new BrowserWindow({
	// 	width: 400,
	// 	height: 400,
	// 	show: false
	// })
	// otherWindow.loadUrl('file://' + __dirname + '/prefs.html')

	ipc.on('toggle-prefs', function(){
		if (otherWindow.isVisible())
			otherWindow.hide()
		else 
			otherWindow.show()
	})
})

