import authRoutes from "./auth/auth.routes.js";
import userRoutes from "./users/users.routes.js";
import productRoutes from "./products/products.routes.js";
import orderRoutes from "./orders/orders.routes.js";
import adminRoutes from "./admin/admin.routes.js";

export const registerRoutes = (app) =>{
    app.use("/api/v1/auth", authRoutes);
    app.use("/api/v1/users", userRoutes);
    app.use("/api/v1/products", productRoutes);
    app.use("/api/v1/orders", orderRoutes);
    app.use("/api/v1/admin", adminRoutes);
};