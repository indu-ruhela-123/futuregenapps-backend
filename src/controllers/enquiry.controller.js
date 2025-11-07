import Enquiry from "../models/Enquiry.js";

// POST - create enquiry
export const createEnquiry = async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    await newEnquiry.save();
    res.status(201).json({ success: true, data: newEnquiry });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET - all enquiries
export const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find();
    res.status(200).json({ success: true, data: enquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
