import { Context, InlineKeyboard } from 'grammy';

const generateMenuKeyboard = () => {
    const startKeyboard = new InlineKeyboard()
        .text('🔍 Поиск груза', 'search').row()
        .text('📂 Рассылка', 'newsletter').row()
        .text('⚙️ Настройки', 'settings');

    return startKeyboard;
}


export default generateMenuKeyboard;