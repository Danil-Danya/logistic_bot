"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./server/routes/router"));
const bot_1 = __importDefault(require("./app/bot"));
const swagger_1 = __importDefault(require("plugins/swagger"));
const error_middleware_1 = __importDefault(require("./server/middlewares/error.middleware"));
const PORT = Number(process.env.PORT) || 3000;
const ADDRESS = process.env.ADDRESS || '127.0.0.1';
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true, limit: "500mb" }));
app.use(express_1.default.json());
app.use('/server-api/v1', router_1.default);
app.use(error_middleware_1.default);
(0, swagger_1.default)(app);
const main = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Сервер доступен на http://${ADDRESS}:${PORT}`);
            console.log(`Документация доступна на http://${ADDRESS}:${PORT}/swagger`);
        });
        await (0, bot_1.default)();
    }
    catch (err) {
        console.error("Ошибка при запуске:", err);
    }
};
main();
