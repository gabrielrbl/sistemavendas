const { Router } = require("express");
const { findAll, findById } = require("../controller/ProdutosController");
const db = require("../database/connection");

const produtosRouter = Router();

produtosRouter.get("/", (req, res, next) => {

    return findAll(req, res, next);
    
});

produtosRouter.get("/:id", (req, res, next) => {

    const idProduto = req.params.id;

    if (isNaN(idProduto)) {
        return res.status(400).send({
            message: "Parametro inválido"
        })
    }

    return findById(idProduto, req, res, next);
    
});

module.exports = { produtosRouter };