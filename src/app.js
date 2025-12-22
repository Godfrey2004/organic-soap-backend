import express from "express";
import { registerRoutes } from "./modules/index.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

// ✅ BODY PARSER — MUST BE BEFORE ROUTES
app.use(express.json());

registerRoutes(app);

// error handler LAST
app.use(errorHandler);

export default app;
