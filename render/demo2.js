const btn = this.document.querySelector('#btn');
const BrowserWindow = require('electron').remote.BrowserWindow;

window.onload = function(){
    btn.onclick = ()=>{
        newWindow = new BrowserWindow({
            width:500,
            height:500
        });
        newWindow.loadFile('yellow.html');
        newWindow.on('closed',()=>{
            newWindow = null;
        })
    }
}

// 右键菜单
const {remote} =require('electron');

var rightClickTemplate = [
    {
        label:'复制',
        accelerator:'ctrl+c'
    },
    {
        label:'粘贴',
        accelerator:'ctrl+v'
    }
];

var rightClickMenu = remote.Menu.buildFromTemplate(rightClickTemplate);

window.addEventListener('click',function(){
    // 左键事件
});
window.addEventListener('contextmenu',function(e){
    e.preventDefault();
    rightClickMenu.popup({
        window:remote.getCurrentWindow()
    });
})