import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyWallet = () => {
  const id = localStorage.getItem("id");
  console.log("ID", id)
    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const [myCampaigns, setMyCampaigns] = useState("");
    useEffect(() => {
        getData();
      }, []);

    function getData() {
      axios.get(
        `https://talikasih.kuyrek.com:3001/campaign/user?user_id=${id}`
      )
      .then((response) => {
          console.log("INI CAMPAIGN BY USER", response.data.data);
          setMyCampaigns(response.data.data);
          console.log("myCampaigns", myCampaigns);
      })
    }
  return (
    <div className="w-11/12 mt-10 mb-10 lg:mt-16 lg:mb-16 mx-auto border border-solid p-5">
      <h2 className="font-bold text-xl mb-5">My Wallet (0)</h2>
      <div className="grid grid-cols-1 gap-8 w-11/12 mx-auto md:grid-cols-2">
        <div className="shadow-md p-5">
          <a href="#" className="font-bold underline m-1"></a>
          <p className="text-tosca font-bold text-xl my-2">Total Donation: IDR 10.000.000</p>
          <p className="text-rose font-bold text-xl my-2">Remaining Donations: IDR 5.000.000</p>
        </div>
        <div className="shadow-md p-5">
          <a href="#" className="font-bold underline m-1">Title</a>
          <p className="text-tosca font-bold text-xl my-2">Total Donation: IDR 10.000.000</p>
          <p className="text-rose font-bold text-xl my-2">Remaining Donations: IDR 5.000.000</p>
        </div>
        <div className="shadow-md p-5">
          <a href="#" className="font-bold underline m-1">Title</a>
          <p className="text-tosca font-bold text-xl my-2">Total Donation: IDR 10.000.000</p>
          <p className="text-rose font-bold text-xl my-2">Remaining Donations: IDR 5.000.000</p>
        </div>
      </div>
      <div className="w-max my-8 mx-auto hover:bg-blue-100">
        <button className="Py-2 px-5 border-2 border-blue-400 text-blue-400 font-bold">LOAD MORE</button>
      </div>
    </div>
  )
}

export default MyWallet;