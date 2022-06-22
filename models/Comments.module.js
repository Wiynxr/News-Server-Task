const mongoose = require('mongoose')


const commentSchema = mongoose.Schema({
    name: String,
    text: String,
    newsID: {
        ref: 'News',
        type: mongoose.Schema.Types.ObjectId
    }
})

const Comments = mongoose.model('Comments', commentSchema)

module.exports = Comments