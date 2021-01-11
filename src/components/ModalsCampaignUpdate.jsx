import React, { useState } from "react";

export default function ModalsCampaignUpdate(props) {
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
  return (
    <div>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/* <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
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
                  onClick={props.toggleHandler}
                  className="text-lg leading-6  font-medium text-gray-900 inline-block absolute right-6 cursor-pointer	"
                >
                  X
                </h3>
              </div>
              <div className="mt-2 border-t border-gray-500 p-4">
                <div class="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="campaignUpdate"
                      value="recepient"
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
                      onClick={withdrawalHandler}
                    />
                    <span className="ml-2">Withdrawal</span>
                  </label>

                  {withdrawal ? (
                    <div>
                      <label className="block items-center mt-3 mb-3">
                        Amount<span className="text-red-700">*</span>
                      </label>
                      <input
                        className="bg-gray-50 border-b border-tosca w-10/12"
                        type="number"
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
                  ) : null}

                  {recepient ? (
                    <div>
                      <label className="block items-center mt-3 mb-3">
                        Update<span className="text-red-700">*</span>
                      </label>
                      <textarea
                        name="story"
                        className="h-40 bg-gray-50 w-10/12"
                        id="story"
                        type="text"
                        placeholder="Tell Your Story..."
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Submit
              </button>
              <button
                onClick={props.toggleHandler}
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
