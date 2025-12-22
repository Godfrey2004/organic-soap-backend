import express from"express";
import { registerRoutes } from "./modules/index.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());

app.get("/health",(req,res)=>{
    res.json({status:"OK", message:"API IS RUNNING "});
});

registerRoutes(app);

app.use(errorHandler);

export default app;