import React, { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ModalsCampaignUpdate(props) {

  const token = localStorage.getItem("token");
  const [recepient, setRecepient] = useState(true);
  const [withdrawal, setWithdrawal] = useState(false);
  const [wallet, setWallet] = useState(localStorage.getItem("campaign_wallet"));

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const recepientHandler = () => {
    setRecepient(!recepient);
    setWithdrawal(!withdrawal);
  };

  const withdrawalHandler = () => {
    setRecepient(!recepient);
    setWithdrawal(!withdrawal);
  };


  const axiosUpdateNoWithdrawal= (data) => {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token, 
      },
    };
    const API= "https://talikasih.kuyrek.com:3003/update/create";
    axios
      .post(API, data, config) 
      .then((response) => {
        console.log(response, 'update success')
        toast.success("Campaign's progress updated!", {
          position: toast.POSITION.TOP_CENTER
        });
        window.location.reload()
      })
      .catch((err) => {
        toast.error("Something went wrong", {
          position: toast.POSITION.TOP_CENTER
      })
      });
  }

  const axiosUpdateWithdrawal= (data) => {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token, 
      },
    };
    const API= "https://talikasih.kuyrek.com:3003/update/create/withdraw";
    axios
      .post(API, data, config) 
      .then((response) => {
        toast.success("Create Update Withdrawal Successfully", {
          position: toast.POSITION.TOP_CENTER
      })
        window.location.reload()
      })
      .catch((err) => {
        toast.error("Something went wrong", {
          position: toast.POSITION.TOP_CENTER
      })
      });
  }

  const handleSubmitWithdrawal = (e) => {
    e.preventDefault();
    const data = {
      amount: e.target.amount.value,
      message: e.target.withdrawalPurpose.value,
      campaign_id: props.campaignId,
    }
    axiosUpdateWithdrawal(data)
  };

  const handleSubmitrecepient = (e) => {
    e.preventDefault();
    const data = {
      message: e.target.recepientStory.value,
      campaign_id: props.campaignId,
    }
    axiosUpdateNoWithdrawal(data)
  };

  return (
    <div>
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
            className=" fromtop-animation inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  align-middle sm:w-6/12  w-10/12"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 lg:pt-5 pt-3 ">
              <div className="text-center sm:mt-0 sm:ml-4 sm:text-left lg:mb-4">
                <h3
                  className="lg:text-lg text-base leading-6 font-medium text-gray-900 inline-block"
                  id="modal-headline"
                >
                  Campaign Update
                </h3>
                <h3
                  onClick={props.newProgressModal}
                  className="text-lg leading-6  font-medium text-gray-900 inline-block absolute right-6 cursor-pointer	"
                >
                  X
                </h3>
              </div>
              <div className="mt-2 border-t border-gray-500 p-4">
                <div className="lg:mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="campaignUpdate"
                      value="recepient"
                      checked={recepient}
                      onClick={recepientHandler}
                    />
                    <span className="ml-2 lg:text-base text-sm">Recipient Update</span>
                  </label>
                  <label className="inline-flex items-center ml-6 lg:text-base text-sm">
                    <input
                      type="radio"
                      className="form-radio"
                      name="campaignUpdate"
                      value="withdrawal"
                      checked={withdrawal}
                      onClick={withdrawalHandler}
                    />
                    <span className="ml-2 lg:text-base text-sm">Withdrawal</span>
                  </label>

                  {withdrawal ? (
                    <form onSubmit={(e) => handleSubmitWithdrawal(e)}>
                      <div className="frombottom-animation ">
                        <label className="block items-center mt-3 mb-3 lg:text-base text-sm">
                          Wallet Balance :<span className="text-red-700"> IDR {numberWithCommas(wallet)}</span>
                        </label>
                        <label className="block items-center mt-3 mb-3 lg:text-base text-sm">
                          Amount<span className="text-red-700">*</span>
                        </label>
                        <input
                          className="bg-gray-50 border-b border-tosca w-full"
                          type="number"
                          name="amount"
                        />
                        <label className="block items-center mt-3 mb-3 lg:text-base text-sm">
                          Withdrawal purpose
                          <span className="text-red-700">*</span>
                        </label>
                        <textarea
                          name="withdrawalPurpose"
                          className="h-40 bg-gray-50 w-full lg:text-base text-sm"
                          id="withdrawalPurpose"
                          type="text"
                          placeholder="Tell Your Story..."
                        />
                      </div>
                      <div className=" my-3 px-4 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          type="submit"
                          className="lg:text-base text-sm w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Submit
                        </button>
                        <button
                          onClick={props.newProgressModal}
                          className="lg:text-base text-sm mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : null}

                  {recepient ? (
                    <form onSubmit={(e) => handleSubmitrecepient(e)}>
                      <div className="frombottom-animation">
                        <label className="block items-center mt-3 mb-3 lg:text-base text-sm">
                          Update<span className="text-red-700">*</span>
                        </label>
                        <textarea
                          name="recepientStory"
                          className="h-40 bg-gray-50 w-full lg:text-base text-sm"
                          id="story"
                          type="text"
                          placeholder="Tell Your Story..."
                        />
                      </div>
                      <div className=" my-3 px-4 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          type="submit"
                          className="lg:text-base text-sm w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600  font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Submit
                        </button>
                        <button
                          onClick={props.newProgressModal}
                          className="lg:text-base text-sm mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
