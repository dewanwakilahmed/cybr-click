import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <h2>All Blogs</h2>
      <Link to="create-blog">Create Blog Post</Link>
    </div>
  );
};

export default Blogs;
