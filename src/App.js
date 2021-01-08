import React from 'react';
import PhotoCard from "./components/PhotoCard";
import CategoryButton from "./components/CategoryButton";
import Newest from "./components/Newest"
import MostUrgent from "./components/MostUrgent"
import GainedMomentum from "./components/GainedMomentum"
import DiscoverJumbotron from "./components/DiscoverJumbotron"


import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <CategoryButton />
        <Newest />
       <MostUrgent />
       <GainedMomentum />
      </div>
    </Router>
  );
}

export default App;

{/*function App() {
  return (
    <div className="container mx-auto mt-12 px-3 lg:px-0">
      <PhotoCard />
      <button onClick={ () => {window.location.reload()} } className="btn-primary mb-2">Generate</button>
      <DiscoverJumbotron />
      <CategoryButton />
      <Newest />
      <MostUrgent />
      <GainedMomentum />
  </div>*/}