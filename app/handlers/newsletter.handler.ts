import { Context } from "grammy";
import userService from "../services/user.service";
import newsletterState from "../states/newsletter.state";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const handleNewsletterStart = async (ctx: Context) => {
    const chatId = ctx.chat?.id.toString()!;

    newsletterState.add(chatId);

    await ctx.reply(
        `📂 <b>Рассылка</b>\n\n` +
        `Отправьте сообщение, которое нужно разослать по группам из ваших папок.\n\n` +
        `❗ Сообщение будет отправлено <b>во все группы</b>, на которые вы подписаны.`,
        {
            parse_mode: "HTML",
        }
    );
};

const newsletterHandler = async (ctx: Context) => {
    const chatId: string = ctx.chat?.id.toString()!;
    const message: string | undefined = ctx.message?.text;

    if (!message) {
        return;
    }

    const user: any = await userService.getUserByChatId(chatId);

    

    if (!user || !user.folders?.length) {
        await ctx.reply("❌ У вас нет подписок на папки.");
        return;
    }

    const groups: any[] = [];

    user.folders.forEach((folder: any) => {
        if (folder.groups?.length) {
            groups.push(...folder.groups);
        }
    });

    if (!groups.length) {
        await ctx.reply("❌ В выбранных папках нет групп.");
        return;
    }

    let success = 0;
    let failed = 0;

    for (const group of groups) {
        const chatIdToSend = group.dataValues.group_id; 

        if (!chatIdToSend) {
            console.log("Нет group_id:", group.dataValues);
            failed++;
            continue;
        }

        try {
            await ctx.api.sendMessage(chatIdToSend, message);
            success++;
        }
        catch (error) {
            failed++;
            console.error(`Ошибка отправки в группу ${chatIdToSend}`, error);
        }

        await sleep(3000);
    }

    await ctx.reply(
        `✅ Рассылка завершена\n\n` +
        `Успешно: <b>${success}</b>\n` +
        `Ошибок: <b>${failed}</b>`,
        {
            parse_mode: "HTML",
        }
    );
};

export {
    newsletterHandler,
    handleNewsletterStart
};
