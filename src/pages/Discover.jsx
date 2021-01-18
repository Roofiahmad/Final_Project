import React, { useEffect, useState } from 'react'
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
        {category: 'Disability', image: disability},
        {category: 'Disaster', image: disaster},
        {category: 'Education', image: education},
        {category: 'Environment', image: environment},
        {category: 'Humanity', image: humanity},
        {category: 'Medical', image: medical},
        {category: 'Religious', image: religious},
        {category: 'Sociopreneur', image: sociopreneur}
    ];
    
    const HandleClick = (inputCategory) => {
        setCategory(inputCategory)
        for (const category in ListCategory) {
            setCampaignCategory(`https://talikasih.kuyrek.com:3001/campaign/category?category=${inputCategory}&limit=3`)
        }
    }

    return (
        <div className="mt-6 fromtop-animation">
            <div className="mx-auto mt-16 mb-36 w-10/12">
                <h1 className="font-bold text-2xl">Find Cause you truly care about</h1>
                <div className="flex flex-wrap justify-center items-end mx-auto mt-14 w-full md:w-10/12">
            {
                ListCategory.map((button, index) => {
                    return (
                        <div key={index} id={button.category} onClick={(e) => {HandleClick(e.target.id)}} className="flex-shrink-0 text-center flex shadow-md h-20 w-20 m-1 hover:bg-blue-100 active:bg-blue-100 cursor-pointer md:h-24 md:w-24">
                            <Link to={`discoverbycategory/${button.category}`} className="m-auto">
                                <img src={button.image} alt="disability" className="mx-auto h-8"/>
                                <p className="pt-2 pb-0 text-xs text-gray-700">{button.category}</p>
                            </Link>
                        </div>
                    )
                })
            }
            
                </div>
            </div>
            <Newest category={ListCategory}/>
            <MostUrgent />
            <GainedMomentum />
        </div>
    )
}

export default Discover;