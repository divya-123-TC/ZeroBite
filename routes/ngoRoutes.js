const express = require("express");
const router = express.Router();
const Ngo = require("../models/ngoModel"); // make sure this file exists

// Add an NGO
router.post("/add", async (req, res) => {
    try {
        const { name, location } = req.body;
        const newNgo = new Ngo({ name, location });
        await newNgo.save();
        res.send(`NGO added: ${newNgo.name}, located at ${newNgo.location}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding NGO");
    }
});

module.exports = router;
