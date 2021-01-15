import React from "react";
import PhotoCard from "./components/PhotoCard";
import Discover from './pages/Discover';
import DiscoverCategory from './pages/DiscoverCategory';
import ResetPassword from './components/ResetPassword';
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
import MyProfile from "./pages/MyProfile";
import MyProfilePage from "./pages/MyProfilePage";
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
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/discover-category" component={DiscoverCategory} />
          <Route exact path="/discover-search" component={SearchResult} />
          <Route exact path="/profile" component={MyProfile} />
          <Route exact path="/reset-password" component={ResetPassword} /> 
          <Route exact path="/myprofile" component={MyProfilePage} />
          <Route exact path="/edit-profile" component={EditProfile} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;