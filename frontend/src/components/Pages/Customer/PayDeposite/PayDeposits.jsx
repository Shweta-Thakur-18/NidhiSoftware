// PayDeposits.jsx
import React, { useState } from 'react';
import Sidepanel from '../../../Home/Sidepanel'; // Adjust the path as needed
import Topbar from '../../../Home/Topbar'; // Adjust the path as needed
import './PayDeposits.css'; // Import the specific CSS file for this component

const PayDeposits = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call or processing payment here
        setMessage(`Successfully deposited ${amount} to account ${accountNumber}`);
        // Clear the form fields after submission
        setAccountNumber('');
        setAmount('');
    };

    return (
        <div className="pay-deposits-container">
            <Topbar /> {/* Include Topbar */}
            <div className="content">
                <Sidepanel /> {/* Include Sidepanel */}
                <div className="main-content">
                    <div className="pay-deposits-box">
                        <h1 className="pay-deposits-title">Pay Deposits</h1>
                        <form className="pay-deposits-form" onSubmit={handleSubmit}>
                            <div className="pay-deposits-field">
                                <label htmlFor="accountNumber">Account Number:</label>
                                <input
                                    type="text"
                                    id="accountNumber"
                                    value={accountNumber}
                                    onChange={(e) => setAccountNumber(e.target.value)}
                                    required
                                    className="dash-input" // Use the dash-input style for consistency
                                />
                            </div>
                            <div className="pay-deposits-field">
                                <label htmlFor="amount">Deposit Amount:</label>
                                <input
                                    type="number"
                                    id="amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                    className="dash-input" // Use the dash-input style for consistency
                                />
                            </div>
                            <button type="submit" className="pay-deposits-submit">Submit</button>
                            {message && <p className="pay-deposits-message">{message}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PayDeposits;
