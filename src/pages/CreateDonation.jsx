import React, { useState } from "react";
import card from "../assets/card.png";

export default function CreateDonation() {
  const [creditCard, setCredit] = useState(false);
  const [bank, setBank] = useState(false);
  const handleCredit = () => {
    setCredit(!creditCard);
    setBank(false);
  };
  const handleBank = () => {
    setBank(!bank);
    setCredit(false);
  };
  return (
    <div className=" px-10">
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
              type="number"
            />
            <label className="block items-center mt-4 mb-4">
              Name<span className="text-red-700">*</span>
            </label>
            <input
              className="bg-gray-50 border-b border-tosca w-10/12"
              type="text"
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
              name="story"
              className="h-64 outline-none p-2 border-b border-tosca bg-gray-50 w-10/12"
              id="story"
              type="text"
              placeholder="Tell Your Story..."
            />
          </div>
          <div className="shadow-md  col-span-4 w-full">
            <img src={card} alt="" />
            <div className="w-5/6 mx-auto pb-4 pt-2">
              <p className="border border-solid border-red-600 text-red-800 text-sm w-14 text-center my-2 rounded-sm">
                Medical
              </p>
              <p className="font-bold mt-4">
                Aid for necessary items to help our country
              </p>
              <p className="text-sm mb-8 mt-1">Aksi Cepat Tanggap</p>
              <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div
                  className="h-full bg-tosca absolute"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <p className="text-sm">Raised</p>
                  <p className="font-bold text-tosca">IDR 30.000.000</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">Goal</p>
                  <p>IDR 50.000.000</p>
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
            <i class="far fa-credit-card text-5xl"></i>
            <p>Credit Card</p>
          </div>
          <div
            onClick={handleBank}
            className={`inline-block py-4 px-10 hover:bg-blue-200  rounded text-center mr-10 ${
              bank ? "bg-blue-200" : null
            }`}
          >
            <i class="fas fa-university text-5xl"></i>
            <p>Bank Transfer</p>
          </div>
        </div>
        {creditCard ? (
          <div className="grid grid-cols-10 gap-10 mb-10">
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
          <div className="bg-gray-100 p-6 w-1/3 rounded">
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
          className={`uppercase  float-right mb-16 ${
            creditCard || bank
              ? "btn-red"
              : "bg-gray-200 px-8 py-2 mt-2 focus:outline-none"
          }`}
        >
          donate
        </button>
      </div>
    </div>
  );
}
