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
        <div className="w-10/12 mx-auto mb-32">
            <h1 className="font-bold text-2xl">Find Cause you truly care about</h1>
            <div className="flex flex-wrap justify-center items-end mx-auto mt-14 w-11/12 md:w-10/12">
                <div className="flex-shrink-0 text-center flex shadow-md h-24 w-24 m-1">
                    <a href="#" className="my-auto mx-auto">
                        <img src={disability} alt="disability" className="mx-auto h-8"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Disability</p>
                    </a>
                </div>
                <div className="flex-shrink-0 text-center flex shadow-md h-24 w-24 m-1">
                    <a href="#" className="my-auto mx-auto">
                        <img src={disaster} alt="disaster" className="mx-auto h-8"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Disaster</p>
                    </a>
                </div>
                <div className="flex-shrink-0 text-center flex shadow-md h-24 w-24 m-1">
                    <a href="#" className="my-auto mx-auto">
                        <img src={education} alt="education" className="mx-auto h-8"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Education</p>
                    </a>
                </div>
                <div className="flex-shrink-0 text-center flex shadow-md h-24 w-24 m-1">
                    <a href="#" className="my-auto mx-auto">
                        <img src={environment} alt="environment" className="mx-auto h-8"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Environment</p>
                    </a>
                </div>
                <div className="flex-shrink-0 text-center flex shadow-md h-24 w-24 m-1">
                    <a href="#" className="my-auto mx-auto">
                        <img src={humanity} alt="humanity" className="mx-auto h-8"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Humanity</p>
                    </a>
                </div>
                <div className="flex-shrink-0 text-center flex shadow-md h-24 w-24 m-1">
                    <a href="#" className="my-auto mx-auto">
                        <img src={medical} alt="medical" className="mx-auto h-8"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Medical</p>
                    </a>
                </div>
                <div className="flex-shrink-0 text-center flex shadow-md h-24 w-24 m-1">
                    <a href="#" className="my-auto mx-auto">
                        <img src={religious} alt="religious" className="mx-auto h-8"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Religious</p>
                    </a>
                </div>
                <div className="flex-shrink-0 text-center flex shadow-md h-24 w-24 m-1">
                    <a href="#" className="my-auto mx-auto">
                        <img src={sociopreneur} alt="sociopreneur" className="mx-auto h-8"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Sociopreneur</p>
                    </a>
                </div>
            </div>
        </div>
        )
    }

    export default CategoryButton;