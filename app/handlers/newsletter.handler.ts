import { Context } from "grammy";
import { t, Lang } from "core/i18n.init";
import userService from "../services/user.service";
import newsletterState from "../states/newsletter.state";
import cron from "node-cron";

const sleep = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

const handleNewsletterStart = async (ctx: Context) => {
    const chatId: string = ctx.chat?.id.toString()!;
    
    const user: any = await userService.getUserByChatId(chatId);
    const lang: Lang = user.dataValues.lang;

    newsletterState.add(chatId);

    const message =
        `${t(lang, "newsletter_title")}\n\n` +
        `${t(lang, "newsletter_start_hint")}\n\n` +
        `${t(lang, "newsletter_start_warn")}`;

    await ctx.reply(message, {
        parse_mode: "HTML"
    });
};

const runNewsletter = async (ctx: Context) => {
    const chatId: string = ctx.chat?.id.toString()!;
    const message: string | undefined = ctx.message?.text;

    if (!message) {
        return;
    }

    const user: any = await userService.getUserByChatId(chatId);
    const lang: Lang = user?.dataValues?.lang || "ru";

    if (!user || !user.folders?.length) {
        await ctx.reply(t(lang, "newsletter_no_folder_subscriptions"));
        return;
    }

    const groups: any[] = [];

    user.folders.forEach((folder: any) => {
        if (folder.groups?.length) {
            groups.push(...folder.groups);
        }
    });

    if (!groups.length) {
        await ctx.reply(t(lang, "newsletter_no_groups_in_folders"));
        return;
    }

    let success: number = 0;
    let failed: number = 0;

    for (const group of groups) {
        const chatIdToSend = group.dataValues.group_id;

        if (!chatIdToSend) {
            failed++;
            continue;
        }

        try {
            await ctx.api.sendMessage(chatIdToSend, message);
            success++;
        }
        catch (error) {
            failed++;
        }

        await sleep(3000);
    }

    const resultMessage =
        `${t(lang, "newsletter_done_title")}\n\n` +
        `${t(lang, "newsletter_done_success").replace("{success}", String(success))}\n` +
        `${t(lang, "newsletter_done_failed").replace("{failed}", String(failed))}`;

    await ctx.reply(resultMessage, {
        parse_mode: "HTML"
    });
};

const newsletterHandler = async (ctx: Context) => {
    await runNewsletter(ctx);

    cron.schedule("0 * * * *", async () => {
        await runNewsletter(ctx);
    });
};

export {
    newsletterHandler,
    handleNewsletterStart
};
