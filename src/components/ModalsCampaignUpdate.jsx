import React, { useState } from "react";
import axios from 'axios';

export default function ModalsCampaignUpdate(props) {

  const token = localStorage.getItem("token");
  const [recepient, setRecepient] = useState(true);
  const [withdrawal, setWithdrawal] = useState(false);

  const recepientHandler = () => {
    setRecepient(!recepient);
    setWithdrawal(!withdrawal);
  };

  const withdrawalHandler = () => {
    setRecepient(!recepient);
    setWithdrawal(!withdrawal);
  };

  const handleSubmitWithdrawal = (e) => {
    e.preventDefault();
    const data = {
      amount: e.target.amount.value,
      message: e.target.story.value,
      campaign_id: props.campaignId,
    }
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token, 
      },
    };
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const API= "https://talikasih.kuyrek.com:3003/update/create"
    axios
      .post(proxy + API, data, config) 
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmitrecepient = (e) => {
    e.preventDefault();
    console.log(e.target.recepientStory.value);
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
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="campaignUpdate"
                      value="recepient"
                      checked={recepient}
                      onClick={recepientHandler}
                    />
                    <span className="ml-2">Recipient Update</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio"
                      name="campaignUpdate"
                      value="withdrawal"
                      checked={withdrawal}
                      onClick={withdrawalHandler}
                    />
                    <span className="ml-2">Withdrawal</span>
                  </label>

                  {withdrawal ? (
                    <form onSubmit={(e) => handleSubmitWithdrawal(e)}>
                      <div className="frombottom-animation ">
                        <label className="block items-center mt-3 mb-3">
                          Amount<span className="text-red-700">*</span>
                        </label>
                        <input
                          className="bg-gray-50 border-b border-tosca w-10/12"
                          type="number"
                          name="amount"
                        />
                        <label className="block items-center mt-3 mb-3">
                          Withdrawal purpose
                          <span className="text-red-700">*</span>
                        </label>
                        <textarea
                          name="story"
                          className="h-40 bg-gray-50 w-10/12"
                          id="story"
                          type="text"
                          placeholder="Tell Your Story..."
                        />
                      </div>
                      <div className="bg-gray-50 my-3 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          type="submit"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Submit
                        </button>
                        <button
                          onClick={props.newProgressModal}
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : null}

                  {recepient ? (
                    <form onSubmit={(e) => handleSubmitrecepient(e)}>
                      <div className="frombottom-animation">
                        <label className="block items-center mt-3 mb-3">
                          Update<span className="text-red-700">*</span>
                        </label>
                        <textarea
                          name="recepientStory"
                          className="h-40 bg-gray-50 w-10/12"
                          id="story"
                          type="text"
                          placeholder="Tell Your Story..."
                        />
                      </div>
                      <div className="bg-gray-50 my-3 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          type="submit"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Submit
                        </button>
                        <button
                          onClick={props.newProgressModal}
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
