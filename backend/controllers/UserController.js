const asyncHandler = require("express-async-handler");
const User = require("../modals/UserModal");
const bcrypt = require("bcryptjs"); // Import bcrypt for hashing

// Register User
const registerUser = asyncHandler(async (req, res) => {
    const { email, pass, fingerprint } = req.body; 

    // Check if all fields are provided
    if (!email || !pass) {
        res.status(400);
        throw new Error("Please enter all the fields");
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(pass, 10);
    
    // Create a new user
    const user = new User({
        email,
        pass: hashedPassword, // Store hashed password
        fingerprint, // Save fingerprint if provided
    });
    
    // Save the user to the database
    const savedUser = await user.save();
    
    if (savedUser) {
        res.status(201).json({
            id: savedUser._id,
            email: savedUser.email,
        });
    } else {
        res.status(500);
        throw new Error("Error creating user");
    }
});

// Authenticate User
const authUser = asyncHandler(async (req, res) => {
    const { email, pass } = req.body;
    console.log("Received email: ", email);
    console.log("Received password: ", pass);


    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
        console.log("User not found with email: ", email);
    } else {
        console.log("User found: ", user);
    }

    // Compare the password using bcrypt
    const passwordMatch = user && (await bcrypt.compare(pass, user.pass));
    console.log("Password match: ", passwordMatch);

    // Check if user exists and the password matches
    if (passwordMatch) {
        res.json({
            _id: user._id,
            email: user.email,
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }

});

// Fingerprint Login
const fingerprintLogin = asyncHandler(async (req, res) => {
    const { fingerprint } = req.body;

    // Find user by fingerprint
    const user = await User.findOne({ fingerprint });

    if (user) {
        res.json({
            _id: user._id,
            email: user.email,
            message: "Fingerprint authenticated successfully",
            // Add other details as needed
        });
    } else {
        res.status(401);
        throw new Error("Fingerprint authentication failed");
    }
});

// OTP Verification (if required)
const verifyOtp = asyncHandler(async (req, res) => {
    const { otp } = req.body;

    // This part is context-dependent; implement as needed
    const user = await User.findOne({ otp });

    if (user) {
        res.json({
            _id: user._id,
            email: user.email,
        });
    } else {
        res.status(401);
        throw new Error("Invalid OTP/PIN");
    }
});

module.exports = {
    registerUser,
    authUser,
    fingerprintLogin,
    verifyOtp,
};
