import prisma from "../../config/db.js";

// ADMIN – create product
export const createProduct = async ({ name, description, price, stock }) => {
  if (!name || price == null || stock == null) {
    const error = new Error("Missing required product fields");
    error.statusCode = 400;
    throw error;
  }

  const product = await prisma.product.create({
    data: {
      name,
      description,
      price,
      stock
    }
  });

  return product;
};

// PUBLIC – get all products
export const getAllProducts = async () => {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });

  return products;
};
