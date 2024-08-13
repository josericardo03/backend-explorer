const { Router } = require("express");

const routes = Router();
const usersRoutes = require("./users.routes");
const testeRoutes = require("./teste.routes");
routes.use("/teste", testeRoutes);
routes.use("/users", usersRoutes);

module.exports = routes;
