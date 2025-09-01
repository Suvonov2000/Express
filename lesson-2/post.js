import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("GET /api/posts");
});

router.get("/:id", (req, res) => {
  res.send("GET /api/posts/:id");
});

router.post("/", (req, res) => {
  res.send("POST /api/post");
});

router.put("/:id", (req, res) => {
  res.send("PUT api/post/:id");
});

router.delete("/:id", (req, res) => {
  res.send("DELETE /api/post/:id");
});

export default router;
