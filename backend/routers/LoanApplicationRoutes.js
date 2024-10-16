// routes/loanApplications.js
const express = require('express');
const router = express.Router();
const Loan = require('../modals/Loan');

// GET route to fetch rejected loan applications
router.get('/rejected', async (req, res) => {
    try {
        const rejectedLoans = await Loan.find({ status: 'rejected' });
        res.status(200).json(rejectedLoans);
    } catch (error) {
        console.error('Error fetching rejected loans:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
