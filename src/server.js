import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";
import homeRoutes from "./routes/home.routes.js";
import enquiryRoutes from "./routes/enquiry.routes.js";


dotenv.config();



const app = express();
app.use("/api/enquiry", enquiryRoutes);


app.use("/api/home", homeRoutes);


// Middlewares
app.use(cors());
app.use(express.json());// <- VERY IMPORTANT for POST data

// Routes
app.use("/api/contact", contactRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("✅ FutureGen Backend is Running");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
