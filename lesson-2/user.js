import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("GET /api/users");
});

router.get(":id", (req, res) => {
  res.send("GET /api/users/:id");
});

router.post("/", (req, res) => {
  res.send("POST /api/users");
});

router.put("/", (req, res) => {
  res.send("PUT /api/users/:id");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE/api/users/:id");
});

export default router;
