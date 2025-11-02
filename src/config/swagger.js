import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info:{
            title: 'API Adoptme',
            version: '1.0.0',
            description: 'API-Rest Adoptme',
        },
        servers: [
            {
                url: "http://localhost:3000",
                description:'Desarrollo',
            },
            {
                url: "http://localhost:8080",
                description:'Producción',
            },
        ],
    },
    apis: ["./src/docs/**/*.yaml"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions)

export default (app) => {app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))}



