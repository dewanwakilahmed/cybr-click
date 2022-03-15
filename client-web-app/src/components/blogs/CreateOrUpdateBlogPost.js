import { useState } from "react";
import { Link } from "react-router-dom";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const CreateOrUpdateBlogPost = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  return (
    <div className="create-blog-post">
      {/* <h2 className="create-blog-post-title">Create a Blog Post</h2> */}
      <input type="text" className="new-blog-title" placeholder="Blog Title" />
      {/* <div className="blog-cover-image-and-info-container">
        <div className="blog-info">
          <p># Category</p>
          <p># Interest</p>
          <p># Topic</p>
        </div>
        <div className="blog-cover-image">
          <img src="" alt="" className="new-blog-cover-image" />
        </div>
      </div> */}
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
