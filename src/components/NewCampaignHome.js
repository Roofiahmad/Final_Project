import React, { useEffect, useState } from 'react';
import axios from 'axios';
import campaignImage from '../assets/campaign-image.png'

const NewCampaignHome = () => {
    const [campaign, setCampaign] = useState([]);

    useEffect(() => {
        getNewCampaign()
    }, []);

    function getNewCampaign() {
        axios.get('https://talikasih.kuyrek.com:3001/campaign/new?limit=3')
        .then((res) => {
            setCampaign(res.data.posts)
        })
    }

    return (
        <div>
            <div className="flex flex-col sm:flex-wrap w-10/12 mt-28 gap-2 mx-auto">
                <div className="">
                    <h1 className="font-thin text-xl text-rose">
                        New
                    </h1>
                </div>
                <div className="mb-3">
                    <h1 className="font-bold text-3xl">
                        The latest people who need your help
                    </h1>
                </div>
                <div className="grid grid-cols-1 gap-10 justify-between lg:grid-cols-3 sm:grid-cols-2">
                {
                    campaign.map(card => {
                        return (
                            <div className="shadow-md">
                                <img src={card.images === 'https://talikasih.kuyrek.com:3001/img/' ?  campaignImage : card.images} alt="" className="w-full h-52"/>
                                <div className="w-5/6 mx-auto pb-4 pt-2">
                                    <p className="border border-solid border-rose px-2 text-rose text-sm w-max text-center my-2 rounded-sm">{card.category}</p>
                                    <a href="#" className="font-bold mt-4">{card.title}</a>
                                    <p className="text-sm mb-8 mt-1">{card.user.name}</p>                   
                                    <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
                                        <div className="w-full h-full bg-gray-200 absolute"></div>
                                        <div className="h-full bg-tosca absolute" style={{width: card.total_donation_rupiah/card.goal*100}}></div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <p className="text-sm text-grey">Raised</p>
                                            <p className="font-bold text-tosca">{card.total_donation_rupiah}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-grey">Goal</p>
                                            <p>{card.goal}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default NewCampaignHome
