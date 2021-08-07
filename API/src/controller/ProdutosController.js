const db = require("../database/connection");

const findAllProduct = async function(req, res, next) {

    await db.execute(`
        SELECT * FROM PRODUTO
    `)
    .then((results) => {
        res.status(200).send({
            resultados: results.length,
            produtos: results
        });
    })
    .catch(err => {
        return res.status(500).send({
            error: err
        });
    });

}

const findProductById = async function(idProduto, req, res, next) {
    
    await db.execute(`
        SELECT * FROM PRODUTO WHERE CDPRODUTO = ?`, [idProduto]
    )
    .then((result) => {
        if(result.length < 1){
            return res.status(404).send({
                message: "Produto não encontrado"
            });
        }
        return res.status(200).send({
            produto: result[0]
        });
    })
    .catch(err => {
        return res.status(500).send({
            error: err
        });
    });

}

module.exports = {
    findAll,
    findById
}