import { Router } from "express";

const router = Router();

router.get("/profile", (req, res) => {
  res.json({ message: "User profile route" });
});

export default router;