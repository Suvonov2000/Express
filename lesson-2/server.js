import express from "express";

const app = express();

app.get("/user/:id", (req, res) => {
  const userID = req.params.id;
  res.send(`USer ID is ${userID}`);
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server is runing on port http://localhost:${PORT}`);
});
