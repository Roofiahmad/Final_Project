import React from 'react';
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
