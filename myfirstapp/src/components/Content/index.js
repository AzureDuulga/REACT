import "./index.css";
import Navbar from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Content = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <div id="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default Content;
