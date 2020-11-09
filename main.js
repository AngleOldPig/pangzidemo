var electron = require('electron');

var app = electron.app;     // 引用app
var BrowserWindow = electron.BrowserWindow;     // 窗口引用BrowserWindow

var mainWindow = null;      // 声明要打开的主窗口

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences:{
            nodeIntegration:true,
            enableRemoteModule:true
        }
    });
    // mainWindow.webContents.openDevTools();  // 开启调试模式
    require('./main/menu.js');
    mainWindow.loadFile('newwindowdemo.html');      // 加载html页面
    mainWindow.on('closed',()=>{
        mainWindow = null;
    })
});