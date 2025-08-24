import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Express is successfully installed!");
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, http://localhost:${PORT}`);
});
