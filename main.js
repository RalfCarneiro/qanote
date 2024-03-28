const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    // Crie uma nova janela do navegador.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Carregue o arquivo HTML da sua aplicação.
    mainWindow.loadFile('index.html');

    // Abrir as ferramentas de desenvolvimento.
    mainWindow.webContents.openDevTools();
}

// Esta função será chamada quando o Electron terminar de inicializar e estiver pronto para criar janelas do navegador.
// Algumas APIs podem ser usadas somente após este evento ocorrer.
app.whenReady().then(createWindow);

// Encerre quando todas as janelas estiverem fechadas, exceto no macOS. Lá, é comum para aplicativos e sua barra de menus
// para ficarem ativos até que o usuário saia explicitamente com Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // No macOS, é comum recriar uma janela no aplicativo quando o ícone do dock é clicado e não há outras janelas abertas.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
