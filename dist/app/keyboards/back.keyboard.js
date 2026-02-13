"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const generateBackKeyboard = async () => {
    const keyboard = new grammy_1.InlineKeyboard();
    keyboard.text('📋Назад в главное меню', 'main_menu');
    return keyboard;
};
exports.default = generateBackKeyboard;
