import { Context } from "grammy";
import { t, Lang } from "core/i18n.init";

import userService from "../services/user.service";
import folderService from "../services/folder.service";

import generateFolderKeyboard from "../keyboards/folder.keyboard";
import generateMenuKeyboard from "../keyboards/menu.keyboard";

const MAX_SUBSCRIPTIONS = 1;

const handleSubscribeFolder = async (ctx: Context) => {
    const chatId: string = ctx.chat?.id.toString()!;
    
    const folders: any = await folderService.getAllFolders();
    const user: any = await userService.getUserByChatId(chatId);
    const lang: Lang = user.dataValues.lang;

    const subscribedFolders: number = user.folders.length;
    const availableToSubscribe: number = Math.max(MAX_SUBSCRIPTIONS - subscribedFolders, 0);

    const subscribedIds = new Set(user.folders.map((f: any) => f.id));

    const availableFolders = folders.rows.filter((folder: any) => {
        return !subscribedIds.has(folder.id);
    });

    const foldersText = folders.rows
        .map((folder: any, index: number) => {
            const folderValue: any = folder.dataValues;
            return `<a href="${folderValue.link}">${index + 1}. ${folderValue.name}</a>`;
        })
        .join("\n\n");

    const replyOptions: any = {
        parse_mode: "HTML"
    };

    if (availableToSubscribe > 0) {
        replyOptions.reply_markup = generateFolderKeyboard(availableFolders);
    }

    const message =
        `${t(lang, "folders_available_title")}\n\n${foldersText}\n\n` +
        `${t(lang, "subscription_info_title")}\n` +
        `${t(lang, "subscribed_count").replace("{subscribed}", String(subscribedFolders))}\n` +
        `${t(lang, "available_to_subscribe")
            .replace("{available}", String(availableToSubscribe))
            .replace("{max}", String(MAX_SUBSCRIPTIONS))}\n\n` +
        `${t(lang, "choose_folder_hint")}`;

    await ctx.reply(message, replyOptions);
};

const handleSubscribeFolderCallback = async (ctx: Context) => {
    const data = ctx.callbackQuery?.data;
    const chatId: string = ctx.chat?.id.toString()!;
    const user: any = await userService.getUserByChatId(chatId);

    const lang: Lang = user.dataValues.lang || "ru";

    if (!data) {
        await ctx.reply(t(lang, "error_try_again"));
        return;
    }

    const parts = data.split("subscribe_folder_");
    const folderId = parts.length > 1 ? parts[1] : null;

    if (!folderId) {
        await ctx.reply(t(lang, "error_try_again"));
        return;
    }

    await userService.addToUserFolder(user.dataValues.id, folderId);

    await ctx.reply(t(lang, "subscribed_success"));

    const subscribedUser: any = await userService.getUserByChatId(chatId);
    
    if (subscribedUser.folders.length === MAX_SUBSCRIPTIONS) {
        await ctx.reply(
            t(lang, "max_subscriptions_reached").replace("{max}", String(MAX_SUBSCRIPTIONS))
        );

        await ctx.reply(t(lang, "main_menu"), {
            parse_mode: "HTML",
            reply_markup: generateMenuKeyboard(lang)
        });
    }
};

export {
    handleSubscribeFolder,
    handleSubscribeFolderCallback
};
