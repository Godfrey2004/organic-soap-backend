import {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus
} from "./orders.service.js";

import { successResponse } from "../../utils/response.js";

// USER – place order
export const placeOrder = async (req, res, next) => {
  try {
    const order = await createOrder(req.user.userId, req.body.items);
    successResponse(res, "Order placed successfully", order, 201);
  } catch (error) {
    next(error);
  }
};

// USER – view own orders
export const myOrders = async (req, res, next) => {
  try {
    const orders = await getUserOrders(req.user.userId);
    successResponse(res, "User orders fetched", orders);
  } catch (error) {
    next(error);
  }
};

// ADMIN – view all orders
export const allOrders = async (req, res, next) => {
  try {
    const orders = await getAllOrders();
    successResponse(res, "All orders fetched", orders);
  } catch (error) {
    next(error);
  }
};
// ADMIN – update order status
export const updateStatus = async (req, res, next) => {
  try {
    const { status } = req.body;        // read from body
    const orderId = req.params.id;      // read from URL

    const updatedOrder = await updateOrderStatus(orderId, status);

    successResponse(res, "Order status updated", updatedOrder);
  } catch (error) {
    next(error);
  }
};
