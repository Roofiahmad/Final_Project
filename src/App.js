import React from 'react';
import PhotoCard from "./components/PhotoCard";
import CategoryButton from "./components/CategoryButton";
import Newest from "./components/Newest"
import MostUrgent from "./components/MostUrgent"
import GainedMomentum from "./components/GainedMomentum"
import DiscoverJumbotron from "./components/DiscoverJumbotron"

function App() {
  return (
    <div className="container mx-auto mt-12 px-3 lg:px-0">
      {/* <PhotoCard />
      <button onClick={ () => {window.location.reload()} } className="btn-primary mb-2">Generate</button> */}
      <DiscoverJumbotron />
      <CategoryButton />
      <Newest />
      <MostUrgent />
      <GainedMomentum />
    </div>
  );
}

export default App;
