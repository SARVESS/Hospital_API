const express = require("express");
const router = express.Router();
const passport = require("passport");

const doctorReq = require('../controllers/doctorController');

// post req for registering doctor
router.post('/register', doctorReq.createDoctor);

// authenticated login req
router.post('/login', passport.authenticate('local', { session:false}), doctorReq.loginDoctor);

module.exports = router;