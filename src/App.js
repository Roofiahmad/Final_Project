import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComp from "../src/components/NavbarComp";
import NewCampaign from "./components/NewCampaign";
import CampaignDetailFundraiser from "./pages/CampaignDetailFundraiser";
import CampaignDetailDonate from "./pages/CampaignDetailDonate";

function App() {
  return (
    <Router>
      <NavbarComp />
      <div>
        <Switch>
          <Route exact path="/newcampaign" component={NewCampaign} />
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/fundraiser"
            component={CampaignDetailFundraiser}
          />
          <Route exact path="/donate" component={CampaignDetailDonate} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
