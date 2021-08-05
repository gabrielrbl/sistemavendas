const express = require("express");
const { produtosRouter, homeRouter } = require("./routes/index");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', homeRouter);
app.use('/api/produtos', produtosRouter);

app.use((req, res, next) => {
    const erro = new Error("Não encontrado");
    next(erro);
});

app.use((error, req, res, next) => {
    return res.status(404).send({
        error: error.message 
    });
});

module.exports = { app };
