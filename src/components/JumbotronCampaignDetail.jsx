import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { Link, useParams } from "react-router-dom";
import campaignImage from '../assets/campaign-image.png';
import 'react-toastify/dist/ReactToastify.css';
import ModalsCampaignDelete from "./ModalsCampaignDelete";


export default function JumbotronCampaignDetail(props) {
  console.log(props)
  
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
      <div className="flex justify-between ">
        <h2 className=" inline-block text-4xl font-medium my-4">
          {props.campaignData.title}
        </h2>
        {props.role === "fundraiser" ? <div
          className="self-center"
          onClick={() => setDropdown(!dropdown)}
          >
          <div className="flex relative">
          <i className="fas fa-cog text-2xl "></i>
          <i className="fas fa-caret-down text-xl  mx-2"></i>
          </div>
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
      <div className="flex flex-col md:flex-row h-8/12">
        <img
          className="lg:w-8/12 md:w-full lg:h-full h-56 rounded"
          src={props.campaignData.images === 'https://talikasih.kuyrek.com:3001/img/' ?  campaignImage : props.campaignData.images}
          alt="Campaign Image"
        />
        <div className="lg:w-4/12 md:w-full  rounded border-2 border-gray-200 lg:ml-3 lg:p-5 p-3 ">
          <div className=" flex flex-row lg:flex-col justify-between">
          <p className="text-red-600 text-2xl  inline-block w-2/4 lg:w-full ">IDR {numberWithCommas(props.campaignData.total_donation_rupiah)}</p>
          {props.role === 'fundraiser' ? <p className="text-lg text-gray-400 inline-block w-2/4 lg:w-full ">{`IDR ${numberWithCommas((props.campaignData.goal - props.campaignData.total_donation_rupiah <= 0 ? 0 : props.campaignData.goal - props.campaignData.total_donation_rupiah))} remaining`}</p> :null}
          </div>
          <ProgressBar totalDonation={props.campaignData.total_donation_rupiah} donationGoal={props.campaignData.goal} />
          <p className="text-base mb-4">from IDR {numberWithCommas(props.campaignData.goal)} goal</p>
          <div className="fundraiser-profil flex gap-3">
            <img
              src={props.campaignData.user.profile_image === 'https://talikasih.kuyrek.com:3000/img/null' ?  campaignImage : props.campaignData.user.profile_image}
              alt="fundraiser-image"
              className="w-12 h-12 inline-block border border-gray-500 rounded-md "
            />
            <div className="inline-block">
              <p className="font-medium text-lg">{props.campaignData.user.name}</p>
              <p className="text-gray-400 text-base">Fundraiser</p>
            </div>
          </div>
          <div className="grid grid-cols-3 lg:mt-5 mt-3 text-center justify-items-center">
            <div className="col-span-1 lg:w-24 w-20 lg:h-24 h-20 border-2 rounded-md shadow-md lg:p-3 p-2">
              <p className="text-tosca text-2xl  font-medium">{dayRemain}</p>
              <p className="text-sm" >Days left</p>
            </div>
            <div className="col-span-1 lg:w-24 w-20 lg:h-24 h-20 border-2 rounded-md shadow-md lg:p-3 p-2">
              <p className="text-tosca text-2xl lg:font-normal ">{props.campaignData.total_donation}</p>
              <p className="text-sm" >Donations</p>
            </div>
            <div className="col-span-1 lg:w-24 w-20 lg:h-24 h-20 border-2 rounded-md shadow-md lg:p-3 p-2">
              <p className="text-tosca text-2xl lg:font-normal ">{props.campaignData.share < 1 ? '0': props.campaignData.total_share}</p>
              <p className="text-sm" >Share</p>
            </div>
          </div>
          <div className="grid grid-cols-1 my-2">
            <button 
            onClick={(e) => props.modalShareHandler(e.target.value)}
            className="btn-outline-red uppercase border-tosca text-lg">
              Share
            </button>
            { props.role === "fundraiser" ? <button
              onClick={(e) => props.newProgressModal(e.target.value)}
              className="btn-outline-red uppercase text-lg"
            > New Progress
            </button>
            :
            <Link
            to={`/createdonation/${campaignId}`}
            className="btn-outline-red uppercase text-center text-lg"
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
