const express = require('express');
const router = express.Router();
const PayMaturity = require('../modals/PayMaturity'); // Make sure to import your Mongoose model

// POST endpoint to pay maturity amount
router.post('/', async (req, res) => {
    const { accountNumber, maturityAmount } = req.body;

    // Validate request body
    if (!accountNumber || !maturityAmount) {
        return res.status(400).json({ message: 'Account number and maturity amount are required.' });
    }

    try {
        // Create a new Pay Maturity entry
        const payMaturity = new PayMaturity({ accountNumber, maturityAmount });
        await payMaturity.save(); // Save payment to MongoDB

        res.status(200).json({ message: 'Payment processed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to process payment', error: error.message });
    }
});

module.exports = router;
