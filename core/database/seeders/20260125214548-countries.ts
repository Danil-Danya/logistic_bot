'use strict';

import { v4 as uuidv4 } from 'uuid';

const up = async (queryInterface: any, sequelize: any) => {
    await queryInterface.bulkInsert('countries', [
        // СНГ страны
        {
            id: uuidv4(),
            name_rus: 'Россия',
            name_uzb: 'Rossiya',
            name_eng: 'Russia',
        },
        {
            id: uuidv4(),
            name_rus: 'Казахстан',
            name_uzb: 'Qozogʻiston',
            name_eng: 'Kazakhstan',
        },
        {
            id: uuidv4(),
            name_rus: 'Беларусь',
            name_uzb: 'Belarus',
            name_eng: 'Belarus',
        },
        {
            id: uuidv4(),
            name_rus: 'Кыргызстан',
            name_uzb: 'Qirgʻiziston',
            name_eng: 'Kyrgyzstan',
        },
        {
            id: uuidv4(),
            name_rus: 'Таджикистан',
            name_uzb: 'Tojikiston',
            name_eng: 'Tajikistan',
        },
        {
            id: uuidv4(),
            name_rus: 'Узбекистан',
            name_uzb: 'Oʻzbekiston',
            name_eng: 'Uzbekistan',
        },
        {
            id: uuidv4(),
            name_rus: 'Азербайджан',
            name_uzb: 'Ozarbayjon',
            name_eng: 'Azerbaijan',
        },
        {
            id: uuidv4(),
            name_rus: 'Армения',
            name_uzb: 'Armaniston',
            name_eng: 'Armenia',
        },
        {
            id: uuidv4(),
            name_rus: 'Молдова',
            name_uzb: 'Moldova',
            name_eng: 'Moldova',
        },
        {
            id: uuidv4(),
            name_rus: 'Туркменистан',
            name_uzb: 'Turkmaniston',
            name_eng: 'Turkmenistan',
        },

        // евросоюзик

        {
            id: uuidv4(),
            name_rus: 'Австрия',
            name_uzb: 'Avstriya',
            name_eng: 'Austria',
        },
        {
            id: uuidv4(),
            name_rus: 'Бельгия',
            name_uzb: 'Belgiya',
            name_eng: 'Belgium',
        },
        {
            id: uuidv4(),
            name_rus: 'Болгария',
            name_uzb: 'Bolgariya',
            name_eng: 'Bulgaria',
        },
        {
            id: uuidv4(),
            name_rus: 'Венгрия',
            name_uzb: 'Vengriya',
            name_eng: 'Hungary',
        },
        {
            id: uuidv4(),
            name_rus: 'Германия',
            name_uzb: 'Germaniya',
            name_eng: 'Germany',
        },
        {
            id: uuidv4(),
            name_rus: 'Греция',
            name_uzb: 'Gretsiya',
            name_eng: 'Greece',
        },
        {
            id: uuidv4(),
            name_rus: 'Дания',
            name_uzb: 'Daniya',
            name_eng: 'Denmark',
        },
        {
            id: uuidv4(),
            name_rus: 'Ирландия',
            name_uzb: 'Irlandiya',
            name_eng: 'Ireland',
        },
        {
            id: uuidv4(),
            name_rus: 'Испания',
            name_uzb: 'Ispaniya',
            name_eng: 'Spain',
        },
        {
            id: uuidv4(),
            name_rus: 'Италия',
            name_uzb: 'Italiya',
            name_eng: 'Italy',
        },
        {
            id: uuidv4(),
            name_rus: 'Кипр',
            name_uzb: 'Kipr',
            name_eng: 'Cyprus',
        },
        {
            id: uuidv4(),
            name_rus: 'Латвия',
            name_uzb: 'Latviya',
            name_eng: 'Latvia',
        },
        {
            id: uuidv4(),
            name_rus: 'Литва',
            name_uzb: 'Litva',
            name_eng: 'Lithuania',
        },
        {
            id: uuidv4(),
            name_rus: 'Люксембург',
            name_uzb: 'Lyuksemburg',
            name_eng: 'Luxembourg',
        },
        {
            id: uuidv4(),
            name_rus: 'Мальта',
            name_uzb: 'Malta',
            name_eng: 'Malta',
        },
        {
            id: uuidv4(),
            name_rus: 'Нидерланды',
            name_uzb: 'Niderlandiya',
            name_eng: 'Netherlands',
        },
        {
            id: uuidv4(),
            name_rus: 'Польша',
            name_uzb: 'Polsha',
            name_eng: 'Poland',
        },
        {
            id: uuidv4(),
            name_rus: 'Португалия',
            name_uzb: 'Portugaliya',
            name_eng: 'Portugal',
        },
        {
            id: uuidv4(),
            name_rus: 'Румыния',
            name_uzb: 'Ruminiya',
            name_eng: 'Romania',
        },
        {
            id: uuidv4(),
            name_rus: 'Словакия',
            name_uzb: 'Slovakiya',
            name_eng: 'Slovakia',
        },
        {
            id: uuidv4(),
            name_rus: 'Словения',
            name_uzb: 'Sloveniya',
            name_eng: 'Slovenia',
        },
        {
            id: uuidv4(),
            name_rus: 'Финляндия',
            name_uzb: 'Finlyandiya',
            name_eng: 'Finland',
        },
        {
            id: uuidv4(),
            name_rus: 'Франция',
            name_uzb: 'Fransiya',
            name_eng: 'France',
        },
        {
            id: uuidv4(),
            name_rus: 'Хорватия',
            name_uzb: 'Xorvatiya',
            name_eng: 'Croatia',
        },
        {
            id: uuidv4(),
            name_rus: 'Чехия',
            name_uzb: 'Chexiya',
            name_eng: 'Czechia',
        },
        {
            id: uuidv4(),
            name_rus: 'Швеция',
            name_uzb: 'Shvetsiya',
            name_eng: 'Sweden',
        },
        {
            id: uuidv4(),
            name_rus: 'Эстония',
            name_uzb: 'Estoniya',
            name_eng: 'Estonia',
        },

        // Азия

        {
            id: uuidv4(),
            name_rus: 'Афганистан',
            name_uzb: 'Afgʻoniston',
            name_eng: 'Afghanistan',
        },
        {
            id: uuidv4(),
            name_rus: 'Бангладеш',
            name_uzb: 'Bangladesh',
            name_eng: 'Bangladesh',
        },
        {
            id: uuidv4(),
            name_rus: 'Бахрейн',
            name_uzb: 'Bahrayn',
            name_eng: 'Bahrain',
        },
        {
            id: uuidv4(),
            name_rus: 'Бутан',
            name_uzb: 'Buton',
            name_eng: 'Bhutan',
        },
        {
            id: uuidv4(),
            name_rus: 'Вьетнам',
            name_uzb: 'Vyetnam',
            name_eng: 'Vietnam',
        },
        {
            id: uuidv4(),
            name_rus: 'Грузия',
            name_uzb: 'Gruziya',
            name_eng: 'Georgia',
        },
        {
            id: uuidv4(),
            name_rus: 'Индия',
            name_uzb: 'Hindiston',
            name_eng: 'India',
        },
        {
            id: uuidv4(),
            name_rus: 'Индонезия',
            name_uzb: 'Indoneziya',
            name_eng: 'Indonesia',
        },
        {
            id: uuidv4(),
            name_rus: 'Иордания',
            name_uzb: 'Iordaniya',
            name_eng: 'Jordan',
        },
        {
            id: uuidv4(),
            name_rus: 'Ирак',
            name_uzb: 'Iroq',
            name_eng: 'Iraq',
        },
        {
            id: uuidv4(),
            name_rus: 'Иран',
            name_uzb: 'Eron',
            name_eng: 'Iran',
        },
        {
            id: uuidv4(),
            name_rus: 'Израиль',
            name_uzb: 'Isroil',
            name_eng: 'Israel',
        },
        {
            id: uuidv4(),
            name_rus: 'Казахстан',
            name_uzb: 'Qozogʻiston',
            name_eng: 'Kazakhstan',
        },
        {
            id: uuidv4(),
            name_rus: 'Камбоджа',
            name_uzb: 'Kambodja',
            name_eng: 'Cambodia',
        },
        {
            id: uuidv4(),
            name_rus: 'Катар',
            name_uzb: 'Qatar',
            name_eng: 'Qatar',
        },
        {
            id: uuidv4(),
            name_rus: 'Кипр',
            name_uzb: 'Kipr',
            name_eng: 'Cyprus',
        },
        {
            id: uuidv4(),
            name_rus: 'Киргизия',
            name_uzb: 'Qirgʻiziston',
            name_eng: 'Kyrgyzstan',
        },
        {
            id: uuidv4(),
            name_rus: 'Китай',
            name_uzb: 'Xitoy',
            name_eng: 'China',
        },
        {
            id: uuidv4(),
            name_rus: 'КНДР',
            name_uzb: 'KXDR',
            name_eng: 'North Korea',
        },
        {
            id: uuidv4(),
            name_rus: 'Южная Корея',
            name_uzb: 'Janubiy Koreya',
            name_eng: 'South Korea',
        },
        {
            id: uuidv4(),
            name_rus: 'Кувейт',
            name_uzb: 'Quvayt',
            name_eng: 'Kuwait',
        },
        {
            id: uuidv4(),
            name_rus: 'Лаос',
            name_uzb: 'Laos',
            name_eng: 'Laos',
        },
        {
            id: uuidv4(),
            name_rus: 'Ливан',
            name_uzb: 'Livon',
            name_eng: 'Lebanon',
        },
        {
            id: uuidv4(),
            name_rus: 'Малайзия',
            name_uzb: 'Malayziya',
            name_eng: 'Malaysia',
        },
        {
            id: uuidv4(),
            name_rus: 'Мальдивы',
            name_uzb: 'Maldiv orollari',
            name_eng: 'Maldives',
        },
        {
            id: uuidv4(),
            name_rus: 'Монголия',
            name_uzb: 'Mongoliya',
            name_eng: 'Mongolia',
        },
        {
            id: uuidv4(),
            name_rus: 'Мьянма',
            name_uzb: 'Myanma',
            name_eng: 'Myanmar',
        },
        {
            id: uuidv4(),
            name_rus: 'Непал',
            name_uzb: 'Nepal',
            name_eng: 'Nepal',
        },
        {
            id: uuidv4(),
            name_rus: 'ОАЭ',
            name_uzb: 'BAA',
            name_eng: 'United Arab Emirates',
        },
        {
            id: uuidv4(),
            name_rus: 'Оман',
            name_uzb: 'Ummon',
            name_eng: 'Oman',
        },
        {
            id: uuidv4(),
            name_rus: 'Пакистан',
            name_uzb: 'Pokiston',
            name_eng: 'Pakistan',
        },
        {
            id: uuidv4(),
            name_rus: 'Палестина',
            name_uzb: 'Falastin',
            name_eng: 'Palestine',
        },
        {
            id: uuidv4(),
            name_rus: 'Саудовская Аравия',
            name_uzb: 'Saudiya Arabistoni',
            name_eng: 'Saudi Arabia',
        },
        {
            id: uuidv4(),
            name_rus: 'Сингапур',
            name_uzb: 'Singapur',
            name_eng: 'Singapore',
        },
        {
            id: uuidv4(),
            name_rus: 'Сирия',
            name_uzb: 'Suriya',
            name_eng: 'Syria',
        },
        {
            id: uuidv4(),
            name_rus: 'Тайвань',
            name_uzb: 'Tayvan',
            name_eng: 'Taiwan',
        },
        {
            id: uuidv4(),
            name_rus: 'Таджикистан',
            name_uzb: 'Tojikiston',
            name_eng: 'Tajikistan',
        },
        {
            id: uuidv4(),
            name_rus: 'Таиланд',
            name_uzb: 'Tailand',
            name_eng: 'Thailand',
        },
        {
            id: uuidv4(),
            name_rus: 'Турция',
            name_uzb: 'Turkiya',
            name_eng: 'Turkey',
        },
        {
            id: uuidv4(),
            name_rus: 'Туркменистан',
            name_uzb: 'Turkmaniston',
            name_eng: 'Turkmenistan',
        },
        {
            id: uuidv4(),
            name_rus: 'Узбекистан',
            name_uzb: 'Oʻzbekiston',
            name_eng: 'Uzbekistan',
        },
        {
            id: uuidv4(),
            name_rus: 'Филиппины',
            name_uzb: 'Filippinlar',
            name_eng: 'Philippines',
        },
        {
            id: uuidv4(),
            name_rus: 'Шри-Ланка',
            name_uzb: 'Shri-Lanka',
            name_eng: 'Sri Lanka',
        },
        {
            id: uuidv4(),
            name_rus: 'Япония',
            name_uzb: 'Yaponiya',
            name_eng: 'Japan',
        },
    ], {});
}

const down = async (queryInterface: any) => {
    await queryInterface.bulkDelete('countries', null, {});
}
export {
    up,
    down
}
