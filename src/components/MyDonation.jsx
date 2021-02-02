import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const MyDonation = () => {
    const id = localStorage.getItem("id");
    const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const [myDonations, setMyDonations] = useState([]);
    const [mySlicedDonations, setMySlicedDonations] = useState([]);
    useEffect(() => {
        getData();
      }, []);

    function getData() {
    
      axios.get(
        `https://talikasih.kuyrek.com:3002/donation/user/?user_id=${id}&page=1&limit=4`
      )
      .then((response) => {
          setMyDonations(response.data.data);
          setMySlicedDonations(response.data.data.slice(0,2))
      })
    }
  return (
    <div className={`w-11/12 mt-10 mb-10 lg:mt-16 lg:mb-16 mx-auto border border-solid p-5 lg:pb-5 pb-8  ${myDonations.length >2 ? 'lg:pb-6' : 'lg:pb-14'}`}>
      <h2 className="font-bold text-xl mb-5">My Donation ({myDonations.length})</h2>
      <div className="grid grid-cols-1 gap-8 w-11/12 mx-auto md:grid-cols-2">
      {mySlicedDonations.length > 0 ? mySlicedDonations.map((donations) => {
        return (
        <div className="shadow-md p-5 fromtop-animation">
          <p className="text-right text-gray-400 text-sm m-1">{moment(donations.createdAt).startOf('minute').fromNow(new Date())}</p>
          <a href="#" className="uppercase font-bold text-base underline">{donations.campaign.title}</a>
          <p className="text-tosca font-bold text-base my-2">IDR {numberWithCommas(donations.amount)}</p>
          <p className="my-1">{donations.message}</p>
        </div>
        );
      })
      :null}
      </div>
      {myDonations.length > 2 ?<div className="w-max mt-6 mx-auto">
        <button onClick={mySlicedDonations.length > 2 ? 
        () => setMySlicedDonations(myDonations.slice(0,2)): 
        () => setMySlicedDonations(myDonations)} className="btn-outline-tosca uppercase">
        {mySlicedDonations.length >2 ? "show less": "show more"}
        </button>
      </div> : null}
    </div >
  )
}

export default MyDonation;