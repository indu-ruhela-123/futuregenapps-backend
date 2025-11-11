import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// ✅ POST Contact (Create new)
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // 🔸 Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled.",
      });
    }

    // 🔸 Create contact entry
    const newContact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Contact saved successfully ✅",
      data: newContact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

// ✅ GET All Contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ✅ DELETE Contact by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Contact not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Contact deleted successfully ✅" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
