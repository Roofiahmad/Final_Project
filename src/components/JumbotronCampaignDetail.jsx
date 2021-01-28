import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { Link, useParams } from "react-router-dom";
import campaignImage from '../assets/campaign-image.png';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalsCampaignDelete from "./ModalsCampaignDelete";


export default function JumbotronCampaignDetail(props) {
  
  const token = localStorage.getItem("token");
  let {campaignId} = useParams();
  const [dropdown, setDropdown] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  // function to add thousand separator value of IDR
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const end = props.campaignData.due_date.split('T'); 
  const calc = end[0].split('-');
  const newDay = new Date();
  const today = [newDay.getFullYear(), newDay.getMonth()+1, newDay.getDate()];
  let dayRemain = (Number(calc[0])-today[0])*365 + (Number(calc[1])-today[1])*30 +(Number(calc[2])-today[2]);
  // pevent days remain have negative value
  if(dayRemain <0){
    dayRemain= 0;
  }

  const handleDelete = () => {
    setModalDelete(!modalDelete)
  }
 
  return (
    <div>
      {modalDelete ? <ModalsCampaignDelete  modalDelete={handleDelete}/> : null}
      <div className="flex justify-between">
        <h2 className=" inline-block text-3xl font-medium my-4">
          {props.campaignData.title}
        </h2>
        {props.role === "fundraiser" ? <div
          className="relative inline-block top-5 right-8"
          onClick={() => setDropdown(!dropdown)}
        >
          <i className="fas fa-cog text-2xl "></i>
          <i className="fas fa-caret-down text-xl mx-2"></i>
          {dropdown ? (
            <div className="absolute w-max p-2 -right-0 rounded-md z-10 bg-white shadow fromtop-animation ">
              <Link to={`/editcampaign/${props.campaignData.id}`}>
              <p className="campaign-text-setting text-md">Edit</p>
              </Link>
              <p className="campaign-text-setting text-md">Close Campaign</p>
              <p onClick={handleDelete} className="campaign-text-setting text-md">Delete</p>
            </div>
          ) : null}
        </div> : null}
      </div>
      <div className="flex flex-col md:flex-row ">
        <img
          className="lg:w-8/12 lg:h-8/12 md:w-full rounded"
          src={props.campaignData.images === 'https://talikasih.kuyrek.com:3001/img/' ?  campaignImage : props.campaignData.images}
          alt="Campaign Image"
        />
        <div className="lg:w-4/12 md:w-full rounded border-2 border-gray-200 lg:ml-12 p-5 ">
          <p className="text-red-600 text-2xl">IDR {numberWithCommas(props.campaignData.total_donation_rupiah)}</p>
          <p className="text-md text-gray-400">{`IDR ${numberWithCommas((props.campaignData.goal - props.campaignData.total_donation_rupiah <= 0 ? 0 : props.campaignData.goal - props.campaignData.total_donation_rupiah))} remaining`}</p>
          <ProgressBar totalDonation={props.campaignData.total_donation_rupiah} donationGoal={props.campaignData.goal} />
          <p>from IDR {numberWithCommas(props.campaignData.goal)} goal</p>
          <div className="fundraiser-profil flex gap-3">
            <img
              src={props.campaignData.user.profile_image === 'https://talikasih.kuyrek.com:3000/img/null' ?  campaignImage : props.campaignData.user.profile_image}
              alt="fundraiser-image"
              className="w-12 h-12 inline-block border border-gray-500 rounded-md "
            />
            <div className="inline-block ">
              <p className="font-medium">{props.campaignData.user.name}</p>
              <p className="text-gray-400">Fundraiser</p>
            </div>
          </div>
          <div className="grid grid-cols-3 mt-5 text-center justify-items-center">
            <div className="col-span-1 w-24 h-24 border-2 rounded-md border-gray-100 shadow-md p-3">
              <p className="text-tosca text-3xl">{dayRemain}</p>
              <p>Days left</p>
            </div>
            <div className="col-span-1 w-24 h-24 border-2 rounded-md border-gray-100 shadow-md p-3">
              <p className="text-tosca text-3xl">{props.campaignData.total_donation}</p>
              <p>Donations</p>
            </div>
            <div className="col-span-1 w-24 h-24 border-2 rounded-md border-gray-100 shadow-md p-3">
              <p className="text-tosca text-3xl">{props.campaignData.share < 1 ? '0': props.campaignData.total_share}</p>
              <p>Share</p>
            </div>
          </div>
          <div className="grid grid-cols-1 my-2">
            <button 
            onClick={(e) => props.modalShareHandler(e.target.value)}
            className="btn-outline-red uppercase border-tosca">
              Share
            </button>
            { props.role === "fundraiser" ? <button
              onClick={(e) => props.newProgressModal(e.target.value)}
              className="btn-outline-red uppercase"
            > New Progress
            </button>
            :
            <Link
            to={`/createdonation/${campaignId}`}
            className="btn-outline-red uppercase text-center"
            > 
            Donate
            </Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
