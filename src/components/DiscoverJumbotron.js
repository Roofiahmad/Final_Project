import React from 'react';
import jumbotron from '../assets/jumbotron.png';


const DiscoverJumbotron = () => {
    return (
        <div className="container mt-14 mb-32">
           <div className="grid grid-cols-1 gap-5 justify-between md:gap-10 sm:grid-cols-3">
               <div className="grid col-span-2 mb-6">
                <div className="my-auto">
                  <p className="border border-solid border-red-600 text-red-800 text-sm w-14 text-center my-2 rounded-sm">Medical</p>
                  <h1 className="font-bold text-3xl mb-6">Your little kindness is precious</h1>
                  <a href="#" className="font-bold"><span className="text-xl font-bold">&larr;</span> See all categories </a>
                </div>
               </div>
               <div className="sm:ml-auto ml-0">
                <img src={jumbotron} alt=""/>

               </div>
           </div>
        </div>
    )
}

export default DiscoverJumbotron;