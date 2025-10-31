import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";
import homeRoutes from "./routes/home.routes.js";



dotenv.config();
app.use("/api/home", homeRoutes);
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Root check route
app.get("/", (req, res) => {
  res.send("🚀 FutureGen Backend is running...");
});

// ✅ Contact API
app.use("/api/contact", contactRoutes);

// ✅ MongoDB connect (in server.js)
export default app;
