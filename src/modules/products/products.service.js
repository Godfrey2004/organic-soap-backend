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

// ADMIN – update product
export const updateProduct = async (id, data) => {
  const product = await prisma.product.findUnique({
    where: { id: Number(id) }
  });

  if (!product) {
    const error = new Error("Product not found");
    error.statusCode = 404;
    throw error;
  }

  const updatedProduct = await prisma.product.update({
    where: { id: Number(id) },
    data
  });

  return updatedProduct;
};

// ADMIN – delete product
export const deleteProduct = async (id) => {
  const product = await prisma.product.findUnique({
    where: { id: Number(id) }
  });

  if (!product) {
    const error = new Error("Product not found");
    error.statusCode = 404;
    throw error;
  }

  await prisma.product.delete({
    where: { id: Number(id) }
  });

  return true;
};
