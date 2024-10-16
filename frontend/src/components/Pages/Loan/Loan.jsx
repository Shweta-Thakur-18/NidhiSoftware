import React, { useState } from "react";
import Sidepanel from "../../Home/Sidepanel";
import Topbar from "../../Home/Topbar";
import axios from 'axios'; // Axios for API calls
import './Loan.css';

export default function Loan() {
    const [loanDetails, setLoanDetails] = useState({
        memberID: '',
        loanType: '',
        loanAmount: '',
        duration: '',
        interestRate: ''
    });

    const [memberDetails, setMemberDetails] = useState({
        name: '',
        mobile: '',
        email: '',
        branch: '',
        pan: '',
        aadhaar: '',
        maritalStatus: '',
        age: ''
    });

    const [nomineeDetails, setNomineeDetails] = useState({
        nomineeName: '',
        nomineeContact: '',
        nomineeRelationship: ''
    });

    const [emi, setEmi] = useState(null);

    const handleLoanInputChange = (e) => {
        setLoanDetails({
            ...loanDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleMemberInputChange = (e) => {
        setMemberDetails({
            ...memberDetails,
            [e.target.name]: e.target.value
        });
    };

    const handleNomineeInputChange = (e) => {
        setNomineeDetails({
            ...nomineeDetails,
            [e.target.name]: e.target.value
        });
    };

    // Calculate EMI
    const calculateEMI = async () => {
        try {
            const res = await axios.post('http://localhost:8000/api/loan/calculate-emi', {
                loanAmount: loanDetails.loanAmount,
                duration: loanDetails.duration,
                interestRate: loanDetails.interestRate
            });
            setEmi(res.data.emiAmount);
        } catch (error) {
            console.error(error);
        }
    };

    // Apply for Loan
    const applyLoan = async () => {
        try {
            const res = await axios.post('http://localhost:8000/api/loan/apply-loan', {
                loanDetails,
                memberDetails,
                nomineeDetails
            });
            console.log('Loan Applied:', res.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Sidepanel />
            <Topbar />
            <div className="rd-container">
                {/* Open Loan Account Section */}
                <div className="search-box details-box">
                    <h5>Open Loan Account</h5>
                    <div className="row">
                        <div className="col-4">
                            <label>Select Loan Type</label>
                            <input type="text" name="loanType" onChange={handleLoanInputChange} />
                            <label>Member ID</label>
                            <input type="text" name="memberID" onChange={handleLoanInputChange} />
                        </div>
                        <div className="col">
                            <label>Loan Amount</label>
                            <input type="text" name="loanAmount" onChange={handleLoanInputChange} />
                            <label>Duration (months)</label>
                            <input type="text" name="duration" onChange={handleLoanInputChange} />
                            <label>Interest Rate (%)</label>
                            <input type="text" name="interestRate" onChange={handleLoanInputChange} />
                        </div>
                    </div>
                    <button onClick={calculateEMI}>Calculate EMI</button>
                    {emi && <p>EMI Amount: {emi}</p>}
                </div>

                {/* Member Details Section */}
                <div className="member-con details-box">
                    <h5>Member Details</h5>
                    <div className="row">
                        <div className="col">
                            <label>Name</label>
                            <input type="text" name="name" onChange={handleMemberInputChange} />
                            <label>Mobile</label>
                            <input type="text" name="mobile" onChange={handleMemberInputChange} />
                            <label>Email</label>
                            <input type="text" name="email" onChange={handleMemberInputChange} />
                            <label>Branch</label>
                            <input type="text" name="branch" onChange={handleMemberInputChange} />
                        </div>
                        <div className="col">
                            <label>PAN</label>
                            <input type="text" name="pan" onChange={handleMemberInputChange} />
                            <label>Aadhaar</label>
                            <input type="text" name="aadhaar" onChange={handleMemberInputChange} />
                            <label>Marital Status</label>
                            <input type="text" name="maritalStatus" onChange={handleMemberInputChange} />
                            <label>Age</label>
                            <input type="text" name="age" onChange={handleMemberInputChange} />
                        </div>
                    </div>
                </div>

                {/* Nominee Details Section */}
                <div className="nominee-details-container details-box">
                    <h5>Nominee Details</h5>
                    <div className="row">
                        <div className="col">
                            <label>Nominee Name</label>
                            <input type="text" name="nomineeName" onChange={handleNomineeInputChange} />
                            <label>Nominee Contact</label>
                            <input type="text" name="nomineeContact" onChange={handleNomineeInputChange} />
                        </div>
                        <div className="col">
                            <label>Nominee Relationship</label>
                            <input type="text" name="nomineeRelationship" onChange={handleNomineeInputChange} />
                        </div>
                    </div>
                </div>

                {/* Submit Loan */}
                <div className="search-box details-box">
                    <h5>Submit and Review Account Details</h5>
                    <button onClick={applyLoan}>Apply Loan</button>
                </div>
            </div>
        </div>
    );
}
