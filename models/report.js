// require mongoose 
const mongoose = require('mongoose');

// Reports SCHEMA
const reportSchema = mongoose.Schema({
    status: {
        type: String,
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DOCTOR',
        required: true
    },

}, {
    timestamps: true
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;