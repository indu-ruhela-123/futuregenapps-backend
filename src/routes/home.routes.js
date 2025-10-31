import express from "express";
import Home from "../models/Home.js";

const router = express.Router();

// ✅ Get all home data
router.get("/", async (req, res) => {
  try {
    const data = await Home.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Update home data (PUT) — no ID needed
router.put("/", async (req, res) => {
  try {
    const updatedData = await Home.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true, // 👈 this will create a new record if none exists
      runValidators: true,
    });

    res.json({
      success: true,
      message: "Home data updated successfully",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
