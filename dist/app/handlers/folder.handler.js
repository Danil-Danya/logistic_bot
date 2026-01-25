"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSubscribeFolderCallback = exports.handleSubscribeFolder = void 0;
const user_service_1 = __importDefault(require("../services/user.service"));
const folder_service_1 = __importDefault(require("../services/folder.service"));
const folder_keyboard_1 = __importDefault(require("../keyboards/folder.keyboard"));
const menu_keyboard_1 = __importDefault(require("../keyboards/menu.keyboard"));
const MAX_SUBSCRIPTIONS = 2;
const handleSubscribeFolder = async (ctx) => {
    const chatId = ctx.chat?.id.toString();
    const folders = await folder_service_1.default.getAllFolders();
    const user = await user_service_1.default.getUserByChatId(chatId);
    const subscribedFolders = user.folders.length;
    const availableToSubscribe = Math.max(MAX_SUBSCRIPTIONS - subscribedFolders, 0);
    const subscribedIds = new Set(user.folders.map((f) => f.id));
    const availableFolders = folders.rows.filter((folder) => {
        return !subscribedIds.has(folder.id);
    });
    const foldersText = folders.rows
        .map((folder, index) => {
        const folderValue = folder.dataValues;
        return `<a href="${folderValue.link}">${index + 1}. ${folderValue.name}</a>`;
    })
        .join("\n\n");
    const replyOptions = {
        parse_mode: "HTML",
    };
    if (availableToSubscribe > 0) {
        replyOptions.reply_markup = (0, folder_keyboard_1.default)(availableFolders);
    }
    await ctx.reply(`📂 <b>Доступные папки для подписки:</b>\n\n${foldersText}\n\n` +
        `ℹ️ <b>Информация о подписке</b>\n` +
        `Вы подписаны на: <b>${subscribedFolders}</b>\n` +
        `Доступно для подписки: <b>${availableToSubscribe}</b> из <b>${MAX_SUBSCRIPTIONS}</b>\n\n` +
        `Выберите папку из клавиатуры ниже, чтобы подписаться на рассылку объявлений.`, replyOptions);
};
exports.handleSubscribeFolder = handleSubscribeFolder;
const handleSubscribeFolderCallback = async (ctx) => {
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
    const chatId = ctx.chat?.id.toString();
    const replyOptions = {
        parse_mode: "HTML",
        reply_markup: (0, menu_keyboard_1.default)(),
    };
    const user = await user_service_1.default.getUserByChatId(chatId);
    if (user.folders.length >= MAX_SUBSCRIPTIONS) {
        await ctx.reply(`⚠️ Вы достигли максимального количества подписок (${MAX_SUBSCRIPTIONS}).`, replyOptions);
        return;
    }
    await user_service_1.default.addToUserFolder(user.dataValues.id, folderId);
    await ctx.reply(`✅ Вы успешно подписались на папку!`);
};
exports.handleSubscribeFolderCallback = handleSubscribeFolderCallback;
