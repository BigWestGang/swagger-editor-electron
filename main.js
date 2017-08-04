var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
      app.quit();
    }
});


app.on('ready', function() { 

    var screen = electron.screen; 
    var size = screen.getPrimaryDisplay().size; 

    mainWindow = new BrowserWindow({ 
        width : size.width, 
        height : size.height, 
        resizable : true, 
        "web-preferences": { 
            "web-security": false 
        } 
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function() { 
        mainWindow = null; 
    }); 
}); 