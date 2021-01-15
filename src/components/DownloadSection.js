import React from 'react';
import image from "../assets/trending.png"
import open from "../assets/open.png"
import close from "../assets/close.png"
import ava from "../assets/ava.png"
import download from "../assets/download.png"
import playstore from "../assets/playstore.png"

function DownloadSection() {
    return (
        <div>
            <div className="flex flex-col mb-44 sm:flex-wrap w-10/12 mt-28 mx-auto">
                <div className="mb-3">
                    <h1 className="font-bold text-3xl">
                        Spread kindness anytime, anywhere
                    </h1>
                </div>
                <div className="flex flex-wrap gap-10 space-x-6 lg:flex-nowrap flex-row">
                    <div className="flex h-full">
                        <img src={download} alt=""/>
                    </div>
                    <div className="flex w-full lg:w-1/2">
                        <div className="flex-col justify-between">
                            <div className="">
                                <h1 className="text-xl font-semibold">Available Now</h1>
                            </div>
                            <div className="flex flex-row lg:mt-5">
                                <img src={playstore} alt=""/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadSection;
