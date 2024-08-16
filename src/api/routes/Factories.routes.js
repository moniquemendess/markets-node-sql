const {
  getAllFactories,
  addFactory,
} = require("../controllers/Factories/Factories.controllers");

const FactoriesRoutes = require("express").Router();

FactoriesRoutes.post("/addFactory", addFactory);
FactoriesRoutes.get("/getAllFactories", getAllFactories);

module.exports = FactoriesRoutes;
