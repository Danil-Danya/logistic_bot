"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUserMessageForSearch = exports.handleSearchSelection = exports.handleSearchCommand = void 0;
const group_keyboard_1 = __importDefault(require("../keyboards/group.keyboard"));
const message_model_1 = __importDefault(require("../../core/database/models/message.model"));
const sequelize_1 = require("sequelize");
const userSearchState = new Map();
const handleSearchCommand = async (ctx) => {
    const keyboard = await (0, group_keyboard_1.default)();
    await ctx.reply("Выберите группу, по которой искать грузы:", { reply_markup: keyboard });
};
exports.handleSearchCommand = handleSearchCommand;
const handleSearchSelection = async (ctx) => {
    const data = ctx.callbackQuery?.data;
    if (!data) {
        console.log("Нет callbackQuery.data");
        return;
    }
    const isAll = data === "search_all";
    let groupId = null;
    if (!isAll) {
        const parts = data.split("search_group_");
        groupId = parts.length > 1 ? parts[1] : null;
    }
    userSearchState.set(ctx.from.id, { isAll, groupId });
    await ctx.reply(isAll
        ? "Введите ключевые слова для поиска по всем группам:"
        : `Введите ключевые слова для поиска в выбранной группе (${groupId}):`);
};
exports.handleSearchSelection = handleSearchSelection;
const handleUserMessageForSearch = async (ctx) => {
    const userId = ctx.from?.id;
    if (!userId)
        return;
    const state = userSearchState.get(userId);
    if (!state) {
        return;
    }
    const query = ctx.message?.text?.trim();
    if (!query) {
        return ctx.reply("⚠️ Введите текст запроса для поиска.");
    }
    console.log(state.groupId);
    const where = state.isAll
        ? { text: { [sequelize_1.Op.iLike]: `%${query}%` } }
        : { group_id: state.groupId?.toString(), text: { [sequelize_1.Op.iLike]: `%${query}%` } };
    const results = await message_model_1.default.findAll({ where, limit: 10 });
    if (!results.length) {
        userSearchState.delete(userId);
        return ctx.reply("❌ Ничего не найдено.");
    }
    await ctx.reply(`🔎 Найдено сообщений: ${results.length}`);
    for (const res of results) {
        try {
            await ctx.api.forwardMessage(ctx.chat.id, Number(res.dataValues.group_id), Number(res.dataValues.message_id));
        }
        catch (err) {
            console.error("Ошибка пересылки:", err.message);
        }
    }
    userSearchState.delete(userId);
    await ctx.reply("✅ Поиск завершён.");
};
exports.handleUserMessageForSearch = handleUserMessageForSearch;
