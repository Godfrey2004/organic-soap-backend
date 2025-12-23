import { createProduct, getAllProducts } from "./products.service.js";
import { successResponse } from "../../utils/response.js";
import { updateProduct, deleteProduct } from "./products.service.js";
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

// ADMIN – update product
export const update = async (req, res, next) => {
  try {
    const updated = await updateProduct(req.params.id, req.body);
    successResponse(res, "Product updated successfully", updated);
  } catch (error) {
    next(error);
  }
};

// ADMIN – delete product
export const remove = async (req, res, next) => {
  try {
    await deleteProduct(req.params.id);
    successResponse(res, "Product deleted successfully");
  } catch (error) {
    next(error);
  }
};