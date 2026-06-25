import React from "react";
import './App.css';

function Card(props) {
  return (
    <div className="main">
      <img src={props.image} alt={props.heading} />
      <h2>{props.heading}</h2>
      <p className="desc">{props.desc}</p>
    </div>
  );
}

export default Card;
