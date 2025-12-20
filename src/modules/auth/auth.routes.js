import {Router}from "express";

const router = Router();

router.post("/login",(req,res)=>{
    res.json({message:"Auth login route"});
});

router.post("/register",(req,res)=>{
    res.json({message:"Auth register route"});
});

export default router;