const electron = require('electron');
const {app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const nativeImage = require('electron').nativeImage;
let win,
  iconPath = nativeImage.createFromPath(path.join(__dirname, 'resources/images/icon.png'));

function createWindow() {
  const displays = electron.screen.getPrimaryDisplay();

  win = new BrowserWindow({
    width: parseInt(displays.workAreaSize.width * 0.7),
    height: parseInt(displays.workAreaSize.height * 0.9),
    icon: iconPath,
    title: "Messenger",
    resizable: false
  });
  // win.webContents.openDevTools();
  win.setMenu(null);

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'app/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow); 

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});