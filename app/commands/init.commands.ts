import { Bot } from "grammy";
import startCommand from "./start.commands";

import sequelize from "../../plugins/sequelize";
import newsletterState from "app/states/newsletter.state";

import { handleBotAddedToGroup } from "../handlers/group.handler";
import { handleGroupMessage } from "../handlers/message.handler";

import { handleSubscribeFolderCallback } from "../handlers/folder.handler";

import { 
    handleNewsletterStart, 
    newsletterHandler 
} from "app/handlers/newsletter.handler";

import { 
    handleSearchCommand, 
    handleUserMessageForSearch 
} from "../handlers/search.handler";

const initCommands = async (bot: Bot) => {
    try {
        bot.api.setMyCommands([
            { command: "start", description: "Начать работу с ботом" },
            { command: "help", description: "Получить помощь по боту" },
            { command: "menu", description: "Вернуться в главное меню" },
        ]);

        bot.command("start", startCommand);

        bot.on("my_chat_member", handleBotAddedToGroup);

        bot.callbackQuery("newsletter", handleNewsletterStart);
        bot.callbackQuery(/^subscribe_folder_(.+)$/, handleSubscribeFolderCallback);
        bot.callbackQuery("search", handleSearchCommand);

        bot.on("message:text", async (ctx, next) => {
            if (ctx.chat.type !== "private") {
                return next();
            }

            const chatId = ctx.chat.id.toString();

            if (newsletterState.has(chatId)) {
                newsletterState.delete(chatId);
                await newsletterHandler(ctx);
                return;
            }

            await handleUserMessageForSearch(ctx);
        });

        bot.on("message:text", async (ctx) => {
            console.log(123);
            
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
