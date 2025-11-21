const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

// ---------------------------
// Create User
// ---------------------------
exports.createUser = functions.https.onRequest(async (req, res) => {
  try {
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({message: "All fields are required"});
    }

    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: name,
    });

    await db.collection("users").doc(userRecord.uid).set({
      name,
      email,
      createdAt: new Date(),
    });

    return res.status(201).json({message: "User created", uid: userRecord.uid});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
});


// ---------------------------
// Login User
// ---------------------------
exports.loginUser = functions.https.onRequest(async (req, res) => {
  try {
    const {email, password} = req.body;

    if (!email || !password) {
      return res.status(400).json({message: "Email & Password required"});
    }

    // Firebase Admin cannot verify password, so return message
    return res.status(200).json({
      message: "Use Firebase Authentication login in Flutter app",
    });
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
});


// ---------------------------
// Place Order
// ---------------------------
exports.placeOrder = functions.https.onRequest(async (req, res) => {
  try {
    const {userId, items, total} = req.body;

    if (!userId || !items || !total) {
      return res.status(400).json({message: "Missing order details"});
    }

    const orderRef = await db.collection("orders").add({
      userId,
      items,
      total,
      status: "Pending",
      createdAt: new Date(),
    });

    return res.status(201).json({message: "Order placed", orderId: orderRef.id});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
});


// ---------------------------
// Get User Orders
// ---------------------------
exports.getUserOrders = functions.https.onRequest(async (req, res) => {
  try {
    const {userId} = req.body;

    if (!userId) {
      return res.status(400).json({message: "userId is required"});
    }

    const snapshot = await db
        .collection("orders")
        .where("userId", "==", userId)
        .get();

    const orders = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return res.status(200).json({orders});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
});


// ---------------------------
// Update Profile
// ---------------------------
exports.updateProfile = functions.https.onRequest(async (req, res) => {
  try {
    const {userId, name} = req.body;

    if (!userId || !name) {
      return res.status(400).json({message: "Missing user info"});
    }

    await db.collection("users").doc(userId).update({
      name,
    });

    return res.status(200).json({message: "Profile updated"});
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
});
