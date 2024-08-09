const pool = require("../../../db/connection");

//Definir las consultas sql

const getAllMarkets = async () => {
  const [rows] = await pool.execute("SELECT * FROM Markets ");
  return rows;
};

module.exports = getAllMarkets;
