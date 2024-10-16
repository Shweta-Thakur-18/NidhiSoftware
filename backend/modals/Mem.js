// models/Member.js
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    branch: { type: String, required: true },
    pan: { type: String, required: true },
    aadhaar: { type: String, required: true },
    maritalStatus: { type: String, required: true },
    age: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Mem', memberSchema);
