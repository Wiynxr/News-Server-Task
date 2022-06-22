const mongoose = require('mongoose')

const CategorysSchema = mongoose.Schema({
    name: String
})


const Categorys = mongoose.model('Categorys', CategorysSchema)


module.exports = Categorys;