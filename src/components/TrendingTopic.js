import React from 'react';
import image from "../assets/trending.png"
import open from "../assets/open.png"
import close from "../assets/close.png"

function TrendingTopic() {
    return (
        <div>
            <div className="container lg:mx-auto">
                <div className="">
                    <h1 className="font-thin text-xl text-rose">
                        Trending Topic
                    </h1>
                </div>
                <div className="">
                    <h1 className="font-bold text-3xl">
                        Clean Water For Country Side Region
                    </h1>
                </div>
                <div className="flex flex-row">
                    <div className="flex">
                        <img src={image} alt=""/>
                    </div>
                    <div className="flex">
                        <div>
                            <img src={open} alt=""/>
                            <h1 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum neque nihil eos, beatae iste esse qui quod animi autem non pariatur quas placeat eligendi. Enim cum ea consequatur laboriosam laborum.</h1>
                            <img src={close} alt=""/>
                        </div>
                        <div>
                            <img src="" alt=""/>
                            <h1></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingTopic
