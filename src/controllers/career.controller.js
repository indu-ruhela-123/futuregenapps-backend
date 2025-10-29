const Career = require('../models/Career');

exports.apply = async (req, res, next) => {
  try {
    const { name, email, phone, position, coverLetter } = req.body;
    const resumeUrl = req.file ? `/uploads/${req.file.filename}` : null;
    const doc = await Career.create({ name, email, phone, position, coverLetter, resumeUrl });
    res.status(201).json({ success: true, data: doc });
  } catch (err) { next(err); }
};

exports.list = async (req, res, next) => {
  try {
    const items = await Career.find().sort({ createdAt: -1 });
    res.json({ success: true, data: items });
  } catch (err) { next(err); }
};
