import React, { useState } from "react";
import CampaignStory from "../components/CampaignStory";
import CampaignTimeline from "../components/CampaignTimeline";
import CommentCampaignDetail from "../components/CommentCampaignDetail";
import DonaturTimeline from "../components/DonaturTimeline";
import JumbotronCampaignDetail from "../components/JumbotronCampaignDetail";
import ModalsCampaignUpdate from "../components/ModalsCampaignUpdate";

export default function CampaignDetailFundraiser() {
  const role = "fundraiser";
  const [modal, setModal] = useState(false);
  const jumbotronButtonValue = (e) => {
    console.log(e);
    setModal(!modal);
  };
  return (
    <div className="w-11/12 mx-auto relative fromtop-animation ">
      <JumbotronCampaignDetail
        role={role}
        jumbotronButtonValue={jumbotronButtonValue}
      />
      <CampaignStory />
      <CampaignTimeline />
      <DonaturTimeline />
      <CommentCampaignDetail />
      {modal ? (
        <ModalsCampaignUpdate jumbotronButtonValue={jumbotronButtonValue} />
      ) : null}
    </div>
  );
}
