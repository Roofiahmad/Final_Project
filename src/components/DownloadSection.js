import React from 'react';
import download from "../assets/download.png"
import appstore from "../assets/appstore.png"
import googleplay from "../assets/googleplay.png"

function DownloadSection() {
    return (
        <div>
            <div className="flex flex-col gap-2 sm:flex-wrap w-10/12 mt-10 mb-10 lg:mt-16 lg:mb-16 mx-auto">
                <div className="mb-3">
                    <h1 className="font-bold text-3xl">
                        Spread kindness anytime, anywhere
                    </h1>
                </div>
                <div className="flex flex-wrap gap-10 lg:flex-nowrap flex-row">
                    <div className="flex h-full">
                        <img src={download} alt=""/>
                    </div>
                    <div className="flex w-full mt-0 lg:w-1/2 lg:mt-16">
                        <div className="flex-col justify-between">
                            <div className="">
                                <h1 className="text-xl font-semibold">Available Now</h1>
                            </div>
                            <div className="flex flex-row gap-3 mt-5">
                                <img src={appstore} alt="" className="w-32 cursor-pointer" />
                                <img src={googleplay} alt="" className="w-32 cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadSection;
