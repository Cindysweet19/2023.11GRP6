module.exports = async app => {
    const usuario = require("../controllers/usuario-controller.js");
    var router = require("express").Router();
    var cors = require('cors');

    var corsOptions = {
        origin: '*',
        optionsSuccessStatus: 200 
    };

    router.post("/usuario", cors(corsOptions), usuario.create);
    router.get("/usuario", cors(corsOptions),usuario.findAll);

    app.use(cors());
    app.use('/api', router);
};