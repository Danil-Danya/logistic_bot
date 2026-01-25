"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUserMessageForSearch = exports.handleSearchCommand = void 0;
const geo_service_1 = __importDefault(require("../services/geo.service"));
const message_service_1 = __importDefault(require("../services/message.service"));
const userSearchState = new Map();
function parseOriginDestination(input) {
    const cleaned = input.replace(/->|→|<-|<−|-/g, " ");
    const parts = cleaned.split(/\s+/).filter(Boolean);
    if (parts.length < 2)
        return null;
    const origin = parts[0];
    const destination = parts[parts.length - 1];
    return { origin, destination };
}
const handleSearchCommand = async (ctx) => {
    await ctx.reply("Введите город/страну (откуда → куда) для поиска по всем подписанным группам:");
};
exports.handleSearchCommand = handleSearchCommand;
const handleUserMessageForSearch = async (ctx) => {
    const userId = ctx.from?.id;
    if (!userId)
        return;
    const state = userSearchState.get(userId);
    if (!state)
        return;
    const query = ctx.message?.text?.trim();
    if (!query)
        return ctx.reply("⚠️ Введите текст запроса для поиска.");
    const parsed = parseOriginDestination(query);
    if (!parsed)
        return ctx.reply("⚠️ Нужен формат: откуда → куда (например: Ташкент Москва)");
    const { origin, destination } = parsed;
    const { countryMatches, cityMatches } = await geo_service_1.default.findCountriesAndCities(`${origin} ${destination}`);
    const originCities = countryMatches.length
        ? await geo_service_1.default.getAllCitiesByCountry(countryMatches[0].id)
        : cityMatches.filter(c => c.name_rus.toLowerCase().includes(origin.toLowerCase()));
    const destinationCities = countryMatches.length
        ? await geo_service_1.default.getAllCitiesByCountry(countryMatches[0].id)
        : cityMatches.filter(c => c.name_rus.toLowerCase().includes(destination.toLowerCase()));
    if (!originCities.length || !destinationCities.length) {
        userSearchState.delete(userId);
        return ctx.reply("❌ Не найдено городов/стран по вашему запросу.");
    }
    const originTokens = originCities.map(c => c.name_rus);
    const destinationTokens = destinationCities.map(c => c.name_rus);
    const results = await message_service_1.default.searchMessages(originTokens, destinationTokens);
    if (!results.length) {
        userSearchState.delete(userId);
        return ctx.reply("❌ Ничего не найдено.");
    }
    await ctx.reply(`🔎 Найдено сообщений: ${results.length}`);
    for (const res of results) {
        try {
            await ctx.api.forwardMessage(ctx.chat.id, Number(res.group_id), Number(res.message_id));
        }
        catch (err) {
            console.error("Ошибка пересылки:", err.message);
        }
    }
    userSearchState.delete(userId);
    await ctx.reply("✅ Поиск завершён.");
};
exports.handleUserMessageForSearch = handleUserMessageForSearch;
