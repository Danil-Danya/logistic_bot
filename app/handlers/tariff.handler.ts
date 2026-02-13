import { Context } from "grammy";
import { t, Lang } from "core/i18n.init";

import generateMenuKeyboard from "../keyboards/menu.keyboard";
import userService from "app/services/user.service";

import {
    generateTariffsKeyboard,
    generateTariffPaymentKeyboard,
    generateBackToTariffsKeyboard
} from "../keyboards/tariff.keyboard";

const tariffsMock = [
    {
        code: "premium_weekly",
        titleKey: "tariff_weekly_title",
        descKey: "tariff_weekly_desc",
        priceKey: "tariff_weekly_price"
    },
    {
        code: "premium_monthly",
        titleKey: "tariff_monthly_title",
        descKey: "tariff_monthly_desc",
        priceKey: "tariff_monthly_price"
    },
    {
        code: "premium_yearly",
        titleKey: "tariff_yearly_title",
        descKey: "tariff_yearly_desc",
        priceKey: "tariff_yearly_price"
    }
];


const handleTariffsMenu = async (ctx: Context) => {
    const chatId: string = ctx.chat?.id.toString()!;
        
    const user: any = await userService.getUserByChatId(chatId);
    const lang: Lang = user.dataValues.lang;

    await ctx.reply(t(lang, "tariffs_menu_title"), {
        parse_mode: "HTML",
        reply_markup: generateTariffsKeyboard(lang)
    });
};

const handleMyTariff = async (ctx: Context) => {
    const chatId: string = ctx.chat?.id.toString()!;
        
    const user: any = await userService.getUserByChatId(chatId);
    const lang: Lang = user.dataValues.lang;

    const text =
        `${t(lang, "my_tariff_title")}\n\n` +
        `${t(lang, "my_tariff_name")}\n` +
        `${t(lang, "my_tariff_desc")}`;

    await ctx.reply(text, {
        parse_mode: "HTML",
        reply_markup: generateBackToTariffsKeyboard(lang)
    });
};

const handleBuyTariff = async (ctx: Context) => {
    const chatId: string = ctx.chat?.id.toString()!;
        
    const user: any = await userService.getUserByChatId(chatId);
    const lang: Lang = user.dataValues.lang;

    await ctx.reply(t(lang, "buy_tariff_title"), {
        parse_mode: "HTML",
        reply_markup: generateBackToTariffsKeyboard(lang)
    });

    for (const item of tariffsMock) {
        const text =
            `<b>${t(lang, item.titleKey)}</b>\n` +
            `${t(lang, item.descKey)}\n\n` +
            `${t(lang, item.priceKey)}`;

        await ctx.reply(text, {
            parse_mode: "HTML",
            reply_markup: generateTariffPaymentKeyboard(lang, item.code)
        });
    }
};

const handleTariffPay = async (ctx: Context) => {
    const chatId: string = ctx.chat?.id.toString()!;
        
    const user: any = await userService.getUserByChatId(chatId);
    const lang: Lang = user.dataValues.lang;

    await ctx.answerCallbackQuery({
        text: t(lang, "payment_maintenance"),
        show_alert: true
    });
};

const handleMainMenu = async (ctx: Context) => {
    const chatId: string = ctx.chat?.id.toString()!;
        
    const user: any = await userService.getUserByChatId(chatId);
    const lang: Lang = user.dataValues.lang;

    await ctx.reply(t(lang, "main_menu"), {
        parse_mode: "HTML",
        reply_markup: generateMenuKeyboard(lang)
    });
};

export {
    handleTariffsMenu,
    handleMyTariff,
    handleBuyTariff,
    handleTariffPay,
    handleMainMenu
};
