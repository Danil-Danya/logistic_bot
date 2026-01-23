"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGroupMessage = void 0;
const group_service_1 = __importDefault(require("../services/group.service"));
const message_service_1 = __importDefault(require("../services/message.service"));
const handleGroupMessage = async (ctx) => {
    try {
        if (!ctx.chat || !ctx.message) {
            return;
        }
        const chat = ctx.chat;
        if (chat.type !== "group" && chat.type !== "supergroup") {
            return;
        }
        const chatId = chat.id.toString();
        const group = await group_service_1.default.findByGroupId(chatId);
        if (!group) {
            throw new Error("Данной группы не существует");
        }
        await message_service_1.default.createMessage({
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
exports.handleGroupMessage = handleGroupMessage;
