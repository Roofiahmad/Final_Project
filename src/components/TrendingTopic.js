import React from 'react';
import image from "../assets/trending.png"
import open from "../assets/open.png"
import close from "../assets/close.png"
import ava from "../assets/ava.png"

function TrendingTopic() {
    return (
        <div>
            <div className="flex flex-col sm:flex-wrap w-10/12 mt-28 mb-5 mx-auto">
                <div className="">
                    <h1 className="font-thin text-xl text-rose">
                        Trending Topic
                    </h1>
                </div>
                <div className="mb-3">
                    <h1 className="font-bold text-3xl">
                        Clean Water For Country Side Region
                    </h1>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap flex-row">
                    <div className="flex lg:mr-10">
                        <img src={image} alt=""/>
                    </div>
                    <div className="flex w-1/2">
                        <div className="flex-col justify-between">
                            <div className="">
                                <img src={open} alt=""/>
                                <h1 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum neque nihil eos, beatae iste esse qui quod animi autem non pariatur quas placeat eligendi. Enim cum ea consequatur laboriosam laborum.</h1>
                                <img className="float-right" src={close} alt=""/>
                            </div>
                            <div className="flex flex-row lg:mt-36">
                                <img src={ava} width="80px" alt=""/>
                                <div className="ml-5">
                                    <h1 className="font-semibold lg:text-xl">Dian Endang</h1>
                                    <h1 className="text-grey">Fundraiser</h1>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingTopic
