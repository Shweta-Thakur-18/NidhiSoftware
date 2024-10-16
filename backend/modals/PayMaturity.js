

const mongoose = require('mongoose');

const PayMaturitySchema = new mongoose.Schema({
    accountNumber: {
        type: String,
        required: true,
    },
    maturityAmount: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const PayMaturity = mongoose.model('PayMaturity', PayMaturitySchema);
module.exports = PayMaturity;
