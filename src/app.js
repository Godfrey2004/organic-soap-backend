import express from "express";
const app = express();
// middle ware
app.use(express.json());

//health check route
app.get("/health",(req,res)=>{
    res.json({status:"OK",message:"API IS RUNNING "});
});

export default app;