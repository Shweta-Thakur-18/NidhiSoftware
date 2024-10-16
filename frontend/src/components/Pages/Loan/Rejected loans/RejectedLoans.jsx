import React from 'react';
import Sidepanel from '../../../Home/Sidepanel'; // Assuming the correct import path for your Sidepanel
import Topbar from '../../../Home/Topbar'; // Assuming the correct import path for your Topbar
import './RejectedLoans.css'; // Import the CSS file for styling

// Dummy data simulating rejected loans
const dummyRejectedLoans = [
    {
        memberID: "M001",
        loanType: "Personal Loan",
        loanAmount: 5000,
        duration: 12,
        interestRate: 5.5,
        status: "rejected"
    },
    {
        memberID: "M002",
        loanType: "Home Loan",
        loanAmount: 25000,
        duration: 60,
        interestRate: 4.5,
        status: "rejected"
    },
    {
        memberID: "M003",
        loanType: "Car Loan",
        loanAmount: 15000,
        duration: 36,
        interestRate: 6.0,
        status: "rejected"
    }
];

const RejectedLoans = () => {
    return (
        <div className="rejected-loans-page-wrapper">
            <Sidepanel /> {/* Sidepanel imported and used */}
            <div className="main-content-wrapper">
                <Topbar /> {/* Topbar imported and used */}
                <div className="rejected-loans-container">
                    <h5 className="page-title">Rejected Loan Applications</h5>
                    <div className="loan-list">
                        <ul>
                            {dummyRejectedLoans.map((loan, index) => (
                                <li key={index}>
                                    <div className="loan-details">
                                        <strong>Member ID:</strong> <span>{loan.memberID}</span>
                                    </div>
                                    <div className="loan-details">
                                        <strong>Loan Type:</strong> <span>{loan.loanType}</span>
                                    </div>
                                    <div className="loan-details">
                                        <strong>Loan Amount:</strong> <span>${loan.loanAmount}</span>
                                    </div>
                                    <div className="loan-details">
                                        <strong>Duration (Months):</strong> <span>{loan.duration}</span>
                                    </div>
                                    <div className="loan-details">
                                        <strong>Interest Rate:</strong> <span>{loan.interestRate}%</span>
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

export default RejectedLoans;
