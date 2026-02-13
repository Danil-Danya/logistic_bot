import { InlineKeyboard } from "grammy";
import { t, Lang } from "core/i18n.init";

const generateMenuKeyboard = (lang: Lang) => {
    const keyboard = new InlineKeyboard()
        .text(t(lang, "btn_search"), "search").row()
        .text(t(lang, "btn_newsletter"), "newsletter").row()
        .text(t(lang, "btn_tariffs"), "tariffs").row()
        .text(t(lang, "btn_sponsors"), "sponsors").row()
        .text(t(lang, "btn_settings"), "settings");

    return keyboard;
};

export default generateMenuKeyboard;
