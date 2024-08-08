const getAllMarkets = require("../controllers/Markets/Markets.controllers");
const MarketsRoutes = require("express").Router();

//Rutas

MarketsRoutes.get("/getAllMarkets", getAllMarkets);

module.exports = MarketsRoutes;
