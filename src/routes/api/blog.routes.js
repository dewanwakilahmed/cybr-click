const express = require("express");

// Middlewares
const authMiddleware = require("../../middlewares/auth");

// Models
const BlogCategory = require("../../models/blog/blogCategory.model");
const BlogTopic = require("../../models/blog/blogTopic.model");

const router = express.Router();

// @route    GET api/blog/categories
// @desc     Fetch Blog Categories
// @access   Private
router.get("/categories", authMiddleware, async (req, res) => {
  try {
    const blogCategories = await BlogCategory.find();

    // If no Blog Category exist
    if (!blogCategories) {
      return res.status(400).json({ msg: "No Blog Category exists!" });
    }

    console.log("Fetched All Blog Categories Successfully");
    res.json(blogCategories);
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .json({ msg: "Fetch Blog Categories Failed. Server Error!" });
  }
});

// @route    GET api/blog/topics
// @desc     Fetch Blog Topics
// @access   Private
router.get("/topics", authMiddleware, async (req, res) => {
  try {
    const blogTopics = await BlogTopic.find();

    // If no Blog Category exist
    if (!blogTopics) {
      return res.status(400).json({ msg: "No Blog Category exists!" });
    }

    console.log("Fetched All Blog Topics Successfully");
    res.json(blogTopics);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Fetch Blog Topics Failed. Server Error!" });
  }
});

// @route    POST api/blog
// @desc     Create/Update Blog Post
// @access   Private
router.post("/", authMiddleware, async (req, res) => {});

module.exports = router;
