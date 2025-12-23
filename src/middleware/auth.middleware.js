import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    const error = new Error("Authentication token missing");
    error.statusCode = 401;
    return next(error);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { userId, role }
    next();
  } catch (err) {
    const error = new Error("Invalid or expired token");
    error.statusCode = 401;
    next(error);
  }
};
//Admin-Only Middleware
export const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== "ADMIN") {
    const error = new Error("Admin access only");
    error.statusCode = 403;
    return next(error);
  }
  next();
};
