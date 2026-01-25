"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const menu_keyboard_1 = __importDefault(require("../keyboards/menu.keyboard"));
const user_service_1 = __importDefault(require("../services/user.service"));
const folder_handler_1 = require("../handlers/folder.handler");
const MAX_SUBSCRIPTIONS = 2;
const startCommand = async (ctx) => {
    try {
        await user_service_1.default.createUser(ctx);
        await ctx.reply(`<b>Добро пожаловать в YUKO Logistic Bot</b> 🚛\n\n` +
            `Данный бот предназначен для поиска и публикации логистических объявлений.\n\n` +
            `Пожалуйста, внимательно следуйте инструкциям ниже 👇`, {
            parse_mode: "HTML",
        });
        const chatId = ctx.chat?.id.toString();
        const user = await user_service_1.default.getUserByChatId(chatId);
        if (user.folders.length < MAX_SUBSCRIPTIONS) {
            await ctx.reply(`⚠️ Похоже, у вас еще нет папок для подписки на рассылки.\n\n` +
                `Пожалуйста, Подпишитесь на папки из сообщение ниже 👇`, {
                parse_mode: "HTML",
            });
            await (0, folder_handler_1.handleSubscribeFolder)(ctx);
        }
        else {
            await ctx.reply(`Добро пожаловать в главное меню YUKO Logistic Bot! 🚛\n\n` +
                `Вы можете воспользоваться следующими функциями:\n\n` +
                `🔍 <b>Поиск груза</b> — найдите подходящие объявления по параметрам.\n` +
                `📂 <b>Рассылка</b> — подпишитесь на папки и получайте уведомления о новых объявлениях.\n` +
                `⚙️ <b>Настройки</b> — управляйте подписками, языком и другими параметрами.\n\n` +
                `Выберите нужный раздел с помощью кнопок ниже.`, {
                parse_mode: 'HTML',
                reply_markup: (0, menu_keyboard_1.default)()
            });
        }
    }
    catch (error) {
        console.error("Ошибка в /start:", error);
        await ctx.reply("Произошла ошибка при запуске. Попробуйте позже.");
    }
};
exports.default = startCommand;
