const {
  createFactory,
  getAllFactoriesService,
} = require("../../services/Factories/Factories.service");

const addFactory = async (req, res) => {
  try {
    await createFactory(req.body);
    res.status(200).json({ message: "Factory created successfully" });
  } catch (error) {
    console.error("error creating factory", error);
    res.status(404).json({ error: error.message });
  }
};

const getAllFactories = async (req, res) => {
  try {
    await getAllFactoriesService();
    res.status(200).json(factories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addFactory, getAllFactories };
