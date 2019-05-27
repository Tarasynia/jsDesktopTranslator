const electron = require('electron');
const{app} = electron;
const {BrowserWindow} = electron;

let win;
function createWindow(){
    win = new BrowserWindow({width: 425,height:755});
    win.loadURL(`file://${__dirname}/index.html`)
}

app.on('ready', createWindow);

