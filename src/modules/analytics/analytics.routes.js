import { Router } from "express";
import {
  getDashboardStats,
  getOrdersTrend,        // ✅ Imported once here
  getTopProducts,
  getLowStockProducts
} from "./analytics.controller.js";
import {
  authenticate,
  authorizeAdmin
} from "../../middleware/auth.middleware.js";

const router = Router();

// Remove the first duplicate import line:
// ❌ DELETE THIS LINE:
// import { getLowStockProducts, getOrdersTrend } from './analytics.controller.js'

router.get(
  "/dashboard",
  authenticate,
  authorizeAdmin,
  getDashboardStats
);

router.get(
  "/orders-trend",
  authenticate,
  authorizeAdmin,
  getOrdersTrend
);

router.get(
  "/top-products",
  authenticate,
  authorizeAdmin,
  getTopProducts
);

router.get(
  "/low-stock",
  authenticate,
  authorizeAdmin,
  getLowStockProducts
);

export default router;