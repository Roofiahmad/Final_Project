import React from 'react'

export default function ModalsCampaignDelete(props) {

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
                  Help by sharing
                </h3>
                <h3
                  onClick={props.modalShareHandler}
                  className="text-lg leading-6  font-medium text-gray-900 inline-block absolute right-6 cursor-pointer	"
                >
                  X
                </h3>
              </div>
              <div className="mt-2 border-t border-gray-500 p-4">
            <div className="mt-2 w-full grid grid-rows-2	justify-around">
              <div className="text-sm">
              https://talilove.herokuapp.com/{props.campaignId}
              </div>
              <button
                onClick={handleShare}
                type="button"
                className="float-right w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Share
              </button>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}