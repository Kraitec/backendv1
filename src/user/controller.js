const pool = require("../../db");
const queries = require("./queries");

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUserByID = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserByID, [id], (error, results) => {
        if (error) throw error;
        if (results.rows.length > 0) {
            res.send(results.rows);
        } else {
            res.send("ID not found.")
        }
    });
};

const addUser = (req, res) => {
    const { username, password, email } = req.body;
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists.");
        } else {
            pool.query(queries.addUser, [username, password, email], (error, results) => {
                if (error) throw error;
                res.status(201).send("User added successfully.");
            });
        };
    });
};

const delUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserByID, [id], (error, results) => {
        if (results.rows.length > 0) {
            pool.query(queries.delUser, [id], (error, results) => {
                if (error) throw error;
                res.status(200).send("User deleted successfully.");
            });
        } else {
            res.send("ID not found.")
        };
    });
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { username, password, email} = req.body;

    pool.query(queries.getUserByID, [id], (error, results) => {
        if (results.rows.length) {
            pool.query(queries.updateUser, [username, password, email, id], (error, results) => {
                if (error) throw error;
                if (res.status(200)) {
                    res.send("User updated successfully.");
                };
            });
        } else {
            res.send("ID not found");
        };
    });
};

module.exports = {
    getUsers,
    getUserByID,
    addUser,
    delUser,
    updateUser,
};