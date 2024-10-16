import React, { useState } from 'react';
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
import './PayMaturity.css'; // Import CSS for styling

export default function PayMaturity() {
    const [accountNumber, setAccountNumber] = useState('');
    const [maturityAmount, setMaturityAmount] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages
        setLoading(true); // Start loading

        // Example API call to submit the payment
        try {
            const response = await fetch('http://localhost:8000/api/pay-maturity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    accountNumber,
                    maturityAmount,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to process payment');
            }

            const data = await response.json();
            setMessage(`Payment successful: ${data.message}`);
            // Optionally reset form fields
            setAccountNumber('');
            setMaturityAmount('');
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="pay-maturity-container"> {/* This div should create a box */}
            <Topbar /> {/* Ensure you have imported Topbar */}
            <Sidepanel /> {/* Ensure you have imported Sidepanel */}
            <div className="pm-content-container">
                <h3>Pay Maturity Amount</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="accountNumber">Account Number:</label>
                        <input
                            type="text"
                            id="accountNumber"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="maturityAmount">Maturity Amount (₹):</label>
                        <input
                            type="number"
                            id="maturityAmount"
                            value={maturityAmount}
                            onChange={(e) => setMaturityAmount(e.target.value)}
                            required
                            min="0" // Ensure amount is non-negative
                        />
                    </div>

                    <button type="submit" disabled={loading}>
                        {loading ? 'Processing...' : 'Pay Maturity'}
                    </button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
}
