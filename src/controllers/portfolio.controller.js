const Portfolio = require('../models/Portfolio');

exports.create = async (req, res, next) => {
  try {
    const { title, description, url, tags } = req.body;
    const images = (req.files || []).map(f => `/uploads/${f.filename}`);
    const doc = await Portfolio.create({ title, description, url, tags: tags ? tags.split(',').map(t => t.trim()) : [], images });
    res.status(201).json({ success: true, data: doc });
  } catch (err) { next(err); }
};

exports.list = async (req, res, next) => {
  try {
    const items = await Portfolio.find().sort({ createdAt: -1 });
    res.json({ success: true, data: items });
  } catch (err) { next(err); }
};
                                                                                    