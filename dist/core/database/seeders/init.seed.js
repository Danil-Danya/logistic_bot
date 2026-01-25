"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _20260125223025_cities_1 = require("./20260125223025-cities");
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
(async function () {
    try {
        await sequelize.authenticate();
        console.log("connected");
    }
    catch (error) {
        console.log(error);
    }
})();
async function runSeeders() {
    try {
        //await countriesUp(sequelize.getQueryInterface(), Sequelize);
        await (0, _20260125223025_cities_1.up)(sequelize.getQueryInterface(), sequelize_1.Sequelize);
        console.log("Сиды выполнены успешно");
    }
    catch (error) {
        console.error("Ошибка подключения к базе данных:", error);
    }
}
runSeeders();
