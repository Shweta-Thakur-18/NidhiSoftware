import React, { useState } from "react";
import axios from "axios";
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
import "./overdueInterestCalculator.css"; // Separate CSS file

export default function OverdueInterestCalculator() {
    const [loanAppNo, setLoanAppNo] = useState("");
    const [overdueDays, setOverdueDays] = useState(null);
    const [overdueInterest, setOverdueInterest] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    // Function to calculate overdue interest
    const calculateOverdueInterest = async () => {
        if (!loanAppNo) {
            setErrorMessage('Please enter a valid loan application number.');
            return;
        }

        try {
            const res = await axios.post('http://localhost:8000/api/loan/calculate-overdue-interest', { loanAppNo });
            setOverdueDays(res.data.overdueDays);
            setOverdueInterest(res.data.overdueInterest);
            setErrorMessage(""); // Clear any previous errors
        } catch (error) {
            console.error('Error calculating overdue interest:', error);
            setErrorMessage('Failed to calculate overdue interest. Please try again.');
        }
    };

    return (
        <div>
            <Sidepanel />
            <Topbar />
            <div className="loan-container">
                <h5>Calculate Overdue Interest</h5>
                <div className="row my-3">
                    <div className="col-6">
                        <label>Enter Loan Application No</label>
                        <input 
                            value={loanAppNo}
                            onChange={(e) => setLoanAppNo(e.target.value)}
                            placeholder="Loan Application No" 
                            className="ekyc-input"
                        />
                    </div>
                    <button className="col-1 loan-button" onClick={calculateOverdueInterest}>Calculate</button>
                </div>

                {/* Error Message Display */}
                {errorMessage && <div className="error-message">{errorMessage}</div>}

                {/* Display Results */}
                {overdueDays !== null && overdueInterest !== null && (
                    <div className="overdue-results">
                        <h6>Overdue Days: {overdueDays}</h6>
                        <h6>Overdue Interest: ₹{overdueInterest}</h6>
                    </div>
                )}
            </div>
        </div>
    );
}
