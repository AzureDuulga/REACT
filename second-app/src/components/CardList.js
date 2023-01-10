import React from "react";
import CardItem from "./CardItem";
import "./CardList.css";

const CardList = ({ users }) => {
  return (
    <div className="row justify-content-between">
      {users.map((user) => (
        <CardItem user={user} />
      ))}
    </div>
  );
};

export default CardList;
