import React from "react";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
  useParams
} from "react-router-dom";
import MyProfilePage from "./pages/MyProfilePage";
import NavbarComp from "./components/NavbarComp";
import NewCampaign from "./components/NewCampaign";
import CampaignDetailFundraiser from "./pages/CampaignDetailFundraiser";
import CreateDonation from "./pages/CreateDonation";
import Footer from './components/Footer';
import CampaignDetail from "./pages/CampaignDetail";
import Discover from "./pages/Discover";
import DiscoverCategory from "./pages/DiscoverCategory";
import DiscoverSearchResult from "./pages/DiscoverSearchResult";
import EditProfile from "./components/EditProfile";
import ResetPassword from './components/ResetPassword';
import PageNotFound from "./pages/PageNotFound";
import EditCampaign from "./components/EditCampaign";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  const id = localStorage.getItem('id');
  return (
    <Router>
      <NavbarComp />
      <ScrollToTop/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/editprofile" component={EditProfile} />
          <Route exact path="/newcampaign" component={NewCampaign} />
          <Route exact path="/editcampaign/:campaignId" component={EditCampaign} />
          <Route exact path="/discoverall" component={Discover} />
          <Route exact path="/discoverbycategory/:category" component={DiscoverCategory} />
          <Route exact path="/searchresult" component={DiscoverSearchResult} />
          <Route exact path="/campaigndetail/:campaignId" component={CampaignDetail}/>
          <Route exact path="/createdonation/:campaignId" component={CreateDonation} />
          <Route exact path="/myprofile" component={MyProfilePage} />
          <Route exact path="/resetpassword" component={ResetPassword} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;