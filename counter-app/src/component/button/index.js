import React from "react";
// import { Button } from "react-bootstrap";

const Btn = (props) => {
  return (
    <button className="{props.class}" onClick={props.click} variant="primary">
      {props.title}
    </button>
  );
};

export default Btn;
