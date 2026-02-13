import { Context } from "grammy";
import startCommand from "../commands/start.commands";
import userService from "../services/user.service";

const langCallback = async (ctx: Context) => {
    try {
        const data: string = ctx.callbackQuery?.data as string;

        if (!data.startsWith("lang:")) {
            return;
        }

        const lang = data.split(":")[1] || "rus";

        await ctx.answerCallbackQuery();

        await userService.createUser(ctx);

        const chatId: string = ctx.chat?.id.toString()!;
        await userService.updateUserLang(chatId, lang);

        if (ctx.callbackQuery?.message) {
            await ctx.editMessageText(`✅ Ваш выбранный язык: ${lang}`);
        }

        await startCommand(ctx);
    }
    catch (error) {
        console.error("Ошибка выбора языка:", error);
        await ctx.reply("Произошла ошибка. Попробуйте позже.");
    }
};

export default langCallback;
