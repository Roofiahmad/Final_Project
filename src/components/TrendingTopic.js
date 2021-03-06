import React, { useState, useEffect } from 'react';
import open from "../assets/open.png"
import close from "../assets/close.png"
import axios from 'axios'
import profileImage from '../assets/blank_profile.png'
import { Link } from 'react-router-dom'

const TrendingTopic = () => {
    const [trendingCampaign, setTrendingCampaign] = useState([]);

    useEffect(() => {
        getTrending()
    }, []);

    function getTrending() {
        axios.get('https://talikasih.kuyrek.com:3001/campaign/populer?page=1&limit=1')
        .then((res) => {
            //  console.log(res);
            setTrendingCampaign(res.data.data)
        })
    }

    return (
        <div>
            <div className="lg:hidden text-center">
                <Link to ="/discoverall">
                    <button className="btn-red mr-2">
                        <i className="fas fa-hand-holding-medical"></i>
                    </button>
                </Link>
                <Link to ="/newcampaign">
                    <button className="btn-outline-red">
                        <i class="fas fa-plus-circle"></i>
                    </button>
                </Link>
            </div>
            {
                trendingCampaign.map(campaign => {
                    return (
                        <div className="flex flex-col gap-2 sm:flex-wrap w-10/12 mt-10 lg:mt-16 mb-10 lg:mb-16 mx-auto">
                        <div className="">
                            <h1 className="font-thin text-xl text-rose">
                                Trending Topic
                            </h1>
                        </div>
                        <div className="mb-3">
                            <Link to={`/campaigndetail/${campaign._id}`} className="font-bold text-3xl">
                                {campaign.title}
                            </Link>
                        </div>
                        <div className="flex gap-6 flex-wrap lg:flex-nowrap flex-row">
                            <div className="flex">
                                <img src={campaign.images} alt="" className="rounded w-full h-auto"/>
                            </div>
                            <div className="flex w-full lg:w-1/2">
                                <div className="flex-col justify-between">
                                    <div className="space-y-2 mb-8">
                                        <img src={open} alt=""/>
                                        <h1 className="clamp text-lg overflow-ellipsis overflow-hidden sm:text-md">{campaign.story}</h1>
                                        <img className="float-right" src={close} alt=""/>
                                    </div>
                                    <div className="flex flex-row">
                                        <img src={campaign.user.profile_image === "https://talikasih.kuyrek.com:3000/img/null" ? profileImage : campaign.user.profile_image} className="rounded w-24 h-24" alt=""/>
                                        <div className="ml-5">
                                            <h1 className="font-semibold lg:text-xl">{campaign.user.name}</h1>
                                            <h1 className="text-grey">Fundraiser</h1>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default TrendingTopic
