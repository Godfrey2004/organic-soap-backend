import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  res.json({ message: "Create order" });
});

router.get("/my", (req, res) => {
  res.json({ message: "User orders" });
});

export default router;