import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import UploadImgIcon from "../../assets/icons/upload-img-icon.png";

const CreateOrUpdateBlogPost = () => {
  let blogCategories = [];
  let blogTopics = [];

  const fetchBlogCategories = async () => {
    try {
      const response = await axios.get("/api/blog/categories");
      blogCategories = response.data;
      console.log(blogCategories);
      console.log(typeof blogCategories);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchBlogTopics = async () => {
    try {
      const response = await axios.get("/api/blog/topics");
      blogTopics = response.data;
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogCategories();
    fetchBlogTopics();
  }, []);

  const [blogPost, setBlogPost] = useState({
    blogTitle: "",
  });

  const [imgURL, setImgURL] = useState();

  const selectImageHandler = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImgURL(e.target.files[0]);
    }
  };

  const removeImg = () => {
    setImgURL(undefined);
  };

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  let blog2Categories = [
    { _id: "1", name: "Food" },
    { _id: "2", name: "Travel" },
  ];

  return (
    <div className="create-blog-post">
      <input type="text" className="new-blog-title" placeholder="Blog Title" />
      <div className="blog-details">
        <div className="blog-filter-input">
          <div className="filter-control">
            <label htmlFor="blog_categories">Category: </label>
            <select name="blogs_categories" id="blogs_categories">
              {blog2Categories.map((item) => (
                <option>{item.name}</option>
              ))}
              {/* <option value="all">All</option>
              <option value="technology">Technology</option>
              <option value="education">Education</option>
              <option value="medicine">Medicine</option> */}
            </select>
          </div>
          <div className="filter-control">
            <label htmlFor="blog_categories">Interest: </label>
            <select name="blogs_categories" id="blogs_categories">
              <option value="all">All</option>
              <option value="interest_1">Interest 1</option>
              <option value="interest_2">Interest 2</option>
              <option value="interest_3">Interest 3</option>
            </select>
          </div>
          <div className="filter-control">
            <label htmlFor="blog_categories">Topic: </label>
            <select name="blogs_categories" id="blogs_categories">
              <option value="all">All</option>
              <option value="topic_1">Topic 1</option>
              <option value="topic_2">Topic 2</option>
              <option value="topic_3">Topic 3</option>
            </select>
          </div>
        </div>
        <div className="blog-cover-image-input-container">
          {!imgURL && (
            <div className="blog-cover-image-input">
              <label
                htmlFor="blogCoverImage"
                className="upload-blog-cover-image-label"
              >
                Featured Blog Cover
              </label>
              <input
                type="file"
                accept="image/*"
                name="blogCoverImage"
                id="blogCoverImage"
                className="blog-cover-image-input-tag"
                onChange={selectImageHandler}
              />
              <div className="upload-img-container">
                <img
                  src={UploadImgIcon}
                  alt="Upload Img Icon"
                  className="upload-img-icon"
                />
              </div>
            </div>
          )}
          {imgURL && (
            <img
              src={URL.createObjectURL(imgURL)}
              alt="Uploader Blog Cover"
              className="blog-cover-image"
              onClick={removeImg}
            />
          )}
        </div>
      </div>
      <div className="rich-text-editor">
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          toolbar={{
            list: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            textAlign: { inDropdown: true },
          }}
        />
      </div>
      <div className="create-blog-post-actions">
        <Link to="/dashboard/blogs" className="btn btn-black">
          Go Back
        </Link>
        <button className="btn btn-orange btn-create-blog-post">
          Create Post
        </button>
      </div>
    </div>
  );
};

export default CreateOrUpdateBlogPost;
