import React, { useState } from 'react';
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
import './Creaditscore.css'; // Ensure to create this CSS file

const CreditScoreCheck = () => {
    const [name, setName] = useState('');
    const [ssn, setSsn] = useState('');
    const [creditScore, setCreditScore] = useState(null);

    const handleCheckScore = () => {
        // Simulated API call to get credit score
        if (name && ssn) {
            const simulatedScore = Math.floor(Math.random() * 850) + 300; // Random score between 300-850
            setCreditScore(simulatedScore);
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="credit-score-check-page">
            <Sidepanel />
            <div className="main-content">
                <Topbar />
                <h2>Check Your Credit Score</h2>
                <div className="form-container">
                    <div className="input-container">
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="ssn">Social Security Number:</label>
                        <input 
                            type="text" 
                            id="ssn" 
                            value={ssn} 
                            onChange={(e) => setSsn(e.target.value)} 
                        />
                    </div>
                    <button onClick={handleCheckScore}>Check Credit Score</button>
                    {creditScore !== null && (
                        <div className="result">
                            <h3>Your Credit Score: {creditScore}</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CreditScoreCheck;