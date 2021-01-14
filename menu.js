const { app, Menu } = require("electron");

const isMac = process.platform === "darwin";

const template = [
  {
    label: "Quit application",
    submenu: [isMac ? { role: "close" } : { role: "quit" }]
  },
  {
    label: "Reload the page",
    submenu: [
      { role: "reload" },
    ]
  },
  {
    label: "Screen",
    submenu: [{ role: "minimize" }, { role: "togglefullscreen" }]
  },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

module.exports = {
  menu
};
