const { Router } = require("express");

const testeRoutes = require("./teste.routes");

const routes = Router();

routes.use("/teste", testeRoutes);

module.exports = routes;
