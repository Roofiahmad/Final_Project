import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'

function HomeJumbotron() {
    return (
        <div>
            <Carousel autoPlay>
            <div className=" bg-jumbotron1 lg:h-screen h-full">
                <div className=" w-1/2 lg:pt-60 pt-5 mx-2 lg:mx-10">
                    <div className=" text-tosca text-left ">
                        <h1 className="lg:text-4xl lg:font-medium font-bold text-lg">#EducationForEveryone</h1>
                        <h1 className="text-sm lg:font-semibold font-bold lg:text-xl my-2">Proper education is not just a dream</h1>
                    </div>
                        <div className="my-8 lg:flex lg:mx-0 lg:flex-row flex-col gap-2 pb-10">
                            <Link className="text-white lg:text-xl text-base font-medium lg:py-1" to="/discoverall">
                                <button className="text-white bg-rose rounded-full lg:text-xl text-base font-medium focus:outline-none focus:text-gray-500 w-24 lg:py-1 lg:px-7 lg:w-36 w-3/4 hidden lg:block">DONATE</button>
                            </Link>
                                <button className="text-rose bg-white rounded-full lg:text-xl text-base border-2 border-rose font-medium focus:outline-none w-32 lg:w-auto focus:text-gray-500 lg:py-1 lg:px-7 lg:mx-5 w-3/4 hidden lg:block">CREATE CAMPAIGN</button>
                        </div>
                </div> 
            </div>
            <div className=" bg-jumbotron2 lg:h-screen h-full">
                <div className=" w-1/2 lg:pt-60 pt-5 mx-2 lg:mx-10">
                    <div className=" text-tosca text-left ">
                        <h1 className="lg:text-4xl lg:font-medium font-bold text-lg">#HealthCareForEveryone</h1>
                        <h1 className="text-sm lg:font-semibold font-bold lg:text-xl my-2">Help them to get speedy recovery</h1>
                    </div>
                        <div className="my-8 lg:flex lg:mx-0 lg:flex-row flex-col gap-2 pb-10">
                            <Link className="text-white lg:text-xl text-base font-medium lg:py-1" to="/discoverall">
                                <button className="text-white bg-rose rounded-full lg:text-xl text-base font-medium focus:outline-none focus:text-gray-500 w-24 lg:py-1 lg:px-7 lg:w-36 w-3/4 hidden lg:block">DONATE</button>
                            </Link>
                                <button className="text-rose bg-white rounded-full lg:text-xl text-base border-2 border-rose font-medium focus:outline-none w-32 lg:w-auto focus:text-gray-500 lg:py-1 lg:px-7 lg:mx-5 w-3/4 hidden lg:block">CREATE CAMPAIGN</button>
                        </div>
                </div> 
            </div>
            <div className=" bg-jumbotron3 lg:h-screen h-full">
                <div className=" w-1/2 lg:pt-60 pt-5 mx-2 lg:mx-10">
                    <div className=" text-tosca text-left ">
                        <h1 className="lg:text-4xl lg:font-medium font-bold text-lg">#CleanAirForEveryone</h1>
                        <h1 className="text-sm lg:font-semibold font-bold lg:text-xl my-2">Together to solve environmental problem</h1>
                    </div>
                        <div className="my-8 lg:flex lg:mx-0 lg:flex-row flex-col gap-2 pb-10">
                            <Link className="text-white lg:text-xl text-base font-medium lg:py-1" to="/discoverall">
                                <button className="text-white bg-rose rounded-full lg:text-xl text-base font-medium focus:outline-none focus:text-gray-500 w-24 lg:py-1 lg:px-7 lg:w-36 w-3/4 hidden lg:block">DONATE</button>
                            </Link>
                                <button className="text-rose bg-white rounded-full lg:text-xl text-base border-2 border-rose font-medium focus:outline-none w-32 lg:w-auto focus:text-gray-500 lg:py-1 lg:px-7 lg:mx-5 w-3/4 hidden lg:block">CREATE CAMPAIGN</button>
                        </div>
                </div> 
            </div>
            </Carousel>
        </div>
    )
}

export default HomeJumbotron;
