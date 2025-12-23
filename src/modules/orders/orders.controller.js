import { createOrder } from "./orders.service.js";
import { successResponse } from "../../utils/response.js";

export const placeOrder = async (req, res, next) => {
  try {
    const order = await createOrder(req.user.userId, req.body.items);
    successResponse(res, "Order placed successfully", order, 201);
  } catch (error) {
    next(error);
  }
};
