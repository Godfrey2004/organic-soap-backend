// analytics.service.js - CORRECTED VERSION
import prisma from "../../config/db.js";

// Named export for getDashboardStatsService
export const getDashboardStatsService = async () => {
  // Total revenue
  const revenueResult = await prisma.order.aggregate({
    _sum: {
      totalAmount: true
    },
    where: {
      status: {
        in: ["PAID", "SHIPPED", "DELIVERED"]
      }
    }
  });

  // Orders count by status
  const ordersByStatus = await prisma.order.groupBy({
    by: ["status"],
    _count: {
      _all: true
    }
  });

  // Total orders
  const totalOrders = await prisma.order.count();

  return {
    totalRevenue: revenueResult._sum.totalAmount || 0,
    totalOrders,
    ordersByStatus
  };
};

// Named export for getOrdersTrendService
export const getOrdersTrendService = async () => {
  const orders = await prisma.order.findMany({
    where: {
      status: {
        in: ["PAID", "SHIPPED", "DELIVERED"]
      }
    },
    select: {
      createdAt: true,
      totalAmount: true
    }
  });

  const trendMap = {};

  for (const order of orders) {
    const date = order.createdAt.toISOString().split("T")[0];

    if (!trendMap[date]) {
      trendMap[date] = {
        date,
        orders: 0,
        revenue: 0
      };
    }

    trendMap[date].orders += 1;
    trendMap[date].revenue += order.totalAmount;
  }

  return Object.values(trendMap).sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
};

// Add these new service functions:
export const getTopProductsService = async () => {
  // Implementation here
  const result = await prisma.orderItem.groupBy({
    by: ["productId"],
    _sum: {
      quantity: true
    },
    orderBy: {
      _sum: {
        quantity: "desc"
      }
    },
    take: 5
  });

  const products = await Promise.all(
    result.map(async (item) => {
      const product = await prisma.product.findUnique({
        where: { id: item.productId }
      });

      return {
        productId: item.productId,
        name: product.name,
        totalSold: item._sum.quantity
      };
    })
  );
  return products;
};

export const getLowStockProductsService = async () => {
  // Implementation here
  const products = await prisma.product.findMany({
    where: {
      stock: {
        lt: 10
      }
    },
    select: {
      id: true,
      name: true,
      stock: true
    },
    orderBy: {
      stock: "asc"
    }
  });
  return products;
};