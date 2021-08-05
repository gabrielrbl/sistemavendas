const db = require("../database/connection");

const selectAll = async function(req, res, next) {

    await db.execute(`
        SELECT * FROM PRODUTO
    `)
    .then((results) => {
        res.status(200).send({
            resultados: results.length,
            produtos: results
        })
    })
    .catch(err => {
        return res.status(500).send({
            error: err
        });
    });

}

module.exports = {
    selectAll
}