const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolio.controller');
const upload = require('../middleware/upload.middleware');

router.get('/', portfolioController.list);
router.post('/', upload.array('images', 6), portfolioController.create); // admin
module.exports = router;
