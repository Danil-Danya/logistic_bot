"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const message_model_1 = __importDefault(require("../../core/database/models/message.model"));
const delete_duplicates_1 = __importDefault(require("app/utils/delete-duplicates"));
const sequelize_1 = require("sequelize");
const buildLikeAnyCondition = (field, tokens) => {
    const patterns = tokens.map(t => `%${t.replace(/%/g, "\\%").replace(/_/g, "\\_")}%`);
    if (!patterns.length) {
        return null;
    }
    const sqlArray = patterns.map(p => `'${p.replace(/'/g, "''")}'`).join(",");
    return (0, sequelize_1.literal)(`"${field}" ILIKE ANY(ARRAY[${sqlArray}])`);
};
class MessageService {
    async createMessage(data) {
        const executeMessage = await message_model_1.default.findOne({ where: { text: data.text } });
        if (executeMessage) {
            console.log('Сообщение с данным текстом уже существует');
            return;
        }
        const newMessage = await message_model_1.default.create(data);
        return newMessage;
    }
    async searchMessages(originTokens, destinationTokens) {
        const originCond = buildLikeAnyCondition("text", originTokens);
        const destCond = buildLikeAnyCondition("text", destinationTokens);
        if (!originCond || !destCond) {
            return { rows: [], count: 0 };
        }
        const messages = await message_model_1.default.findAndCountAll({
            where: {
                [sequelize_1.Op.and]: [originCond, destCond]
            },
            limit: 150,
        });
        const uniqueMessages = (0, delete_duplicates_1.default)(messages);
        return uniqueMessages;
    }
}
exports.default = new MessageService();
