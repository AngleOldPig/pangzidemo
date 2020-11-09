var fs = require('fs');

window.onload = function(){
    var btn = this.document.querySelector('#btn');
    var myText = this.document.querySelector('#myText');
    btn.onclick = function(){
        fs.readFile('text.txt', (err,data)=>{
            myText.innerHTML = data;
        })
    }
}