import express from "express";
import { registerRoutes } from "./modules/index.js";
const app = express();
// middle ware
app.use(express.json());

//health check route
app.get("/health",(req,res)=>{
    res.json({status:"OK",message:"API IS RUNNING "});
});

// register all routes
registerRoutes(app);
export default app;