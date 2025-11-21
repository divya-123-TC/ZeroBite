module.exports.addNGO = (req, res) => {
    const { name, location } = req.body;
    res.send(`NGO added: ${name}, ${location}`);
};
