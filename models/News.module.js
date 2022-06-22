const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: String,
  text: String,
  categoryId: {
    ref: "Categorys",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const News = mongoose.model('News', newsSchema)

module.exports = News