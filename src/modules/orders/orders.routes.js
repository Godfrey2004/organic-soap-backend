import { Router } from "express";
import { placeOrder } from "./orders.controller.js";
import { authenticate } from "../../middleware/auth.middleware.js";

const router = Router();
router.post("/", authenticate, placeOrder);
router.post("/", (req, res) => {
  res.json({ message: "Create order" });
});

router.get("/my", (req, res) => {
  res.json({ message: "User orders" });
});

export default router;