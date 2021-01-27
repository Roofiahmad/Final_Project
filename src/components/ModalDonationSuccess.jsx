import React from 'react'
import SuccesDonate from '../assets/SuccessDonate.png'
export default function ModalDonationSuccess() {
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
            className=" fromtop-animation inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-1/2"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white  pb-4 sm:p-4 sm:pb-4">
              <div className="text-center sm:mt-0 sm:ml-4 sm:text-left mb-6">
                <img src ={SuccesDonate} className={" mx-auto w-3/6"}/>
                <h3
                  className="text-xl leading-6 my-2 font-medium uppercase text-center"
                  id="modal-headline"
                >
                  Congratulations!
                </h3>
                <p className={"text-center text-xl font-light"}>Thank you for your donations</p>
              </div>
              <div></div>
        </div>
      </div>
    </div>
    </div>
    )
}
