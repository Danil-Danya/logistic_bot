import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
const env = process.env;
const sequelize = new Sequelize({
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
export default sequelize;
