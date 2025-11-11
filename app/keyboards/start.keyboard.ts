import { Context, InlineKeyboard } from 'grammy';

const startKeyboard = new InlineKeyboard()
    .text('🔍 Поиск груза', 'search').row()
    .text('📢 Подписка', 'subscribe').row()
    .text('🏠 Главное меню', 'main_menu').row();


export default startKeyboard;