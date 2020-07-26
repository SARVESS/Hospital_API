// require patient model
const Patient = require('../models/patient');
// require report model
const Report = require('../models/report');

// Registering the patient using phone number and name
module.exports.registerPatient = async function (req, res) {

    try {

        let patient = await Patient.findOne({ phoneNumber: req.body.phoneNumber });

        if (!patient) {
            let patient1 = await Patient.create(req.body);
            console.log('Patient Registered Successfully!');
            return res.json(200, {
                status: 200,
                message: 'Patient Registered Successfully!',
                data:{
                    patient: {
                        _id: patient1.id,
                        name: patient1.name,
                        phoneNumber: patient1.phoneNumber
                    }
                }
                
            })
        } else {
            console.log('Patient already exists!')
            return res.json(409, {
                status: 409,
                message: 'Patient already exists!',
                data:{
                    patient: {
                        _id: patient.id,
                        name: patient.name,
                        phoneNumber: patient.phoneNumber
                    }
                }
            })
        }

    } catch (err) {
        console.log('Error', err);
        return res.json(500, {
            status: 500,
            message: 'Internal Server Error'
        })
    }

}

// creating patient report 
module.exports.createPatientReport = async function(req, res) {
    try{
       let patient = await Patient.findById(req.params.id);

    } catch(err) {
        console.log('Error', err);
        return res.json(500, {
            status: 500,
            message: 'Internal Server Error'
        })
    }
}