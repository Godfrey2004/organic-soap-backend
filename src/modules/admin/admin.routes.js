 // with Protect an Admin Route

import { Router } from "express";
import { authenticate, authorizeAdmin } from "../../middleware/auth.middleware.js";

const router = Router();

router.get(
  "/dashboard",
  authenticate,
  authorizeAdmin,
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Admin"
    });
  }
);


export default router;