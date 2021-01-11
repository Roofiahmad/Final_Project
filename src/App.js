import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewCampaign from "./components/NewCampaign";
import CampaignDetailFundraiser from "./pages/CampaignDetailFundraiser";
import NavbarComp from "./components/NavbarComp";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Switch>
          <Route exact path="/newcampaign" component={NewCampaign} />
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
