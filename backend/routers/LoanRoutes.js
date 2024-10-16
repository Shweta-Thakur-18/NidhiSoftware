const express = require('express');
const { calculateLoanEMI, applyForLoan } = require('../controllers/LoanController');
const router = express.Router();

router.post('/calculate-emi', calculateLoanEMI);
router.post('/apply-loan', applyForLoan);

module.exports = router;
