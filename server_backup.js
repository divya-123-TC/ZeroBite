const express = require('express');
const cors = require('cors');
require('dotenv').config();
const admin = require('firebase-admin');
admin.initializeApp();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const shelterRoutes = require('./routes/shelterRoutes');
const ngoRoutes = require('./routes/ngoRoutes');
const swmRoutes = require('./routes/swmRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const userRoutes = require('./routes/userRoutes');
const donationRoutes = require('./routes/donationRoutes');
const shelterRoutes = require('./routes/shelterRoutes');
const ngoRoutes = require('./routes/ngoRoutes');
const swmRoutes = require('./routes/swmRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');

app.use('/api/users', userRoutes);
app.use('/api/shelters', shelterRoutes);
app.use('/api/ngos', ngoRoutes);
app.use('/api/swms', swmRoutes);
app.use('/api/volunteer_tasks', volunteerRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/shelters', shelterRoutes);
app.use('/api/ngos', ngoRoutes);
app.use('/api/swms', swmRoutes);
app.use('/api/volunteer_tasks', volunteerRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('ZeroBite Backend is running!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
