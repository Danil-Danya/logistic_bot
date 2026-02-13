import { Context } from "grammy";
import { t, Lang } from "core/i18n.init";
import { uniqLimit, normalizeWords } from "app/utils/geo";

import GeoService from "../services/geo.service";
import MessageService from "../services/message.service";
import generateMenuKeyboard from "../keyboards/menu.keyboard";
import userService from "app/services/user.service";

const userSearchState = new Map<number, { isAll: boolean; groupId: string | null }>();

const buildSearchTokensByInput = async (input: string): Promise<string[]> => {
    const geo = await GeoService.findCountriesAndCitiesByKeywords(input);

    if (geo.countryMatches.length) {
        const countryId: string = geo.countryMatches[0].id;
        const cities: any[] = await GeoService.getAllCitiesByCountry(countryId);

        const all = cities
            .flatMap(c => Array.isArray(c.keywords) ? c.keywords : [])
            .map((k: string) => k.toLowerCase());

        return uniqLimit(all, 400);
    }

    if (geo.cityMatches.length) {
        const all = geo.cityMatches
            .flatMap(c => Array.isArray(c.keywords) ? c.keywords : [])
            .map((k: string) => k.toLowerCase());

        return uniqLimit(all, 200);
    }

    return uniqLimit(normalizeWords(input), 20);
};

function parseOriginDestination(input: string) {
    const cleaned = input.replace(/->|→|<-|<−|-/g, " ");
    const parts = cleaned.split(/\s+/).filter(Boolean);

    if (parts.length < 2) {
        return null;
    }

    const origin = parts[0];
    const destination = parts[parts.length - 1];

    return { origin, destination };
}

export const handleSearchCommand = async (ctx: Context) => {
    const chatId: string = ctx.chat?.id.toString()!;
    const user: any = await userService.getUserByChatId(chatId);
    const lang: Lang = user.dataValues.lang;

    await ctx.reply(t(lang, "search_enter_prompt"));
};

export const handleUserMessageForSearch = async (ctx: Context) => {
    const startedAt = Date.now();
    const query = ctx.message?.text?.trim();

    const chatId: string = ctx.chat?.id.toString()!;
    const user: any = await userService.getUserByChatId(chatId);
    const lang: Lang = user.dataValues.lang;

    if (!query) {
        return ctx.reply(t(lang, "search_empty_query"));
    }

    const parsed = parseOriginDestination(query);

    if (!parsed) {
        return ctx.reply(t(lang, "search_wrong_format"));
    }

    const originTokens = await buildSearchTokensByInput(parsed.origin);
    const destinationTokens = await buildSearchTokensByInput(parsed.destination);

    if (!originTokens.length || !destinationTokens.length) {
        return ctx.reply(t(lang, "search_geo_not_found"));
    }

    const results = await MessageService.searchMessages(originTokens, destinationTokens);

    if (!results.rows.length) {
        return ctx.reply(t(lang, "search_no_results"));
    }

    const endedAt = Date.now();
    const elapsedMs = endedAt - startedAt;

    console.log(`Search time: ${elapsedMs} ms (${(elapsedMs / 1000).toFixed(2)} sec)`);

    // await ctx.reply(`🔎 Найдено сообщений: ${results.count}`);

    await ctx.reply(
        t(lang, "search_sent_last_messages")
            .replace("{count}", String(results.rows.length))
    );

    for (const res of results.rows) {
        try {
            await ctx.api.forwardMessage(
                ctx.chat!.id,
                Number(res.group_id),
                Number(res.message_id)
            );
        }
        catch (error) {
            if (error) {
                await ctx.reply(res.dataValues.text);
            }
        }
    }

    await ctx.reply(
        t(lang, "main_menu"),
        {
            reply_markup: generateMenuKeyboard(lang),
            parse_mode: 'HTML'
        }
    );
};
