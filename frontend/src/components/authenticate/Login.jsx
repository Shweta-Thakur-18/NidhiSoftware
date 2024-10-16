import React from "react";
import "./Login.css";
import img1 from "../images/Logo.jpg";
import img2 from "../images/Banking1.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

export default function Login() {
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    const getFingerprint = async () => {
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        return result.visitorId; // Unique identifier
    };

    const LoginHandler = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const response = await axios.post("http://localhost:8000/api/user/login", { email, pass }, config);
            localStorage.setItem("userInfo", JSON.stringify(response.data));
            console.log(localStorage.getItem("userInfo"));
            navigate("/dashboard");
        } catch (error) {
            console.error(error.response?.data || "Error occurred");
            setError(error.response?.data?.message || "Invalid Email or Password");
        }
    };

    const handleFingerprintLogin = async () => {
        const fingerprint = await getFingerprint();
        console.log(fingerprint); // Log for debugging

        try {
            const response = await axios.post("http://localhost:8000/api/user/fingerprint-login", { fingerprint });
            // Handle successful response
            console.log(response.data);
            localStorage.setItem("userInfo", JSON.stringify(response.data));
            navigate("/dashboard");
        } catch (error) {
            console.error(error.response?.data || "Fingerprint login error");
            setError("Fingerprint authentication failed");
        }
    };

    const handleOtpLogin = () => {
        navigate("/otp"); // Navigate to an OTP input page
    };

    return (
        <div className="login row">
            <div className="col text-start">
                <img className="img1" src={img1} alt="Logo" />
                <div className="img2">
                    <img src={img2} alt="Banking" />
                </div>
                <p className="display-6 fw-bold mx-5">Apply Loan</p>
            </div>
            <div className="login-box col-4">
                <div className="text-start">
                    <div className="branch-login my-4">Branch Login</div>
                    <p className="fs-4 fw-medium">Welcome to NIDHI SOFTWARE PRO!</p>
                    <p className="fs-6 p1">Please sign in to your account and start the adventure</p>

                    {/* Display error message */}
                    {error && <div className="alert alert-danger">{error}</div>}

                    <form className="d-flex flex-column">
                        <div>
                            <label className="fw-bolder my-1">User Name</label>
                            <input placeholder="USERNAME" type="text" className="input1" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <div className="d-flex my-1">
                                <label className="fw-bolder">Password</label>
                                <span className="text-end p1">Forget Password?</span>
                            </div>
                            <input type="password" className="input1" value={pass} onChange={(e) => setPass(e.target.value)} />
                        </div>

                        <div className="d-flex my-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="mx-2 p1 fs-5">Remember Me</span>
                        </div>
                        <div className="text-start login-button">
                            <button onClick={LoginHandler}>Login Here...</button>
                        </div>
                    </form>
                </div>
                <div className="d-flex ">
                    <Link to="/" className="p1 fs-6 my-4">Login With</Link>
                    <Link to="/signup" className="p1 fs-6 my-4">Sign Up</Link>
                </div>

                <div className="d-flex login-buttons gap-5 my-4">
                    <button onClick={handleFingerprintLogin}>FingerPrint</button>
                    <button onClick={handleOtpLogin}>OTP/PIN</button>
                </div>
            </div>
        </div>
    );
}
