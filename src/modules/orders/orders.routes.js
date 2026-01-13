import { Router } from "express";
import {
  placeOrder,
  myOrders,
  allOrders,
  updateStatus
} from "./orders.controller.js";

import {
  authenticate,
  authorizeAdmin
} from "../../middleware/auth.middleware.js";

// Initialize router FIRST
const router = Router();

// USER routes
router.post("/", authenticate, placeOrder);
router.get("/my", authenticate, myOrders);

// ADMIN routes
router.get("/", authenticate, authorizeAdmin, allOrders);
router.patch(
  "/:id/status",
  authenticate,
  authorizeAdmin,
  updateStatus
);

export default router;