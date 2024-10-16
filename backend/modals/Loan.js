// models/Loan.js
// models/Loan.js
const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    memberID: { type: String, required: true },
    loanType: { type: String, required: true },
    loanAmount: { type: Number, required: true },
    duration: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    status: { type: String, enum: ['approved', 'rejected', 'pending'], required: true }, // New status field
}, { timestamps: true });

module.exports = mongoose.model('Loan', loanSchema);
