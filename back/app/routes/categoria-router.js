module.exports = async app => {
    const categoria = require("../controllers/categoria-controller.js");
    var router = require("express").Router();

    router.post("/categoria", categoria.create);
    router.get("/categoria", categoria.findAll);

    app.use('/api', router);
};