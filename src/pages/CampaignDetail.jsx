import React, { useState, useEffect } from "react";
import CampaignStory from "../components/CampaignStory";
import CampaignTimeline from "../components/CampaignTimeline";
import CommentCampaignDetail from "../components/CommentCampaignDetail";
import DonaturTimeline from "../components/DonaturTimeline";
import JumbotronCampaignDetail from "../components/JumbotronCampaignDetail";
import RelatedCampaign from "../components/RelatedCampaign";
import axios from "axios";
import ModalsCampaignUpdate from "../components/ModalsCampaignUpdate";
import ModalsShare from "../components/ModalsShare";
import { useParams } from "react-router-dom";
import SpinnerPage from "../components/SpinnerPage";

export default function CampaignDetail() {
  let role = "";
  const campaignId = useParams().campaignId;
  const userId = localStorage.getItem("id");
  const [fundraiserId, setFundraiserId] = useState("");
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalshare, setModalShare] = useState(false);

  const newProgressModal = () => {
    setModalUpdate(!modalUpdate);
    setModalShare(false);
  };

  const modalShareHandler = () => {
    setModalUpdate(false);
    setModalShare(!modalshare);
  };

  const [campaignData, setCampaignData] = useState("");

  useEffect(() => {
    axios
      .get(`https://talikasih.kuyrek.com:3001/campaign/get/${campaignId}`)
      .then((response) => {
        setCampaignData(response.data.data);
        setFundraiserId(response.data.data.user.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  userId === fundraiserId ? (role = "fundraiser") : (role = "donatur");

  return (
    <div>
      {!campaignData ? (
        <SpinnerPage />
      ) : (
        <div className="w-11/12 mx-auto relative fromtop-animation ">
          <JumbotronCampaignDetail
            role={role}
            newProgressModal={newProgressModal}
            modalShareHandler={modalShareHandler}
            campaignId={campaignId}
            campaignData={campaignData}
          />
          <CampaignStory campaignData={campaignData} />
          <CampaignTimeline />
          <DonaturTimeline campaignId={campaignId} />
          <CommentCampaignDetail role={role} />
          {role === "donatur" ? (
            <RelatedCampaign
              category={campaignData.category}
              campaignId={campaignId}
            />
          ) : null}
          {modalUpdate ? (
            <ModalsCampaignUpdate
              newProgressModal={newProgressModal}
              campaignId={campaignId}
            />
          ) : null}
          {modalshare ? (
            <ModalsShare
              modalShareHandler={modalShareHandler}
              campaignId={campaignId}
              share={campaignData.total_share}
            />
          ) : null}
        </div>
      ) }
    </div>
  );
}
