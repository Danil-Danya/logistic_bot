import { Context } from "grammy";
import { t, Lang } from "core/i18n.init";
import { handleSubscribeFolder } from "../handlers/folder.handler";

import generateLangKeyboard from "app/keyboards/lang.keyboard";
import generateMenuKeyboard from "../keyboards/menu.keyboard";
import userService from "../services/user.service";

const MAX_SUBSCRIPTIONS = 1;

const startCommand = async (ctx: Context) => {
    try {
        await userService.createUser(ctx);

        const chatId: string = ctx.chat?.id.toString()!;
        const user: any = await userService.getUserByChatId(chatId);
        
        if (!user.dataValues.lang) {
            await ctx.reply(
                'Выберете язык / Select language', 
                {
                    reply_markup: generateLangKeyboard(),
                }
            );

            return;
        }

        const lang: Lang = user.dataValues.lang;

        await ctx.reply(
            t(lang, "welcome", { name: ctx.from?.first_name as string }),
            { parse_mode: "HTML" }
        );

        if (user.folders.length < MAX_SUBSCRIPTIONS) {
            await ctx.reply(t(lang, "no_folders"), { parse_mode: "HTML" });
            await handleSubscribeFolder(ctx);
        }
        else {
            await ctx.reply(t(lang, "main_menu"), {
                parse_mode: "HTML",
                reply_markup: generateMenuKeyboard(lang),
            });
        }
    }
    catch (error) {
        console.error("Ошибка в /start:", error);
        await ctx.reply("Произошла ошибка при запуске. Попробуйте позже.");
    }
};

export default startCommand;
