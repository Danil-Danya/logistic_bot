import { InlineKeyboard } from "grammy"

const generateBackKeyboard = async () => {
    const keyboard = new InlineKeyboard();

    keyboard.text('📋Назад в главное меню', 'main_menu');

    return keyboard;
}

export default generateBackKeyboard;