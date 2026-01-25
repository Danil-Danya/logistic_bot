import { Context } from "grammy";
import generateGroupKeyboard from "../keyboards/group.keyboard";
import GeoService from "../services/geo.service";
import MessageService from "../services/message.service";

const userSearchState = new Map<number, { isAll: boolean; groupId: string | null }>();

function parseOriginDestination(input: string) {
    const cleaned = input.replace(/->|→|<-|<−|-/g, " ");
    const parts = cleaned.split(/\s+/).filter(Boolean);

    if (parts.length < 2) return null;

    const origin = parts[0];
    const destination = parts[parts.length - 1];

    return { origin, destination };
}

export const handleSearchCommand = async (ctx: Context) => {
    await ctx.reply("Введите город/страну (откуда → куда) для поиска по всем подписанным группам:");
};

export const handleUserMessageForSearch = async (ctx: Context) => {
    const query = ctx.message?.text?.trim();
    if (!query) return ctx.reply("⚠️ Введите текст запроса для поиска.");

    const parsed = parseOriginDestination(query);
    if (!parsed) return ctx.reply("⚠️ Нужен формат: откуда → куда (например: Ташкент Москва)");

    const { origin, destination } = parsed;

    const originGeo = await GeoService.findCountriesAndCities(origin);
    const destinationGeo = await GeoService.findCountriesAndCities(destination);

    const originCities = originGeo.countryMatches.length
        ? await GeoService.getAllCitiesByCountry(originGeo.countryMatches[0].id)
        : originGeo.cityMatches
            .filter(c => c && c.name_rus)
            .filter(c => c.name_rus.toLowerCase().includes(origin.toLowerCase()));

    const destinationCities = destinationGeo.countryMatches.length
        ? await GeoService.getAllCitiesByCountry(destinationGeo.countryMatches[0].id)
        : destinationGeo.cityMatches
            .filter(c => c && c.name_rus)
            .filter(c => c.name_rus.toLowerCase().includes(destination.toLowerCase()));

    if (!originCities.length && !destinationCities.length) {
        return ctx.reply("❌ Не найдено городов/стран по вашему запросу.");
    }

    const originTokens = originCities.map(c => c.name_rus);
    const destinationTokens = destinationCities.map(c => c.name_rus);

    const results = await MessageService.searchMessages(originTokens, destinationTokens);

    if (!results.length) {
        return ctx.reply("❌ Ничего не найдено.");
    }

    await ctx.reply(`🔎 Найдено сообщений: ${results.length}`);

    for (const res of results) {
        await ctx.api.forwardMessage(
            ctx.chat!.id, 
            Number(res.dataValues.group_id), 
            Number(res.dataValues.message_id)
        );
    }

    await ctx.reply("✅ Поиск завершён.");
};


