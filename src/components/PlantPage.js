import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantListings, setPlantListings] = useState([]);
  const [search, setSearch] = useState("");
  const [newPlant, setNewPlant] = useState({})

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then(setPlantListings);
  }, []);

  function handleAddPlant(newPlant) {
    const updatedPlantsArray = [...plantListings, newPlant];
    setPlantListings(updatedPlantsArray)
  }
  const displayPlantListings = plantListings.filter((listing) => listing.name.toLowerCase().includes(search.toLowerCase())
   );

  return (
    <main>
      <NewPlantForm 
        onAddPlant={handleAddPlant}/>
      <Search onSearch={setSearch} />
      <PlantList 
        plantListings={displayPlantListings}/>
    </main>
  );
}

export default PlantPage;
