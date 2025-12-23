import prisma from "../../config/db.js";

export const createOrder = async (userId, items) => {
  if (!items || items.length === 0) {
    const error = new Error("Order items are required");
    error.statusCode = 400;
    throw error;
  }

  let totalAmount = 0;
  const validatedItems = [];

  // Validate products & calculate total
  for (const item of items) {
    const product = await prisma.product.findUnique({
      where: { id: item.productId }
    });

    if (!product) {
      const error = new Error("Product not found");
      error.statusCode = 404;
      throw error;
    }

    if (product.stock < item.quantity) {
      const error = new Error(`Insufficient stock for ${product.name}`);
      error.statusCode = 400;
      throw error;
    }

    totalAmount += product.price * item.quantity;

    validatedItems.push({
      productId: product.id,
      quantity: item.quantity,
      price: product.price // ✅ store price here
    });
  }

  // Transaction
  const order = await prisma.$transaction(async (tx) => {
    const newOrder = await tx.order.create({
      data: {
        userId,
        totalAmount
      }
    });

    for (const item of validatedItems) {
      await tx.orderItem.create({
        data: {
          orderId: newOrder.id,
          productId: item.productId,
          quantity: item.quantity,
          price: item.price // ✅ USE stored price
        }
      });

      await tx.product.update({
        where: { id: item.productId },
        data: {
          stock: {
            decrement: item.quantity
          }
        }
      });
    }

    return newOrder;
  });

  return order;
};
