const News = require('../models/News.module')


module.exports.controllerNew = {
    postNews: (req, res) => {
        News.create({
            title: req.body.title,
            text: req.body.text,
            categoryId: req.body.categoryId,
        }).then((data) => {
            res.json(data);
        });
    },
    deleteNews: (req, res) => {
        News.findByIdAndRemove(req.params.id).then(() => {
            res.json('Новость удалена')
        });
    },
    patchNews: (req, res) => {
        News.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            text: req.body.text,
        }).then((data) => {
            res.json('Новость обновлена')
        });
    },
    getNewsId: (req, res) => {
        News.findById(req.params.id).then((data) => {
            res.json(data)
        });
    },
    getNews: (req, res) => {
        News.find().then((data) => {
            res.json(data)
        });
    },
    getNewsByCategories: (req, res) => {
        News.find({ categoryId: req.params.id}).then((data) =>{
            res.json(data)
        });
    }
};