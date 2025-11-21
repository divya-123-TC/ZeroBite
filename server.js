const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());

// Import routes
const ngoRoutes = require("./routes/ngoRoutes");
const shelterRoutes = require("./routes/shelterRoutes");
const volunteerTaskRoutes = require("./routes/volunteerTaskRoutes");
const donationRoutes = require("./routes/donationRoutes");

// Use routes
app.use("/ngo", ngoRoutes);
app.use("/shelter", shelterRoutes);
app.use("/volunteerTask", volunteerTaskRoutes);
app.use("/donation", donationRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
