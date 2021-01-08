import React from 'react';
import disability from '../assets/disability.png';
import disaster from '../assets/disaster.png';
import education from '../assets/education.png';
import environment from '../assets/environment.png';
import humanity from '../assets/humanity.png';
import medical from '../assets/medical.png';
import religious from '../assets/religious.png';
import sociopreneur from '../assets/sociopreneur.png';

const CategoryButton = () => {
    return (
        <div className="container">
            <h1 className="font-bold text-xl">Find Cause you truly care about</h1>
            <div className="grid grid-cols-8 gap-3 mx-auto w-4/5 items-end mt-10">
                <div className="text-center shadow-md p-2 h-30">
                    <img src={disability} alt="disability" width="50" className="mx-auto"/>
                    <p className="pt-2 text-xs text-gray-600">Disability</p>
                </div>
                <div className="text-center shadow-md p-2">
                    <img src={disaster} alt="disaster" width="50" className="mx-auto"/>
                    <p className="pt-2 text-xs">Disaster</p>
                </div>
                <div className="text-center shadow-md p-2">
                    <img src={education} alt="education" width="50" className="mx-auto"/>
                    <p className="pt-2 text-xs">Education</p>
                </div>
                <div className="text-center shadow-md p-2">
                    <img src={environment} alt="environment" width="50" className="mx-auto"/>
                    <p className="pt-2 text-xs">Environment</p>
                </div>
                <div className="text-center shadow-md p-2">
                    <img src={humanity} alt="humanity" width="50" className="mx-auto"/>
                    <p className="pt-2 text-xs">Humanity</p>
                </div>
                <div className="text-center shadow-md p-2">
                    <img src={medical} alt="medical" width="50" className="mx-auto"/>
                    <p className="pt-2 text-xs">Medical</p>
                </div>
                <div className="text-center shadow-md p-2">
                    <img src={religious} alt="religious" width="50" className="mx-auto"/>
                    <p className="pt-2 text-xs">Religious</p>
                </div>
                <div className="text-center shadow-md p-2">
                    <img src={sociopreneur} alt="sociopreneur" width="50" className="mx-auto"/>
                    <p className="pt-2 text-xs">Sociopreneur</p>
                </div>
            </div>
        </div>
    )
}

export default CategoryButton;