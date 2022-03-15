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
