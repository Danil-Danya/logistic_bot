import groupService from "../services/group.service.ts";
const handleBotAddedToGroup = async (ctx) => {
    try {
        const chat = ctx.chat;
        if (chat.type !== "group" && chat.type !== "supergroup") {
            return;
        }
        await groupService.creteGroup(chat);
        await ctx.reply(`👋 Привет, я теперь в группе <b>${chat.title}</b>!\n` +
            `Все сообщения отсюда будут сохраняться.`, { parse_mode: "HTML" });
    }
    catch (error) {
        console.error("Ошибка при добавлении группы:", error);
    }
};
export { handleBotAddedToGroup };
