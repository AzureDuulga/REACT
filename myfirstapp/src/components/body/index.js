import Menu from "../menu";
import Card from "../card";
import "./index.css";

const Body = () => {
  return (
    <div className="width">
      <ul>
        <Menu />
      </ul>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Body;
