import { Bot } from "grammy";
import startCommand from "./start.commands.ts";

import sequelize from "../../plugins/sequelize.ts";

import { handleBotAddedToGroup } from "../handlers/group.handler.ts";
import { handleGroupMessage } from "../handlers/message.handler.ts";

const initCommands = async (bot: Bot) => {
    try {
        bot.api.setMyCommands([
            { command: "start", description: "Начать работу с ботом" },
            { command: "help", description: "Получить помощь по боту" },
            { command: "menu", description: "Вернуться в главное меню" },
        ]);

        bot.command("start", startCommand);

        bot.on("my_chat_member", handleBotAddedToGroup);
        bot.on("message:text", handleGroupMessage);
    }
    catch (error) {
        console.log(error);
    }
};

export default initCommands;
