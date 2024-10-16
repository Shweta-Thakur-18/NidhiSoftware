// models/Report.js
const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    accountNumber: String,
    customerName: String,
    branchName: String,
    status: String,
    monthlyDeposit: Number,
    interestRate: Number,
    totalDeposits: Number,
    totalInterest: Number,
    maturityAmount: Number,
    maturityDate: Date,
    paymentHistory: [
        {
            date: Date,
            amount: Number,
            status: String,
        },
    ],
    nominee: {
        name: String,
        relationship: String,
    },
});

module.exports = mongoose.model("Report", reportSchema);
