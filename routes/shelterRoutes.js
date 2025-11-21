const express = require("express");
const router = express.Router();
const Shelter = require("../models/shelterModel");

// Add a shelter
router.post("/add", async (req, res) => {
    try {
        const { name, location } = req.body;
        const newShelter = new Shelter({ name, location });
        await newShelter.save();
        res.send(`Shelter added: ${newShelter.name}, located at ${newShelter.location}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding shelter");
    }
});

module.exports = router;
