const { Router } = require("express");

const TesteController = require("../controllers/TesteController");
const testeRoutes = Router();

const testeController = new TesteController();

testeRoutes.post("/", testeController.create);

module.exports = testeRoutes;
