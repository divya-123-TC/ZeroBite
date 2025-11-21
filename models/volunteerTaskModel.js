const mongoose = require('mongoose');

const volunteerTaskSchema = new mongoose.Schema({
    task: { type: String, required: true },
    assignedTo: { type: String, required: true }
});

module.exports = mongoose.model('VolunteerTask', volunteerTaskSchema);
