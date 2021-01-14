import React from "react";
import PhotoCard from "./components/PhotoCard";
import CategoryButton from "./components/CategoryButton";
import Newest from "./components/Newest";
import MostUrgent from "./components/MostUrgent";
import GainedMomentum from "./components/GainedMomentum";
import DiscoverJumbotron from "./components/DiscoverJumbotron";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import SearchResult from "./components/SearchResult";
import MyProfile from "./components/MyProfile";
import EditProfile from "./components/EditProfile";
import NavbarComp from "./components/NavbarComp";
import NewCampaign from "./components/NewCampaign";
import CampaignDetailFundraiser from "./pages/CampaignDetailFundraiser";
import Footer from './components/Footer';

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
        </Switch>
       <Footer/>
      </div>
    </Router>
  );
}

export default App;