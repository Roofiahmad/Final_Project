import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import CampaignStory from "../components/CampaignStory";
import CampaignTimeline from "../components/CampaignTimeline";
import CommentCampaignDetail from "../components/CommentCampaignDetail";
import DonaturTimeline from "../components/DonaturTimeline";
import JumbotronCampaignDetail from "../components/JumbotronCampaignDetail";
import RelatedCampaign from "../components/RelatedCampaign";

export default function CampaignDetailDonate() {
  const role = "donatur";
  const [redirect, setDirect] = useState(false);
  const id=1

  const donateHandlerButton = (e) => {
    console.log("from campaign detail donate");
    setDirect(true);
  };

  return (
    <div className="w-11/12 mx-auto relative fromtop-animation ">
      {redirect ? <Redirect to={`/createdonation/${id}`} /> : null};
      <JumbotronCampaignDetail
        role={role}
        donateHandlerButton={donateHandlerButton}
      />
      <CampaignStory />
      <CampaignTimeline />
      <DonaturTimeline />
      <CommentCampaignDetail role={role} />
      <RelatedCampaign />
    </div>
  );
}
