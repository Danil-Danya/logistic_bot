"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const message_model_1 = __importDefault(require("../../core/database/models/message.model"));
const sequelize_1 = require("sequelize");
class MessageService {
    async createMessage(data) {
        const newMessage = await message_model_1.default.create(data);
        return newMessage;
    }
    async searchMessages(originTokens, destinationTokens) {
        const messages = await message_model_1.default.findAll({
            where: {
                [sequelize_1.Op.and]: [
                    { [sequelize_1.Op.or]: originTokens.map(t => ({ text: { [sequelize_1.Op.iLike]: `%${t}%` } })) },
                    { [sequelize_1.Op.or]: destinationTokens.map(t => ({ text: { [sequelize_1.Op.iLike]: `%${t}%` } })) }
                ]
            },
            limit: 10,
            order: [["created_at", "DESC"]],
        });
        return messages;
    }
}
exports.default = new MessageService;
