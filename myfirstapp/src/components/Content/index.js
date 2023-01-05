import Menu from "./Category";
import CardList from "./Card";
import Blog from "./Blog";
import "./index.css";

const Body = () => {
  return (
    <div>
      <Blog />
      <ul id="margin">
        <Menu />
      </ul>
      <div className="flex-wrap">
        <CardList />
      </div>
    </div>
  );
};

export default Body;
