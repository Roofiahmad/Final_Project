import React from 'react';
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComp from '../src/components/NavbarComp';



function App() {
  return (
    <Router>
    <NavbarComp/>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
