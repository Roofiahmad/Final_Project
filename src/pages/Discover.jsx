import React, { useState } from 'react'
// import CategoryButton from "../components/CategoryButton";
import Newest from "../components/Newest";
import MostUrgent from "../components/MostUrgent";
import GainedMomentum from "../components/GainedMomentum";
import disability from '../assets/disability.png';
import disaster from '../assets/disaster.png';
import education from '../assets/education.png';
import environment from '../assets/environment.png';
import humanity from '../assets/humanity.png';
import medical from '../assets/medical.png';
import religious from '../assets/religious.png';
import sociopreneur from '../assets/sociopreneur.png';
import { Link } from 'react-router-dom';


const Discover = () => {
    const [category, setCategory] = useState('');
    const [campaignCategory, setCampaignCategory] = useState('');

    const ListCategory = [
        {category: 'disability', image: disability},
        {category: 'disaster', image: disaster},
        {category: 'education', image: education},
        {category: 'environment', image: environment},
        {category: 'humanity', image: humanity},
        {category: 'medical', image: medical},
        {category: 'religious', image: religious},
        {category: 'sociopreneur', image: sociopreneur}
    ];
    

    return (
        <div className="mt-10 lg:mt-16 mb-10 lg:mb-16 fromtop-animation">
            <div className="mx-auto w-10/12">
                <h1 className="font-bold text-2xl">Find Cause you truly care about</h1>
                <div className="flex flex-wrap justify-center items-end mx-auto mt-14 w-full md:w-10/12">
            {
                ListCategory.map((button, index) => {
                    return (
                        <Link to={`discoverbycategory/${button.category}`}>
                            <div key={index} id={button.category} className="flex-shrink-0 text-center flex shadow-md h-20 w-20 m-1 hover:bg-blue-100 active:bg-blue-100 cursor-pointer md:h-24 md:w-24">
                                <div className="m-auto">
                                    <img src={button.image} alt="disability" className="mx-auto h-8"/>
                                    <p className="pt-2 pb-0 text-xs text-gray-700">{button.category[0].toUpperCase()+button.category.substring(1).toLowerCase()}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
            
                </div>
            </div>
            <Newest />
            <MostUrgent />
            <GainedMomentum />
        </div>
    )
}

export default Discover;