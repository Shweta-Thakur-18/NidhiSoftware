// controllers/loanController.js
const Loan = require('../modals/Loan'); // Assuming you have a Loan model
const Member = require('../modals/Mem'); // Assuming you have a Member model
const Nominee = require('../modals/Nominee'); // Assuming you have a Nominee model

// Function to calculate EMI
const calculateEMI = (loanAmount, duration, interestRate) => {
    const r = interestRate / (12 * 100); // Monthly interest rate
    const emi = (loanAmount * r * Math.pow(1 + r, duration)) / (Math.pow(1 + r, duration) - 1);
    return emi.toFixed(2); // Returns EMI with two decimal points
};

// EMI Calculation Endpoint
exports.calculateLoanEMI = (req, res) => {
    const { loanAmount, duration, interestRate } = req.body;
    const emi = calculateEMI(parseFloat(loanAmount), parseInt(duration), parseFloat(interestRate));
    res.status(200).json({ emiAmount: emi });
};

// Apply for Loan
exports.applyForLoan = async (req, res) => {
    const { loanDetails, memberDetails, nomineeDetails } = req.body;

    try {
        // Create and save loan application
        const loan = new Loan(loanDetails);
        await loan.save();

        // Create and save member details
        const member = new Member(memberDetails);
        await member.save();

        // Create and save nominee details
        const nominee = new Nominee(nomineeDetails);
        await nominee.save();

        res.status(201).json({
            message: 'Loan Application Submitted Successfully',
            loanDetails,
            memberDetails,
            nomineeDetails,
        });
    } catch (error) {
        console.error('Error applying for loan:', error);
        res.status(500).json({ message: 'Error applying for loan', error });
    }
};
