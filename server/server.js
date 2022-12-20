import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "server is running" });
});

const PORT = process.env.APP_PORT || 5000;

app.listen(PORT, console.log(`server is running on http://localhost:${PORT}`));
