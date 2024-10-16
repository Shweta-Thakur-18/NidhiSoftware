import React, { useState } from 'react';
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
import './DocumentVerification.css'; // Make sure to create this CSS file

const DocumentVerificationService = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        documentType: '',
        documentNumber: '',
        file: null,
    });

    const [result, setResult] = useState('');

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setFormData({ ...formData, file: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle document verification can be added here.
        setResult('Document verification submitted successfully!');
        // Reset the form after submission if needed
        setFormData({
            name: '',
            email: '',
            documentType: '',
            documentNumber: '',
            file: null,
        });
    };

    return (
        <div className="document-verification-page">
            <Sidepanel />
            <div className="main-content">
                <Topbar />
                <h2>Document Verification Service</h2>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="documentType">Document Type</label>
                            <select
                                id="documentType"
                                name="documentType"
                                value={formData.documentType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Document Type</option>
                                <option value="identityProof">Identity Proof</option>
                                <option value="incomeProof">Income Proof</option>
                                <option value="addressProof">Address Proof</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <label htmlFor="documentNumber">Document Number</label>
                            <input
                                type="text"
                                id="documentNumber"
                                name="documentNumber"
                                value={formData.documentNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="file">Upload Document</label>
                            <input
                                type="file"
                                id="file"
                                name="file"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Verify Document</button>
                    </form>
                    {result && <div className="result">{result}</div>}
                </div>
            </div>
        </div>
    );
};

export default DocumentVerificationService;
