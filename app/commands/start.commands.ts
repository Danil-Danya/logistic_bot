import { Context } from "grammy";

import startKeyboard from "../keyboards/start.keyboard.ts";
import userService from "../services/user.service.ts";

const startCommand = async (ctx: Context) => {
    try {
        await userService.createUser(ctx);

        await ctx.reply(
            `Добро пожаловать в <b>Logistic Bot</b> 🚛\n\n` +
            `Я помогу тебе находить и публиковать логистические объявления.\n\n` +
            `Выберите действие ниже 👇`,
            {
                parse_mode: "HTML",
                reply_markup: startKeyboard,
            }
        );
    } 
    catch (error) {
        console.error("Ошибка в /start:", error);
        await ctx.reply("Произошла ошибка при запуске. Попробуйте позже.");
    }
};

export default startCommand;