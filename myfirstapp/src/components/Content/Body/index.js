import React from "react";
import HeadContent from "./Blog";
import CardList from "./Card";
import Menu from "./Category";

function Body() {
  return (
    <div>
      <HeadContent />
      <Menu />
      <div className="flex-sb">
        <CardList />
      </div>
    </div>
  );
}

export default Body;
