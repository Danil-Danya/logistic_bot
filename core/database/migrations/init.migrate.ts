import { Sequelize } from "sequelize";
import { up as countriesAndCitiesUp } from "./20260207223804-add_country_id_to_messages";
import { up as keywordsUp } from "./20203335231314-to-lower-case";
import { up as langUp } from './20260207223804-add-lang-to-user';

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
        //await countriesAndCitiesUp(sequelize.getQueryInterface());
        //await keywordsUp(sequelize.getQueryInterface(), sequelize);

        await langUp(sequelize.getQueryInterface());

        console.log("Миграции выполнены успешно");
    } catch (error) {
        console.error("Ошибка подключения к базе данных:", error);
    }
}

runSeeders();