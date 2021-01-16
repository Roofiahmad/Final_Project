import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function HomeJumbotron() {
    const [setItem, Item] = useState();
    return (
        <div>
            <Carousel autoPlay>
            <div className=" bg-jumbotron1 h-1/2 lg:h-screen">
                <div className=" w-1/2 pt-60">
                <div className=" text-tosca ">
                    <h1 className="lg:text-5xl">#EducationForEveryone</h1>
                    <h1 className="text-xs font-semibold lg:text-xl my-2">Proper education is not just a dream</h1>
                </div>
                <div className="my-8 mx-2 lg:mx-0 lg:flex-row">
                   <button className="text-white bg-rose rounded-full text-xl font-medium focus:outline-none focus:text-gray-500 w-24 lg:py-1 lg:px-7 lg:w-36">DONATE</button>
                   <button className="text-rose bg-white rounded-full border-2 border-rose text-xl font-medium focus:outline-none w-32 lg:w-auto focus:text-gray-500 lg:py-1 lg:px-7 lg:mx-5">CREATE CAMPAIGN</button>
                </div>
                </div>
            </div>
            <div className=" bg-jumbotron2 h-1/2 lg:h-screen ">
            <div className=" w-1/2 pt-60">
                <div className=" text-tosca ">
                    <h1 className="lg:text-5xl">#HealthCareForEveryone</h1>
                    <h1 className="text-xs font-semibold lg:text-xl my-2">Help them to get speedy recovery</h1>
                </div>
                <div className="my-8 mx-2 lg:mx-0 lg:flex-row">
                   <button className="text-white bg-rose rounded-full text-xl font-medium focus:outline-none focus:text-gray-500 w-24 lg:py-1 lg:px-7 lg:w-36">DONATE</button>
                   <button className="text-rose bg-white rounded-full border-2 border-rose text-xl font-medium focus:outline-none w-32 lg:w-auto focus:text-gray-500 lg:py-1 lg:px-7 lg:mx-5">CREATE CAMPAIGN</button>
                </div>
                </div>
            </div>
            <div className=" bg-jumbotron3 h-1/2 lg:h-screen ">
            <div className=" w-1/2 pt-60">
                <div className=" text-tosca ">
                    <h1 className="lg:text-5xl">#CleanAirForEveryone</h1>
                    <h1 className="text-xs font-semibold lg:text-xl my-2">Together to solve environmental problem</h1>
                </div>
                <div className="my-8 mx-2 lg:mx-0 lg:flex-row">
                   <button className="text-white bg-rose rounded-full text-xl font-medium focus:outline-none focus:text-gray-500 w-24 lg:py-1 lg:px-7 lg:w-36">DONATE</button>
                   <button className="text-rose bg-white rounded-full border-2 border-rose text-xl font-medium focus:outline-none w-32 lg:w-auto focus:text-gray-500 lg:py-1 lg:px-7 lg:mx-5">CREATE CAMPAIGN</button>
                </div>
                </div> 
            </div>
            </Carousel>
        </div>
    )
}

export default HomeJumbotron;
