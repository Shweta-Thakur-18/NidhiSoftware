import React from "react";
import "./Login.css";
import axios from "axios";
import img1 from "../images/Logo.jpg"; // Adjust the image path as needed
import { Link, useNavigate } from "react-router-dom";

const Otp = () => {
    const [otp, setOtp] = React.useState("");
    const navigate = useNavigate();

    const handleOtpSubmit = async (e) => {
        e.preventDefault();

        try {
            // Here you can add your API call to verify the OTP
            const response = await axios.post("http://localhost:8000/api/user/verify-otp", { otp });

            // Assuming a successful response indicates that the OTP is valid
            if (response.data.success) {
                // Navigate to the dashboard upon successful OTP verification
                navigate("/dashboard");
            } else {
                // Handle unsuccessful verification (show an error message, etc.)
                console.log("Invalid OTP. Please try again.");
            }
        } catch (error) {
            console.log("Error verifying OTP:", error);
        }
    };

    return (
        <div className="login row">
            <div className="col text-start">
                <img className="img1" src={img1} alt="Logo" />
                <p className="display-6 fw-bold mx-5">Verify Your OTP</p>
            </div>
            <div className="login-box col-4">
                <div className="text-start ">
                    <div className="branch-login my-4">OTP Verification</div>
                    <form className="d-flex flex-column" onSubmit={handleOtpSubmit}>
                        <div>
                            <div><label className="fw-bolder my-1">Enter OTP</label></div>
                            <input
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="One Time Password"
                                type="text"
                                className="input1"
                                required
                            />
                        </div>
                        <div className="text-start login-button mt-4 ">
                            <Link to="/dashboard">
                            <button type="submit">Verify OTP</button>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="d-flex mt-3 mb-5">
                    <Link to="/">
                        <a className="p1 fs-6 my-4">Back to Login</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Otp;