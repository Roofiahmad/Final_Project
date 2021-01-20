import React, { useState } from "react";
import CampaignStory from "../components/CampaignStory";
import CampaignTimeline from "../components/CampaignTimeline";
import CommentCampaignDetail from "../components/CommentCampaignDetail";
import DonaturTimeline from "../components/DonaturTimeline";
import JumbotronCampaignDetail from "../components/JumbotronCampaignDetail";


export default function CampaignDetailFundraiser() {
  const role = "fundraiser";
  const [modalUpdate, setModalUpdate] = useState(false);
  const [share,setShare] = useState(false);

  const modalShare = (e) => {
    setShare(!share);
  };


  const modalCampaignUpdate = (e) => {
    setModalUpdate(!modalUpdate);
  };
  return (
    <div className="w-11/12 mx-auto relative fromtop-animation ">
      <JumbotronCampaignDetail
        role={role}
        modalCampaignUpdate={modalCampaignUpdate}
        modalShare={modalShare} 
      />
      <CampaignStory />
      <CampaignTimeline />
      <DonaturTimeline />
      <CommentCampaignDetail />

    </div>
  );
}
