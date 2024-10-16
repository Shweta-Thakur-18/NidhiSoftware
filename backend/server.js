const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Ensure CORS is installed
const mongoDb = require('./config/db'); // Import your MongoDB connection function
const UserRoute = require("./routers/UserRoute");
const MembarRoute = require("./routers/MembarRoute");
const ReportRoute = require("./routers/ReportRoute");
const payMaturityRoute = require('./routers/payMaturityRoute'); // Ensure correct import path
const loanRoutes = require('./routers/loanRoutes');
const ekyRoutes = require('./routers/ekyRoutes'); // Import EKYC routes
const overdueRoutes = require('./routers/OverdueRoutes');
const loanApplicationsRoutes = require('./routers/LoanApplicationRoutes');

dotenv.config(); // Load environment variables from .env file

// Initialize MongoDB connection using your mongoDb function
mongoDb(); 

const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS for all routes

// MongoDB connection (you can remove this if you are handling it in the mongoDb function)
mongoose.connect(process.env.MONGODB_URI) // Ensure you're using the correct env variable
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// API Routes
app.use("/api/user", UserRoute);
app.use("/api/member", MembarRoute);
app.use("/api/report", ReportRoute);
app.use('/api/loans', loanRoutes);
app.use('/api/pay-maturity', payMaturityRoute); // This route handles Pay Maturity functionality
app.use('/api/eky', ekyRoutes); // Use the EKYC routes
app.use('/api/overdue', overdueRoutes);
app.use('/api/loans', loanApplicationsRoutes); 
// Start the server
const PORT = process.env.PORT || 8000; // Use PORT from environment variables or default to 8000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
