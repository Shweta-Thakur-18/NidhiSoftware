const express = require('express');
const multer = require('multer'); // Ensure you have multer installed
const path = require('path');

const router = express.Router(); // Create a new router

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Ensure this folder exists
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

// Initialize multer with the defined storage
const upload = multer({ storage });

// Define the upload route using the router
router.post('/upload-gold-image', upload.single('goldImage'), (req, res) => {
    console.log(req.file); // Log the uploaded file
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send('File uploaded successfully.');
});
router.post('/ekyc', (req, res) => {
    const { loanAppNo } = req.body;
    if (!loanAppNo) {
        return res.status(400).send('Loan Application Number is required.');
    }
    // Handle EKYC processing here
    res.send('Loan EKYC submitted successfully.');
});


// Export the router
module.exports = router;
