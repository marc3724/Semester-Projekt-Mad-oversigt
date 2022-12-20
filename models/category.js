const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  food: {
    type: String,
    required: true,
  },
  kategori: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  expire: {
    type: String,
    required: true,
  }
});

const Category = mongoose.model('Categories', blogSchema);
module.exports = Category;
