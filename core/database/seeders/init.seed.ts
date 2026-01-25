import { Sequelize } from "sequelize";
import { up as countriesUp } from "./20260125214548-countries";
import { up as citiesUp } from "./20260125223025-cities";

import dotenv from 'dotenv';
dotenv.config();

const env = process.env;

const sequelize: Sequelize = new Sequelize({
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
    } catch (error) {
        console.log(error);
    }
})();

async function runSeeders() {
    try {
        //await countriesUp(sequelize.getQueryInterface(), Sequelize);
        await citiesUp(sequelize.getQueryInterface(), Sequelize);

        console.log("Сиды выполнены успешно");
    } catch (error) {
        console.error("Ошибка подключения к базе данных:", error);
    }
}

runSeeders();