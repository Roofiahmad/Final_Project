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
import { useParams, useHistory } from "react-router-dom";
import SpinnerPage from "../components/SpinnerPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CampaignDetail() {
  let role = "";
  let history = useHistory();
  const campaignId = useParams().campaignId;
  const userId = localStorage.getItem("id");
  const [fundraiserId, setFundraiserId] = useState("");
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalshare, setModalShare] = useState(false);
  const [status, setStatus] = useState("");

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
      .get(`https://talikasih.kuyrek.com:3001/campaign/getone/${campaignId}`)
      .then((response) => {
        setCampaignData(response.data.data);
        setFundraiserId(response.data.data.user.id);
        setStatus(response.data.data.status);
        localStorage.setItem("campaign_id", response.data.data._id);
        localStorage.setItem("campaign_title", response.data.data.title);
        localStorage.setItem("campaign_goal", response.data.data.goal);
        localStorage.setItem("campaign_story", response.data.data.story);
        localStorage.setItem("campaign_category", response.data.data.category);
        localStorage.setItem("campaign_due_date", response.data.data.due_date);
        localStorage.setItem("campaign_images", response.data.data.images);
        localStorage.setItem("campaign_status", response.data.data.status);
        localStorage.setItem("campaign_wallet", response.data.data.wallet);
      })
      .catch((err) => {
        console.log(err);
      });

      // kick();
  }, [campaignId]);

  let kick = () => {
    if (status !=="open" && fundraiserId !== userId) {
      history.push("/")
      toast.error("Campaign is not found!", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }

  userId === fundraiserId ? (role = "fundraiser") : (role = "donatur");

  console.log("campaign data", campaignData.id === campaignId )
  return (
    <div>
      {!campaignData ? (
        <SpinnerPage />
      ) : (
        <div className="w-10/12 mx-auto relative fromtop-animation ">
          <JumbotronCampaignDetail
            role={role}
            newProgressModal={newProgressModal}
            modalShareHandler={modalShareHandler}
            campaignId={campaignId}
            campaignData={campaignData}
          />
          <CampaignStory campaignData={campaignData} />
          <CampaignTimeline campaignId={campaignId}  />
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
