const express = require("express");
const router = express.Router();
const passport = require("passport");

// requiring patient controller
const patientReq = require('../controllers/patientController');

// post req to register patient
router.post('/register', passport.authenticate('jwt', {session: false}), patientReq.registerPatient);

// post request to create report of patients
router.post('/:id/create_report', passport.authenticate('jwt', {session: false}), patientReq.createPatientReport);

// get request to obtain all reports of a specific patient
router.get('/:id/all_reports', passport.authenticate('jwt', {session: false}), patientReq.allReports);

module.exports = router;