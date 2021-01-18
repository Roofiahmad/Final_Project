import React, { useEffect, useState } from 'react';
import disability from '../assets/disability-image.png';
import disaster from '../assets/disaster-image.png';
import education from '../assets/education-image.png';
import environment from '../assets/environment-image.png';
import humanity from '../assets/humanity-image.png';
import medical from '../assets/medical-image.png';
import religious from '../assets/religious-image.png';
import sociopreneur from '../assets/sociopreneur-image.png';
import arrow from '../assets/arrow.png';
import { Link } from 'react-router-dom';


const DiscoverJumbotron = (props) => {
    let prop = props.category;
    // console.log(`ini jumbotron ${prop}`)
    let jumbotron = {
        'disability': disability,
        'disaster': disaster,
        'education': education,
        'environment': environment,
        'humanity': humanity,
        'medical': medical,
        'religious': religious,
        'sociopreneur': sociopreneur
    }
    
    return (
        <div className="w-10/12 mt-16 mb-32 mx-auto">
            <div className="w-full flex flex-wrap gap-5 items-center lg:flex-nowrap justify-between">
                <div className="mb-6">
                <div className="">
                    <p className="border border-solid border-rose px-2 py-1 text-rose text-sm w-max text-center my-2 rounded-sm mb-4">{props.category[0].toUpperCase()+props.category.substring(1).toLowerCase()}</p>
                    <h1 className="font-bold text-3xl mb-6">Your little kindness is precious</h1>
                    <Link to="/discoverall" className="font-bold flex"><img src={arrow} alt="" width="20" className="mr-2"/>See all categories</Link>
                </div>
                </div>
                <div className="right-0">
                <img src={jumbotron[prop]} alt={prop} className="w-96 shadow-md rounded"/>
                </div>
            </div>
        </div>
    )
}

export default DiscoverJumbotron;