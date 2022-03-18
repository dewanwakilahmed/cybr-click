import { NavLink, Link, Outlet } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blogs-header">
        <nav className="blogs-nav">
          <NavLink to="subscribed" className="blogs-nav-items">
            Subscribed
          </NavLink>
          <NavLink to="latest" className="blogs-nav-items">
            Latest
          </NavLink>
          <NavLink to="top" className="blogs-nav-items">
            Top
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
            <label htmlFor="blog_categories">Interest: </label>
            <select name="blogs_categories" id="blogs_categories">
              <option value="all">All</option>
              <option value="interest_1">Interest 1</option>
              <option value="interest_2">Interest 2</option>
              <option value="interest_3">Interest 3</option>
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
        <Link to="create-blog" className="btn btn-orange btn-create-new-post">
          Create New Post
        </Link>
      </div>
      <div className="blogs-body">
        <Outlet />
      </div>
    </div>
  );
};

export default Blogs;
