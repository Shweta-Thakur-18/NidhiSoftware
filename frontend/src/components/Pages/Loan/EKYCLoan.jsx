import React, { useState } from "react";
import axios from "axios";
import Sidepanel from "../../Home/Sidepanel";
import Topbar from "../../Home/Topbar";
import "./ekyloan.css";

export default function EKYCLoan() {
    const [loanAppNo, setLoanAppNo] = useState("");
    const [file, setFile] = useState(null); // State to hold the selected file

    // Function to handle file change
    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Update state with the selected file
    };

    // Function to handle file upload
    const handleFileUpload = async (e) => {
        e.preventDefault(); // Prevent default behavior if needed
        const fileInput = e.target.previousSibling; // Adjust this line if necessary
        const file = fileInput.files[0]; // Get the selected file

    if (!file) {
        alert('Please select a file to upload.');
        return;
    }

    const formData = new FormData();
    formData.append('goldImage', file);

    try {
        // Make sure this URL matches your backend route
        const res = await axios.post('/api/eky/upload-gold-image', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        console.log(res.data);
        alert('File uploaded successfully!');
    } catch (error) {
        console.error('File upload failed:', error);
        alert('File upload failed.');
    }
};
    
    // Function to handle loan application number submission
    const handleSubmit = async () => {
        if (!loanAppNo) {
            alert('Please enter a loan application number.');
            return;
        }

        try {
            const res = await axios.post('/api/loan/ekyc', { loanAppNo });
            console.log(res.data);
            alert('Loan EKYC submitted successfully!');
        } catch (error) {
            console.error('Loan EKYC submission failed:', error);
            alert('Loan EKYC submission failed.');
        }
    };

    return (
        <div>
            <Sidepanel />
            <Topbar />
            <div className="loan-container">
                <h5>Loan EKYC for member</h5>
                <div className="row my-3">
                    <div className="col-6">
                        <label>Enter Loan Application No for EKYC</label>
                        <input 
                            value={loanAppNo}
                            onChange={(e) => setLoanAppNo(e.target.value)}
                            placeholder="Loan Application No" 
                            className="ekyc-input"
                        />
                    </div>
                    <button className="col-1 loan-button" onClick={handleSubmit}>Submit</button>
                </div>
                <div>
                    <label>Gold Images</label>
                    <div className="d-flex upload-div loan-upload">
                        <input 
                            type="file" 
                            className="file-input" 
                            onChange={handleFileChange} // Call the handler on change
                        />
                        <button className="upload-button" onClick={handleFileUpload}>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
