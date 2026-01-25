"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const generateFolderKeyboard = (folders) => {
    const keyboard = new grammy_1.InlineKeyboard();
    folders.forEach((folderItem) => {
        const folderValue = folderItem.dataValues;
        keyboard.text(folderValue.name, `subscribe_folder_${folderValue.id}`).row();
    });
    return keyboard;
};
exports.default = generateFolderKeyboard;
