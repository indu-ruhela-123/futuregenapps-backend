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

// ✅ Add home data
router.post("/", async (req, res) => {
  try {
    const newData = new Home(req.body);
    await newData.save();
    res.json({ success: true, data: newData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Update home data (PUT)
router.put("/", async (req, res) => {
  try {
    const updatedData = await Home.findOneAndUpdate({}, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedData) {
      return res.status(404).json({ error: "Home data not found" });
    }

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
