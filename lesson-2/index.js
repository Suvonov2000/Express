import express from "express";

const app = express();

app.get("/user/:id", (req, res) => {
  const userID = req.params.id;
  res.send(`USer ID is ${userID}`);
});

app.get("/search", (req, res) => {
  const { term, page } = req.query;
  res.send(`Searching for "${term} on page${page}`);
});
const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server is runing on port http://localhost:${PORT}`);
});
