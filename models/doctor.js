// require mongoose 
const mongoose = require('mongoose');
// require path
const path = require('path');

// DOCTOR SCHEMA
const doctorSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const DOCTOR = mongoose.model('DOCTOR', doctorSchema);

module.exports = DOCTOR;
