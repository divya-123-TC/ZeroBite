module.exports.addShelter = (req, res) => {
    const { name, location } = req.body;
    res.send(`Shelter added: ${name}, ${location}`);
};
