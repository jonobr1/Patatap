const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const path = require('path');
const electron = require('electron');
const config = require('./config.js');

app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
app.commandLine.appendSwitch('disable-http-cache');
app.commandLine.appendSwitch('v', 0);
app.commandLine.appendSwitch('vmodule', 'console=0');

// Disable security warnings for now
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

let win;

const entryFile = path.resolve(__dirname, './index.html');

function createWindow () {
  let active = true;
  const menu = Menu.buildFromTemplate([]);
  Menu.setApplicationMenu(menu);

  const bounds = {};

  if (config.bounds) {
    bounds.width = config.bounds.width;
    bounds.height = config.bounds.height;
  }

  var displays = electron.screen.getAllDisplays();
  var externalDisplay = null;
  for (var i in displays) {
    if (displays[i].bounds.x !== 0 || displays[i].bounds.y !== 0) {
      externalDisplay = displays[i];
      break;
    }
  }
  if (externalDisplay && config.useExternalDisplay) {
    Object.assign(bounds, externalDisplay.bounds);
  }

  // Create the browser window.
  win = new BrowserWindow(Object.assign({
    kiosk: typeof config.kiosk === 'boolean' ? config.kiosk : true,
    frame: false,
    backgroundColor: config.backgroundColor,
    webPreferences: {
      nodeIntegration: false,
      nodeIntegrationInWorker: false
    }
  }, bounds));

  win.loadFile(entryFile);

  if (typeof config.debug == 'boolean' && !!config.debug) {
    win.webContents.openDevTools();
  }

  win.once('closed', () => {
    win = null;
    active = false;
  });

  const close = () => {
    if (!active) return;
    win.close();
  };

  if (config.hotkeys) {
    globalShortcut.register('CommandOrControl+W', close);
    globalShortcut.register('CommandOrControl+Q', close);
    globalShortcut.register('CommandOrControl+R', () => {
      if (!active) return;
      win.reload();
    });
    globalShortcut.register('CommandOrControl+F', () => {
      if (!active) return;
      win.setKiosk(!win.isKiosk());
    });
  }
}

app.once('ready', createWindow);
app.once('window-all-closed', () => app.quit());
handleErrors();

function handleErrors () {
  const fatalError = err => {
    console.error(err.stack);
    app.quit();
    process.exit(1);
  };

  process.on('unhandledRejection', fatalError);
  process.on('uncaughtException', fatalError);
}
