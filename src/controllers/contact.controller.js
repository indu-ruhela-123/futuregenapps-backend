import Contact from "../models/Contact.js";
// import nodemailer from "nodemailer"; // 👈 temporarily remove email

// ✅ Create new contact
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All required fields missing" });
    }

    const contact = await Contact.create({ name, email, phone, message });

    // ⚠️ Email sending disabled for now
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    // const mailOptions = {
    //   from: process.env.EMAIL_USER,
    //   to: process.env.TO_EMAIL,
    //   subject: "📩 New Contact Form Submission - FutureGenApps",
    //   html: `
    //     <h2>New Contact Received</h2>
    //     <p><b>Name:</b> ${name}</p>
    //     <p><b>Email:</b> ${email}</p>
    //     <p><b>Phone:</b> ${phone || "N/A"}</p>
    //     <p><b>Message:</b> ${message}</p>
    //   `,
    // };

    // await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      data: contact,
      message: "Contact saved successfully ✅ (Email disabled for now)",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// ✅ Get all contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Delete contact
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Contact.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Contact not found" });
    }
    res.status(200).json({ success: true, message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
