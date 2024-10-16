// routers/ReportRoute.js
const express = require("express");
const router = express.Router();
const Report = require("../modals/Report");

// GET endpoint to fetch recurring report data
router.get("/", async (req, res) => {
    try {
        const reportData = await Report.findOne(); // Fetch a single report; adjust as needed
        if (!reportData) {
            return res.status(404).json({ message: "No report found" });
        }
        res.json(reportData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post("/", async (req, res) => {
    const newReport = new Report(req.body); // Create a new report from the request body

    try {
        const savedReport = await newReport.save(); // Save it to the database
        res.status(201).json(savedReport); // Return the saved report
    } catch (error) {
        res.status(400).json({ message: error.message }); // Return any validation errors
    }
});

module.exports = router;
