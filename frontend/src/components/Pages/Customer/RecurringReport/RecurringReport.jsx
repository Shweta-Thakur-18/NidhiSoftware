import React, { useState, useEffect } from "react";
import Sidepanel from "../../../Home/Sidepanel";
import Topbar from "../../../Home/Topbar";
import "./RecurringReport.css"; // Importing the CSS file

export default function RecurringReport() {
    // State for holding the recurring deposit data
    const [reportData, setReportData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data when component mounts
    useEffect(() => {
        fetchRecurringReport();
    }, []);

    // Fetching data function
    const fetchRecurringReport = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/report");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            setReportData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="recurring-report-container">
            <Sidepanel />
            <Topbar />
            <div className="rd-report-container">
                <h3>Recurring Deposit Report</h3>
                
                {reportData ? (
                    <>
                        <div className="report-section">
                            <h5>Account Information</h5>
                            <p><strong>Account Number:</strong> {reportData.accountNumber}</p>
                            <p><strong>Customer Name:</strong> {reportData.customerName}</p>
                            <p><strong>Branch Name:</strong> {reportData.branchName}</p>
                            <p><strong>Account Status:</strong> {reportData.status}</p>
                        </div>

                        <div className="report-section">
                            <h5>Deposit Information</h5>
                            <p><strong>Monthly Deposit:</strong> ₹{reportData.monthlyDeposit}</p>
                            <p><strong>Interest Rate:</strong> {reportData.interestRate}%</p>
                            <p><strong>Total Deposits:</strong> ₹{reportData.totalDeposits}</p>
                            <p><strong>Total Interest Earned:</strong> ₹{reportData.totalInterest}</p>
                            <p><strong>Maturity Amount:</strong> ₹{reportData.maturityAmount}</p>
                            <p><strong>Maturity Date:</strong> {reportData.maturityDate}</p>
                        </div>

                        <div className="report-section">
                            <h5>Payment History</h5>
                            <ul>
                                {reportData.paymentHistory.map((payment, index) => (
                                    <li key={index}>
                                        {payment.date}: ₹{payment.amount} - {payment.status}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="report-section">
                            <h5>Nominee Information</h5>
                            <p><strong>Name:</strong> {reportData.nominee.name}</p>
                            <p><strong>Relationship:</strong> {reportData.nominee.relationship}</p>
                        </div>
                    </>
                ) : (
                    <p>No report data available</p>
                )}
            </div>
        </div>
    );
}
