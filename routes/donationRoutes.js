const express = require("express");
const router = express.Router();
const Donation = require("../models/donationModel");

// Add a donation
router.post("/add", async (req, res) => {
    try {
        const { donor, amount } = req.body;
        const newDonation = new Donation({ donor, amount });
        await newDonation.save();
        res.send(`Donation added: ${newDonation.donor}, amount ${newDonation.amount}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding donation");
    }
});

module.exports = router;
