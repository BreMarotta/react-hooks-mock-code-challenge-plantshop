import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;

// Deliverables:: As a user:

// WORKS! When the app starts, I can see all plants.

// WORKS! I can add a new plant to the page by submitting the form. (I removed e.preventDefault() because I want to send the POST request and refresh the page with the new information.)

// WORKS! I can mark a plant as "sold out".

// WORKS! I can search for plants by their name and see a filtered list of plants.
