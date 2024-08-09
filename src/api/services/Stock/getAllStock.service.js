const pool = require("../../../db/connection");

const getAllStock = async () => {
  const [rows] = await pool.execute("SELECT * FROM STOCK");
  return rows;
};

module.exports = getAllStock;
