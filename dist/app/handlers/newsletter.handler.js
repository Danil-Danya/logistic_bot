"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleNewsletterStart = exports.newsletterHandler = void 0;
const user_service_1 = __importDefault(require("../services/user.service"));
const newsletter_state_1 = __importDefault(require("../states/newsletter.state"));
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const handleNewsletterStart = async (ctx) => {
    const chatId = ctx.chat?.id.toString();
    newsletter_state_1.default.add(chatId);
    await ctx.reply(`📂 <b>Рассылка</b>\n\n` +
        `Отправьте сообщение, которое нужно разослать по группам из ваших папок.\n\n` +
        `❗ Сообщение будет отправлено <b>во все группы</b>, на которые вы подписаны.`, {
        parse_mode: "HTML",
    });
};
exports.handleNewsletterStart = handleNewsletterStart;
const newsletterHandler = async (ctx) => {
    const chatId = ctx.chat?.id.toString();
    const message = ctx.message?.text;
    if (!message) {
        return;
    }
    const user = await user_service_1.default.getUserByChatId(chatId);
    if (!user || !user.folders?.length) {
        await ctx.reply("❌ У вас нет подписок на папки.");
        return;
    }
    const groups = [];
    user.folders.forEach((folder) => {
        if (folder.groups?.length) {
            groups.push(...folder.groups);
        }
    });
    if (!groups.length) {
        await ctx.reply("❌ В выбранных папках нет групп.");
        return;
    }
    let success = 0;
    let failed = 0;
    for (const group of groups) {
        const chatIdToSend = group.dataValues.group_id;
        if (!chatIdToSend) {
            console.log("Нет group_id:", group.dataValues);
            failed++;
            continue;
        }
        try {
            await ctx.api.sendMessage(chatIdToSend, message);
            success++;
        }
        catch (error) {
            failed++;
            console.error(`Ошибка отправки в группу ${chatIdToSend}`, error);
        }
        await sleep(3000);
    }
    await ctx.reply(`✅ Рассылка завершена\n\n` +
        `Успешно: <b>${success}</b>\n` +
        `Ошибок: <b>${failed}</b>`, {
        parse_mode: "HTML",
    });
};
exports.newsletterHandler = newsletterHandler;
