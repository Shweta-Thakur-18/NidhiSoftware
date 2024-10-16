import React from "react";
import axios from "axios";
import FingerprintJS from '@fingerprintjs/fingerprintjs';

const FingerprintLogin = () => {
    const loginHandler = async () => {
        try {
            // Capture fingerprint
            const fp = await FingerprintJS.load();
            const result = await fp.get();
            const fingerprint = result.visitorId; // Get the fingerprint

            const response = await axios.post("http://localhost:8000/api/user/fingerprint-login", {
                fingerprint
            });

            console.log(response.data); // Handle successful login response
        } catch (error) {
            console.log("Error occurred:", error);
        }
    };

    return (
        <button onClick={loginHandler}>Login with Fingerprint</button>
    );
};

export default FingerprintLogin;
