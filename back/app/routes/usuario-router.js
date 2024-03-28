module.exports = async app => {
    const usuario = require("../controllers/usuario-controller.js");
    var router = require("express").Router();

    router.post("/usuario", usuario.create);
    router.get("/usuario", usuario.findAll);

    app.use('/api', router);
};


