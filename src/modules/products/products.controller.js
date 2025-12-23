import { createProduct, getAllProducts } from "./products.service.js";
import { successResponse } from "../../utils/response.js";

// ADMIN – create product
export const create = async (req, res, next) => {
  try {
    const product = await createProduct(req.body);
    successResponse(res, "Product created successfully", product, 201);
  } catch (error) {
    next(error);
  }
};


// PUBLIC – list products
export const list = async (req, res, next) => {
  try {
    const products = await getAllProducts();
    successResponse(res, "Products fetched successfully", products);
  } catch (error) {
    next(error);
  }
};
