const express = require('express');
const router = express.Router();
const careerController = require('../controllers/career.controller');
const upload = require('../middleware/upload.middleware');

router.post('/apply', upload.single('resume'), careerController.apply);
router.get('/', careerController.list); // admin
module.exports = router;
