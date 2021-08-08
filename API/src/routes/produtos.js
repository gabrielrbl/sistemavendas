const { Router } = require("express");
const { findAllProduct, findProductById, /* insertProduct, */ updateProduct } = require("../controller/ProdutosController");
const db = require("../database/connection");

const produtosRouter = Router();

produtosRouter.get("/", (req, res, next) => {

    return findAllProduct(req, res, next);
    
});

produtosRouter.get("/:id", (req, res, next) => {

    const idProduto = req.params.id;

    if (isNaN(idProduto)) {
        return res.status(400).send({
            message: "Parametro inválido"
        });
    }

    return findProductById(idProduto, req, res, next);
    
});

/* produtosRouter.post("/", (req, res, next) => {

    // criar validação para os parametros

    return insertProduct(req, res, next);

}); */

produtosRouter.patch("/editar/:id", (req, res, next) => {

    // criar validação para os parametros

    const idProduto = req.params.id;

    if (isNaN(idProduto)) {
        return res.status(400).send({
            message: "Parametro inválido"
        });
    }

    return updateProduct(idProduto, req, res, next);

});

module.exports = { produtosRouter };