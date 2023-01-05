import "./blog.css";
import Button from "./button";
const BlogPost = () => {
  return (
    <main className="flex" id="margin-t">
      <div className="width-50">
        <h1>Blog Posts</h1>
        <h5 className="margin-b">I think so, this is it. </h5>
        <p className="margin-b">
          Design begins after I begin to think about how to present an
          experience most successfully, whether a button I put in can solve a
          problem. The only point in design is not ui design, if the user does
          not have a good experience at the end of the product, the design will
          be considered unsuccessful in my opinion.
        </p>
        <div className="flex">
          <Button id={"twitter"} name={"TWITTER"} img={"/zurag/twitter.png"} />
          <Button
            id={"linkedin"}
            name={"LINKEDIN"}
            img={"/zurag/linked_in.png"}
          />
          <Button id={"medium"} name={"MEDIUM"} img={"/zurag/group 293.png"} />
        </div>
      </div>
      <div className="width-50">
        <img id="child" src="/zurag/Group 296.png" alt="linkedin" />
      </div>
    </main>
  );
};

export default BlogPost;
