const db = require("../database/connection");

const findAllProduct = async function(req, res, next) {

    await db.execute(`
        SELECT * FROM produto
    `)
    .then((results) => {
        res.status(200).send({
            resultados: results.length,
            produtos: results
        });
    })
    .catch((err) => {
        return res.status(500).send({
            error: err
        });
    });

}

const findProductById = async function(idProduto, req, res, next) {
    
    await db.execute(`
        SELECT * FROM produto WHERE cdproduto = ?`, [idProduto]
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
    .catch((err) => {
        return res.status(500).send({
            error: err
        });
    });

}

/* const insertProduct = async function(req, res, next) {

    const produto = {
        descricao : req.body.descricao.toUpperCase(),
        marca     : req.body.marca.toUpperCase()
    }

    await db.execute(`
        INSERT INTO produto (cdproduto, descricao, marca)
        VALUES (?, ?, ?)
    `, [
        1, produto.descricao, produto.marca
    ])
    .then((result) => {
        return res.status(201).send({
            result: result
            //message: "Produto inserido com sucesso"
        });
    })
    .catch((err) => {
        return res.status(500).send({
            error: err
        });
    });

}  */

const updateProduct = async function(idProduto, req, res, next) {

    const produto = {
        id        : idProduto,
        descricao : req.body.descricao.toUpperCase(),
        marca     : req.body.marca.toUpperCase()
    }

    await db.execute(`
        SELECT marca FROM produto WHERE cdproduto = ?`, [produto.id]
    )
    .then(async (result) => {
        if(result.length < 1){
            return res.status(404).send({
                message: "Produto não existente"
            });
        }
        await db.execute(`
            UPDATE produto
            SET descricao   = ?,
                marca       = ?
            WHERE cdproduto = ?
        `, [
            produto.descricao, produto.marca, produto.id
        ])
        .then(() => {
            return res.status(200).send({
                message: "Produto atualizado com sucesso"
            });
        })
        .catch((err) => {
            return res.status(500).send({
                error: err
            });
        });
    })
    .catch((err) => {
        return res.status(500).send({
            error: err
        });
    });

}

module.exports = {
    findAllProduct,
    findProductById,
    //insertProduct,
    updateProduct
}