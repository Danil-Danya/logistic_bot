import { Bot } from "grammy";
import initCommands from "./commands/init.commands.ts";
const createBot = () => {
    try {
        const token = process.env.TELEGRAM_TOKEN;
        if (!token) {
            throw new Error('Токен для бота обязателен');
        }
        const bot = new Bot(token);
        initCommands(bot);
        bot.start();
        bot.catch((err) => console.error("Ошибка:", err.error));
        return bot;
    }
    catch (error) {
        console.log(error);
    }
};
export default createBot;
