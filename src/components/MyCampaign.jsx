import React from 'react';
import card2 from '../assets/card.png';

const MyCampaign = () => {
  return (
    <div className="w-10/12 mt-96 mb-36 mx-auto border border-solid p-5">
      <h2 className="font-bold text-xl mb-5">My Campaign (23)</h2>
      <div className="grid grid-cols-1 gap-10 w-9/12 mx-auto mb-12 lg:grid-cols-2 w-11/12">
        <div className="shadow-md max-w-md mx-auto">
          <img src={card2} alt="" />
          <div className="w-5/6 mx-auto pb-4 pt-2">
            <p className="border border-solid border-red-600 text-red-800 text-sm w-14 text-center my-2 rounded-sm">Medical</p>
            <a href="#" className="font-bold mt-4">Aid for necessary items to help our country</a>
            <p className="text-sm mb-8 mt-1">Aksi Cepat Tanggap</p>
            <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
              <div className="w-full h-full bg-gray-200 absolute"></div>
              <div className="h-full bg-tosca absolute" style={{ width: "70%" }}></div>
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
        <div className="shadow-md max-w-md mx-auto">
          <img src={card2} alt="" />
          <div className="w-5/6 mx-auto pb-4 pt-2">
            <p className="border border-solid border-red-600 text-red-800 text-sm w-14 text-center my-2 rounded-sm">Medical</p>
            <a href="#" className="font-bold mt-4">Aid for necessary items to help our country</a>
            <p className="text-sm mb-8 mt-1">Aksi Cepat Tanggap</p>
            <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
              <div className="w-full h-full bg-gray-200 absolute"></div>
              <div className="h-full bg-tosca absolute" style={{ width: "70%" }}></div>
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
      <div className="w-max my-8 mx-auto hover:bg-blue-100">
        <button className="Py-2 px-5 border-2 border-blue-400 text-blue-400 font-bold">LOAD MORE</button>
      </div>
    </div >
  )
}

export default MyCampaign;