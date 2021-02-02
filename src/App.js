import React from "react";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MyProfilePage from "./pages/MyProfilePage";
import NavbarComp from "./components/NavbarComp";
import NewCampaign from "./components/NewCampaign";
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
import AdminPage from "./pages/AdminPage";
import AdminLogin from "./pages/AdminLogin";
import AdminProfile from "./pages/AdminProfile";
import EditAdminProfile from "./pages/EditAdminProfile";
import ResetAdminPassword from "./pages/ResetAdminPassword";
import AdminDonationPage from "./pages/AdminDonationPage";
import AdminWithdrawal from "./pages/AdminWithdrawal";
import ForgotPassword from "./pages/ForgotPassword";
import PasswordRecovery from "./pages/PasswordRecovery";
import DonateSuccess from "./pages/DonateSuccess";


function App() {
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
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/admindonations" component={AdminDonationPage} />
          <Route exact path="/adminwithdrawal" component={AdminWithdrawal} />
          <Route exact path="/adminlogin" component={AdminLogin} />
          <Route exact path="/adminprofile" component={AdminProfile} />
          <Route exact path="/editadminprofile" component={EditAdminProfile} />
          <Route exact path="/resetadminpassword" component={ResetAdminPassword} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/passwordrecovery/:token" component={PasswordRecovery} />
          <Route exact path="/donatesuccess/:campaignId" component={DonateSuccess} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;