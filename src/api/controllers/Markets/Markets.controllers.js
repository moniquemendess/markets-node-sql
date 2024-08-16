const {
  getAllMarkets,
  getMarketByName,
} = require("../../services/Markets/Markets.service");

const getAllMarket = async (req, res) => {
  try {
    const markets = await getAllMarkets();
    res.status(200).json(markets);
  } catch (error) {
    res.status(400).json({ error: message });
  }
};

const getMarketByNameHandler = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  try {
    const markets = await getMarketByName(name);
    res.status(200).json(markets);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve markets" });
  }
};
module.exports = { getAllMarket, getMarketByNameHandler };
