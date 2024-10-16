import React, { useState } from "react";
import axios from "axios";
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
import "./emiDueCalculator.css"; // Separate CSS file for EMI Due

export default function EmiDueCalculator() {
    const [loanAppNo, setLoanAppNo] = useState("");
    const [emiDue, setEmiDue] = useState(null);

    // Function to calculate EMI due
    const calculateEmiDue = async () => {
        if (!loanAppNo) {
            alert('Please enter a loan application number.');
            return;
        }

        try {
            const res = await axios.post('http://localhost:8000/api/loan/calculate-emi-due', { loanAppNo });
            console.log(res.data);
            setEmiDue(res.data.emiDue);
            alert(`EMI Due: ${res.data.emiDue}`);
        } catch (error) {
            console.error('Error calculating EMI due:', error);
            alert('Failed to calculate EMI due.');
        }
    };

    return (
        <div>
            <Sidepanel />
            <Topbar />
            <div className="loan-container">
                <h5>Calculate EMI Due</h5>
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
                    <button className="col-1 loan-button" onClick={calculateEmiDue}>Calculate</button>
                </div>
                {emiDue !== null && (
                    <div className="emi-due-results">
                        <h6>EMI Due: {emiDue}</h6>
                    </div>
                )}
            </div>
        </div>
    );
}
