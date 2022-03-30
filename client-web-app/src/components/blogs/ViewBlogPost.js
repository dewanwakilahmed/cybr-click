// Images
import BlogCoverImage from "../../assets/images/blog-cover-image-sample.jpg";
import UserImage from "../../assets/images/user-image-sample.jpg";

const ViewBlogPost = () => {
  return (
    <div className="view-blog-post">
      <div className="view-blog-post-actions-header-actions">
        <div className="subscribe-button-container">
          <button className="btn btn-orange btn-subscribe">Subscribe</button>
        </div>
        <div className="create-button-container-and-filters">
          <div className="filters">
            <p className="hashtag">#Category</p>
            <p className="hashtag">#Topic</p>
          </div>
          <button className="btn btn-orange btn-create">Create +</button>
        </div>
      </div>
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
        <div className="blog-post-metrics">
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
      <h2 className="blog-post-title">Travel to South-East Asia</h2>
      <div className="blog-post-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
          massa odio. Maecenas ac dapibus lorem. Sed nunc magna, gravida eget
          felis at tincidunt venenatis quam. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Donec ultricies consectetur gravida. Nam in velit condimentum, iaculis
          lectus sed, ultricies tellus. Nulla lorem libero, consectetur eget
          eleifend consequat, sodales sodales massa. Sed aliquet quam nec
          gravida sollicitudin. Sed pretium ante ac orci rhoncus pretium et sed
          magna. Phasellus a tempus ipsum. Aliquam eu fermentum ex, vel feugiat
          lacus.
        </p>
        <br />
        <p>
          Curabitur ultrices sollicitudin arcu et finibus. Aenean et euismod
          nibh. Proin facilisis eros sed placerat ultrices. Donec tristique dui
          ut purus rhoncus, ac lobortis ligula iaculis. Suspendisse at neque ac
          justo consequat interdum. Nullam arcu nulla, mollis in facilisis nec,
          cursus a lacus. Aenean id ex vulputate nisl bibclearendum faucibus.
          Suspendisse potenti. Sed accumsan cursus ligula, sed fermentum metus
          mattis gravida.
        </p>
      </div>
      <div className="blog-post-dates">
        <p className="blog-post-pub-on">
          Published on: <span className="metrics-number">20/03/22</span>
        </p>
        <p className="divider">|</p>
        <p className="blog-post-updated-on">
          Updated on: <span className="metrics-number">24/03/22</span>
        </p>
      </div>
    </div>
  );
};

export default ViewBlogPost;
