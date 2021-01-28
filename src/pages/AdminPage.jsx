import React, { useState, useEffect } from 'react';
import AllCampaign from '../components/AllCampaign';
import CategoryButtonAdmin from '../components/CategoryButtonAdmin';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';


const AdminPage = () => {
  let history = useHistory();
  const [role] = useState(localStorage.getItem("role"));

  useEffect(() => {
    kick();
  }, []);

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
      <CategoryButtonAdmin />
      <AllCampaign />
    </div>
  )
}

export default AdminPage;