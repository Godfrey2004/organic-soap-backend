import { Router } from "express";
import { create, list } from "./products.controller.js";
import { authenticate, authorizeAdmin } from "../../middleware/auth.middleware.js";

const router = Router();

// PUBLIC – list products
router.get("/", list);
// admin only - create product
router.post("/", authenticate, authorizeAdmin, create);

router.get("/", (req, res) => {
  successResponse(res, "Products fetched successfully", []);
});

router.post("/", (req, res) => {
  successResponse(res, "Product created successfully", {}, 201);
});

export default router;