const getAllStockService = require("../../services/Stock/getAllStock.service");

const getAllStock = async (req, res) => {
  try {
    const stock = await getAllStockService();
    res.status(200).json(stock);
  } catch (error) {
    res.status(400).json({ error: message });
  }
};

module.exports = getAllStock;
