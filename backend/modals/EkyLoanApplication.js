const mongoose = require('mongoose');

const ekyLoanApplicationSchema = new mongoose.Schema({
    applicationNo: { type: String, required: true },
    goldImage: { type: String, required: true } // URL to the uploaded image
}, { timestamps: true });

const EkyLoanApplication = mongoose.model('EkyLoanApplication', ekyLoanApplicationSchema);

module.exports = EkyLoanApplication;