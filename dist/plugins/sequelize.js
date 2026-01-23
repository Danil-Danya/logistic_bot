"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const env = process.env;
const sequelize = new sequelize_1.Sequelize({
    username: env.DB_SERVERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    dialect: 'postgres',
    host: env.DB_HOST,
    port: Number(env.DB_PORT),
    logging: false,
});
(async () => {
    try {
        await sequelize.authenticate();
        console.log('База данных подключена успешно');
    }
    catch (err) {
        console.error('Ошибка при подключении к базе данных', err);
    }
})();
exports.default = sequelize;
