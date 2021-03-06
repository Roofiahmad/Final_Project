import React from 'react';
import disability from '../assets/disability.png';
import disaster from '../assets/disaster.png';
import education from '../assets/education.png';
import environment from '../assets/environment.png';
import humanity from '../assets/humanity.png';
import medical from '../assets/medical.png';
import religious from '../assets/religious.png';
import sociopreneur from '../assets/sociopreneur.png';
import { Link } from 'react-router-dom';

const CategoryButton = (props) => {
    return (
        <div className="mx-auto w-10/12 mt-10 lg:mt-16 mb-10 lg:mb-16">
            <h1 className="font-bold text-2xl">Filter By Categories</h1>
            <div className="flex flex-wrap justify-around mx-auto mt-10 w-full">
                <div onClick={()=>props.filterByCategory("Disability")} className="item-clicked flex-shrink-0 text-center flex shadow-md h-20 w-20 m-1 hover:bg-blue-100 active:bg-blue-100 cursor-pointer md:h-24 md:w-24">
                    <div className="m-auto">
                        <img src={disability} alt="disability" className="mx-auto h-8"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Disability</p>
                    </div>
                </div>
                <div onClick={()=>props.filterByCategory("Disaster")} className="item-clicked flex-shrink-0 text-center flex shadow-md h-20 w-20 m-1 hover:bg-blue-100 cursor-pointer md:h-24 md:w-24">
                    <div  className="m-auto">
                        <img src={disaster} alt="disaster" className="mx-auto h-8"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Disaster</p>
                    </div>
                </div>
                <div onClick={()=>props.filterByCategory("Education")} className="item-clicked flex-shrink-0 text-center flex shadow-md h-20 w-20 m-1 hover:bg-blue-100 cursor-pointer md:h-24 md:w-24">
                    <div  className="m-auto">
                        <img src={education} alt="education" className="mx-auto h-8"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Education</p>
                    </div>
                </div>
                <div onClick={()=>props.filterByCategory("Environment")} className="item-clicked flex-shrink-0 text-center flex shadow-md h-20 w-20 m-1 hover:bg-blue-100 cursor-pointer md:h-24 md:w-24">
                    <div  className="m-auto">
                        <img src={environment} alt="environment" className="mx-auto h-8"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Environment</p>
                    </div>
                </div>
                <div onClick={()=>props.filterByCategory("Humanity")} className="item-clicked flex-shrink-0 text-center flex shadow-md h-20 w-20 m-1 hover:bg-blue-100 cursor-pointer md:h-24 md:w-24">
                    <div  className="m-auto">
                        <img src={humanity} alt="humanity" className="mx-auto h-8"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Humanity</p>
                    </div>
                </div>
                <div onClick={()=>props.filterByCategory("Medical")} className="item-clicked flex-shrink-0 text-center flex shadow-md h-20 w-20 m-1 hover:bg-blue-100 cursor-pointer md:h-24 md:w-24">
                    <div  className="m-auto">
                        <img src={medical} alt="medical" className="mx-auto h-8"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Medical</p>
                    </div>
                </div>
                <div onClick={()=>props.filterByCategory("Religious")} className="item-clicked flex-shrink-0 text-center flex shadow-md h-20 w-20 m-1 hover:bg-blue-100 cursor-pointer md:h-24 md:w-24">
                    <div  className="m-auto">
                        <img src={religious} alt="religious" className="mx-auto h-8"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Religious</p>
                    </div>
                </div>
                <div onClick={()=>props.filterByCategory("Sociopreneur")} className="item-clicked flex-shrink-0 text-center flex shadow-md h-20 w-20 m-1 hover:bg-blue-100 cursor-pointer md:h-24 md:w-24">
                    <div className="m-auto">
                        <img src={sociopreneur} alt="sociopreneur" className="mx-auto h-8"/>
                        <p className="pt-2 pb-0 text-xs text-gray-700">Sociopreneur</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    export default CategoryButton;



    // <div className="flex-shrink-0 text-center flex shadow-md h-20 w-20 m-1 hover:bg-blue-100 cursor-pointer md:h-24 md:w-24">
    //                 <a href="#" className="m-auto">
    //                     <img src={disaster} alt="disaster" className="mx-auto h-8"/>
    //                     <p className="pt-2 pb-0 text-xs text-gray-700">Disaster</p>
    //                 </a>
    //             </div>
    //             <div className="flex-shrink-0 text-center flex shadow-md h-20 w-20 m-1 hover:bg-blue-100 cursor-pointer md:h-24 md:w-24">
    //                 <a href="#" className="m-auto">
    //                     <img src={education} alt="education" className="mx-auto h-8"/>
    //                     <p className="pt-2 pb-0 text-xs text-gray-700">Education</p>
    //                 </a>
    //             </div>
    //             <div className="flex-shrink-0 text-center flex shadow-md h-20 w-20 m-1 hover:bg-blue-100 cursor-pointer md:h-24 md:w-24">
    //                 <a href="#" className="m-auto">
    //                     <img src={environment} alt="environment" className="mx-auto h-8"/>
    //                     <p className="pt-2 pb-0 text-xs text-gray-700">Environment</p>
    //                 </a>
    //             </div>
    //             <div className="flex-shrink-0 text-center flex shadow-md h-20 w-20 m-1 hover:bg-blue-100 cursor-pointer md:h-24 md:w-24">
    //                 <a href="#" className="m-auto">
    //                     <img src={humanity} alt="humanity" className="mx-auto h-8"/>
    //                     <p className="pt-2 pb-0 text-xs text-gray-700">Humanity</p>
    //                 </a>
    //             </div>
    //             <div className="flex-shrink-0 text-center flex shadow-md h-20 w-20 m-1 hover:bg-blue-100 cursor-pointer md:h-24 md:w-24">
    //                 <a href="#" className="m-auto">
    //                     <img src={medical} alt="medical" className="mx-auto h-8"/>
    //                     <p className="pt-2 pb-0 text-xs text-gray-700">Medical</p>
    //                 </a>
    //             </div>
    //             <div className="flex-shrink-0 text-center flex shadow-md h-20 w-20 m-1 hover:bg-blue-100 cursor-pointer md:h-24 md:w-24">
    //                 <a href="#" className="m-auto">
    //                     <img src={religious} alt="religious" className="mx-auto h-8"/>
    //                     <p className="pt-2 pb-0 text-xs text-gray-700">Religious</p>
    //                 </a>
    //             </div>
    //             <div className="flex-shrink-0 text-center flex shadow-md h-20 w-20 m-1 hover:bg-blue-100 cursor-pointer md:h-24 md:w-24">
    //                 <a href="#" className="m-auto">
    //                     <img src={sociopreneur} alt="sociopreneur" className="mx-auto h-8"/>
    //                     <p className="pt-2 pb-0 text-xs text-gray-700">Sociopreneur</p>
    //                 </a>
    //             </div>