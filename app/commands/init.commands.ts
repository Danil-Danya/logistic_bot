import { Bot } from "grammy";
import startCommand from "./start.commands";

import sequelize from "../../plugins/sequelize";

import { handleBotAddedToGroup } from "../handlers/group.handler";
import { handleGroupMessage } from "../handlers/message.handler";
import { handleSearchCommand, handleSearchSelection, handleUserMessageForSearch } from "../handlers/search.handler";

const initCommands = async (bot: Bot) => {
    try {
        bot.api.setMyCommands([
            { command: "start", description: "Начать работу с ботом" },
            { command: "help", description: "Получить помощь по боту" },
            { command: "menu", description: "Вернуться в главное меню" },
        ]);

        bot.command("start", startCommand);

        bot.on("my_chat_member", handleBotAddedToGroup);
        bot.callbackQuery("search", handleSearchCommand);
        bot.callbackQuery(/search_(all|group_)/, handleSearchSelection);

        bot.on("message:text", async (ctx, next) => {
            if (ctx.chat.type === "private") {
                await handleUserMessageForSearch(ctx);
                return;
            }
            return next();
        });


        bot.on("message:text", async (ctx) => {
            if (ctx.chat.type === "group" || ctx.chat.type === "supergroup") {
                await handleGroupMessage(ctx);
            }
        });
    }
    catch (error) {
        console.log(error);
    }
};

export default initCommands;
