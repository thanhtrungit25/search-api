import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../config/swagger.json";
import { Router } from "express";

export const handleAPIDocs = (router: Router) =>
  router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
