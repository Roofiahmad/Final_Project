import React, { useEffect, useState } from 'react';
import card2 from '../assets/card.png';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const MyCampaign = () => {
    const id = localStorage.getItem("id");
    const [myCampaigns, setMyCampaigns] = useState("");
    useEffect(() => {
        getData();
      }, []);

    function getData() {
    
      axios.get(
        `https://talikasih.kuyrek.com:3001/campaign/user?user_id=${id}&page=1&limit=1`
      )
      .then((response) => {
          console.log("INI CAMPAIGN BY USER", response);
          setMyCampaigns(response.data.data);
          console.log("myCampaigns", myCampaigns);
      })
    }
  return (
    <div className="w-11/12 mt-20 mb-20 mx-auto border border-solid p-5">
      <h2 className="font-bold text-xl mb-5">My Campaign ({myCampaigns.length})</h2>
      <div className="grid grid-cols-1 gap-10 justify-between lg:grid-cols-3 sm:grid-cols-2">
        {myCampaigns.length > 0 ? myCampaigns.map((campaigns) => {
          return (
        <Link to={`/campaigndetail/${campaigns.id}`}>
        <div key={campaigns.id} className="shadow-md max-w-md mx-auto">
          <img src={campaigns.images} alt="" />
          <div className="w-5/6 mx-auto pb-4 pt-2">
            <p className="border border-solid border-red-600 text-red-800 text-sm w-14 text-center my-2 rounded-sm">{campaigns.category}</p>
            <a href="#" className="font-bold mt-4">{campaigns.title}</a>
            <p className="text-sm mb-8 mt-1">{campaigns.user.name}</p>
            <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
              <div className="w-full h-full bg-gray-200 absolute"></div>
              <div className="h-full bg-tosca absolute" style={{ width: "70%" }}></div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <p className="text-sm">Raised</p>
                <p className="font-bold text-tosca">IDR {campaigns.total_donation_rupiah}</p>
              </div>
              <div className="text-right">
                <p className="text-sm">Goal</p>
                <p>IDR {campaigns.goal}</p>
              </div>
            </div>
          </div>
        </div>
        </Link>
        );
      })
      :null}

      </div>
      <div className="w-max my-8 mx-auto hover:bg-blue-100">
        <button className="Py-2 px-5 border-2 border-blue-400 text-blue-400 font-bold">LOAD MORE</button>
      </div>
    </div >
  )
}

export default MyCampaign;