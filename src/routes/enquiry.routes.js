import express from "express";
import Enquiry from "../models/Enquiry.js";

const router = express.Router();

// ✅ POST Enquiry (Create new)
router.post("/", async (req, res) => {
  try {
    const { name, email, mobile, requirement } = req.body;

    // 🔸 Basic validation
    if (!name || !email || !mobile || !requirement) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled.",
      });
    }

    // 🔸 Generate custom enquiry IDs automatically
    const count = await Enquiry.countDocuments();
    const id = "ENQ-" + String(count + 1).padStart(3, "0");
    const enquiryId = "ENQ-" + Date.now();

    // 🔸 Create new enquiry
    const newEnquiry = await Enquiry.create({
      id,
      name,
      email,
      mobile,
      requirement,
      enquiryId,
    });

    res.status(201).json({
      success: true,
      message: "Enquiry saved successfully ✅",
      data: newEnquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

// ✅ GET All Enquiries
router.get("/", async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: enquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ✅ DELETE Enquiry by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Enquiry.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Enquiry not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Enquiry deleted successfully ✅" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
