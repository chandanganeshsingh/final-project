import React from "react";

function Card({ image, title, price, description }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
}

export default Card;
