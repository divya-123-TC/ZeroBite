const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// Trigger when donation is created
exports.onCreateDonation = functions.firestore
    .document("donations/{donationId}")
    .onCreate(async (snap, context) => {
        console.log("New donation created:", snap.data());
        // Add logic: find nearby NGO, notify volunteers
    });

// Scheduled function: donation expiry
exports.expireDonations = functions.pubsub.schedule("every 24 hours").onRun(async () => {
    console.log("Checking for expired donations...");
});
