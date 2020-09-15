import React from "react";

function Element(props) {
  return (
    <div className="Element">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img alt="" src={props.image} />
    </div>
  );
}

export default Element;
