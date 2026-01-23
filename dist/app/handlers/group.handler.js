"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBotAddedToGroup = void 0;
const group_service_1 = __importDefault(require("../services/group.service"));
const handleBotAddedToGroup = async (ctx) => {
    try {
        const chat = ctx.chat;
        if (!chat) {
            return;
        }
        if (chat.type !== "group" && chat.type !== "supergroup") {
            return;
        }
        await group_service_1.default.creteGroup(chat);
        await ctx.reply(`👋 Привет, я теперь в группе <b>${chat.title}</b>!\n` +
            `Все сообщения отсюда будут сохраняться.`, { parse_mode: "HTML" });
    }
    catch (error) {
        console.error("Ошибка при добавлении группы:", error);
    }
};
exports.handleBotAddedToGroup = handleBotAddedToGroup;
