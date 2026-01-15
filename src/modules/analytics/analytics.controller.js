import { 
  getDashboardStatsService, 
  getOrdersTrendService,
  getTopProductsService,          // Add this
  getLowStockProductsService      // Add this
} from "./analytics.service.js";
import { successResponse } from "../../utils/response.js";

export const getDashboardStats = async (req, res, next) => {
  try {
    const stats = await getDashboardStatsService();
    successResponse(res, "Dashboard analytics fetched", stats);
  } catch (error) {
    next(error);
  }
};

export const getOrdersTrend = async (req, res, next) => {
  try {
    const trend = await getOrdersTrendService();
    successResponse(res, "Order trend fetched", trend);
  } catch (error) {
    next(error);
  }
};

// Add these missing functions:
export const getTopProducts = async (req, res, next) => {
  try {
    const topProducts = await getTopProductsService();
    successResponse(res, "Top products fetched", topProducts);
  } catch (error) {
    next(error);
  }
};

export const getLowStockProducts = async (req, res, next) => {
  try {
    const lowStockProducts = await getLowStockProductsService();
    successResponse(res, "Low stock products fetched", lowStockProducts);
  } catch (error) {
    next(error);
  }
};