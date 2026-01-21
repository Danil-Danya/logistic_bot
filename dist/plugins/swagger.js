import swaggerJsdoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Чертоги Героев",
            version: "1.0.0",
            description: "Серверная логика для клуба по мотивам игры Чертоги Героев",
        },
        servers: [
            {
                url: "http://localhost:5000/server-api/",
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
    apis: ["./swagger/*.js"],
};
const specs = swaggerJsdoc(options);
export default (app) => {
    app.use("/swagger", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));
};
