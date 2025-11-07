import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// ✅ Import Routes
import contactRoutes from "./routes/contact.routes.js";
import homeRoutes from "./routes/home.routes.js";
import enquiryRoutes from "./routes/enquiry.routes.js"; // 👈 Important

dotenv.config();

const app = express(); // 👈 app sabse pehle define hona chahiye

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/home", homeRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/enquiry", enquiryRoutes); // 👈 Add this line

// ✅ Root route
app.get("/", (req, res) => {
  res.send("🚀 FutureGen Backend is running...");
});

// ✅ Export app
export default app;
