const {app, BrowserWindow, Notification} = require('electron')
const path = require('path')
//For Create .exe with the command: electron-packager . electron --platform=win32 --arch=x64
function createWindow(){
    const win = new BrowserWindow({
        width : 800,
        height: 600,
        backgroundColor: "gray",
        webPreferences:{
            nodeIntegration: true
        }
    })
    win.removeMenu()
    //win.maximize();
    //win.webContents.openDevTools();
    win.loadFile('index.html')
}

app.whenReady().then(_ => {
                    createWindow();
                    // const notification = new Notification ({title: 'My first project', body:'Message', timeoutType: "never"});
                    // notification.show();
                    
})

