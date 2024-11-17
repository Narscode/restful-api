const express = require('express');
const router = express.Router();
const { getGreeting } = require('../controller/apiController');

router.get('/greet', getGreeting);

module.exports = router;
