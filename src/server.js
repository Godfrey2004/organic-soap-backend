import "dotenv/config";
import app from "./app.js";
import orderRoutes from "./modules/orders/orders.routes.js";

const PORT = process.env.PORT || 5000;

// ✅ Register routes FIRST
app.use("/api/v1/orders", orderRoutes);

// ✅ Start server LAST
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
