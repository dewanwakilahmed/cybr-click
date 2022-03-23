const mongoose = require("mongoose");

const BlogCategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = BlogCategory = mongoose.model(
  "blogcategory",
  BlogCategorySchema
);
