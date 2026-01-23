"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const message_model_1 = __importDefault(require("../../core/database/models/message.model"));
class MessageService {
    async createMessage(data) {
        const newMessage = await message_model_1.default.create(data);
        return newMessage;
    }
}
exports.default = new MessageService;
