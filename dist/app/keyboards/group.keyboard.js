"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const group_service_1 = __importDefault(require("../services/group.service"));
const generateGroupKeyboard = async () => {
    const keyboard = new grammy_1.InlineKeyboard().text("🔎 По всем группам", "search_all").row();
    const groups = await group_service_1.default.findAllGroups({ page: 1, limit: 10 });
    for (const group of groups.rows) {
        keyboard.text(group.dataValues.title || group.dataValues.group_id).row();
    }
    return keyboard;
};
exports.default = generateGroupKeyboard;
