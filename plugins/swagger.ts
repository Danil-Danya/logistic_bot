// @ts-ignore
import swaggerJsdoc from "swagger-jsdoc";
// @ts-ignore
import swaggerUiExpress from "swagger-ui-express";

import path from "path";


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
    apis: [path.resolve(__dirname, "../server/swagger/*.ts")],
};

const specs = swaggerJsdoc(options);

export default (app: any) => {
    app.use("/swagger", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));
}