import "./blog.css";
const BlogPost = () => {
  return (
    <div className="flex width">
      <div>
        <h1>Blog Posts</h1>
        <h5>I think so, this is it. </h5>
        <p>
          Design begins after I begin to think about how to present an
          experience most successfully, whether a button I put in can solve a
          problem. The only point in design is not ui design, if the user does
          not have a good experience at the end of the product, the design will
          be considered unsuccessful in my opinion.
        </p>
        <div className="flex">
          <div className="socialMedia" id="twitter">
            TWITTER
          </div>
          <div className="socialMedia" id="linkedin">
            LINKEDIN
          </div>
          <div className="socialMedia" id="medium">
            MEDIUM
          </div>
        </div>
      </div>
      <div>
        <img id="child" src="/zurag/Group 296.png" alt="linkedin" />
      </div>
    </div>
  );
};

export default BlogPost;
