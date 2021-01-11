import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function JumbotronCampaignDetail(props) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className=" inline-block text-3xl font-medium my-4">
          Aid for necessary item to help our country
        </h2>
        <div
          className="relative inline-block top-5 right-8"
          onClick={() => setDropdown(!dropdown)}
        >
          <i className="fas fa-cog text-2xl "></i>
          <i className="fas fa-caret-down text-xl mx-2"></i>
          {dropdown ? (
            <div className="absolute w-max p-2 -right-0 rounded-md z-10 bg-white shadow">
              <p className="campaign-text-setting text-md">Edit</p>
              <p className="campaign-text-setting text-md">Close Campaign</p>
              <p className="campaign-text-setting text-md">Delete</p>
            </div>
          ) : null}
        </div>
      </div>
      <div className="grid grid-cols-10 gap-0">
        <img
          className="w-full h-full rounded col-span-6"
          src="https://cdn-radar.jawapos.com/thumbs/l/photos/2018/12/13/pemukiman-kumuh-di-sempadan-sungai-jagir-surabaya_c_1_405.jpg"
          alt="Campaign Image"
        />
        <div className="w-10/12 rounded border-2 border-gray-200 ml-12 p-5 col-span-4">
          <p className="text-red-600 text-2xl">IDR 30.000000</p>
          <p className="text-md text-gray-400">IDR 10.000.000 remaining</p>
          <ProgressBar />
          <p>from IDR 50.000.000 goal</p>
          <div className="fundraiser-profil grid grid-cols-12">
            <img
              src="https://www.diriya.lk/wp-content/uploads/2019/10/6216457030_2cf0aff09d_z.jpg"
              alt="fundraiser-image"
              className="w-12 h-12 inline-block border border-gray-500 rounded-md col-span-2"
            />
            <div className="inline-block col-span-10">
              <p className="font-medium">Dian Endang</p>
              <p className="text-gray-400">Fundraiser</p>
            </div>
          </div>
          <div className="grid grid-cols-3 mt-5 text-center justify-items-center">
            <div className="col-span-1 w-24 h-24 border-2 rounded-md border-gray-100 shadow-md p-3">
              <p className="text-tosca text-3xl">12</p>
              <p>days left</p>
            </div>
            <div className="col-span-1 w-24 h-24 border-2 rounded-md border-gray-100 shadow-md p-3">
              <p className="text-tosca text-3xl">132</p>
              <p>donations</p>
            </div>
            <div className="col-span-1 w-24 h-24 border-2 rounded-md border-gray-100 shadow-md p-3">
              <p className="text-tosca text-3xl">232</p>
              <p>share</p>
            </div>
          </div>
          <div className="grid grid-cols-1 my-2">
            <button className="btn-outline-red uppercase border-tosca">
              Share
            </button>
            <button
              onClick={props.toggleHandler}
              className="btn-outline-red uppercase"
            >
              {props.role == "fundraiser" ? "New Progress " : "Donate"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
