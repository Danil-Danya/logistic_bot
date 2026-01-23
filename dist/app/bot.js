"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const init_commands_1 = __importDefault(require("./commands/init.commands"));
const createBot = () => {
    try {
        const token = process.env.TELEGRAM_TOKEN;
        if (!token) {
            throw new Error('Токен для бота обязателен');
        }
        const bot = new grammy_1.Bot(token);
        (0, init_commands_1.default)(bot);
        bot.start();
        bot.catch((err) => console.error("Ошибка:", err.error));
        return bot;
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = createBot;
