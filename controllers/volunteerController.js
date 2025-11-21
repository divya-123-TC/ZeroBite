module.exports.addVolunteerTask = (req, res) => {
    const { task, assignedTo } = req.body;
    res.send(`Volunteer task added: ${task}, assigned to ${assignedTo}`);
};
