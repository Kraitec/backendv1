const getEntities = "SELECT * FROM entities";
const getEntityByID = "SELECT * FROM entities WHERE ID = $1";
const checkEntityExists = "SELECT e FROM entities e WHERE e.ID = $1";
const addEntity = "INSERT INTO entities (value, tag, note) VALUES ($1, $2, $3)";
const delEntity = "DELETE FROM entities WHERE ID = $1";
const updateEntity =
  "UPDATE entities SET value = $1, tag = $2, note = $3 WHERE ID = $4";

module.exports = {
  getEntities,
  getEntityByID,
  checkEntityExists,
  addEntity,
  delEntity,
  updateEntity,
};
