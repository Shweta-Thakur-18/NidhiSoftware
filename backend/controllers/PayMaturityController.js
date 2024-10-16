// controllers/payMaturityController.js
const express = require('express');
const router = express.Router();
const payMaturity = require('../modals/payMaturity'); // Import your model

router.post('/pay-maturity', async (req, res) => {
    const { accountNumber, maturityAmount } = req.body;

    try {
        // Here you can process the payment logic, e.g., saving to database
        const payMaturity = new Payment({ accountNumber, maturityAmount });
        await payMaturity.save(); // Save payment to database

        res.status(200).json({ message: 'Payment processed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to process payment' });
    }
});

module.exports = router;