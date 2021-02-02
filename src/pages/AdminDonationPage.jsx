import React, { useState, useEffect } from 'react';
import CategoryButtonAdmin from '../components/CategoryButtonAdmin';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import AllDonations from '../components/AllDonations';

export default function AdminDonationPage() {

    const token = localStorage.getItem("token")
    let history = useHistory();
    const [role] = useState(localStorage.getItem("role"));
    const [donationsData,setDonationsData] = useState([]);
    const [donationsByCategory,setDonationsByCategory] = useState([])
    
    const dropdownHandler = (id)=> {
      let copyDonationsData = [...donationsByCategory];
      copyDonationsData[id].dropdown = !donationsByCategory[id].dropdown;
      setDonationsByCategory(copyDonationsData)
    }
  
    const updateType = (type,id)=> {
      updateStatusDonation(type,id)
    }
  
    useEffect(() => {
      kick();
      getAllDonations();
    }, []);
  
    const getAllDonations = () => {
      let url = `https://talikasih.kuyrek.com:3002/donation/verified`;
      axios.get(url)
      .then((response) => {
        setDonationsData(response.data.data);
        response.data.data.forEach(element => {
          element.dropdown= false;      
        });
        setDonationsByCategory(response.data.data)
      })
    }
  
    const updateStatusDonation = (type, idcampaign) =>{
      let updateType = {
        isVerified:type
      }
      let url = `https://talikasih.kuyrek.com:3002/donation/update/verified/${idcampaign}`;
      const config = {
        headers: {
          'Authorization': 'Bearer ' + token, 
        },
      };
      axios.put(url,updateType,config)
      .then((response) =>{
        console.log(response)
        toast.success("Donation status updated successfully!");
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
    }
  
    const filterByCategory = (category) =>{
      setDonationsByCategory(donationsData.filter((item)=>{
        return item.campaign.category ===category
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
  
    console.log('from API',donationsData)
    console.log('after filtered',donationsByCategory)


    return (
      donationsData.length>0 ?(<div>
        <CategoryButtonAdmin filterByCategory={filterByCategory}/>
        <AllDonations donationsByCategory={donationsByCategory}  dropdownHandler={dropdownHandler} updateType={updateType}/>
      </div>): 
      <div className="h-3/6 flex flex-wrap content-center justify-center">
        <h1 className="text-3xl text-tosca font-bold">Yeayy... there is no pending donation</h1>
        <span className="ml-2 animate-bounce text-3xl text-tosca font-bold">^_^</span>
      </div>
    )
}
