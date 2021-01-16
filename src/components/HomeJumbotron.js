import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function HomeJumbotron() {
    return (
        <div>
            <Carousel autoPlay>
            <div className=" bg-jumbotron1 lg:h-screen sm:h-full">
                <div className=" w-1/2 lg:pt-60 sm:pt-32 sm:mx-5 lg:mx-10">
                <div className=" text-tosca sm:text-left ">
                    <h1 className="lg:text-5xl sm:text-2xl">#EducationForEveryone</h1>
                    <h1 className="text-xs font-semibold lg:text-xl my-2">Proper education is not just a dream</h1>
                </div>
                <div className="my-8 flex lg:mx-0 lg:flex-row sm:flex-col sm:gap-2 sm:pb-10">
                <button className="text-white bg-rose rounded-full lg:text-xl sm:text-base font-medium focus:outline-none focus:text-gray-500 w-24 lg:py-1 lg:px-7 lg:w-36 sm:w-3/4">DONATE</button>
                   <button className="text-rose bg-white rounded-full lg:text-xl sm:text-base border-2 border-rose font-medium focus:outline-none w-32 lg:w-auto focus:text-gray-500 lg:py-1 lg:px-7 lg:mx-5 sm:w-3/4">CREATE CAMPAIGN</button>
                </div>
                </div>
            </div>
            <div className=" bg-jumbotron3 lg:h-full sm:h-full">
            <div className=" w-1/2 lg:pt-60 sm:pt-32 sm:mx-5 lg:mx-10">
                <div className=" text-tosca sm:text-left">
                    <h1 className="lg:text-5xl sm:text-2xl">#HealthCareForEveryone</h1>
                    <h1 className="text-xs font-semibold lg:text-xl my-2">Help them to get speedy recovery</h1>
                </div>
                <div className="my-8 flex lg:mx-0 lg:flex-row sm:flex-col sm:gap-2 sm:pb-10">
                   <button className="text-white bg-rose rounded-full lg:text-xl sm:text-base font-medium focus:outline-none focus:text-gray-500 w-24 lg:py-1 lg:px-7 lg:w-36 sm:w-3/4">DONATE</button>
                   <button className="text-rose bg-white rounded-full lg:text-xl sm:text-base border-2 border-rose font-medium focus:outline-none w-32 lg:w-auto focus:text-gray-500 lg:py-1 lg:px-7 lg:mx-5 sm:w-3/4">CREATE CAMPAIGN</button>
                </div>
                </div>
            </div>
            <div className=" bg-jumbotron3 lg:h-full sm:h-full ">
            <div className=" w-1/2 lg:pt-60 sm:pt-32 sm:mx-5 lg:mx-10">
                <div className=" text-tosca sm:text-left ">
                    <h1 className="lg:text-5xl sm:text-2xl">#CleanAirForEveryone</h1>
                    <h1 className="text-xs font-semibold lg:text-xl my-2">Together to solve environmental problem</h1>
                </div>
                <div className="my-8 flex lg:mx-0 lg:flex-row sm:flex-col sm:gap-2 sm:pb-10">
                   <button className="text-white bg-rose rounded-full lg:text-xl sm:text-base font-medium focus:outline-none focus:text-gray-500 w-24 lg:py-1 lg:px-7 lg:w-36 sm:w-3/4">DONATE</button>
                   <button className="text-rose bg-white rounded-full lg:text-xl sm:text-base border-2 border-rose font-medium focus:outline-none w-32 lg:w-auto focus:text-gray-500 lg:py-1 lg:px-7 lg:mx-5 sm:w-3/4">CREATE CAMPAIGN</button>
                </div>
                </div> 
            </div>
            </Carousel>
        </div>
    )
}

export default HomeJumbotron;
