import React from 'react';
import card from '../assets/card.png';


const MostUrgent = () => {
    return (
        <div className="container mt-24 mb-5">
           <h4 className="font-bold underline mb-4">Newest</h4>
           <div className="grid grid-cols-3 gap-16 justify-between">
               <div className="shadow-md">
                   <img src={card} alt=""/>
                   <div className="w-5/6 mx-auto pb-4 pt-2">
                    <p className="border border-solid border-red-600 text-red-800 text-sm w-14 text-center my-2 rounded-sm">Medical</p>
                    <p className="font-bold mt-4">Aid for necessary items to help our country</p>
                    <p className="text-sm mb-8 mt-1">Aksi Cepat Tanggap</p>                   
                    <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
                        <div className="w-full h-full bg-gray-200 absolute"></div>
                        <div className="h-full bg-blue-500 absolute" style={{width: "70%"}}></div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <p className="text-sm">Raised</p>
                            <p className="font-bold text-blue-700">IDR 30.000.000</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm">Goal</p>
                            <p className="font-bold">IDR 50.000.000</p>
                        </div>
                    </div>
                   </div>
               </div> 
               <div className="shadow-md">
                   <img src={card} alt=""/>
                   <div className="w-5/6 mx-auto pb-4 pt-2">
                    <p className="border border-solid border-red-600 text-red-800 text-sm w-14 text-center my-2 rounded-sm">Medical</p>
                    <p className="font-bold mt-4">Aid for necessary items to help our country</p>
                    <p className="text-sm mb-8 mt-1">Aksi Cepat Tanggap</p>                   
                    <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
                        <div className="w-full h-full bg-gray-200 absolute"></div>
                        <div className="h-full bg-blue-500 absolute" style={{width: "70%"}}></div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <p className="text-sm">Raised</p>
                            <p className="font-bold text-blue-700">IDR 30.000.000</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm">Goal</p>
                            <p className="font-bold">IDR 50.000.000</p>
                        </div>
                    </div>
                   </div>
               </div> 
               <div className="shadow-md">
                   <img src={card} alt=""/>
                   <div className="w-5/6 mx-auto pb-4 pt-2">
                    <p className="border border-solid border-red-600 text-red-800 text-sm w-14 text-center my-2 rounded-sm">Medical</p>
                    <p className="font-bold mt-4">Aid for necessary items to help our country</p>
                    <p className="text-sm mb-8 mt-1">Aksi Cepat Tanggap</p>                   
                    <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
                        <div className="w-full h-full bg-gray-200 absolute"></div>
                        <div className="h-full bg-blue-500 absolute" style={{width: "70%"}}></div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <p className="text-sm">Raised</p>
                            <p className="font-bold text-blue-700">IDR 30.000.000</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm">Goal</p>
                            <p className="font-bold">IDR 50.000.000</p>
                        </div>
                    </div>
                   </div>
               </div>               
           </div>
        </div>
    )
}

export default MostUrgent;