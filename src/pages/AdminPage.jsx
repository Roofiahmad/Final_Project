import React, { useState, useEffect } from 'react';
import AllCampaign from '../components/AllCampaign';
import CategoryButtonAdmin from '../components/CategoryButtonAdmin';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


const AdminPage = () => {
  const token = localStorage.getItem("token")
  let history = useHistory();
  const [role] = useState(localStorage.getItem("role"));
  const [campaignData,setCampaignData] = useState([]);
  const [filteredCampaignData,setFilteredCampaignData] = useState([])
  
  const dropdownHandler = (id)=> {
    let copyCampaignData = [...filteredCampaignData];
    copyCampaignData[id].dropdown = !filteredCampaignData[id].dropdown;
    setFilteredCampaignData(copyCampaignData)
  }

  const updateType = (type,id)=> {
    updateStatusCampaign(type,id)
  }

  useEffect(() => {
    kick();
    getAllCampaign();
  
  }, []);

  const getAllCampaign = (category) => {
    let url = `https://talikasih.kuyrek.com:3001/campaign/byadmin?page=1&limit=10`;
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token, 
      },
    };
    axios.get(url,config)
    .then((response) => {
      setCampaignData(response.data.posts);
      response.data.posts.forEach(element => {
        element.dropdown= false;      
      });
      setFilteredCampaignData(response.data.posts)
    })
  }

  const updateStatusCampaign = (type, idcampaign) =>{
    let updateType = {
      status:type
    }
    let url = `https://talikasih.kuyrek.com:3001/campaign/update/status/${idcampaign}`;
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token, 
      },
    };
    axios.put(url,updateType,config)
    .then((response) =>{
      console.log(response)
      toast.success("Campaign status updated successfully!");
      window.location.reload()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const filterByCategory = (category) =>{
    setFilteredCampaignData(campaignData.filter((item)=>{
      return item.category ===category
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
      <AllCampaign filteredCampaign={filteredCampaignData}  dropdownHandler={dropdownHandler} updateType={updateType}/>
    </div>
  )
}

export default AdminPage;