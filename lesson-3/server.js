import express from "express";
import { config } from "dotenv";
config();

const app = express();
const PORT = process.env || 8080;
console.log(process.env.PORT);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
