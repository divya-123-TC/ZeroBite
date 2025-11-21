const express = require("express");
const cors = require("cors");
const { nanoid } = require("nanoid");

const app = express();
app.use(cors());
app.use(express.json());

// In-memory user storage
let users = [];

// Add a user
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: nanoid(), name, email };
  users.push(newUser);
  res.json(newUser);
});

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Delete a user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== id);
  res.json({ message: "User deleted", id });
});

// Start server
app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
