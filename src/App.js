import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CampaignDetailFundraiser from "./pages/CampaignDetailFundraiser";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/fundraiser"
            component={CampaignDetailFundraiser}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
