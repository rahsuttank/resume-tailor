const express = require('express');
const router = express.Router();
const validateToken = require('../middleware/authMiddleware');
const { getSuggestions } = require('../controllers/matchController');

router.post('/suggest', getSuggestions);

module.exports = router;
