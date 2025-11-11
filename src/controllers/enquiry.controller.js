import Enquiry from "../models/Enquiry.js";

// POST - create enquiry
export const createEnquiry = async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    await newEnquiry.save();
    res.status(200).json({ success: true, data: newEnquiry });
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

// ✅ PUT - update enquiry by ID
export const updateEnquiry = async (req, res) => {
  try {
    const { id } = req.params; // URL se enquiry ID lo

    // MongoDB me update karo
    const updatedEnquiry = await Enquiry.findByIdAndUpdate(id, req.body, {
      new: true, // updated document return kare
      runValidators: true, // schema validation apply kare
    });

    if (!updatedEnquiry) {
      return res
        .status(404)
        .json({ success: false, message: "Enquiry not found" });
    }

    res.status(200).json({
      success: true,
      message: "Enquiry updated successfully",
      data: updatedEnquiry,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};





