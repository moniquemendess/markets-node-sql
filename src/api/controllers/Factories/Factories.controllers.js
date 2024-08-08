const getAllFactoriesService = require("../../services/Factories/getAllFactories.service");

const getAllFactories = async (req, res) => {
  try {
    const factories = await getAllFactoriesService();
    res.status(200).json(factories);
  } catch (error) {
    res.status(400).json({ error: message });
  }
};

module.exports = getAllFactories;
