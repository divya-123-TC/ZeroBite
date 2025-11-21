const express = require("express");
const router = express.Router();
const VolunteerTask = require("../models/volunteerTaskModel");

// Add a volunteer task
router.post("/add", async (req, res) => {
    try {
        const { task, assignedTo } = req.body;
        const newTask = new VolunteerTask({ task, assignedTo });
        await newTask.save();
        res.send(`Volunteer task added: ${newTask.task}, assigned to ${newTask.assignedTo}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding volunteer task");
    }
});

module.exports = router;
