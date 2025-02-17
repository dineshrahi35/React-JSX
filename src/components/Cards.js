import React from "react";
import "./Cards.css";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Read More...</button>
    </div>
  );
};

export default Card;
