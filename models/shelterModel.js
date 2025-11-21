const mongoose = require('mongoose');

const shelterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true }
});

module.exports = mongoose.model('Shelter', shelterSchema);
