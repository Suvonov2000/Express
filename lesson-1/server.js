import express from "express";
import { config } from "dotenv";

config();

// const app = express();
// app.use(express.json());

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Express is successfully installed!");
});

app.post("/", (req, res) => {
  const { name, surname, age } = req.body;
  console.log(req.body);

  res.send(`Hi i am ${name} ${surname} ${age}`);
});

app.put("/", (req, res) => {
  const { name, surname, age } = req.body;
  console.log(req.body);

  res.send(`This is ${name} ${surname} ${age}`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is runing on port http://localhost:${PORT}`);
});
