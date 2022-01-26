import React, { useState } from "react";

function PlantCard({ id, name, image, price }) {
  const [isSoldOut, setSoldOut] = useState(true);

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isSoldOut ? (
        <button className="primary"
          onClick={() => setSoldOut(false)}>In Stock
        </button>
      ) : (
        <button
          onClick={(e) => setSoldOut(true)}>Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;
