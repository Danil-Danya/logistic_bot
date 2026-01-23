"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const startKeyboard = new grammy_1.InlineKeyboard()
    .text('🔍 Поиск груза', 'search').row()
    .text('📢 Подписка', 'subscribe').row()
    .text('🏠 Главное меню', 'main_menu').row();
exports.default = startKeyboard;
