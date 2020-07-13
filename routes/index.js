const express = require("express");
const router = express.Router();

// route for doctors requests
router.use('/doctors', require('./doctors'));

module.exports = router;