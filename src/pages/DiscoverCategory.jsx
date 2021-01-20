import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import DiscoverJumbotron from '../components/DiscoverJumbotron'
import campaignImage from '../assets/campaign-image.png';
import iconsort from '../assets/sort.png';


const DiscoverCategory = () => {
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    let { category } = useParams();
    console.log(category)
    const [campaingByCategory, setCampaignCategory] = useState([]);
    const [sortOpen, setSortOpen] = useState(false);


    useEffect(() => {
        getCampaingByCategory()
    }, []);

    function getCampaingByCategory() {
        axios.get(`https://talikasih.kuyrek.com:3001/campaign/category?category=${category}&limit=12`)
        .then((res) => {
            setCampaignCategory(res.data.data)
        })
    }

    const handleNewest = (e) => {
        e.preventDefault();
        axios.get('https://talikasih.kuyrek.com:3001/campaign/new?limit=12')
        .then((res) => {
            let thisCategory = category[0].toUpperCase()+category.substring(1).toLowerCase();
            let data = res.data.posts
            let filters = data.filter((data) => data.category === thisCategory)
            setCampaignCategory(filters)
        })
    }

    const handleMostUrgent = (e) => {
        e.preventDefault();
        axios.get('https://talikasih.kuyrek.com:3001/campaign/urgen?limit=12')
        .then((res) => {
            let thisCategory = category[0].toUpperCase()+category.substring(1).toLowerCase();
            let data = res.data.posts
            let filters = data.filter((data) => data.category === thisCategory)
            setCampaignCategory(filters)
        })
    }

    const handlePopular = (e) => {
        e.preventDefault();
        axios.get('https://talikasih.kuyrek.com:3001/campaign/populer?limit=12')
        .then((res) => {
            let thisCategory = category[0].toUpperCase()+category.substring(1).toLowerCase();
            let data = res.data.posts
            let filters = data.filter((data) => data.category === thisCategory)
            setCampaignCategory(filters)
        })
    }

    const handleLessDonation = (e) => {
        e.preventDefault();
        axios.get('https://talikasih.kuyrek.com:3001/campaign/donation?limit=12')
        .then((res) => {
            let thisCategory = category[0].toUpperCase()+category.substring(1).toLowerCase();
            // console.log(thisCategory)
            let data = res.data.posts
            // console.log(data, 'ini data')
            let filters = data.filter((data) => data.category === thisCategory)
            // console.log(filters, 'ini data filter')
            setCampaignCategory(filters)
        })
    }

    return (
        <div>
            <DiscoverJumbotron category={category}/>
            <div className="mt-16 mb-36">
                <div className="w-10/12 mx-auto">
                    <button className="font-bold flex mb-5 bg-white hover:bg-blue" onClick={() => setSortOpen(!sortOpen)}>Sort
                    <img src={iconsort} alt="" width="20" className="ml-2"/>
                    {sortOpen ? (
                        <div className="z-10 absolute shadow-md bg-white py-2 px-3 font-normal text-md text-left mt-8">
                        <ul className="hover:">
                            <li className="campaign-text-setting text-md" onClick={handleNewest}>Newest</li>
                            <li className="campaign-text-setting text-md" onClick={handleMostUrgent}>Most urgent</li>
                            <li className="campaign-text-setting text-md" onClick={handlePopular}>Popular</li>
                            <li className="campaign-text-setting text-md" onClick={handleLessDonation}>Less donation</li>
                        </ul>
                        </div>
                    ) : null}
                    </button>
                <div className="grid grid-cols-1 gap-10 justify-between lg:grid-cols-3 sm:grid-cols-2">
            {
                campaingByCategory.map(campaign => {
                    return (
                        <Link to={`/campaigndetail/${campaign._id}`}>
                            <div className="shadow-md h-full hover:shadow-xl" key={campaign._id}>
                                <img src={campaign.images === 'https://talikasih.kuyrek.com:3001/img/' ?  campaignImage : campaign.images} alt="" className="w-full h-52"/>
                                <div className="w-5/6 mx-auto pb-4 pt-2">
                                    <p className="border border-solid border-rose px-2 text-rose text-sm w-max text-center my-2 rounded-sm">{campaign.category}</p>
                                    <h3 className="font-bold mt-4">{campaign.title}</h3>
                                    <p className="text-sm mb-8 mt-1">{campaign.user.name}</p>                   
                                    <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-8">
                                        <div className="w-full h-full bg-gray-200 absolute"></div>                                        <div className="h-full bg-tosca absolute" style={{width: campaign.total_donation_rupiah/campaign.goal*100 + '%'}}></div>
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
            </div>
        </div>
    )
}


export default DiscoverCategory;