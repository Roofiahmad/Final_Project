import React, { useState, useEffect } from "react";
import card from "../assets/card.png";
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CreateDonation() {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const token = localStorage.getItem('token');
  const [creditCard, setCredit] = useState(false);
  const [bank, setBank] = useState(false);
  let {campaignId} = useParams();
  //DataOneCampaign
  let [images, setImages] = useState("");
  let [category, setCategory] = useState("");
  let [title, setTitle] = useState("");
  let [name, setName] = useState("");
  let [raised, setRaised] = useState("");
  let [goal, setGoal] = useState("");

  const handleCredit = () => {
    setCredit(!creditCard);
    setBank(false);
  };

  const handleBank = () => {
    setBank(!bank);
    setCredit(false);
  };

  //Get One Campaign
  useEffect(() => {
    getData();
  }, []);

  function getData() {

    axios.get(
      `https://talikasih.kuyrek.com:3001/campaign/get/${campaignId}`
    )
    .then((response) => {
        console.log("INI GET ONE CAMPAIGN", response);
        setImages(response.data.data.images);
        setCategory(response.data.data.category);
        setTitle(response.data.data.title);
        setName(response.data.data.user.name);
        setRaised(response.data.data.total_donation_rupiah);
        setGoal(response.data.data.goal);
    })
  }


  //Post Donation Data
  const handleDonate = async (e) => {
    e.preventDefault();
    
    const sendDonate = {
      campaign: campaignId,
      amount: e.target.amount.value,
      message: e.target.message.value,
      name: e.target.name.value,
    };

    const config = {
      headers: {
          'Authorization': 'Bearer ' + token,
      },
    };

    await axios.post(
      "https://talikasih.kuyrek.com:3002/donation/create",
      sendDonate, config
    )
    .then((response) => {
        console.log(response);
        console.log(response, "Donation sent"); 
        alert("Yass, you successfully donate to this campaign");
        window.location.reload();
    })
    .catch((err) => {
        console.log("INI PESAN ERROR", err.response);
        alert("Sorry, there is something wrong");
    })
  };

  return (
    <div className=" px-10 fromtop-animation">
      <form onSubmit={(e) => handleDonate(e)}>
      <div className="mt-8 w-10/12 mx-auto  px-10">
        <h3 className="text-3xl pb-6 mb-6 border-b border-gray-500  leading-6 font-medium text-gray-900 ">
          Donation
        </h3>
        <div className=" grid grid-cols-10 py-4">
          <div className="col-span-6">
            <label className="block items-center mb-3">
              Amount<span className="text-red-700">*</span>
            </label>
            <input
              className="bg-gray-50 border-b border-tosca w-10/12"
              type="number" name="amount"
            />
            <label className="block items-center mt-4 mb-4">
              Name<span className="text-red-700">*</span>
            </label>
            <input
              className="bg-gray-50 border-b border-tosca w-10/12"
              type="text" defaultValue={localStorage.getItem('name')}
              name="name"
            />
            <label className="block items-center mt-4 mb-4 ">
              <input
                name="isGoing"
                type="checkbox"
                className="w-4 h-4 rounded-md mr-2"
              />
              Set as anonymous
            </label>
            <label className="block items-center my-4">
              Message <span className="text-gray-400">(Optional)</span>
            </label>
            <textarea
              name="message"
              className="h-64 outline-none p-2 border-b border-tosca bg-gray-50 w-10/12"
              id="story"
              type="text"
              placeholder="Tell Your Story..."
            />
          </div>
          <div className="shadow-md  col-span-4 w-full">
            <img src={images} alt="" />
            <div className="w-5/6 mx-auto pb-4 pt-2">
              <p className="border border-solid border-rose px-2 text-rose text-sm w-max text-center my-2 rounded-sm">
                {category}
              </p>
              <p className="font-bold mt-4">
                {title}
              </p>
              <p className="text-sm mb-8 mt-1">{name}</p>
              <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div
                  className="h-full bg-tosca absolute"
                  style={{ width: raised/goal*100 + '%' }}
                ></div>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <p className="text-sm">Raised</p>
                  <p className="font-bold text-tosca">IDR {numberWithCommas(raised)}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">Goal</p>
                  <p>IDR {numberWithCommas(goal)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 w-10/12 mx-auto  px-10">
        <h3 className="text-3xl pb-6 mb-6 border-b border-gray-500  leading-6 font-medium text-gray-900 ">
          Payment
        </h3>
        <label>
          Select Payment <span className="text-red-700">*</span>
        </label>
        <div className=" my-4">
          <div
            onClick={handleCredit}
            className={`inline-block py-4 px-10 hover:bg-blue-200  rounded text-center mr-10 ${
              creditCard ? "bg-blue-200" : null
            }`}
          >
            <i className="far fa-credit-card text-5xl"></i>
            <p>Credit Card</p>
          </div>
          <div
            onClick={handleBank}
            className={`inline-block py-4 px-10 hover:bg-blue-200  rounded text-center mr-10 ${
              bank ? "bg-blue-200" : null
            }`}
          >
            <i className="fas fa-university text-5xl"></i>
            <p>Bank Transfer</p>
          </div>
        </div>
        {creditCard ? (
          <div className="grid grid-cols-10 gap-10 mb-10 frombottom-animation">
            <div className="col-span-5">
              <label className="block">
                Card Number<span className="text-red-700">*</span>
              </label>
              <input
                type="number"
                className="border-b focus:border-blue-700  outline-none my-5 bg-grey-50 w-full"
                placeholder=" e.g. 1234 5678 9012 3456"
              ></input>
            </div>
            <div className="col-span-3">
              <label className="block">
                Expired Date<span className="text-red-700">*</span>
              </label>
              <input
                type="date"
                className="border-b focus:border-blue-700  outline-none my-5 bg-grey-50"
                placeholder="MM/YY"
              ></input>
            </div>
            <div className="col-span-2">
              <label className="block">
                CVV<span className="text-red-700">*</span>
              </label>
              <input
                type="number"
                className="border-b focus:border-blue-700  outline-none my-5 bg-grey-50 w-full"
                placeholder=" 123"
              ></input>
            </div>
          </div>
        ) : null}
        {bank ? (
          <div className="bg-gray-100 p-6 w-1/3 rounded frombottom-animation ">
            <p className="text-xl font-medium text-tosca">Transfer to</p>
            <div className="my-2">
              <p>Account Number</p>
              <p className="font-bold">1234 5678 90</p>
            </div>
            <div className="mb-2">
              <p>Account Holder Name</p>
              <p className="font-bold">TaliKasih</p>
            </div>
            <div>
              <p>Total Amount</p>
              <p className="font-bold">Rp.20,000,000</p>
            </div>
          </div>
        ) : null}
        <button
          type="submit"
          className={` uppercase  float-right mb-16 ${
            creditCard || bank
              ? "btn-red"
              : "bg-gray-200 px-8 py-2 mt-2 focus:outline-none"
          }`}
        >
          donate
        </button>
      </div>
      </form>
    </div>
  );
}
