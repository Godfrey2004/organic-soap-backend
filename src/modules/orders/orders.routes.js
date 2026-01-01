import { Router } from "express";
import {
  placeOrder,
  myOrders,
  allOrders
} from "./orders.controller.js";

import {
  authenticate,
  authorizeAdmin
} from "../../middleware/auth.middleware.js";

const router = Router();

// USER
router.post("/", authenticate, placeOrder);
router.get("/my", authenticate, myOrders);

// ADMIN
router.get("/", authenticate, authorizeAdmin, allOrders);

export default router;
