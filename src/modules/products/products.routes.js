import { Router } from "express";
import { successResponse } from "../../utils/response.js";

const router = Router();

router.get("/", (req, res) => {
  successResponse(res, "Products fetched successfully", []);
});

router.post("/", (req, res) => {
  successResponse(res, "Product created successfully", {}, 201);
});

export default router;