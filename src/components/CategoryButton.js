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
        // <div className="container">
        //     <h1 className="font-bold text-2xl">Find Cause you truly care about</h1>
        //     <div className="grid grid-cols-4 gap-3 mx-auto w-4/5 items-end mt-10 md:grid-cols-8">
        //         <div className="text-center shadow-md p-2 h-30">
        //             <img src={disability} alt="disability" width="50" className="mx-auto"/>
        //             <p className="pt-2 text-xs text-gray-600">Disability</p>
        //         </div>
        //         <div className="text-center shadow-md p-2">
        //             <img src={disaster} alt="disaster" width="50" className="mx-auto"/>
        //             <p className="pt-2 text-xs">Disaster</p>
        //         </div>
        //         <div className="text-center shadow-md p-2">
        //             <img src={education} alt="education" width="50" className="mx-auto"/>
        //             <p className="pt-2 text-xs">Education</p>
        //         </div>
        //         <div className="text-center shadow-md p-2">
        //             <img src={environment} alt="environment" width="50" className="mx-auto"/>
        //             <p className="pt-2 text-xs">Environment</p>
        //         </div>
        //         <div className="text-center shadow-md p-2">
        //             <img src={humanity} alt="humanity" width="50" className="mx-auto"/>
        //             <p className="pt-2 text-xs">Humanity</p>
        //         </div>
        //         <div className="text-center shadow-md p-2">
        //             <img src={medical} alt="medical" width="50" className="mx-auto"/>
        //             <p className="pt-2 text-xs">Medical</p>
        //         </div>
        //         <div className="text-center shadow-md p-2">
        //             <img src={religious} alt="religious" width="50" className="mx-auto"/>
        //             <p className="pt-2 text-xs">Religious</p>
        //         </div>
        //         <div className="text-center shadow-md p-2">
        //             <img src={sociopreneur} alt="sociopreneur" width="50" className="mx-auto"/>
        //             <p className="pt-2 text-xs">Sociopreneur</p>
        //         </div>
        //     </div>
        // </div>



        <div className="w-10/12 mx-auto mb-32">
            <h1 className="font-bold text-2xl">Find Cause you truly care about</h1>
            <div className="flex flex-wrap justify-center items-end mx-auto mt-14 w-11/12 md:w-8/12">
                <div className="flex-shrink-0 text-center flex shadow-md h-24 w-24 m-1">
                    <a href="#" className="my-auto mx-auto">
                        <img src={disability} alt="disability" width="40" className="mx-auto"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Disability</p>
                    </a>
                </div>
                <div className="flex-shrink-0 text-center flex shadow-md h-24 w-24 m-1">
                    <a href="#" className="my-auto mx-auto">
                        <img src={disaster} alt="disaster" width="50" className="mx-auto"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Disaster</p>
                    </a>
                </div>
                <div className="flex-shrink-0 text-center flex shadow-md h-24 w-24 m-1">
                    <a href="#" className="my-auto mx-auto">
                        <img src={education} alt="education" width="50" className="mx-auto"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Education</p>
                    </a>
                </div>
                <div className="flex-shrink-0 text-center flex shadow-md h-24 w-24 m-1">
                    <a href="#" className="my-auto mx-auto">
                        <img src={environment} alt="environment" width="40" className="mx-auto"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Environment</p>
                    </a>
                </div>
                <div className="flex-shrink-0 text-center flex shadow-md h-24 w-24 m-1">
                    <a href="#" className="my-auto mx-auto">
                        <img src={humanity} alt="humanity" width="40" className="mx-auto"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Humanity</p>
                    </a>
                </div>
                <div className="flex-shrink-0 text-center flex shadow-md h-24 w-24 m-1">
                    <a href="#" className="my-auto mx-auto">
                        <img src={medical} alt="medical" width="40" className="mx-auto"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Medical</p>
                    </a>
                </div>
                <div className="flex-shrink-0 text-center flex shadow-md h-24 w-24 m-1">
                    <a href="#" className="my-auto mx-auto">
                        <img src={religious} alt="religious" width="40" className="mx-auto"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Religious</p>
                    </a>
                </div>
                <div className="flex-shrink-0 text-center flex shadow-md h-24 w-24 m-1">
                    <a href="#" className="my-auto mx-auto">
                        <img src={sociopreneur} alt="sociopreneur" width="40" className="mx-auto"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Sociopreneur</p>
                    </a>
                </div>
            </div>
        </div>
        )
    }

    export default CategoryButton;