
// controllers/ekyController.js
const EkyLoanApplication = require('../modals/EkyLoanApplication');
const path = require('path');

// Handle EKYC loan application submission
const createEkyLoanApplication = async (req, res) => {
    const { applicationNo } = req.body;
    const goldImage = req.file.path; // Assuming the image is uploaded to a specific path

    try {
        const ekyLoanApplication = new EkyLoanApplication({
            applicationNo,
            goldImage
        });
        await ekyLoanApplication.save();
        res.status(201).json({ message: 'EKYC loan application created successfully', ekyLoanApplication });
    } catch (error) {
        res.status(500).json({ message: 'Error creating EKYC loan application', error });
    }
};

// Export the controller functions
module.exports = {
    createEkyLoanApplication,
};
