import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantListings}) {
  return (
    <ul className="cards">
      {plantListings.map((listing) => (
        <PlantCard 
          key={listing.id}
          id={listing.id}
          name={listing.name}
          image={listing.image}
          price={listing.price}
        />
      ))}
    </ul>
  );
}

export default PlantList;
