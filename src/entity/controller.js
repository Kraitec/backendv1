const pool = require("../../db");
const queries = require("./queries");

const getEntities = (req, res) => {
  pool.query(queries.getEntities, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getEntityByID = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getEntityByID, [id], (error, results) => {
    if (error) throw error;
    if (results.rows.length > 0) {
      res.send(results.rows);
    } else {
      res.send("ID not found.");
    }
  });
};

const addEntity = (req, res) => {
  const { value, tag, note, ID } = req.body;
  pool.query(queries.checkEntityExists, [ID], (error, results) => {
    if (results.rows.length) {
      res.send("Entity already exists.");
    } else {
      pool.query(queries.addEntity, [value, tag, note], (error, results) => {
        if (error) throw error;
        res.status(201).send("Entity added successfully.");
      });
    }
  });
};

const delEntity = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getEntityByID, [id], (error, results) => {
    if (results.rows.length > 0) {
      pool.query(queries.delEntity, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Entity deleted successfully.");
      });
    } else {
      res.send("ID not found.");
    }
  });
};

const updateEntity = (req, res) => {
  const id = parseInt(req.params.id);
  const { value, tag, note } = req.body;

  pool.query(queries.getEntityByID, [id], (error, results) => {
    if (results.rows.length) {
      pool.query(
        queries.updateEntity,
        [value, tag, note, id],
        (error, results) => {
          if (error) throw error;
          if (res.status(200)) {
            res.send("User updated successfully.");
          }
        }
      );
    } else {
      res.send("ID not found");
    }
  });
};

module.exports = {
  getEntities,
  getEntityByID,
  addEntity,
  delEntity,
  updateEntity,
};
