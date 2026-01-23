import { Context } from "grammy";

import userService from "../services/user.service";
import folderService from "../services/folder.service";

import generateFolderKeyboard from "../keyboards/folder.keyboard";
import generateMenuKeyboard from "../keyboards/menu.keyboard";

const MAX_SUBSCRIPTIONS = 2;

const handleSubscribeFolder = async (ctx: Context) => {
    const chatId: string = ctx.chat?.id.toString()!;

    const folders: any = await folderService.getAllFolders();
    const user: any = await userService.getUserByChatId(chatId);

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
        parse_mode: "HTML",
    };

    if (availableToSubscribe > 0) {
        replyOptions.reply_markup = generateFolderKeyboard(availableFolders);
    }

    await ctx.reply(
        `📂 <b>Доступные папки для подписки:</b>\n\n${foldersText}\n\n` +
        `ℹ️ <b>Информация о подписке</b>\n` +
        `Вы подписаны на: <b>${subscribedFolders}</b>\n` +
        `Доступно для подписки: <b>${availableToSubscribe}</b> из <b>${MAX_SUBSCRIPTIONS}</b>\n\n` +
        `Выберите папку из клавиатуры ниже, чтобы подписаться на рассылку объявлений.`,
        replyOptions
    );
}

const handleSubscribeFolderCallback = async (ctx: Context) => {
    const data = ctx.callbackQuery?.data;

    if (!data) {
        console.log("Нет callbackQuery.data");
        await ctx.reply("Произошла ошибка. Попробуйте еще раз.");
        return;
    }

    const parts = data.split("subscribe_folder_");
    const folderId = parts.length > 1 ? parts[1] : null;

    if (!folderId) {
        console.log("Некорректный формат callbackQuery.data");
        await ctx.reply("Произошла ошибка. Попробуйте еще раз.");
        return;
    }

    const chatId: string = ctx.chat?.id.toString()!;

    const replyOptions: any = {
        parse_mode: "HTML",
        reply_markup: generateMenuKeyboard(),
    };
    
    const user: any = await userService.getUserByChatId(chatId);
     if (user.folders.length >= MAX_SUBSCRIPTIONS) {
        await ctx.reply(
            `⚠️ Вы достигли максимального количества подписок (${MAX_SUBSCRIPTIONS}).`,
            replyOptions
        );
        return;
    }
    
    await userService.addToUserFolder(user.dataValues.id, folderId);

    await ctx.reply(`✅ Вы успешно подписались на папку!`);
}

export {
    handleSubscribeFolder,
    handleSubscribeFolderCallback
}
