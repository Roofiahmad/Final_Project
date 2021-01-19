import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyDonation = () => {
    const id = localStorage.getItem("id");
    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const [myDonations, setMyDonations] = useState("");
    useEffect(() => {
        getData();
      }, []);

    function getData() {
    
      axios.get(
        `https://talikasih.kuyrek.com:3002/donation/user/?user_id=${id}&page=1&limit=4`
      )
      .then((response) => {
          console.log("INI DONATION BY USER", response);
          setMyDonations(response.data.data);
          console.log("myDonations", myDonations);
      })
    }
  return (
    <div className="w-11/12 mt-20 mb-20 mx-auto border border-solid p-5">
      <h2 className="font-bold text-xl mb-5">My Donation ({myDonations.length})</h2>
      <div className="grid grid-cols-1 gap-8 w-11/12 mx-auto md:grid-cols-2">
      {myDonations.length > 0 ? myDonations.map((donations) => {
        return (
        <div className="shadow-md p-5">
          <p className="text-right text-gray-400 text-sm m-1">12 minutes ago</p>
          <a href="#" className="font-bold underline m-1">{donations.campaign.title}</a>
          <p className="text-tosca font-bold text-2xl my-2">IDR {numberWithCommas(donations.amount)}</p>
          <p className="my-1">{donations.message}</p>
        </div>
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

export default MyDonation;