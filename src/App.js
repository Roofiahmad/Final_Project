import React from 'react';
import PhotoCard from "./components/PhotoCard";


function App() {
  return (
    <div className="container mx-auto mt-12 px-3 lg:px-0">
      <PhotoCard />
      <button onClick={ () => {window.location.reload()} } className="btn-primary mb-2">Generate</button>
    </div>
  );
}

export default App;
