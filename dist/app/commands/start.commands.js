"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const start_keyboard_1 = __importDefault(require("../keyboards/start.keyboard"));
const user_service_1 = __importDefault(require("../services/user.service"));
const startCommand = async (ctx) => {
    try {
        await user_service_1.default.createUser(ctx);
        await ctx.reply(`Добро пожаловать в <b>Logistic Bot</b> 🚛\n\n` +
            `Я помогу тебе находить и публиковать логистические объявления.\n\n` +
            `Выберите действие ниже 👇`, {
            parse_mode: "HTML",
            reply_markup: start_keyboard_1.default,
        });
    }
    catch (error) {
        console.error("Ошибка в /start:", error);
        await ctx.reply("Произошла ошибка при запуске. Попробуйте позже.");
    }
};
exports.default = startCommand;
