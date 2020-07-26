const express = require("express");
const router = express.Router();
const passport = require("passport");

// requiring patient controller
const patientReq = require('../controllers/patientController');

// post req to register patient
router.post('/register', passport.authenticate('jwt', {session: false}), patientReq.registerPatient);

router.post('/:id/create_report', passport.authenticate('jwt', {session: false}), patientReq.createPatientReport);

module.exports = router;