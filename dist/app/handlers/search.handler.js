"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUserMessageForSearch = exports.handleSearchCommand = void 0;
const geo_1 = require("app/utils/geo");
const geo_service_1 = __importDefault(require("../services/geo.service"));
const message_service_1 = __importDefault(require("../services/message.service"));
const menu_keyboard_1 = __importDefault(require("../keyboards/menu.keyboard"));
const userSearchState = new Map();
const buildSearchTokensByInput = async (input) => {
    const geo = await geo_service_1.default.findCountriesAndCitiesByKeywords(input);
    if (geo.countryMatches.length) {
        const countryId = geo.countryMatches[0].id;
        const cities = await geo_service_1.default.getAllCitiesByCountry(countryId);
        const all = cities
            .flatMap(c => Array.isArray(c.keywords) ? c.keywords : [])
            .map((k) => k.toLowerCase());
        return (0, geo_1.uniqLimit)(all, 400);
    }
    if (geo.cityMatches.length) {
        const all = geo.cityMatches
            .flatMap(c => Array.isArray(c.keywords) ? c.keywords : [])
            .map((k) => k.toLowerCase());
        return (0, geo_1.uniqLimit)(all, 200);
    }
    return (0, geo_1.uniqLimit)((0, geo_1.normalizeWords)(input), 20);
};
function parseOriginDestination(input) {
    const cleaned = input.replace(/->|→|<-|<−|-/g, " ");
    const parts = cleaned.split(/\s+/).filter(Boolean);
    if (parts.length < 2) {
        return null;
    }
    const origin = parts[0];
    const destination = parts[parts.length - 1];
    return { origin, destination };
}
const handleSearchCommand = async (ctx) => {
    await ctx.reply("Введите город/страну (откуда → куда) для поиска по всем подписанным группам:");
};
exports.handleSearchCommand = handleSearchCommand;
const handleUserMessageForSearch = async (ctx) => {
    const query = ctx.message?.text?.trim();
    if (!query) {
        return ctx.reply("⚠️ Введите текст запроса для поиска.");
    }
    const parsed = parseOriginDestination(query);
    if (!parsed) {
        return ctx.reply("⚠️ Нужен формат: откуда → куда (например: Ташкент Москва)");
    }
    const originTokens = await buildSearchTokensByInput(parsed.origin);
    const destinationTokens = await buildSearchTokensByInput(parsed.destination);
    console.log("origin:", parsed.origin, originTokens.slice(0, 40), originTokens.length);
    console.log("dest:", parsed.destination, destinationTokens.slice(0, 40), destinationTokens.length);
    if (!originTokens.length || !destinationTokens.length) {
        return ctx.reply("❌ Не найдено городов/стран по вашему запросу.");
    }
    const results = await message_service_1.default.searchMessages(originTokens, destinationTokens);
    if (!results.rows.length) {
        return ctx.reply("❌ Ничего не найдено.");
    }
    await ctx.reply(`🔎 Найдено сообщений: ${results.count}`);
    await ctx.reply(`🔎 Отправленно последние ${results.rows.length} сообщений`);
    for (const res of results.rows) {
        try {
            await ctx.api.forwardMessage(ctx.chat.id, Number(res.group_id), Number(res.message_id));
        }
        catch (error) {
            if (error) {
                await ctx.reply(res.dataValues.text);
            }
        }
    }
    await ctx.reply("✅ Поиск завершён.", {
        reply_markup: (0, menu_keyboard_1.default)()
    });
};
exports.handleUserMessageForSearch = handleUserMessageForSearch;
