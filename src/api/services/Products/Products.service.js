const pool = require("../../../db/connection");

const getAllProducts = async () => {
  const [rows] = await pool.execute("SELECT * FROM Products ");
  return rows;
};

module.exports = getAllProducts;
