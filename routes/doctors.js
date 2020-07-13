const express = require("express");
const router = express.Router();
const passport = require("passport");

const doctorData = require('../controllers/doctor');

router.post('/register', doctorData.createDoctor);

router.post('/login', doctorData.loginDoctor);

module.exports = router;