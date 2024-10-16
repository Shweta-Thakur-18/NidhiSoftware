const express = require('express');
const router = express.Router();

// Example function to calculate overdue interest
const calculateOverdueInterest = (loanAmount, interestRate, overdueDays) => {
    // Assuming daily interest calculation
    const dailyInterestRate = interestRate / 100 / 365;
    const overdueInterest = loanAmount * dailyInterestRate * overdueDays;
    return overdueInterest.toFixed(2);
};

// Route to calculate overdue interest
router.post('/calculate-overdue-interest', (req, res) => {
    const { loanAmount, interestRate, overdueDays } = req.body;

    if (!loanAmount || !interestRate || !overdueDays) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const overdueInterest = calculateOverdueInterest(loanAmount, interestRate, overdueDays);
        res.status(200).json({
            message: 'Overdue interest calculated successfully',
            overdueInterest,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error calculating overdue interest',
            error: error.message,
        });
    }
});

module.exports = router;
