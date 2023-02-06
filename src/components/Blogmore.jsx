import "../styles/Blogmore.css";
import moreBlogSide from "../assests/Photos/moreBlogSide.png";
function BlogMore({ blogdata }) {
  return (
    <div className="blog-more-main">
      <div className="header">
        <div>
          <h5>{blogdata.postby+". "+blogdata.date}</h5>
          <h2>{blogdata.title}</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim.
          </p> */}
        </div>
      </div>
      <div className="blog-more-middle">
        <div className="middle-containt">
          {blogdata.desc.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div className="middle-image">
          <img src={moreBlogSide} alt="" />
        </div>
      </div>
    </div>
  );
}
export default BlogMore;
