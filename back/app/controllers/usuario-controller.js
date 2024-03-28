const Usuario = require('../models/usuario')

exports.create = (req, res) => {

    const usuario = req.body;

    Usuario.create(usuario)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Tutorial."
                });
            });

};

exports.findAll = (req, res) => {


    Usuario.find()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Tutorial."
                });
            });

};