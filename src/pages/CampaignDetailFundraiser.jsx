import React, { useState } from "react";
import CampaignStory from "../components/CampaignStory";
import CampaignTimeline from "../components/CampaignTimeline";
import CommentCampaignDetail from "../components/CommentCampaignDetail";
import DonaturTimeline from "../components/DonaturTimeline";
import JumbotronCampaignDetail from "../components/JumbotronCampaignDetail";
import ModalsCampaignUpdate from "../components/ModalsCampaignUpdate";

export default function CampaignDetailFundraiser() {
  const [modal, setModal] = useState(false);
  const toggleHandler = () => {
    setModal(!modal);
  };
  return (
    <div className="w-11/12 mx-auto relative">
      <button>modal trigger</button>
      <JumbotronCampaignDetail toggleHandler={toggleHandler} />
      <CampaignStory />
      <CampaignTimeline />
      <DonaturTimeline />
      <CommentCampaignDetail />
      {modal ? <ModalsCampaignUpdate toggleHandler={toggleHandler} /> : null}
    </div>
  );
}
