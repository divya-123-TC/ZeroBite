const express = require('express');
const router = express.Router();
const users = []; // store users temporarily

router.post('/register', (req, res) => {
    users.push(req.body);
    res.send('User registered!');
});

router.post('/login', (req, res) => {
    res.send('User logged in!');
});

// GET all users
router.get('/', (req, res) => {
    res.json(users);
});

module.exports = router;
