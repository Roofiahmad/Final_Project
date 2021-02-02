import React, { useState, useEffect } from 'react';
import AllCampaign from '../components/AllCampaign';
import CategoryButtonAdmin from '../components/CategoryButtonAdmin';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import PaginationComp from '../components/PaginationComp';


const AdminPage = () => {
  const token = localStorage.getItem("token")
  let history = useHistory();
  const [role] = useState(localStorage.getItem("role"));
  const [campaignData,setCampaignData] = useState([]);
  const [campaignByCategory,setcampaignByCategory] = useState([])
  const [campaignByPage, setCampaignByPage] = useState([])
  
  const dropdownHandler = (id)=> {
    let copyCampaignData = [...campaignByPage];
    copyCampaignData[id].dropdown = !campaignByPage[id].dropdown;
    setCampaignByPage(copyCampaignData)
  }

  const updateType = (type,id)=> {
    updateStatusCampaign(type,id)
  }

  useEffect(() => {
    kick();
    getAllCampaign();
    
  }, []);
  
  useEffect(() => {
    console.log("category changed")
    handlePagination()
  }, [campaignByCategory])

  const getAllCampaign = (category) => {
    let url = `https://talikasih.kuyrek.com:3001/campaign/byadmin?page=1&limit=100`;
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
      setcampaignByCategory(response.data.posts)
      setCampaignByPage(response.data.posts.slice(0,6))
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
    setcampaignByCategory(campaignData.filter((item)=>{
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

  const handlePagination = (indexAwal = 0, indexAkhir = 6) => {
    let copyArray = [...campaignByCategory];
    let slicedArray = copyArray.slice(indexAwal, indexAkhir);
    setCampaignByPage(slicedArray)
}

console.log("by category",campaignByCategory)
console.log("by page",campaignByPage)

  return (
    <div>
      <CategoryButtonAdmin filterByCategory={filterByCategory}/>
      <AllCampaign campaignByPage={campaignByPage}  dropdownHandler={dropdownHandler} updateType={updateType}/>
      <PaginationComp campaignData={campaignByCategory} pagination={handlePagination} />
    </div>
  )
}

export default AdminPage;