"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const start_commands_1 = __importDefault(require("./start.commands"));
const group_handler_1 = require("../handlers/group.handler");
const message_handler_1 = require("../handlers/message.handler");
const search_handler_1 = require("../handlers/search.handler");
const initCommands = async (bot) => {
    try {
        bot.api.setMyCommands([
            { command: "start", description: "Начать работу с ботом" },
            { command: "help", description: "Получить помощь по боту" },
            { command: "menu", description: "Вернуться в главное меню" },
        ]);
        bot.command("start", start_commands_1.default);
        bot.on("my_chat_member", group_handler_1.handleBotAddedToGroup);
        bot.callbackQuery("search", search_handler_1.handleSearchCommand);
        bot.callbackQuery(/search_(all|group_)/, search_handler_1.handleSearchSelection);
        bot.on("message:text", async (ctx, next) => {
            if (ctx.chat.type === "private") {
                await (0, search_handler_1.handleUserMessageForSearch)(ctx);
                return;
            }
            return next();
        });
        bot.on("message:text", async (ctx) => {
            if (ctx.chat.type === "group" || ctx.chat.type === "supergroup") {
                await (0, message_handler_1.handleGroupMessage)(ctx);
            }
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = initCommands;
