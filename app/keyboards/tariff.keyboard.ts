import { InlineKeyboard } from "grammy";
import { t, Lang } from "core/i18n.init";

const generateTariffsKeyboard = (lang: Lang) => {
    const keyboard = new InlineKeyboard()
        .text(t(lang, "btn_my_tariff"), "tariffs_my").row()
        .text(t(lang, "btn_buy_tariff"), "tariffs_buy").row()
        .text(t(lang, "btn_back_main_menu"), "main_menu");

    return keyboard;
};

const generateTariffPaymentKeyboard = (lang: Lang, code: string) => {
    const keyboard = new InlineKeyboard()
        .text(t(lang, "btn_payme"), `tariff_pay:payme:${code}`)
        .text(t(lang, "btn_click"), `tariff_pay:click:${code}`)
        .row()
        .text(t(lang, "btn_back_tariffs"), "tariffs");

    return keyboard;
};

const generateBackToTariffsKeyboard = (lang: Lang) => {
    const keyboard = new InlineKeyboard()
        .text(t(lang, "btn_back_tariffs"), "tariffs").row()
        .text(t(lang, "btn_back_main_menu"), "main_menu");

    return keyboard;
};

export {
    generateTariffsKeyboard,
    generateTariffPaymentKeyboard,
    generateBackToTariffsKeyboard
};
