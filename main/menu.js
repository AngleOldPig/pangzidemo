const {Menu, BrowserWindow} = require('electron');
var menuTemplate = [
    {
        label:'文件',
        submenu:[
            {label:'打开文件'},
            {label:'保存文件'}
        ]
    },
    {
        label:'操作',
        submenu:[
            {
                label:'打开黄色网页',
                accelerator:'ctrl+y',
                click:()=>{
                    var win = new BrowserWindow({
                        width:500,
                        height:500,
                        webPreferences:{
                            nodeIntegration:true,
                            enableRemoteModule:true
                        }
                    });
                    win.loadFile('yellow.html');
                    win.on('closed',()=>{
                        win = null;
                    })
                }
            },
            {label:'一键举报'}
        ]
    }
]

var myMenu = Menu.buildFromTemplate(menuTemplate);

Menu.setApplicationMenu(myMenu);