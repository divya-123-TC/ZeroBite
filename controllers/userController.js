const registerUser = (req, res) => {
    res.send("User registered!");
};
const loginUser = (req, res) => {
    res.send("User logged in!");
};
module.exports = { registerUser, loginUser };
