import express from "express";
import { config } from "dotenv";
config();

const app = express();

let count = 0;

const blogMiddleware = (req, res, next) => {
  if (count <= 3) {
    count++;
    return next();
  }

  res.status(400).send("Limit hit are not available now");
};

app.get("/blog", blogMiddleware, (req, res) => {
  res.send(`Blogs-> ${count}`);
});

let count_news = 0;
app.get("/news", (req, res) => {
  count_news++;
  res.send(`News -> ${count_news}`);
});

app.get("/hello", (req, res) => {
  res.send("Hello world!");
});

app.get("/error", (req, res) => {
  const err = new Error("Intentional error.");
  err.status = 500;
  next(err);
  throw new Error("Intentional error");
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});
const PORT = process.env || 2020;
console.log(process.env.PORT);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
