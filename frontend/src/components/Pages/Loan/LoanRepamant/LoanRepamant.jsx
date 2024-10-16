// src/components/LoanRepayment.jsx

import React from 'react';
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
import './LoanRepayment.css'; // Import your SCSS file for styling
// src/components/LoanRepayment.jsx


const dummyLoanRepayments = [
    {
        repaymentID: "R001",
        loanID: "L001",
        amount: 500,
        dueDate: "2024-10-30",
        status: "Paid"
    },
    {
        repaymentID: "R002",
        loanID: "L002",
        amount: 300,
        dueDate: "2024-11-15",
        status: "Pending"
    },
    {
        repaymentID: "R003",
        loanID: "L003",
        amount: 450,
        dueDate: "2024-12-01",
        status: "Overdue"
    }
];

const LoanRepayment = () => {
    return (
        <div className="loan-repayment-page">
            <Topbar />
            <div className="main-content">
                <Sidepanel />
                <div className="loan-repayment-container">
                    <h5>Loan Repayments</h5>
                    <div className="repayment-section">
                        <p>Below are the repayment details for your loans:</p>
                    </div>
                    <div className="repayment-list">
                        <ul>
                            {dummyLoanRepayments.map((repayment, index) => (
                                <li key={index}>
                                    <div className="repayment-details">
                                        <strong>Repayment ID:</strong> <span>{repayment.repaymentID}</span>
                                    </div>
                                    <div className="repayment-details">
                                        <strong>Loan ID:</strong> <span>{repayment.loanID}</span>
                                    </div>
                                    <div className="repayment-details">
                                        <strong>Amount:</strong> <span>${repayment.amount}</span>
                                    </div>
                                    <div className="repayment-details">
                                        <strong>Due Date:</strong> <span>{repayment.dueDate}</span>
                                    </div>
                                    <div className="repayment-details">
                                        <strong>Status:</strong> <span>{repayment.status}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoanRepayment;
