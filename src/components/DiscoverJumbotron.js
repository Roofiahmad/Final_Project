import React from 'react';
import jumbotron from '../assets/jumbotron.png';
import arrow from '../assets/arrow.png';
import { Link } from 'react-router-dom';


const DiscoverJumbotron = () => {
    return (
        <div className="w-10/12 mt-20 mb-14 mx-auto">
           <div className="grid grid-cols-1 gap-5 justify-between md:gap-10 sm:grid-cols-3">
               <div className="grid col-span-2 mb-6">
                <div className="my-auto">
                  <p className="border border-solid border-red-600 text-red-800 text-sm w-14 text-center my-2 rounded-sm">Medical</p>
                  <h1 className="font-bold text-3xl mb-6">Your little kindness is precious</h1>
                  <a href="/discoverall" className="font-bold flex"><img src={arrow} alt="" width="20" className="mr-2"/>See all categories </a>
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