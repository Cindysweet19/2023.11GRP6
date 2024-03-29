const Categoria = require('../models/categoria')

exports.create = (req, res) => {
    const categoria = req.body;
    Categoria.create(categoria)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the User."
                });
            });

};

exports.findAll = (req, res) => {
    Categoria.find()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Category."
                });
            });
};