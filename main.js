const electron = require("electron");
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;
const createWindow = () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        },
        frame: false,
        resizable: true,
        width: 200,
        height: 140,
        opacity: 0.9,
        alwaysOnTop: true
    });
    mainWindow.loadFile("app/index.html");
};

const openConfigurationWindow = () => {
    let configWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        },
        title: "Konfiguration",
        frame: false,
        parent: mainWindow,
        width: 400,
        height: 350,
        show: false,
    });
    configWindow.loadFile("config/index.html");
    configWindow.on("ready-to-show", configWindow.show);
};

ipcMain.on("configwindow", (e) => {
    openConfigurationWindow();
});

ipcMain.on("reloadMain", () => {
    mainWindow.reload();
});

app.on("ready", () => {
    createWindow();
});