import swaggerJSDoc from "swagger-jsdoc";
import swaggerUiExpress from "swagger-ui-express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "API de Adopción de Mascotas",
      version: "1.0.0",
      description:
        "Documentación para endpoints de usuarios y mascotas con datos ficticios.",
    },
  },
  apis: ["./routes/mocks.routes.js"],
};

const specs = swaggerJSDoc(swaggerOptions);

export default (app) => {
  app.use("/apidocs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));
};
