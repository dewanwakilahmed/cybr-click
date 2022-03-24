import { NavLink, Link, Outlet } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blogs-header">
        <nav className="blogs-nav">
          <NavLink to="subscribed" className="blogs-nav-items">
            Subscribed
          </NavLink>
          <NavLink to="newest" className="blogs-nav-items">
            Newest
          </NavLink>
          <NavLink to="most-viewed" className="blogs-nav-items">
            Most Viewed
          </NavLink>
        </nav>
        <form className="filter-blogs">
          <div className="form-control">
            <label htmlFor="blog_categories">Category: </label>
            <select name="blogs_categories" id="blogs_categories">
              <option value="all">All</option>
              <option value="technology">Technology</option>
              <option value="education">Education</option>
              <option value="medicine">Medicine</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="blog_categories">Topic: </label>
            <select name="blogs_categories" id="blogs_categories">
              <option value="all">All</option>
              <option value="topic_1">Topic 1</option>
              <option value="topic_2">Topic 2</option>
              <option value="topic_3">Topic 3</option>
            </select>
          </div>
          <input
            type="submit"
            value="Filter"
            className="btn btn-black btn-filter"
          />
        </form>
        <div className="create-blog-btn-container">
          <Link to="create-blog" className="btn btn-orange btn-create-new-post">
            Create New Post
          </Link>
        </div>
      </div>
      <div className="blogs-body">
        <Outlet />
      </div>
    </div>
  );
};

export default Blogs;
