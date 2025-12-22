import { registerUser, loginUser } from "./auth.service.js";
import { successResponse } from "../../utils/response.js";

export const register = async (req,res,next)=>{
    try{
        const user = await registerUser(req.body);
        successResponse(res,"User Registered Successfully", user,201);
    } catch(error){
        next(error);
    }

    };
export const login = async (req, res, next) => {
  try {
    const result = await loginUser(req.body);
    successResponse(res, "Login successful", result);
  } catch (error) {
    next(error);
  }
};
