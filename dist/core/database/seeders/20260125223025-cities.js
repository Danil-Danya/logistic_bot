'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const uuid_1 = require("uuid");
const up = async (queryInterface, sequelize) => {
    await queryInterface.bulkInsert('cities', [
        // Россия (ae6548ed-a6f3-4a2c-9a4c-9eaa610bd692)
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Москва',
            name_uzb: 'Moskva',
            name_eng: 'Moscow',
            country_id: 'ae6548ed-a6f3-4a2c-9a4c-9eaa610bd692',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Санкт-Петербург',
            name_uzb: 'Sankt-Peterburg',
            name_eng: 'Saint Petersburg',
            country_id: 'ae6548ed-a6f3-4a2c-9a4c-9eaa610bd692',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Новосибирск',
            name_uzb: 'Novosibirsk',
            name_eng: 'Novosibirsk',
            country_id: 'ae6548ed-a6f3-4a2c-9a4c-9eaa610bd692',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Екатеринбург',
            name_uzb: 'Yekaterinburg',
            name_eng: 'Yekaterinburg',
            country_id: 'ae6548ed-a6f3-4a2c-9a4c-9eaa610bd692',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Казань',
            name_uzb: 'Qazan',
            name_eng: 'Kazan',
            country_id: 'ae6548ed-a6f3-4a2c-9a4c-9eaa610bd692',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Нижний Новгород',
            name_uzb: 'Nijniy Novgorod',
            name_eng: 'Nizhny Novgorod',
            country_id: 'ae6548ed-a6f3-4a2c-9a4c-9eaa610bd692',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Челябинск',
            name_uzb: 'Chelyabinsk',
            name_eng: 'Chelyabinsk',
            country_id: 'ae6548ed-a6f3-4a2c-9a4c-9eaa610bd692',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Самара',
            name_uzb: 'Samara',
            name_eng: 'Samara',
            country_id: 'ae6548ed-a6f3-4a2c-9a4c-9eaa610bd692',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Омск',
            name_uzb: 'Omsk',
            name_eng: 'Omsk',
            country_id: 'ae6548ed-a6f3-4a2c-9a4c-9eaa610bd692',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Ростов-на-Дону',
            name_uzb: 'Rostov-na-Donu',
            name_eng: 'Rostov-on-Don',
            country_id: 'ae6548ed-a6f3-4a2c-9a4c-9eaa610bd692',
        },
        // Казахстан (59190a80-8f43-427c-97c8-9015d6e2a379)
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Алматы',
            name_uzb: 'Olmaota',
            name_eng: 'Almaty',
            country_id: '59190a80-8f43-427c-97c8-9015d6e2a379',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Нур-Султан',
            name_uzb: 'Nur-Sultan',
            name_eng: 'Nur-Sultan',
            country_id: '59190a80-8f43-427c-97c8-9015d6e2a379',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Шымкент',
            name_uzb: 'Shymkent',
            name_eng: 'Shymkent',
            country_id: '59190a80-8f43-427c-97c8-9015d6e2a379',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Караганда',
            name_uzb: 'Qaragʻanda',
            name_eng: 'Karaganda',
            country_id: '59190a80-8f43-427c-97c8-9015d6e2a379',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Актобе',
            name_uzb: 'Aqtobe',
            name_eng: 'Aktobe',
            country_id: '59190a80-8f43-427c-97c8-9015d6e2a379',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Тараз',
            name_uzb: 'Taraz',
            name_eng: 'Taraz',
            country_id: '59190a80-8f43-427c-97c8-9015d6e2a379',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Павлодар',
            name_uzb: 'Pavlodar',
            name_eng: 'Pavlodar',
            country_id: '59190a80-8f43-427c-97c8-9015d6e2a379',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Усть-Каменогорск',
            name_uzb: 'Ost-Kamenogorsk',
            name_eng: 'Oskemen',
            country_id: '59190a80-8f43-427c-97c8-9015d6e2a379',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Атырау',
            name_uzb: 'Atyrau',
            name_eng: 'Atyrau',
            country_id: '59190a80-8f43-427c-97c8-9015d6e2a379',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Костанай',
            name_uzb: 'Qostanay',
            name_eng: 'Kostanay',
            country_id: '59190a80-8f43-427c-97c8-9015d6e2a379',
        },
        // Узбекистан (11743a2c-fcbd-4d7b-afff-73fd3eb99a49)
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Ташкент',
            name_uzb: 'Toshkent',
            name_eng: 'Tashkent',
            country_id: '11743a2c-fcbd-4d7b-afff-73fd3eb99a49',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Самарканд',
            name_uzb: 'Samarqand',
            name_eng: 'Samarkand',
            country_id: '11743a2c-fcbd-4d7b-afff-73fd3eb99a49',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Бухара',
            name_uzb: 'Buxoro',
            name_eng: 'Bukhara',
            country_id: '11743a2c-fcbd-4d7b-afff-73fd3eb99a49',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Наманган',
            name_uzb: 'Namangan',
            name_eng: 'Namangan',
            country_id: '11743a2c-fcbd-4d7b-afff-73fd3eb99a49',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Андижан',
            name_uzb: 'Andijon',
            name_eng: 'Andijan',
            country_id: '11743a2c-fcbd-4d7b-afff-73fd3eb99a49',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Фергана',
            name_uzb: 'Fargʻona',
            name_eng: 'Fergana',
            country_id: '11743a2c-fcbd-4d7b-afff-73fd3eb99a49',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Коканд',
            name_uzb: 'Qoʻqon',
            name_eng: 'Kokand',
            country_id: '11743a2c-fcbd-4d7b-afff-73fd3eb99a49',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Наваи',
            name_uzb: 'Navoiy',
            name_eng: 'Navoiy',
            country_id: '11743a2c-fcbd-4d7b-afff-73fd3eb99a49',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Карши',
            name_uzb: 'Qarshi',
            name_eng: 'Karshi',
            country_id: '11743a2c-fcbd-4d7b-afff-73fd3eb99a49',
        },
        {
            id: (0, uuid_1.v4)(),
            name_rus: 'Гулистан',
            name_uzb: 'Guliston',
            name_eng: 'Gulistan',
            country_id: '11743a2c-fcbd-4d7b-afff-73fd3eb99a49',
        },
    ]);
};
exports.up = up;
const down = async (queryInterface) => {
    await queryInterface.bulkDelete('cities', null, {});
};
exports.down = down;
