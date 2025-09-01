import express from "express";
import { config } from "dotenv";
import user_router from "./user.js";
import post_router from "./post.js";
config();

const app = express();
app.use(express.json());

app.use("/api/users/", user_router);
app.use("/api/posts/", post_router);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT},http://localhost:${PORT}`);
});
