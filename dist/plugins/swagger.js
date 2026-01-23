"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
// @ts-ignore
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const path_1 = __importDefault(require("path"));
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Yuko Logistic Bot API",
            version: "1.0.0",
            description: "Серверная логика для Telegram бота Yuko Logistic Bot",
        },
        servers: [
            {
                url: "http://localhost:5000/server-api/v1",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    apis: [path_1.default.resolve(__dirname, "../server/swagger/*.ts")],
};
const specs = (0, swagger_jsdoc_1.default)(options);
exports.default = (app) => {
    app.use("/swagger", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
};
