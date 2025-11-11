import { Context } from "grammy";
import groupService from "../services/group.service.ts";
import messageService from "../services/message.service.ts";

const handleGroupMessage = async (ctx: Context) => {
    try {
        const chat = ctx.chat;
        if (chat.type !== "group" && chat.type !== "supergroup") {
            throw new Error('Тип группы могут быть: "group", "supergroup"');
        }

        const chatId = chat.id.toString();
        console.log();

        const group = await groupService.findByGroupId(chatId);
        if (!group) {
            throw new Error('Данной группы не существует');
        }
        
        await messageService.createMessage({
            message_id: ctx.message?.message_id,
            author_name: ctx.message.from?.first_name || "Неизвестный",
            text: ctx.message.text,
            group_id: group.dataValues.group_id,
        });
    } 
    catch (error) {
        console.log("Ошибка при сохранении сообщения:", error);
    }
}

export {
    handleGroupMessage
}
