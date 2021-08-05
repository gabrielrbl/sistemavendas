const express = require("express");
const { produtosRouter, homeRouter } = require("./routes/index");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', homeRouter);
app.use('/api/produtos', produtosRouter);

module.exports = { app };
