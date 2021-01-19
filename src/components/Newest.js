import React, { useEffect, useState } from 'react';
import campaignImage from '../assets/campaign-image.png';
import axios from 'axios';
import { Link } from 'react-router-dom'


const Newest = (props) => {
    const [newestCampaign, setNewestCampaign] = useState([]);

    console.log(props)
    useEffect(() => {
        getNewestCampaign();
    }, [])

    function getNewestCampaign() {
        axios.get('https://talikasih.kuyrek.com:3001/campaign/new?limit=3')
        .then((res) => {
            setNewestCampaign(res.data.posts);
        })
    }

    return (
        <div className="w-10/12 mt-28 mb-5 mx-auto">
            <h4 className="font-bold underline mb-4">Newest</h4>
            <div className="grid grid-rows-1 gap-10 justify-between lg:grid-cols-3 sm:grid-cols-2">
                {
                    newestCampaign.map(campaign => {
                        const numberWithCommas = (x) => {
                            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                          }
                        return (
                            <Link to={`/campaigndetail/${campaign._id}`}>
                                <div className="shadow-md h-full hover:shadow-xl" key={campaign._id}>
                                    <img src={campaign.images === 'https://talikasih.kuyrek.com:3001/img/' ?  campaignImage : campaign.images} alt="" className="w-full h-52"/>
                                    <div className="w-5/6 mx-auto pb-4 pt-2">
                                        <p className="border border-solid border-rose px-2 text-rose text-sm w-max text-center my-2 rounded-sm">{campaign.category}</p>
                                        <h3 className="font-bold mt-4">{campaign.title}</h3>
                                        <p className="text-sm mb-8 mt-1">{campaign.user.name}</p>                   
                                        <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
                                            <div className="w-full h-full bg-gray-200 absolute"></div>
                                            <div className="h-full bg-tosca absolute" style={{width: campaign.total_donation_rupiah/campaign.goal*100 + '%'}}></div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div>
                                                <p className="text-sm text-grey">Raised</p>
                                                <p className="font-bold text-tosca">IDR {numberWithCommas(campaign.total_donation_rupiah)}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-grey">Goal</p>
                                                <p>IDR {numberWithCommas(campaign.goal)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Newest