// @flow
const {app, BrowserWindow} = require('electron');

let window = null;

app.on('ready', () => {
    window = new BrowserWindow({
        icon: `${__dirname}/../../vector/img/logo.png`,
    });
    window.loadURL(`file://${__dirname}/../../vector/index.html`);
    window.on('closed', () => {
        window = null;
    })
});

app.on('window-all-closed', () => {
    app.quit();
});