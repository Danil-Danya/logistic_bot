import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import router from './server/routes/router';

import createBot from './app/bot';
import swagger from 'plugins/swagger';

import errorMiddleware from './server/middlewares/error.middleware';

import type { Application } from 'express';

const PORT: number = Number(process.env.PORT) || 3000;
const ADDRESS: string = process.env.ADDRESS || '127.0.0.1';

const app: Application = express();

app.use(express.urlencoded({ extended:  true, limit: "500mb" }));
app.use(express.json());
app.use(errorMiddleware);

app.use('/server-api/v1', router);

swagger(app);

const main = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Сервер доступен на http://${ADDRESS}:${PORT}`);
            console.log(`Документация доступна на http://${ADDRESS}:${PORT}/swagger`);
        });

        await createBot();
    } 
    catch (err) {
        console.error("Ошибка при запуске:", err);
    }
}

main();

