const getAllMarketsService = require("../../services/Markets/getAllMarkets.service");

const getAllMarkets = async (req, res) => {
  try {
    const markets = await getAllMarketsService();
    res.status(200).json(markets);
  } catch (error) {
    res.status(400).json({ error: message });
  }
};

module.exports = getAllMarkets;
