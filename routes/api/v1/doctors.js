const express = require("express");
const router = express.Router();
const passport = require("passport");

const doctorReq = require('../../../controllers/api/v1/doctorApi');

// post req for registering doctor
router.post('/register', doctorReq.createDoctor);

// authenticated login request for
router.post('/login', passport.authenticate('local', { session:false}), doctorReq.loginDoctor);

module.exports = router;