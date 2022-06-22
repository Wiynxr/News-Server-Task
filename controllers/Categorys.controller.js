const Categorys = require('../models/Categorys.model')

module.exports.categorysController = {
    createCategorys: (req, res) => {
        Categorys.create({
            name: req.body.name
        }).then((data) => {
            res.json(data)
        });
    },
    deleteCategorys: (req, res) => {
        Categorys.findByIdAndRemove(req.params.id).then(() => {
            res.json('Категория удалена')
        });
    },
    getCategorys: (req,res) => {
        res.find().then((data) => {
            res.json(data)
        });
    },
}