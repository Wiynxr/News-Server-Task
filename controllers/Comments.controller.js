const Comments = require('../models/Comments.module')

module.exports.controllerComments = {
    getCommById: (req, res) => {
        Comments.create({
            name: req.body.name,
            text: req.body.text,
            newId: req.body.newId
        }).then((data) => {
            res.json(data)
        })
    },
    deleteComment: (req, res) => {
        Comments.findByIdAndRemove(req.params.id).then(() => {
            res.json('Коммент удален')
        })
    },
    getAllComment: (req,res) => {
        Comments.find({newId: req.params.id}).then((data) => {
            res.json(data)
        })
    }
}