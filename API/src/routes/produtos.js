const { Router } = require("express");
const { selectAll } = require("../controller/ProdutosController");
const db = require("../database/connection");

const produtosRouter = Router();

produtosRouter.get("/", (req, res, next) => {

    selectAll(req, res, next);
    
});

module.exports = { produtosRouter };