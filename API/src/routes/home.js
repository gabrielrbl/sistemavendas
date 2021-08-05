const { Router } = require("express");

const homeRouter = Router();

homeRouter.get("/", (req, res, next) => {
    res.status(200).send({
        message: "tudo ok"
    });
});

module.exports = { homeRouter };