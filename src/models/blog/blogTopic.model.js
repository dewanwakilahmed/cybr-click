const mongoose = require("mongoose");

const BlogTopicSchema = mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "blogcategory",
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = BlogTopic = mongoose.model("blogtopic", BlogTopicSchema);
