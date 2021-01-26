import React from 'react'
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ModalsCampaignDelete(props) {
  let {campaignId} = useParams();
  const token = localStorage.getItem("token");
  let history = useHistory();

  const axiosDelete = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
    axios.delete(`https://talikasih.kuyrek.com:3001/campaign/delete/${campaignId}`,config)
        .then(response => {
            toast.success("Your campaign is deleted successfully", {
              position: toast.POSITION.TOP_CENTER
          })
            history.push("/myprofile");
        })
        .catch(err => {
          console.log(err)
        })
  }

  const handleNo = () =>{
    props.modalDelete()
  }

  const handleYes = (pros) => {
    axiosDelete()
    props.modalDelete()
  }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity " aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className=" fromtop-animation inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left mb-6">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900 inline-block"
                  id="modal-headline"
                >
                  Are you sure want to delete ?
                </h3>
              </div>
              <div className=" p-4">
            <div className="mt-2 w-full grid grid-cols-2 justify-around gap-3">
              <button
                onClick={handleNo}
                type="button"
                className="w-full inline-flex justify-center btn-outline-tosca"
              >
                No
              </button>
              <button
                onClick={handleYes}
                type="button"
                className="w-full inline-flex justify-center btn-outline-tosca"
              >
                Yes
              </button>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}
