const getAllFactories = require("../controllers/Factories/Factories.controllers");

const FactoriesRoutes = require("express").Router();

FactoriesRoutes.get("/getAllFactories", getAllFactories);

module.exports = FactoriesRoutes;
