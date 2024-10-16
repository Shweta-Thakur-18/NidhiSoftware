// models/Nominee.js
const mongoose = require('mongoose');

const nomineeSchema = new mongoose.Schema({
    nomineeName: { type: String, required: true },
    nomineeContact: { type: String, required: true },
    nomineeRelationship: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Nominee', nomineeSchema);

