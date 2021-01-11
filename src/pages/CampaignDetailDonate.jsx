import React, { useState } from "react";
import CampaignStory from "../components/CampaignStory";
import CampaignTimeline from "../components/CampaignTimeline";
import CommentCampaignDetail from "../components/CommentCampaignDetail";
import DonaturTimeline from "../components/DonaturTimeline";
import JumbotronCampaignDetail from "../components/JumbotronCampaignDetail";
import PostComment from "../components/PostComment";

export default function CampaignDetailDonate() {
  const role = "donatur";
  return (
    <div className="w-11/12 mx-auto relative">
      <JumbotronCampaignDetail role={role} />
      <CampaignStory />
      <CampaignTimeline />
      <DonaturTimeline />
      <CommentCampaignDetail role={role} />
    </div>
  );
}
