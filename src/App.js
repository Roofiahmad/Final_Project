import React from "react";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import MyProfilePage from "./pages/MyProfilePage";
import NavbarComp from "./components/NavbarComp";
import NewCampaign from "./components/NewCampaign";
import CampaignDetailFundraiser from "./pages/CampaignDetailFundraiser";
import CreateDonation from "./pages/CreateDonation";
import Footer from './components/Footer';
import CampaignDetailDonate from "./pages/CampaignDetailDonate";
import Discover from "./pages/Discover";
import DiscoverCategory from "./pages/DiscoverCategory";
import DiscoverSearchResult from "./pages/DiscoverSearchResult";
import EditProfile from "./components/EditProfile";
import ResetPassword from './components/ResetPassword';


function App() {
  return (
    <Router>
      <NavbarComp />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/editprofile" component={EditProfile} />
          <Route exact path="/newcampaign" component={NewCampaign} />
          <Route exact path="/discoverall" component={Discover} />
          <Route exact path="/discoverbycategory" component={DiscoverCategory} />
          <Route exact path="/searchresult" component={DiscoverSearchResult} />
          <Route exact path="/fundraiser" component={CampaignDetailFundraiser} />
          <Route exact path="/donate" component={CampaignDetailDonate}/>
          <Route exact path="/createdonation" component={CreateDonation} />
          <Route exact path="/fundraiser" component={CampaignDetailFundraiser}/>
          <Route exact path="/myprofile" component={MyProfilePage} />
          <Route exact path="/resetpassword" component={ResetPassword} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;