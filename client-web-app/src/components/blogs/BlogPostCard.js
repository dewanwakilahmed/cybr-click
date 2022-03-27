import { Link } from "react-router-dom";

// Images
import UserImage from "../../assets/images/user-image-sample.jpg";
import BlogCoverImage from "../../assets/images/blog-cover-image-sample.jpg";

const BlogPostCard = () => {
  return (
    <Link
      to="/dashboard/blogs/view-blog"
      className="blog-post-card-container-with-link"
    >
      <div className="blog-post-card">
        <div className="blog-post-cover-image-container">
          <img
            src={BlogCoverImage}
            alt="user"
            className="blog-post-cover-image"
          />
        </div>
        <div className="details-abt-blog-post">
          <div className="blog-post-creator-details">
            <img
              src={UserImage}
              alt="user"
              className="blog-post-creator-user-image"
            />
            <p className="blog-post-creator-user-name">Dewan Wakil Ahmed</p>
          </div>
          <div className="blog-post-title-hashtags-container">
            <h2 className="blog-post-title">Travel to South-East Asia</h2>
            <div className="hashtags-container">
              <p className="hashtag">#travel</p>
              <p className="hashtag">#south-east-asia</p>
              <p className="hashtag">#asia</p>
            </div>
          </div>
          <div className="blog-post-metrics">
            <div className="blog-post-dates">
              <p className="blog-post-pub-on">
                Published: <span className="metrics-number">20/03/22</span>
              </p>
              <p className="divider">|</p>
              <p className="blog-post-updated-on">
                Updated: <span className="metrics-number">24/03/22</span>
              </p>
            </div>
            <div className="blog-post-engagements">
              <p className="blog-post-views">
                Views: <span className="metrics-number">274k</span>
              </p>
              <p className="divider">|</p>
              <p className="blog-post-likes">
                Likes: <span className="metrics-number">154k</span>
              </p>
              <p className="divider">|</p>
              <p className="blog-post-comments">
                Comments: <span className="metrics-number">98k</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
