const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
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

const Product = mongoose.model('Product', blogSchema);
module.exports = Product;
