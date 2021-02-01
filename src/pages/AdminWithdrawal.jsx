import React, { useState, useEffect } from 'react';
import CategoryButtonAdmin from '../components/CategoryButtonAdmin';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import AllWithdrawal from '../components/AllWithdrawal';

export default function AdminWithdrawal() {const token = localStorage.getItem("token")
let history = useHistory();
const [role] = useState(localStorage.getItem("role"));
const [campaignData,setCampaignData] = useState([]);
const [filteredCampaignData,setFilteredCampaignData] = useState([])

const dropdownHandler = (id)=> {
  let copyCampaignData = [...filteredCampaignData];
  copyCampaignData[id].dropdown = !filteredCampaignData[id].dropdown;
  setFilteredCampaignData(copyCampaignData)
}

const updateVerified = (verified,id)=> {
  updateStatusCampaign(verified,id)
}

useEffect(() => {
  kick();
  getAllCampaign();

}, []);

const getAllCampaign = (category) => {
  let url = 'https://talikasih.kuyrek.com:3002/donation';
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token, 
    },
  };
  axios.get(url,config)
  .then((response) => {
    // console.log("respon", response)
    setCampaignData(response.data.data);
    response.data.data.forEach(element => {
      element.dropdown= false;      
    });
    setFilteredCampaignData(response.data.data)
  })
}

const updateStatusCampaign = (verified, iddonation) =>{
  let updateVerified = {
    isVerified: verified
  }
  let url = `https://talikasih.kuyrek.com:3002/donation/update/verified/${iddonation}`;
  const config = {
    headers: {
      'Authorization': 'Bearer ' + token, 
    },
  };
  axios.put(url,updateVerified,config)
  .then((response) =>{
    // console.log(response)
    toast.success("Campaign verified updated successfully!");
    window.location.reload()
  })
  .catch((err) => {
    // console.log(err)
  })
}
console.log("FILTER", campaignData)
const filterByCategory = (category) =>{
  setFilteredCampaignData(campaignData.filter((item)=>{
    return item.campaign.category === category
  }))
}

const kick = () => {
  if (role !== "admin") {
    toast.error("Sorry, you are not an admin!", {
      position : toast.POSITION.TOP_CENTER
    });
    history.push("/");
  }
}

return (
  <div>
    <CategoryButtonAdmin filterByCategory={filterByCategory}/>
    <AllWithdrawal filteredCampaign={filteredCampaignData}  dropdownHandler={dropdownHandler} updateVerified={updateVerified}/>
  </div>
)
}
