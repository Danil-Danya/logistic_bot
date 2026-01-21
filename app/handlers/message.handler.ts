import { Context } from "grammy";

import groupService from "../services/group.service";
import messageService from "../services/message.service";

const handleGroupMessage = async (ctx: Context) => {
    try {
        if (!ctx.chat || !ctx.message) {
            return;
        }

        const chat = ctx.chat;

        if (chat.type !== "group" && chat.type !== "supergroup") {
            return;
        }

        const chatId = chat.id.toString();

        const group = await groupService.findByGroupId(chatId);
        if (!group) {
            throw new Error("Данной группы не существует");
        }

        await messageService.createMessage({
            message_id: ctx.message.message_id,
            author_name: ctx.message.from?.first_name ?? "Неизвестный",
            text: ctx.message.text ?? "",
            group_id: group.dataValues.group_id,
        });
    }
    catch (error) {
        console.log("Ошибка при сохранении сообщения:", error);
    }
};

export {
    handleGroupMessage
};

