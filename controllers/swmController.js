module.exports.addSWM = (req, res) => {
    const { location, contact } = req.body;
    res.send(`SWM added: ${location}, ${contact}`);
};
