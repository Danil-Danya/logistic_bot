import { Context, InlineKeyboard } from "grammy";
import generateGroupKeyboard from "../keyboards/group.keyboard";
import Message from "../../core/database/models/message.model";
import { Op } from "sequelize";

const userSearchState = new Map<number, { isAll: boolean; groupId: string | null }>();

export const handleSearchCommand = async (ctx: Context) => {
    const keyboard = await generateGroupKeyboard();
    await ctx.reply("Выберите группу, по которой искать грузы:", { reply_markup: keyboard });
};

export const handleSearchSelection = async (ctx: Context) => {
    const data = ctx.callbackQuery?.data;
    if (!data) {
        console.log("Нет callbackQuery.data");
        return;
    }

    const isAll = data === "search_all";
    let groupId: string | null = null;

    if (!isAll) {
        const parts = data.split("search_group_");
        groupId = parts.length > 1 ? parts[1] : null;
    }

    userSearchState.set(ctx.from!.id, { isAll, groupId });

    await ctx.reply(
        isAll
            ? "Введите ключевые слова для поиска по всем группам:"
            : `Введите ключевые слова для поиска в выбранной группе (${groupId}):`
    );
};


export const handleUserMessageForSearch = async (ctx: Context) => {
    const userId = ctx.from?.id;
    if (!userId) return;

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
        ? { text: { [Op.iLike]: `%${query}%` } }
        : { group_id: state.groupId?.toString(), text: { [Op.iLike]: `%${query}%` } };

    const results = await Message.findAll({ where, limit: 10 });

    if (!results.length) {
        userSearchState.delete(userId);
        return ctx.reply("❌ Ничего не найдено.");
    }

    await ctx.reply(`🔎 Найдено сообщений: ${results.length}`);

    for (const res of results) {
        try {
            await ctx.api.forwardMessage(
                ctx.chat!.id,         
                Number(res.dataValues.group_id),  
                Number(res.dataValues.message_id)  
            );
        }
        catch (err: any) {
            console.error("Ошибка пересылки:", err.message);
        }
    }

    userSearchState.delete(userId);
    await ctx.reply("✅ Поиск завершён.");
};
