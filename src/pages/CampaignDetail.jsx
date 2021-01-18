import React, { useState, useEffect } from "react";
import CampaignStory from "../components/CampaignStory";
import CampaignTimeline from "../components/CampaignTimeline";
import CommentCampaignDetail from "../components/CommentCampaignDetail";
import DonaturTimeline from "../components/DonaturTimeline";
import JumbotronCampaignDetail from "../components/JumbotronCampaignDetail";
import RelatedCampaign from "../components/RelatedCampaign";
import axios from 'axios'
import { useParams } from "react-router-dom";

export default function CampaignDetail() {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem('id');
  const initialCampaignData = {
    "images": "https://talikasih.kuyrek.com:3001/img/c8ff9fa0f60691ea5ae7a2c5a9e97cfc.jpg",
    "view": 76,
    "total_donation": 1,
    "total_donation_rupiah": 100000,
    "total_share": 0,
    "deleted": false,
    "_id": "6002b9c479dfba6f3e925ce4",
    "title": "Tali kasih",
    "goal": 50000000,
    "due_date": "2020-02-14T00:00:00.000Z",
    "category": "Medical",
    "story": "Kasihan kepin, mari kita bantu semuanya yuk!",
    "user": {
        "profile_image": "https://talikasih.kuyrek.com:3000/img/05636aa0f63a9bd5d463923dc417a931.jpg",
        "id": "04087e5e-f660-4b15-a2a4-8afa11af6448",
        "name": "Heru Benowo",
        "email": "heru@email.com",
        "bank_name": "Bank Mandiri Banget Sih",
        "bank_account_number": 123456789,
        "createdAt": "2021-01-13T08:11:19.000Z"
    },
    "created_at": "2021-01-16T10:02:44.491Z",
    "updated_at": "2021-01-18T02:17:20.159Z",
    "id": "6002b9c479dfba6f3e925ce4"
}
  const [fundraiserId, setFundraiserId] = useState('');
  const [campaignData, setCampaignData] = useState(initialCampaignData)
  const campaignId = useParams().campaignId; 
  
  let role = '';

  const donateHandlerButton = (e) => {
    console.log("from campaign detail donate");
  };

  useEffect(() => {
    console.log('useeffect work');
    axios.get(`https://talikasih.kuyrek.com:3001/campaign/get/${campaignId}`)
        .then(response => {
            console.log(response.data.data);
            setCampaignData(response.data.data);
            setFundraiserId(response.data.data.user.id);
        })
        .catch(err => {
          console.log(err)
        })
  }, [])

  console.log(fundraiserId);
  userId === fundraiserId ? role = 'fundraiser' : role = 'donatur';
  console.log(role)

  return (
    <div className="w-11/12 mx-auto relative fromtop-animation ">
      <JumbotronCampaignDetail
        role={role}
        donateHandlerButton={donateHandlerButton}
        id= {campaignId}
        campaignData={campaignData}
      />
      <CampaignStory campaignData={campaignData} />
      <CampaignTimeline />
      <DonaturTimeline campaignId={campaignId}  />
      <CommentCampaignDetail role={role} />
      {role === 'donatur' ?  <RelatedCampaign category={campaignData.category} campaignId={campaignId}/>: null}
    </div>
  );
}
