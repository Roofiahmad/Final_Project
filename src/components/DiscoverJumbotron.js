import React from 'react';
import jumbotron from '../assets/jumbotron.png';
import arrow from '../assets/arrow.png';
import { Link } from 'react-router-dom';


const DiscoverJumbotron = () => {
    return (
        <div className="w-10/12 mt-16 mb-32 mx-auto">
           <div className="w-full flex flex-wrap gap-5 lg:flex-nowrap justify-between">
               <div className="mb-6">
                <div className="my-0 sm:my-auto">
                  <p className="border border-solid border-rose px-2 text-rose text-sm w-max text-center my-2 rounded-sm mb-4">Medical</p>
                  <h1 className="font-bold text-3xl mb-6">Your little kindness is precious</h1>
                  <a href="/discoverall" className="font-bold flex"><img src={arrow} alt="" width="20" className="mr-2"/>See all categories </a>
                </div>
               </div>
               <div className="right-0">
                <img src={jumbotron} alt=""/>
               </div>
           </div>
        </div>
    )
}

export default DiscoverJumbotron;