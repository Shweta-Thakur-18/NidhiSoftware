import React from "react";
import "./Login.css";
import img1 from "../images/Logo.jpg";
import img2 from "../images/Banking1.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FingerprintJS from '@fingerprintjs/fingerprintjs';

export default function Signup() {
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            // Capture fingerprint automatically
            const fp = await FingerprintJS.load();
            const result = await fp.get();
            const fingerprint = result.visitorId; // Get the fingerprint

            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const response = await axios.post("http://localhost:8000/api/user/register", {
                email,
                pass,
                fingerprint // Send the fingerprint to the server
            }, config);

            localStorage.setItem("userInfo", JSON.stringify(response.data));
            console.log(localStorage.getItem("userInfo"));
            navigate("/");
            console.log(response.data);
        } catch (error) {
            console.log(error, "Error occurred");
        }
    };

    return (
        <div className="login row">
            <div className="col text-start">
                <img className="img1" src={img1} alt="" />
                <div className="img2">
                    <img src={img2} alt="" />
                </div>
                <p className="display-6 fw-bold mx-5">Apply Loan</p>
            </div>
            <div className="login-box col-4">
                <div className="text-start ">
                    <div className="branch-login my-4">Branch Login</div>
                    <p className="fs-4 fw-medium">Welcome to NIDHI SOFTWARE PRO!</p>
                    <p className="fs-6 p1">Create Your Account</p>
                    <form className="d-flex flex-column">
                        <div>
                            <div><label className="fw-bolder my-1">Email</label></div>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" type="text" className="input1" />
                        </div>
                        <div>
                            <div className="d-flex my-1"><label className="fw-bolder">Password</label></div>
                            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" className="input1" />
                        </div>
                        <div className="text-start login-button mt-4 ">
                            <button onClick={(e) => submitHandler(e)} type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
                <div className="d-flex mt-3 mb-5">
                    <Link to="/"><a className="p1 fs-6 my-4">Login</a></Link>
                </div>
            </div>
        </div>
    );
}
