const express = require("express");
const router = express.Router();
const passport = require("passport");

// require report controller
const reportReq = require('../controllers/reportsController');

// get req for getting report of a specific status
router.get('/:status', passport.authenticate('jwt', {session: false}), reportReq.statusReports);

module.exports = router;