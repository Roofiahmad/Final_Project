import React from "react";
import ProfileComp from "../components/ProfileComp";
import MyDonation from "../components/MyDonation";
import MyCampaign from "../components/MyCampaign";

const MyProfile = () => {
  return (
    <>
      <ProfileComp />
      <MyDonation />
      <MyCampaign />
    </>
  )
}

export default MyProfile;