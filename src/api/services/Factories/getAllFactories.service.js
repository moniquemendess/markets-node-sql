const pool = require("../../../db/connection");

const getAllFactories = async () => {
  const [rows] = await pool.execute("SELECT * FROM Factories");
  return rows;
};

module.exports = getAllFactories;
