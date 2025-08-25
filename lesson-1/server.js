import express from "express";
import { config } from "dotenv";

config();

const app = express();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).send("Express is successfully installed!");
// });

app.post("/", (req, res) => {
  const { name, surname } = req.body;
  console.log(req.body);

  res.send(`Heloo:${name} ${surname}`);
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, http://localhost:${PORT}`);
});
