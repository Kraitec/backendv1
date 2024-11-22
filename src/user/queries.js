const getUsers = "SELECT * FROM users";
const getUserByID = "SELECT * FROM users WHERE ID = $1";
const checkEmailExists = "SELECT u FROM users u WHERE u.email = $1";
const addUser = "INSERT INTO users (username, password, email) VALUES ($1, $2, $3)";
const delUser = "DELETE FROM users WHERE ID = $1";
const updateUser = "UPDATE users SET username = $1, password = $2, email = $3 WHERE ID = $4";

module.exports = {
    getUsers,
    getUserByID,
    checkEmailExists,
    addUser,
    delUser,
    updateUser,
}