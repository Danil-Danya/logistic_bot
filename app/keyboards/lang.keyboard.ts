import { InlineKeyboard } from "grammy";

const generateLangKeyboard = () => {
    return new InlineKeyboard()
        .text("🇷🇺 Русский", "lang:rus")
        .text("🇺🇿 O‘zbek", "lang:uzb")
        .text("🇬🇧 English", "lang:eng");
};

export default generateLangKeyboard;
