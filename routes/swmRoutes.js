const express = require('express');
const router = express.Router();
const swms = [];

router.post('/add', (req, res) => {
    swms.push(req.body);
    res.send(SWM added: , );
});

// GET all SWMs
router.get('/', (req, res) => {
    res.json(swms);
});

module.exports = router;
